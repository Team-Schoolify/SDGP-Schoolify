
"use client";


import React from "react";
import {Button} from "@nextui-org/react";
import Lottie from "lottie-react";
import animationData from "@/app/schoolifylanding/lotti.json"
import { useRef } from "react";

export const Hero = (props) => {

    const bookRef = useRef(null);

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    return (

        <section id="hero" className="mt-16 bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-15 rounded-3xl ">

        <section id="hero" className="mt-16 bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-15 rounded-3xl">


            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                    <div>
                        <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">A website for learners</p>
                        <h1 className="mt-4 text-2xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl pb-2
                    bg-gradient-to-r from-customBlue via-customGreen to-customLightBlue bg-clip-text text-transparent
                    ">Connect & Continue your learnings.</h1>
                        <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">Do your studies with right mentor.</p>
                        <Button
                            className="inline-flex items-center px-6 py-4 h-[50px] mt-6 font-semibold bg-gradient-to-tr from-blue-400 to-yellow-500 text-white shadow-lg"
                            radius="full"
                            onClick={(e) => {
                                handleScroll("features");}}
                        >
                            Learn More
                            <svg
                                className="w-6 h-6 ml-1 -mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </Button>

                        <p className="mt-5 text-gray-600">Already joined us? <a href="#" title=""
                                                                                className="text-black transition-all duration-200 hover:underline">Log
                            in</a></p>
                    </div>

                    <div>
                        {/* <img class="w-full rounded-3xl" src="../public/img/abcd.png" alt="" /> */}
                        <Lottie
                            lottieRef={bookRef}
                            loop={true}
                            animationData={animationData} />
                    </div>
                </div>
            </div>
        </section>
    );
};
