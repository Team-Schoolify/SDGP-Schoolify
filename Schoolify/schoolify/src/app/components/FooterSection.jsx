"use client";
import React from "react";
import { Link } from "@nextui-org/react";
import NextLink from "next/link";

export function FooterSection() {

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <footer className="bg-customBlue text-gray-400 py-8  sm:py-16 lg:py-15 w-full rounded-t-3xl absolute left-0">
            <div className="px-6 max-w-screen-xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Logo Section */}
                    <div className="mb-4 md:mb-0">
                        <NextLink href="#" className="font-bold text-customWhite flex items-center">
                            <img src="/img/logowhite.png" alt="Schoolify Logo" className="w-20"/>
                        </NextLink>
                    </div>

                    {/* Links Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <h4 className="text-white font-semibold mb-2">About</h4>
                            <ul>
                                <li>
                                    <Link href="#hero" className="hover:text-white text-gray-400"
                                          onClick={(e) => {
                                              e.preventDefault(); // Prevent the default anchor behavior
                                              handleScroll("hero");}}
                                    >
                                        Go to the Top
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#team" className="hover:text-white text-gray-400"
                                          onClick={(e) => {
                                              e.preventDefault(); // Prevent the default anchor behavior
                                              handleScroll("team");}}
                                    >
                                        Team
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-2">Follow Us</h4>
                            <ul>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        FaceBook
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        LinkedIn
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-2">Legal</h4>
                            <ul>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Terms of Service
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white my-6"></div>

                {/* Social Media Icons */}
                <div className="flex justify-center space-x-6">
                    <a
                        href="https://linkedin.com"
                        className="hover:opacity-80"
                        aria-label="LinkedIn"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-blue-600"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M20.45 20.45h-3.56v-5.6c0-1.33 0-3.05-1.87-3.05-1.87 0-2.16 1.46-2.16 2.96v5.69h-3.56V9h3.43v1.57h.05a3.78 3.78 0 013.4-1.87c3.63 0 4.3 2.39 4.3 5.5v6.25zM5.34 7.35a2.06 2.06 0 11-.04-4.12 2.06 2.06 0 01.04 4.12zM7.12 20.45H3.57V9h3.55zM22.23 0H1.77A1.77 1.77 0 000 1.77v20.46A1.77 1.77 0 001.77 24h20.46A1.77 1.77 0 0024 22.23V1.77A1.77 1.77 0 0022.23 0z" />
                        </svg>
                    </a>

                    <a
                        href="https://facebook.com"
                        className="hover:opacity-80"
                        aria-label="Facebook"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-blue-600"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M22.675 0H1.325A1.32 1.32 0 000 1.318v21.363C0 23.684.316 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.797c0-3.1 1.894-4.787 4.659-4.787 1.325 0 2.464.098 2.795.143v3.242h-1.918c-1.504 0-1.796.715-1.796 1.762v2.311h3.591l-.467 3.622h-3.124V24h6.116A1.32 1.32 0 0024 22.682V1.318A1.32 1.32 0 0022.675 0z" />
                        </svg>
                    </a>

                    <a
                        href="https://instagram.com"
                        className="hover:opacity-80"
                        aria-label="Instagram"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-pink-500"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5A3.75 3.75 0 0020 16.25v-8.5A3.75 3.75 0 0016.25 4h-8.5zM12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm5.25-3a.75.75 0 110 1.5.75.75 0 010-1.5z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}