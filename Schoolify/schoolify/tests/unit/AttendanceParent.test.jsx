// tests/unit/AttendanceParent.test.jsx
import { jest } from '@jest/globals';
import React from 'react';
import { render, screen } from '@testing-library/react';

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
            if (tableName === 'attendance') {
                return {
                    select: jest.fn(() => ({
                        eq: jest.fn(() => ({
                            eq: jest.fn(() => ({
                                order: jest.fn(() =>
                                    Promise.resolve({
                                        data: [
                                            {
                                                teacher_id: 't1',
                                                status: "Present",
                                                date: "2023-03-14",
                                                created_at: "2023-03-14T10:00:00Z",
                                            },
                                        ],
                                    })
                                ),
                            })),
                        })),
                    })),
                };
            }
            if (tableName === 'teacher') {
                return {
                    select: jest.fn(() => ({
                        in: jest.fn(() =>
                            Promise.resolve({
                                data: [
                                    { teacher_id: 't1', teacher_name: 'Mr. Anderson' },
                                ],
                            })
                        ),
                    })),
                };
            }
            return {};
        }),
    },
}));

// Dynamically import the AttendanceParent component.
// Adjust the path based on your actual file location.
const { default: AttendanceParent } = await import('../../src/app/main/parent/attendance/AttendanceParent');

describe('AttendanceParent Component', () => {
    test('renders attendance record card with correct student and teacher names', async () => {
        render(<AttendanceParent />);

        // Verify the header is rendered.
        expect(await screen.findByText(/Attendance Records/i)).toBeInTheDocument();

        // Verify that the attendance card displays the student name.
        expect(await screen.findByText(/Student: Alice Johnson/i)).toBeInTheDocument();

        // Verify that the teacher name is shown in the card footer.
        expect(await screen.findByText(/Marked by: Mr\. Anderson/i)).toBeInTheDocument();
    });
});