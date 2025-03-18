// // // tests/unit/MainNavbar.test.jsx
// // import React from 'react';
// // import { render, screen } from '@testing-library/react';
// // import MainNavbar from '../../src/app/components/MainNavbar';
// // import { jest } from '@jest/globals';
// //
// // // ---
// // // Mock next/navigation hooks.
// // jest.mock('next/navigation', () => ({
// //     usePathname: jest.fn(),
// //     useSearchParams: jest.fn(),
// // }));
// //
// // // Mock framer-motion to avoid dynamic import issues.
// // jest.mock('framer-motion', () => ({
// //     AnimatePresence: ({ children }) => children,
// //     motion: {
// //         div: ({ children, ...rest }) => <div {...rest}>{children}</div>,
// //         span: ({ children, ...rest }) => <span {...rest}>{children}</span>,
// //     },
// // }));
// //
// // // Fully mock @nextui-org/react components used in MainNavbar.
// // jest.mock('@nextui-org/react', () => ({
// //     NextUIProvider: ({ children }) => <div>{children}</div>,
// //     Navbar: ({ children, ...props }) => <div {...props}>{children}</div>,
// //     NavbarBrand: ({ children, ...props }) => <div {...props}>{children}</div>,
// //     NavbarContent: ({ children, ...props }) => <div {...props}>{children}</div>,
// //     NavbarItem: ({ children, ...props }) => <div {...props}>{children}</div>,
// //     Link: ({ children, ...props }) => <a {...props}>{children}</a>,
// //     Button: ({ children, ...props }) => <button {...props}>{children}</button>,
// //     Modal: ({ children, ...props }) => <div {...props}>{children}</div>,
// //     ModalContent: ({ children, ...props }) => <div {...props}>{children}</div>,
// //     ModalBody: ({ children, ...props }) => <div {...props}>{children}</div>,
// //     useDisclosure: () => ({
// //         isOpen: false,
// //         onOpen: jest.fn(),
// //         onClose: jest.fn(),
// //     }),
// // }));
// //
// // // A helper function to render the component.
// // // With our mocks in place, we don't need to wrap with NextUIProvider explicitly.
// // const renderWithNextUI = (ui) => render(ui);
// //
// // describe('MainNavbar Component', () => {
// //     const mockUsePathname = require('next/navigation').usePathname;
// //     const mockUseSearchParams = require('next/navigation').useSearchParams;
// //
// //     beforeEach(() => {
// //         jest.clearAllMocks();
// //     });
// //
// //     test('renders the correct links for a student', () => {
// //         // Set the route and query parameter mocks for a student.
// //         mockUsePathname.mockReturnValue('/main/student/dashboard');
// //         mockUseSearchParams.mockReturnValue({
// //             get: (param) => (param === 'role' ? 'student' : null),
// //         });
// //
// //         renderWithNextUI(<MainNavbar />);
// //
// //         // Verify that the expected student links are present.
// //         expect(screen.getByText('Dashboard')).toBeInTheDocument();
// //         expect(screen.getByText('Assignments')).toBeInTheDocument();
// //         expect(screen.getByText('Gradebook')).toBeInTheDocument();
// //         expect(screen.getByText('Attendance')).toBeInTheDocument();
// //         expect(screen.getByText('Events')).toBeInTheDocument();
// //         expect(screen.getByText('Resources')).toBeInTheDocument();
// //     });
// //
// //     test('renders the correct links for a teacher', () => {
// //         // Set the route and query parameter mocks for a teacher.
// //         mockUsePathname.mockReturnValue('/main/teacher/dashboard');
// //         mockUseSearchParams.mockReturnValue({
// //             get: (param) => (param === 'role' ? 'teacher' : null),
// //         });
// //
// //         renderWithNextUI(<MainNavbar />);
// //
// //         // Verify that the expected teacher links are present.
// //         expect(screen.getByText('Dashboard')).toBeInTheDocument();
// //         expect(screen.getByText('Resources')).toBeInTheDocument();
// //         expect(screen.getByText('Gradebook')).toBeInTheDocument();
// //         expect(screen.getByText('Attendance')).toBeInTheDocument();
// //         expect(screen.getByText('Events')).toBeInTheDocument();
// //         expect(screen.getByText('Appointments')).toBeInTheDocument();
// //     });
// // });
//
//
// // tests/unit/MainNavbar.test.jsx
// import { jest } from '@jest/globals';
// import { render, screen } from '@testing-library/react';
//
// // First, set up the ESM mock for next/navigation.
// await jest.unstable_mockModule('next/navigation', () => ({
//     usePathname: jest.fn(),
//     useSearchParams: jest.fn(),
// }));
//
// // Now, import the mocked module dynamically.
// const { usePathname, useSearchParams } = await import('next/navigation');
//
// // Also import MainNavbar dynamically (so that it picks up the mocked next/navigation).
// const { default: MainNavbar } = await import('../../src/app/components/MainNavbar');
//
// describe('MainNavbar Component', () => {
//     beforeEach(() => {
//         jest.clearAllMocks();
//     });
//
//     test('renders the correct links for a student', () => {
//         // Set up mocks for a student.
//         usePathname.mockReturnValue('/main/student/dashboard');
//         useSearchParams.mockReturnValue({
//             get: (param) => (param === 'role' ? 'student' : null),
//         });
//
//         render(<MainNavbar />);
//
//         // Verify that expected student links are rendered.
//         expect(screen.getByText('Dashboard')).toBeInTheDocument();
//         expect(screen.getByText('Assignments')).toBeInTheDocument();
//         expect(screen.getByText('Gradebook')).toBeInTheDocument();
//         expect(screen.getByText('Attendance')).toBeInTheDocument();
//         expect(screen.getByText('Events')).toBeInTheDocument();
//         expect(screen.getByText('Resources')).toBeInTheDocument();
//     });
//
//     test('renders the correct links for a teacher', () => {
//         // Set up mocks for a teacher.
//         usePathname.mockReturnValue('/main/teacher/dashboard');
//         useSearchParams.mockReturnValue({
//             get: (param) => (param === 'role' ? 'teacher' : null),
//         });
//
//         render(<MainNavbar />);
//
//         // Verify that expected teacher links are rendered.
//         expect(screen.getByText('Dashboard')).toBeInTheDocument();
//         expect(screen.getByText('Resources')).toBeInTheDocument();
//         expect(screen.getByText('Gradebook')).toBeInTheDocument();
//         expect(screen.getByText('Attendance')).toBeInTheDocument();
//         expect(screen.getByText('Events')).toBeInTheDocument();
//         expect(screen.getByText('Appointments')).toBeInTheDocument();
//     });
// });

