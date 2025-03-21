// tests/unit/SubjectCardsTeacher.test.jsx
import { jest } from '@jest/globals';
import React from 'react';
import { render, screen } from '@testing-library/react';

// Ensure localStorage has dummy school_id and teacher_id.
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

// Mock the Supabase client to prevent real network requests.
await jest.unstable_mockModule('../../src/app/lib/supabaseClient', () => ({
    supabase: {
        from: jest.fn((tableName) => {
            if (tableName === 'resources') {
                return {
                    insert: jest.fn(() => Promise.resolve({ data: [], error: null })),
                };
            }
            return {};
        }),
    },
}));

// Dynamically import the component so it uses our mocked supabase.
const { default: SubjectCardsTeacher } = await import('../../src/app/main/teacher/resources/SubjectCardsTeacher');

describe('SubjectCardsTeacher Component', () => {
    test('renders at least one subject card with "Mathematics"', async () => {
        render(<SubjectCardsTeacher />);
        // Use findAllByText because "Mathematics" appears multiple times.
        const mathCards = await screen.findAllByText('Mathematics');
        expect(mathCards.length).toBeGreaterThan(0);
    });
});