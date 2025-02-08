import React from "react";

export default function Aboutus (){

    const features = [
        "Customizable Dashboards",
        "Real-Time Notifications",
        "Comprehensive Analytics",
        "User-Friendly Design",
        "Multi-Platform Accessibility",
        "Integrated Learning Tools",
        "Secure & Reliable",
        "Dedicated Support",
    ];

    return (
        <div id="about-us" className="mt-9 bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-15 rounded-3xl">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                    <div >
                        <img className="w-full rounded-3xl" src="/img/aboutus.png" alt="" />
                    </div>
                    <div>
                        <div className="mb-10">
                            <h1 className="text-4xl text-black font-sans font-bold relative inline-block">
                                About Us
                                <span
                                    className="absolute bottom-[-4px] left-0 w-1/2 h-[3px] bg-gradient-to-r from-blue-500 to-blue-200"
                                    style={{
                                        width: "30%",
                                    }}
                                ></span>
                            </h1>
                        </div>
                        <h1 className="mt-4 text-black opacity-60 text-left">
                            Schoolify is a cutting-edge Learning Management System designed to enhance collaboration and streamline school management.
                            We empower teachers, parents, and students with features tailored to meet their needs.
                        </h1>
                        <p className="mt-9 text-black font-bold text-3xl mb-10 text-left">Why Choose Us?</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center text-lg text-black opacity-60 text-left"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        className="w-5 h-5 text-blue-500 mr-3"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
