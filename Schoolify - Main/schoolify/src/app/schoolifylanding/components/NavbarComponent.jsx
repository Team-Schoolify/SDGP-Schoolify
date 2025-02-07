
import React, { useState, useEffect } from "react";
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

export default function NavbarComponent() {
    const [active, setActive] = useState(""); // Track active link
    // const [menuOpen, setMenuOpen] = useState(false); // Track mobile menu state
    const navLinks = ["Features", "About Us", "Team"]; // Common sections
    const { isOpen, onOpen, onClose } = useDisclosure(); // For mobile modal menu


    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    useEffect(() => {
        const sections = navLinks.map((link) =>
            document.getElementById(link.toLowerCase().replace(" ", "-"))
        );

        const observerOptions = {
            root: null, // Use the viewport as the root
            threshold: 0.2, // Section must be 60% in view to activate
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActive(
                        navLinks.find(
                            (link) => link.toLowerCase().replace(" ", "-") === entry.target.id
                        )
                    );
                } else {
                    const leavingSection = navLinks.find(
                        (link) =>
                            link.toLowerCase().replace(" ", "-") === entry.target.id
                    );
                    if (leavingSection === active) {
                        setActive("");
                    }
                }
            });
        }, observerOptions);

        // Observe each section
        sections.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, [navLinks, active]);

    return (
        <>
            <Navbar
                className="bg-customBlue bg-opacity-60 text-customWhite shadow-md  rounded-2xl"
                isBordered
                shouldHideOnScroll
            >
                {/* Brand */}
                <NavbarBrand>
                    <Link
                        className="font-bold text-customWhite"
                        href="/schoolifylanding"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            });
                        }}
                    >
                        <AcmeLogo />
                        <p>Schoolify</p>
                    </Link>
                </NavbarBrand>

                {/* Desktop Links */}
                <NavbarContent justify="center" className="hidden sm:flex">
                    {navLinks.map((link) => (
                        <NavbarItem key={link}>
                            <Link
                                href={`#${link.toLowerCase().replace(" ", "-")}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setActive(link);
                                    handleScroll(link.toLowerCase().replace(" ", "-"));
                                }}
                                className={`relative ${
                                    active === link
                                        ? "text-black font-bold"
                                        : "text-customWhite font-normal"
                                }`}
                            >
                                {link}
                                {/* Underline Bar */}
                                <span
                                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] w-6 bg-black rounded ${
                                        active === link ? "block" : "hidden"
                                    }`}
                                ></span>
                            </Link>
                        </NavbarItem>
                    ))}
                </NavbarContent>

                {/* Login & Signup */}
                <NavbarContent justify="end" className="hidden sm:flex">
                    <NavbarItem>

                        <Button as={NextLink} href="/login" color="white" variant="flat" className="bg-customBlue">
                                Log In

                        <Button as={NextLink} href="/login" color="primary" variant="flat" className="bg-customBlue">
                                Register

                        </Button>
                    </NavbarItem>
                </NavbarContent>

                {/* Hamburger Menu (Mobile) */}
                <NavbarContent className="sm:hidden flex items-center justify-end">
                    <Button
                        isIconOnly
                        variant="light"
                        // onClick={() => setMenuOpen(!menuOpen)}
                        // aria-label="Toggle menu"
                        className="ml-24"
                        onPress={onOpen}
                        aria-label="Open menu"
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
                className="absolute top-4 right-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg" // Position the modal at the top-right
                placement="top-right" // Enforce top-right placement
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
                                <div className="flex flex-col items-center gap-4">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link}
                                            href={`#${link.toLowerCase().replace(" ", "-")}`}
                                            onPress={() => {
                                                setActive(link); // Update the active link
                                                handleScroll(link.toLowerCase().replace(" ", "-")); // Scroll to the section
                                                onClose(); // Close the modal
                                            }}
                                            className={`relative ${
                                                active === link
                                                    ? "text-black font-bold"
                                                    : "text-gray-600 font-normal"
                                            }`}
                                        >
                                            {link}
                                            <span
                                                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] w-6 bg-black rounded ${
                                                    active === link ? "block" : "hidden"
                                                }`}
                                            ></span>
                                        </Link>
                                    ))}
                                    <div className="flex flex-col items-center gap-2">
                                        <Button as={NextLink} href="/login" color="primary" variant="flat" className="bg-customBlue">
                                            Register
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