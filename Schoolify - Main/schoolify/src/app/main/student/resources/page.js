"use client";

import React from "react";

export default function Page() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <h1 className="absolute top-36 left-52 text-5xl font-bold text-gray-800">Science</h1>
            <div className="w-full max-w-screen-lg h-auto  bg-[#87CBFF] shadow-xl rounded-lg p-4 mt-4 absolute top-60 left-48">
                <h2 className="text-left text-lg font-bold text-gray-800">Content goes here.</h2>
            </div>
            <div className="w-full max-w-screen-lg h-auto  bg-[#87CBFF] shadow-xl rounded-lg p-4 mt-4 absolute slide-in-from-top-72 left-48">
                <h2 className="text-left text-lg font-bold text-gray-800">Content goes here.</h2>
            </div>
            <div className="w-full max-w-screen-lg h-auto  bg-[#87CBFF] shadow-xl rounded-lg p-4 mt-4 absolute top-3/4 left-48">
                <h2 className="text-left text-lg font-bold text-gray-800">Content goes here.</h2>
            </div>
        </div>
    );
}