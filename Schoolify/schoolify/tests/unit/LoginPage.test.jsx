// tests/unit/LoginPage.test.jsx
import { jest } from '@jest/globals';
import React from 'react';
import { render, screen } from '@testing-library/react';

// First, mock the "next/navigation" module before importing LoginPage.
await jest.unstable_mockModule('next/navigation', () => ({
    useRouter: jest.fn().mockReturnValue({
        push: jest.fn(), // Provide a dummy push method.
    }),
}));

// Now import LoginPage dynamically so that it uses the mocked router.
const { default: LoginPage } = await import('../../src/app/login/page');

describe('LoginPage', () => {
    test('renders the login form with "Sign In" button', () => {
        render(<LoginPage />);

        // Verify that key text is rendered
        expect(screen.getByText(/Welcome To SchooliFy/i)).toBeInTheDocument();
        expect(screen.getByText(/Sign in to your account/i)).toBeInTheDocument();

        // Verify that the "Sign In" button is rendered.
        const signInButton = screen.getByRole('button', { name: /sign in/i });
        expect(signInButton).toBeInTheDocument();
    });
});