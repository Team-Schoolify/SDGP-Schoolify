import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import {Providers} from "@/app/providers";
import MainNavbar from "@/app/components/MainNavbar";
import {FooterSection} from "@/app/components/FooterSection";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

