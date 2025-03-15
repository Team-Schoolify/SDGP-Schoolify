// tests/unit/ProfileAndNotificationTeacher.test.jsx
import { jest } from '@jest/globals';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

// Set dummy localStorage values.
if (typeof localStorage !== 'undefined') {
    localStorage.setItem('teacher_id', 't1');
    localStorage.setItem('school_id', 's1');
} else {
    global.localStorage = {
        getItem: (key) => {
            if (key === 'teacher_id') return 't1';
            if (key === 'school_id') return 's1';
            return null;
        },
        setItem: () => {},
    };
}

// Mock the Supabase client to avoid real network requests.
await jest.unstable_mockModule('../../src/app/lib/supabaseClient', () => ({
    supabase: {
        from: jest.fn((tableName) => {
            if (tableName === 'teacher') {
                return {
                    select: jest.fn(() => ({
                        eq: jest.fn(() =>
                            Promise.resolve({
                                data: [
                                    {
                                        teacher_id: 't1',
                                        teacher_name: 'Mrs. Teacher',
                                        teacher_email: 'teacher@example.com',
                                        photo: 'dummyphoto.jpg',
                                        school_id: 's1',
                                    },
                                ],
                            })
                        ),
                    })),
                };
            }
            if (tableName === 'school') {
                return {
                    select: jest.fn(() => ({
                        eq: jest.fn(() =>
                            Promise.resolve({
                                data: [{ name: 'My School' }],
                            })
                        ),
                    })),
                };
            }
            return {
                select: jest.fn(() => Promise.resolve({ data: [] })),
            };
        }),
    },
}));

// Dynamically import the ProfileAndNotificationTeacher component.
// Adjust the path based on your project structure.
const { ProfileAndNotificationTeacher } = await import('../../src/app/main/teacher/ProfileAndNotificationTeacher');

describe('ProfileAndNotificationTeacher Component', () => {
    test('renders notification button and profile avatar, and displays popover with teacher details on click', async () => {
        render(<ProfileAndNotificationTeacher />);

        // Verify the notification button is rendered.
        const notifButton = await screen.findByRole('button', { name: /more than 99 notifications/i });
        expect(notifButton).toBeInTheDocument();

        // Find the profile avatar via its CSS class.
        const avatar = document.querySelector('.cursor-pointer');
        expect(avatar).toBeInTheDocument();

        // Simulate clicking the avatar to open the popover.
        fireEvent.click(avatar);

        // Verify that the popover displays teacher details.
        expect(await screen.findByText(/Name:\s*Mrs\. Teacher/i)).toBeInTheDocument();
        expect(await screen.findByText(/Email:\s*teacher@example\.com/i)).toBeInTheDocument();
        expect(await screen.findByText(/School:\s*My School/i)).toBeInTheDocument();
    });
});