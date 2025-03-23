import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import {Providers} from "@/app/providers";
import MainNavbar from "@/app/components/MainNavbar";
import {FooterSection} from "@/app/components/FooterSection";
import {ProfileParent} from "@/app/main/parent/profileParent";
import NotificationBellParent from "@/app/main/parent/NotificationBellParent";
import Calendar from "@/app/components/Calendar";
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
    title: "Gradebook",
    description: "This is the Gradebook page of Schoolify.",
};

export default function RootLayout({ children }) {
    return (
        <>
            <Providers>
                <Suspense fallback={<div>Loading Navbar...</div>}>
                    <MainNavbar />
                </Suspense>
                <div id="root">{children}</div>
                <div className="
                  text-white rounded-full fixed
                  bottom-4 right-6 shadow-lg
                  flex gap-4 items-center sm:flex-row flex-col z-50">
                    <Calendar/>
                    <NotificationBellParent/>
                    <ProfileParent/>
                </div>
                <FooterSection/>
            </Providers>

        </>
    );
}