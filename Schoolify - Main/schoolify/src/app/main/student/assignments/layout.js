import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import {Providers} from "@/app/providers";
import MainNavbar from "@/app/components/MainNavbar";
import {FooterSection} from "@/app/components/FooterSection";
import {ProfileStudent} from "@/app/main/student/profileStudent";
import NotificationBell from "@/app/main/student/NotificationBellStudent";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Assignments",
    description: "This is Schoolify Website",
  };

export default function RootLayout({ children }) {
    return (
        <>

            <Providers>
                <MainNavbar/>
                <div id="root">{children}</div>
                <div className="
                  text-white rounded-full fixed
                  bottom-4 right-6 shadow-lg dark:bg-white dark:text-black
                  flex gap-4 items-center sm:flex-row flex-col z-50">
                    <NotificationBell/>
                    <ProfileStudent/>
                </div>
                <FooterSection/>
            </Providers>

        </>
    );
}
