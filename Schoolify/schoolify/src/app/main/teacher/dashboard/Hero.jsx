import React from "react";

import { useRef } from "react";
import dynamic from "next/dynamic";

export const Hero = (props) => {

    const bookRef = useRef(null);

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    return (
        <section id="hero" className="mt-24  py-10 sm:py-16 lg:py-15 rounded-3xl">
            <div className="px-4 mx-auto max-w-5xl sm:px-6 lg:px-8"> {/* Reduced max width */}
                <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Text Section */}
                    <div className="self-start">
                        <h1
                            className="text-2xl font-bold  sm:text-6xl xl:text-8xl pb-2
          bg-gradient-to-r from-customBlue to-customLightBlue bg-clip-text text-transparent"
                        >
                            Welcome Back!
                        </h1>
                    </div>

                    {/* Animation Section */}
                    <div className="flex justify-center items-center">
                        <img
                            src="/img/lottie.gif"
                            alt="Student Studying"
                            className="w-full max-w-lg h-auto md:max-w-xl lg:max-w-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero