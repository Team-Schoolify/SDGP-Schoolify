// tests/unit/NotificationBellParent.test.jsx
import { jest } from '@jest/globals';
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

// Set dummy localStorage values.
if (typeof localStorage !== 'undefined') {
    localStorage.setItem("parent_id", "parent-001");
    localStorage.setItem("school_id", "school-001");
} else {
    global.localStorage = {
        getItem: (key) => {
            if (key === "parent_id") return "parent-001";
            if (key === "school_id") return "school-001";
            return null;
        },
        setItem: () => {},
    };
}

// Mock @supabase/supabase-js so that our supabase instance returns dummy data.
await jest.unstable_mockModule('@supabase/supabase-js', () => ({
    createClient: () => ({
        from: jest.fn((tableName) => {
            if (tableName === 'notifications') {
                return {
                    select: jest.fn(() => ({
                        eq: jest.fn(() => ({
                            eq: jest.fn(() => ({
                                order: jest.fn(() =>
                                    Promise.resolve({
                                        data: [
                                            {
                                                id: "n1",
                                                title: "Test Notification",
                                                message: "This is a test notification",
                                                is_read: false,
                                                created_at: "2023-03-14T10:00:00Z",
                                                parent_id: "parent-001",
                                                school_id: "school-001",
                                            },
                                        ],
                                    })
                                ),
                            })),
                        })),
                    })),
                };
            }
            // Fallback for other tables.
            return { select: jest.fn(() => Promise.resolve({ data: [] })) };
        }),
        channel: jest.fn(() => ({
            on: jest.fn(() => ({
                subscribe: jest.fn(() => ({}))
            }))
        })),
        removeChannel: jest.fn(),
    }),
}));

// Dynamically import the NotificationBell component (for parent).
// Adjust the path as needed.
const { default: NotificationBell } = await import('../../src/app/main/parent/NotificationBellParent');

describe('NotificationBell Component (Parent)', () => {
    test('renders notification button with badge and opens drawer displaying notifications', async () => {
        render(<NotificationBell />);

        // Verify that the notification button is rendered using its aria-label.
        const notifButton = await screen.findByRole('button', { name: /more than 99 notifications/i });
        expect(notifButton).toBeInTheDocument();

        // Check that the badge shows "1" unread notification.
        // Use a custom matcher in case the badge text is split across elements.
        const badge = await screen.findByText((content, element) => {
            return element.tagName.toLowerCase() === "span" && content.trim() === "1";
        });
        expect(badge).toBeInTheDocument();

        // Click the notification button to open the drawer.
        fireEvent.click(notifButton);

        // Wait for the drawer header "Notifications" to appear.
        expect(await screen.findByText(/Notifications/i)).toBeInTheDocument();

        // Verify that the dummy notification details are displayed.
        expect(await screen.findByText("Test Notification")).toBeInTheDocument();
        expect(await screen.findByText("This is a test notification")).toBeInTheDocument();
    });
});