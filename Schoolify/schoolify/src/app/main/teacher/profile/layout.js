import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import {Providers} from "@/app/providers";
import MainNavbar from "@/app/components/MainNavbar";
import {FooterSection} from "@/app/components/FooterSection";
import {ProfileStudent} from "@/app/main/student/profileStudent";
import NotificationBell from "@/app/main/student/NotificationBellStudent";
import Calendar from "@/app/components/Calendar.jsx";
import {ProfileAndNotificationTeacher} from "@/app/main/teacher/profileAndNotificationTeacher.jsx";
import {Suspense} from "react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Profile",
    description: "This is Schoolify Website",
    icon: "/favicon.ico"
};

export default function RootLayout({ children }) {
    return (
        <>

            <Providers>
                <Suspense fallback={<div>Loading Navbar...</div>}>
                    <MainNavbar />
                </Suspense>
                <div id="root">{children}</div>
                <ProfileAndNotificationTeacher/>
                <FooterSection/>
            </Providers>

        </>
    );
}
