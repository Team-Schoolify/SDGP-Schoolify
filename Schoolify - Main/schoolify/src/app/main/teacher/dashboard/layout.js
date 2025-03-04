import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import {Providers} from "@/app/providers";
import MainNavbar from "@/app/components/MainNavbar";
import {FooterSection} from "@/app/components/FooterSection";
import {ProfileAndNotificationTeacher} from "@/app/main/teacher/profileAndNotificationTeacher";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Schoolify - Teacher",
    description: "This is Schoolify Website",
  };

export default function RootLayout({ children }) {
    return (
        <>

            <Providers>
                <MainNavbar/>
                <div id="root">{children}</div>
                <ProfileAndNotificationTeacher/>
                <FooterSection/>
            </Providers>

        </>
    );
}