// tests/unit/MainNavbar.test.jsx
import { jest } from '@jest/globals';
import React from 'react';
import { render, screen } from '@testing-library/react';

// First, set up the ESM mock for next/navigation.
await jest.unstable_mockModule('next/navigation', () => ({
    usePathname: jest.fn(),
    useSearchParams: jest.fn(),
}));

// Now import the mocked hooks and the component dynamically.
const { usePathname, useSearchParams } = await import('next/navigation');
const { default: MainNavbar } = await import('../../src/app/components/MainNavbar');

describe('MainNavbar Component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('renders correct links for a student', () => {
        // Set up mocks for a student.
        usePathname.mockReturnValue('/main/student/dashboard');
        useSearchParams.mockReturnValue({
            get: (param) => (param === 'role' ? 'student' : null),
        });

        render(<MainNavbar />);

        // Verify student-specific links.
        expect(screen.getByText('Dashboard')).toBeInTheDocument();
        expect(screen.getByText('Gradebook')).toBeInTheDocument();
        expect(screen.getByText('Attendance')).toBeInTheDocument();
        expect(screen.getByText('Resources')).toBeInTheDocument();
    });

    test('renders correct links for a teacher', () => {
        // Set up mocks for a teacher.
        usePathname.mockReturnValue('/main/teacher/dashboard');
        useSearchParams.mockReturnValue({
            get: (param) => (param === 'role' ? 'teacher' : null),
        });

        render(<MainNavbar />);

        // Verify teacher-specific links.
        expect(screen.getByText('Dashboard')).toBeInTheDocument();
        expect(screen.getByText('Resources')).toBeInTheDocument();
        expect(screen.getByText('Gradebook')).toBeInTheDocument();
        expect(screen.getByText('Attendance')).toBeInTheDocument();
        expect(screen.getByText('Appointments')).toBeInTheDocument();
    });

    test('renders correct links for a parents', () => {
        // Set up mocks for a teacher.
        usePathname.mockReturnValue('/main/parent/dashboard');
        useSearchParams.mockReturnValue({
            get: (param) => (param === 'role' ? 'parent' : null),
        });

        render(<MainNavbar />);

        // Verify teacher-specific links.
        expect(screen.getByText('Dashboard')).toBeInTheDocument();
        expect(screen.getByText('Gradebook')).toBeInTheDocument();
        expect(screen.getByText('Attendance')).toBeInTheDocument();
        expect(screen.getByText('Appointments')).toBeInTheDocument();
    });

    test('renders correct links for a admins', () => {
        // Set up mocks for a teacher.
        usePathname.mockReturnValue('/main/admin/student');
        useSearchParams.mockReturnValue({
            get: (param) => (param === 'role' ? 'admin' : null),
        });

        render(<MainNavbar />);

        // Verify teacher-specific links.
        expect(screen.getByText('Student')).toBeInTheDocument();
        expect(screen.getByText('Teacher')).toBeInTheDocument();
        expect(screen.getByText('Parent')).toBeInTheDocument();
    });
});