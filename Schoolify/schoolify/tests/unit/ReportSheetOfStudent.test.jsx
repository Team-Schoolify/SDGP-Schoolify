// tests/unit/ReportSheetOfStudent.test.jsx
import { jest } from '@jest/globals';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

// Set dummy localStorage values.
if (typeof localStorage !== 'undefined') {
    localStorage.setItem('school_id', 'school-123');
    localStorage.setItem('parent_id', 'parent-789');
} else {
    global.localStorage = {
        getItem: (key) => {
            if (key === 'school_id') return 'school-123';
            if (key === 'parent_id') return 'parent-789';
            return null;
        },
        setItem: () => {},
    };
}

// Mock the Supabase client to avoid real network requests.
await jest.unstable_mockModule('../../src/app/lib/supabaseClient', () => ({
    supabase: {
        from: jest.fn((tableName) => {
            if (tableName === 'parent') {
                // Return a dummy student ID for the parent.
                return {
                    select: jest.fn(() => ({
                        eq: jest.fn(() => ({
                            single: jest.fn(() =>
                                Promise.resolve({ data: { student_id: 'student-101' } })
                            ),
                        })),
                    })),
                };
            }
            if (tableName === 'student') {
                // Return a dummy student name.
                return {
                    select: jest.fn(() => ({
                        eq: jest.fn(() => ({
                            single: jest.fn(() =>
                                Promise.resolve({ data: { student_name: "Alice Johnson" } })
                            ),
                        })),
                    })),
                };
            }
            if (tableName === 'gradebook') {
                // Return a dummy grade record for term 1.
                return {
                    select: jest.fn(() => ({
                        eq: jest.fn(() => ({
                            order: jest.fn(() =>
                                Promise.resolve({
                                    data: [
                                        {
                                            subject: "Mathematics",
                                            grade: "A",
                                            remarks: "Excellent",
                                            created_at: "2023-03-14T10:00:00Z",
                                            term: 1,
                                            teacher_id: "t1",
                                        },
                                    ],
                                })
                            ),
                        })),
                    })),
                };
            }
            if (tableName === 'teacher') {
                // Return a dummy teacher name.
                return {
                    select: jest.fn(() => ({
                        eq: jest.fn(() => ({
                            single: jest.fn(() =>
                                Promise.resolve({ data: { teacher_name: "Mr. Johnson" } })
                            ),
                        })),
                    })),
                };
            }
            // Fallback for any other tables.
            return {
                select: jest.fn(() => ({
                    eq: jest.fn(() => Promise.resolve({ data: [] })),
                    order: jest.fn(() => Promise.resolve({ data: [] })),
                    in: jest.fn(() => Promise.resolve({ data: [] })),
                })),
                insert: jest.fn(() => Promise.resolve({ data: [], error: null })),
            };
        }),
    },
}));

// Dynamically import the ReportSheetOfStudent component.
// Adjust the path based on your project structure.
const { default: ReportSheetOfStudent } = await import('../../src/app/main/parent/gradebook/ReportSheetOfStudent');

describe('ReportSheetOfStudent Component', () => {
    test('renders header, teacher name, student name and grade table', async () => {
        render(<ReportSheetOfStudent />);

        // Verify that the header "Result Sheet" is rendered.
        expect(await screen.findByText(/Result Sheet/i)).toBeInTheDocument();

        // Verify that the teacher name appears.
        expect(await screen.findByText(/Mr\. Johnson/i)).toBeInTheDocument();

        // Verify that the student name "Alice Johnson" appears.
        expect(await screen.findByText("Alice Johnson")).toBeInTheDocument();

        // Verify that a grade row appears for "Mathematics".
        await waitFor(() => {
            expect(screen.getByText("Mathematics")).toBeInTheDocument();
        });

        // Optionally, check that the grade "A" and remark "Excellent" appear.
        expect(screen.getByText("A")).toBeInTheDocument();
        expect(screen.getByText("Excellent")).toBeInTheDocument();
    });
});