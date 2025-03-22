// tests/unit/GradeSheet.test.jsx
import { jest } from '@jest/globals';
import React from 'react';
import { render, screen } from '@testing-library/react';

// Set dummy localStorage values.
if (typeof localStorage !== 'undefined') {
    localStorage.setItem('school_id', 'school-123');
    localStorage.setItem('teacher_id', 'teacher-456');
} else {
    global.localStorage = {
        getItem: (key) => {
            if (key === 'school_id') return 'school-123';
            if (key === 'teacher_id') return 'teacher-456';
            return null;
        },
        setItem: () => {},
    };
}

// Mock the Supabase client to avoid real network requests.
await jest.unstable_mockModule('../../src/app/lib/supabaseClient', () => ({
    supabase: {
        from: jest.fn((tableName) => {
            if (tableName === 'student') {
                return {
                    select: jest.fn(() => ({
                        eq: jest.fn(() =>
                            Promise.resolve({
                                data: [
                                    {
                                        student_id: "1",
                                        student_name: "Alice",
                                        student_grade: "6",
                                        subject_scheme: "1",
                                    },
                                ],
                            })
                        ),
                    })),
                };
            }
            // Provide dummy fallback for other tables.
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

// Dynamically import the GradeSheet component so it uses the above mocks.
// Adjust the path based on your actual project structure.
const { default: GradeSheet } = await import('../../src/app/main/teacher/gradebook/GradeSheet');

describe('GradeSheet Component', () => {
    test('renders the header, student select, and student option', async () => {
        render(<GradeSheet />);

        // Check that the header "GradeSheet" is rendered.
        expect(await screen.findByText("GradeSheet")).toBeInTheDocument();

        // Instead of a single element, we now check that at least one element with "Student Name" is present.
        const studentNameLabels = screen.getAllByText("Student Name");
        expect(studentNameLabels.length).toBeGreaterThan(0);

        // Check that the dummy student name "Alice" appears in the options.
        expect(await screen.findByText("Alice")).toBeInTheDocument();
    });
});