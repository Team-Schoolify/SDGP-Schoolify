import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import {Providers} from "@/app/providers";
import MainNavbar from "@/app/components/MainNavbar";
import {FooterSection} from "@/app/components/FooterSection";
import {ProfileStudent} from "@/app/main/student/profileStudent";
import NotificationBell from "@/app/main/student/NotificationBellStudent";
<<<<<<< HEAD
import Calendar from "@/app/components/Calendar.jsx";
=======
import Calendar from "@/app/components/Calendar";
import {Suspense} from "react";
>>>>>>> f8965ee033cdaf20f83f9b8aa8b8ec53c9c2b881

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
<<<<<<< HEAD
    title: "Profile",
    description: "This is Profile Page of Schoolify Website",
=======
<<<<<<< HEAD
    title: "Resources",
=======
    title: "Dashboard",
>>>>>>> 8c161dff35ceb5e4130dbbf5164120827a129398
    description: "This is Schoolify Website",
>>>>>>> f8965ee033cdaf20f83f9b8aa8b8ec53c9c2b881
};

export default function RootLayout({ children }) {
    return (
        <>

            <Providers>
<<<<<<< HEAD
                <div id="root">{children}</div>
=======
                <Suspense fallback={<div>Loading Navbar...</div>}>
                    <MainNavbar />
                </Suspense>
<<<<<<< HEAD
                <div id="root">{children}</div>
=======
                <div className="min-h-screen" id="root">{children}</div>
>>>>>>> 8c161dff35ceb5e4130dbbf5164120827a129398
>>>>>>> f8965ee033cdaf20f83f9b8aa8b8ec53c9c2b881
                <div className="
                  text-white rounded-full fixed
                  bottom-4 right-6 shadow-lg
                  flex gap-4 items-center sm:flex-row flex-col z-50">
                    <Calendar/>
                    <NotificationBell/>
                    <ProfileStudent/>
                </div>
<<<<<<< HEAD
            </Providers>

        </>
    );
=======
<<<<<<< HEAD
                <FooterSection/>
            </Providers>
        </>
    );
=======
                    <FooterSection/>
            </Providers>

        </>
);
>>>>>>> 8c161dff35ceb5e4130dbbf5164120827a129398
>>>>>>> f8965ee033cdaf20f83f9b8aa8b8ec53c9c2b881
}
