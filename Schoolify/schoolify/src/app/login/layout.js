import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import {Providers} from "@/app/providers";


const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Login",
    description: "This is Schoolify Website",
    icon: "/favicon.ico"
};

export default function RootLayout({ children }) {
    return (
        <>

            <Providers>

                {children}

            </Providers>

        </>
    );
}
