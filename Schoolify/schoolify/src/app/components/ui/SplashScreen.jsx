"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SplashScreen({ onFinish }) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Simulate a loading delay (e.g., fetching data)
        const timeout = setTimeout(() => {
            setIsVisible(false);
            onFinish();
        }, 2000); // Change time if needed (e.g., 3000ms = 3s)

        return () => clearTimeout(timeout);
    }, [onFinish]);

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black z-50"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 10}}
        >
            <div className="flex flex-col items-center">
                <Image src="/img/logos/logowhite.png" alt="logo" width={120} height={120} />
                <h1 className="text-3xl font-bold text-white mt-4">Welcome to Schoolify</h1>
            </div>
        </motion.div>
    );
}