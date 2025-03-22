"use client";

import React from "react";
import AttendanceParent from "@/app/main/parent/attendance/AttendanceParent";

export default function Page() {
    return (
        <div className="min-h-screen">
            <AttendanceParent/>

        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-800">
                Welcome to Attendance Page of Parents!!!!
            </h1>
        </div>
    );
}