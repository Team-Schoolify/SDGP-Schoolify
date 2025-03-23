import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Providers} from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Schoolify",
  description: "This is Schoolify Website",
  icon: "/favicon.ico"
};

export default function RootLayout({ children }) {
  return (
      <html lang="en" className='dark'>
      <head>
          <link
              href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
              rel="stylesheet"
          />
          <title></title>
      </head>
      <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Providers>
          <div id="root">{children}</div>
      </Providers>
      </body>
      </html>
  );
}
