// tests/unit/Calendar.test.jsx
import { jest } from '@jest/globals';
import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock supabase client so that real requests are not made.
await jest.unstable_mockModule('../../src/app/lib/supabaseClient', () => ({
    supabase: {
        from: jest.fn(() => ({
            select: jest.fn(() => Promise.resolve({ data: [] })),
        })),
    },
}));

// Mock the DrawerComponentParentAndStudent to avoid async state updates warnings.
await jest.unstable_mockModule('../../src/app/components/DrawerComponentParentAndStudent', () => ({
    default: () => <div data-testid="drawer-mock" />,
}));

// Dynamically import the Calendar component so it uses the above mocks.
const { default: Calendar } = await import('../../src/app/components/Calendar');

describe('Calendar Component', () => {
    test('renders the Calendar button with correct aria-label', () => {
        render(<Calendar />);
        // Look for the button with the aria-label "more than 99 notifications"
        const button = screen.getByRole('button', { name: /more than 99 notifications/i });
        expect(button).toBeInTheDocument();
    });
});