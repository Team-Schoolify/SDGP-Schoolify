"use client";
import React from "react";
import {SessionEdit} from "@/app/main/teacher/appointment/SessionEdit";
import TeacherSessionCard from "@/app/main/teacher/appointment/TeacherSessionCard";

export default function Page() {
    return (
        <div className="min-h-screen">
            <SessionEdit/>
            <TeacherSessionCard/>
        </div>
    );
}