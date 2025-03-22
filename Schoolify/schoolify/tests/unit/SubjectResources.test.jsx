// tests/unit/SubjectResources.test.jsx
import { jest } from '@jest/globals';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

// Ensure localStorage has a dummy student ID.
if (typeof localStorage !== 'undefined') {
    localStorage.setItem("student_id", "dummy-id");
} else {
    global.localStorage = {
        getItem: () => "dummy-id",
        setItem: () => {},
    };
}

// Mock the Supabase client so that no real network requests are made.
await jest.unstable_mockModule('../../src/app/lib/supabaseClient', () => ({
    supabase: {
        from: jest.fn((tableName) => {
            if (tableName === "student") {
                return {
                    select: jest.fn(() => ({
                        eq: jest.fn(() => ({
                            single: jest.fn(() =>
                                Promise.resolve({ data: { student_grade: "6", subject_scheme: "1" } })
                            ),
                        })),
                    })),
                };
            }
            if (tableName === "resources") {
                return {
                    select: jest.fn(() => ({
                        eq: jest.fn(() => ({
                            eq: jest.fn(() =>
                                Promise.resolve({ data: [] })
                            ),
                        })),
                    })),
                };
            }
            return {};
        }),
    },
}));

// Dynamically import the SubjectResources component so it uses the above mocks.
const { default: SubjectResources } = await import('../../src/app/main/student/resources/SubjectResources');

describe('SubjectResources Component', () => {
    test('renders subject cards when student details are fetched', async () => {
        render(<SubjectResources />);

        // Wait for the component's useEffect to update state.
        // With subject_scheme "1", availableSubjects should include "Mathematics".
        await waitFor(() => {
            expect(screen.getByText("Mathematics")).toBeInTheDocument();
        });
    });
});