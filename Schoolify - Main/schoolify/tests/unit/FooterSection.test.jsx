// tests/unit/FooterSection.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { FooterSection } from '../../src/app/components/FooterSection.jsx';
import { jest } from '@jest/globals';

describe('FooterSection Component', () => {
    test('renders the Schoolify link', () => {
        render(<FooterSection />);
        // Check that the Schoolify text is in the document
        expect(screen.getByText('Schoolify')).toBeInTheDocument();
    });

    test('scrolls to top when Schoolify link is clicked', () => {
        // Spy on window.scrollTo
        const scrollToSpy = jest.spyOn(window, 'scrollTo').mockImplementation(() => {});
        render(<FooterSection />);
        const schoolifyLink = screen.getByText('Schoolify');
        fireEvent.click(schoolifyLink);
        expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
        scrollToSpy.mockRestore();
    });
});