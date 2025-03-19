"use client";
import React, {useEffect, useState} from 'react'
import {Avatar, useDisclosure} from "@heroui/react";
import {supabase} from "@/app/lib/supabaseClient";
import { useRouter } from "next/navigation";

export const ProfileStudent = () => {
    const [studentId, setStudentId] = useState(null); // Store school_id in state
    const [student, setStudent] = useState(null);
    const router = useRouter(); // ✅ Initialize Next.js router


    // ✅ Handle Avatar Click to Navigate
    const handleAvatarClick = () => {
        router.push("/main/student/profile?role=student");
    };


    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedStudentId = localStorage.getItem("student_id");
            setStudentId(storedStudentId);
        }
    }, []);

    useEffect(() => {
        const fetchStudents = async () => {
            if (!studentId) return; // Prevent fetching if school_id is not available

            const { data, error } = await supabase
                .from("student")
                .select("student_id, student_name, student_email, student_grade, photo, school_id")
                .eq("student_id", studentId);


            if (error) {
                console.error("Error fetching students:", error);
            } else if (data && data.length > 0) {
                setStudent(data[0]); // ✅ Extract first object from array
                console.log("Updated student object:", data[0]); // ✅ Debugging log
            } else {
                console.warn("No student data found.");
            }
        };

        fetchStudents();
    }, [studentId]); // Runs only when schoolId is available

    return (
    <>
        <div>
            <Avatar
                className="cursor-pointer"
                isBordered color="success"
                src={student?.photo || "https://i.pravatar.cc/150"}
                onClick={handleAvatarClick}
            />
        </div>
    </>
    )
}
