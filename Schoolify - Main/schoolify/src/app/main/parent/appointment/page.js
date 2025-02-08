"use client";

import React from "react";
import Booking from "@/app/main/parent/appointment/Booking";
import Session from "@/app/main/parent/appointment/Session";

export default function Page() {
    return (
        <div className="min-h-screen">
            <Booking />
            <Session />
        </div>
    );
}