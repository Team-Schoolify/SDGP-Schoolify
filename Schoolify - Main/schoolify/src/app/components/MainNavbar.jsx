'use client';

import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    Modal,
    ModalContent,
    ModalBody,
    useDisclosure,
} from "@nextui-org/react";
import { usePathname, useSearchParams } from "next/navigation";
import NextLink from "next/link";

export const AcmeLogo = () => (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
        <path
            clipRule="evenodd"
            d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
            fill="currentColor"
            fillRule="evenodd"
        />
    </svg>
);

export default function MainNavbar() {
    const pathname = usePathname(); // Get the current route
    const searchParams = useSearchParams(); // Get query parameters
    const role = searchParams.get("role"); // Extract the role from query params
    console.log(`this is the navbar ${role}`);

    // Define role-based navLinks
    const roleBasedNavLinks = {
        student: [
            { name: "Dashboard", path: `/main/student/dashboard` },
            { name: "Assignments", path: `/main/student/assignments` },
            { name: "Gradebook", path: `/main/student/gradebook` },
            { name: "Attendance", path: `/main/student/attendance` },
            { name: "Events", path: `/main/student/event` },
            { name: "Resources", path: `/main/student/resources` },
        ],
        teacher: [
            { name: "Dashboard", path: `/main/teacher/dashboard` },
            { name: "Assignments", path: `/main/teacher/assignments` },
            { name: "Gradebook", path: `/main/teacher/gradebook` },
            { name: "Attendance", path: `/main/teacher/attendance` },
            { name: "Events", path: `/main/teacher/event` },
            { name: "Appointments", path: `/main/teacher/appointment` },
        ],
        parent: [
            { name: "Dashboard", path: `/main/parent/dashboard` },
            { name: "Gradebook", path: `/main/parent/gradebook` },
            { name: "Attendance", path: `/main/parent/attendance` },
            { name: "Events", path: `/main/parent/event` },
            { name: "Appointments", path: `/main/parent/appointment` },
        ],
    };

    const navLinks = roleBasedNavLinks[role] || []; // Fallback to an empty array


    const { isOpen, onOpen, onClose } = useDisclosure(); // For mobile modal menu

    return (
        <>
            <Navbar
                className="bg-customBlue bg-opacity-60 text-black shadow-md rounded-2xl"
                isBordered
                shouldHideOnScroll
            >
                {/* Brand */}
                <NavbarBrand>
                    <NextLink href={`/main/${role}/dashboard?role=${role}`} className="font-bold text-customWhite flex items-center">
                        <AcmeLogo />
                        <p>Schoolify</p>
                    </NextLink>
                </NavbarBrand>

                {/* Desktop Links */}
                <NavbarContent justify="center" className="hidden sm:flex">
                    {navLinks.map((link) => (
                        <NavbarItem key={link.name}>
                            <NextLink
                                href={`${link.path}?role=${role}`}
                                className={`relative ${
                                    pathname === link.path
                                        ? "text-black font-bold"
                                        : "text-customWhite font-normal"
                                }`}
                            >
                                {link.name}
                                {/* Underline Bar */}
                                <span
                                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] w-6 bg-black rounded ${
                                        pathname === link.path ? "block" : "hidden"
                                    }`}
                                ></span>
                            </NextLink>
                        </NavbarItem>
                    ))}
                </NavbarContent>

                {/* Login & Signup */}
                <NavbarContent justify="end" className="hidden sm:flex">
                    <NavbarItem>
                        <Button as={NextLink} href="#" color="primary" variant="flat" className="text-customWhite bg-customBlue">
                            Login
                        </Button>
                    </NavbarItem>
                    <NavbarItem>
                        <Button as={NextLink} href="#" color="primary" variant="flat" className="text-customWhite bg-customBlue">
                            Sign Up
                        </Button>
                    </NavbarItem>
                </NavbarContent>

                {/* Hamburger Menu (Mobile) */}
                <NavbarContent className="sm:hidden flex items-center justify-end">
                    <Button
                        isIconOnly
                        variant="light"
                        onPress={onOpen}
                        aria-label="Open menu"
                        className="ml-24"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12h15M4.5 6h15M4.5 18h15"
                            />
                        </svg>
                    </Button>
                </NavbarContent>
            </Navbar>

            {/* Mobile Menu */}
            <Modal
                backdrop="blur"
                isOpen={isOpen}
                onClose={onClose}
                className="absolute top-4 right-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-customLightBlue"
                placement="top-right"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            {/* Close Icon */}
                            <button
                                className="absolute top-2 right-2 text-gray-400 hover:text-black"
                                onClick={onClose}
                                aria-label="Close"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>

                            <ModalBody>
                                <div className="flex flex-col items-center gap-4 bg">
                                    {navLinks.map((link) => (
                                        <NextLink
                                            key={link.name}
                                            href={`${link.path}?role=${role}`}
                                            onClick={onClose}
                                            className={`relative ${
                                                pathname === link.path
                                                    ? "text-black font-bold"
                                                    : "text-white font-normal"
                                            }`}
                                        >
                                            {link.name}
                                            <span
                                                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] w-6 bg-black rounded ${
                                                    pathname === link.path ? "block" : "hidden"
                                                }`}
                                            ></span>
                                        </NextLink>
                                    ))}
                                    <div className="flex flex-col items-center gap-2">
                                        <Button as={NextLink} href="#" color="primary" variant="flat" className="text-customWhite bg-customBlue">
                                            Login
                                        </Button>
                                        <Button as={NextLink} href="#" color="primary" variant="flat" className="text-customWhite bg-customBlue">
                                            Sign Up
                                        </Button>
                                    </div>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}