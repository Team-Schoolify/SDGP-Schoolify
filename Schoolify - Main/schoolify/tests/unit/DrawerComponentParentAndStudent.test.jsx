// tests/unit/DrawerComponentParentAndStudent.test.jsx
import { jest } from '@jest/globals';

// Polyfill ResizeObserver if not defined.
if (!global.ResizeObserver) {
    global.ResizeObserver = class {
        observe() {}
        unobserve() {}
        disconnect() {}
    };
}

import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock the Supabase client so that no real network request is made.
await jest.unstable_mockModule('../../src/app/lib/supabaseClient', () => ({
    supabase: {
        from: jest.fn(() => ({
            select: jest.fn(() => Promise.resolve({ data: [] })),
        })),
    },
}));

// Dynamically import the component so that it picks up the mocked supabase.
const { default: DrawerComponentParentAndStudent } = await import('../../src/app/components/DrawerComponentParentAndStudent');

describe('DrawerComponentParentAndStudent Component', () => {
    test('renders the drawer header "School Calendar"', async () => {
        // Render the component with isOpen true (drawer visible).
        render(<DrawerComponentParentAndStudent isOpen={true} onOpenChange={() => {}} />);

        // Wait for the header text "School Calendar" to appear.
        const header = await screen.findByText('School Calendar');
        expect(header).toBeInTheDocument();
    });
});