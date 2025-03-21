"use client";

import React from "react";
import Booking from "@/app/main/parent/appointment/Booking";
import ParentSessionCard from "@/app/main/parent/appointment/ParentSessionCard";

export default function Page() {
    return (
        <div className="min-h-screen">
            <Booking />
            <ParentSessionCard />
        </div>
    );
}