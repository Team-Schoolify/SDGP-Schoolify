// tests/unit/AttendanceStudent.test.jsx
import { jest } from '@jest/globals';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

// Set dummy localStorage values.
if (typeof localStorage !== 'undefined') {
    localStorage.setItem('school_id', 'school-123');
    localStorage.setItem('student_id', 'student-789');
} else {
    global.localStorage = {
        getItem: (key) => {
            if (key === 'school_id') return 'school-123';
            if (key === 'student_id') return 'student-789';
            return null;
        },
        setItem: () => {},
    };
}

// Mock the Supabase client to avoid real network requests.
await jest.unstable_mockModule('../../src/app/lib/supabaseClient', () => ({
    supabase: {
        from: jest.fn((tableName) => {
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
                                                status: 'Present',
                                                date: '2023-03-14',
                                                created_at: '2023-03-14T10:00:00Z',
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
                                    { teacher_id: 't1', teacher_name: 'Ms. Smith' },
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

// Dynamically import the AttendanceStudent component (adjust the path as needed).
const { default: AttendanceStudent } = await import('../../src/app/main/student/attendance/AttendanceStudent');

describe('AttendanceStudent Component', () => {
    test('renders attendance record card with correct details', async () => {
        render(<AttendanceStudent />);

        // Wait for the component to render the header "Attendance Records".
        expect(await screen.findByText(/Attendance Records/i)).toBeInTheDocument();

        // Check that the attendance record card displays the correct date.
        expect(await screen.findByText(/Date: 2023-03-14/i)).toBeInTheDocument();

        // Check that the attendance status "Present" is displayed.
        expect(await screen.findByText("Present")).toBeInTheDocument();

        // Check that the teacher name "Ms. Smith" appears in the card footer.
        expect(await screen.findByText(/Marked by: Ms. Smith/i)).toBeInTheDocument();
    });
});