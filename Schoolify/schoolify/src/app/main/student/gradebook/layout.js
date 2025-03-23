import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import {Providers} from "@/app/providers";
import MainNavbar from "@/app/components/MainNavbar";
import {FooterSection} from "@/app/components/FooterSection";
<<<<<<< HEAD:Schoolify - Main/schoolify/src/app/main/student/gradebook/layout.js
=======
import {ProfileStudent} from "@/app/main/student/profileStudent";
import NotificationBell from "@/app/main/student/NotificationBellStudent";
import Calendar from "@/app/components/Calendar";
import {Suspense} from "react";
>>>>>>> c63787fbd329fbb9c606e342da1b1ce5c6199ecb:Schoolify/schoolify/src/app/main/student/gradebook/layout.js

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <>

            <Providers>
                <Suspense fallback={<div>Loading Navbar...</div>}>
                    <MainNavbar />
                </Suspense>
                <div id="root">{children}</div>
<<<<<<< HEAD:Schoolify - Main/schoolify/src/app/main/student/gradebook/layout.js
=======
                <div className="
                  text-white rounded-full fixed
                  bottom-4 right-6 shadow-lg
                  flex gap-4 items-center sm:flex-row flex-col z-50">
                    <Calendar/>
                    <NotificationBell/>
                    <ProfileStudent/>
                </div>
>>>>>>> c63787fbd329fbb9c606e342da1b1ce5c6199ecb:Schoolify/schoolify/src/app/main/student/gradebook/layout.js
                <FooterSection/>
            </Providers>

        </>
    );
}