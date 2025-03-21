// tests/unit/AttendanceMark.test.jsx
import { jest } from '@jest/globals';
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

// Ensure localStorage has dummy values.
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

// Mock the Supabase client so no real network requests occur.
await jest.unstable_mockModule('../../src/app/lib/supabaseClient', () => ({
    supabase: {
        from: jest.fn((tableName) => {
            if (tableName === 'teacher') {
                return {
                    select: jest.fn(() => ({
                        eq: jest.fn(() => ({
                            single: jest.fn(() =>
                                Promise.resolve({ data: { grade: "6" } })
                            ),
                        })),
                    })),
                };
            }
            if (tableName === 'student') {
                return {
                    select: jest.fn(() => ({
                        eq: jest.fn(() => ({
                            eq: jest.fn(() => ({
                                order: jest.fn(() =>
                                    Promise.resolve({
                                        data: [
                                            { student_id: "s1", student_name: "John Doe", photo: "dummy.jpg" }
                                        ],
                                    })
                                ),
                            })),
                        })),
                    })),
                };
            }
            if (tableName === 'attendance') {
                return {
                    insert: jest.fn(() => Promise.resolve({ data: [], error: null })),
                };
            }
            return {};
        }),
    },
}));

// Dynamically import the AttendanceMark component after mocks are in place.
const { default: AttendanceMark } = await import('../../src/app/main/teacher/attendance/AttendanceMark');

describe('AttendanceMark Component', () => {
    test('renders header and student row, and toggles attendance status', async () => {
        render(<AttendanceMark />);

        // Wait for teacher grade to be fetched and the header to display the grade.
        const header = await screen.findByText(/Mark Attendance - Grade 6/i);
        expect(header).toBeInTheDocument();

        // Wait for the student row with "John Doe" to appear.
        const studentName = await screen.findByText("John Doe");
        expect(studentName).toBeInTheDocument();

        // Initially, the switch should show "Absent".
        const absentChip = screen.getByText("Absent");
        expect(absentChip).toBeInTheDocument();

        // Find the switch element.
        // Assuming the Switch component renders with role "switch"
        const switchEl = screen.getByRole("switch");
        fireEvent.click(switchEl);

        // After toggling, the chip should show "Present".
        await waitFor(() => {
            expect(screen.getByText("Present")).toBeInTheDocument();
        });
    });
});