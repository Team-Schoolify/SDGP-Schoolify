"use client";
import React, {useEffect, useState} from 'react'
<<<<<<< HEAD
import {
    Badge,
    Button,
    Avatar,
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerFooter,
    DrawerBody, useDisclosure,
    Popover, PopoverTrigger, PopoverContent,
} from "@heroui/react";
import {supabase} from "@/app/lib/supabaseClient";
=======
import {Avatar, useDisclosure} from "@heroui/react";
import {supabase} from "@/app/lib/supabaseClient";
import { useRouter } from "next/navigation";
>>>>>>> 8c161dff35ceb5e4130dbbf5164120827a129398

export const ProfileStudent = () => {
    const [studentId, setStudentId] = useState(null); // Store school_id in state
    const [student, setStudent] = useState(null);
<<<<<<< HEAD
    const [school, setSchool] = useState(null);
    const [schoolId, setSchoolId] = useState(null);
    const {isOpen, onOpen, onClose} = useDisclosure();

    const NotificationIcon = ({size, height, width, ...props}) => {
        return (
            <svg
                fill="none"
                height={size || height || 24}
                viewBox="0 0 24 24"
                width={size || width || 24}
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <path
                    clipRule="evenodd"
                    d="M18.707 8.796c0 1.256.332 1.997 1.063 2.85.553.628.73 1.435.73 2.31 0 .874-.287 1.704-.863 2.378a4.537 4.537 0 01-2.9 1.413c-1.571.134-3.143.247-4.736.247-1.595 0-3.166-.068-4.737-.247a4.532 4.532 0 01-2.9-1.413 3.616 3.616 0 01-.864-2.378c0-.875.178-1.682.73-2.31.754-.854 1.064-1.594 1.064-2.85V8.37c0-1.682.42-2.781 1.283-3.858C7.861 2.942 9.919 2 11.956 2h.09c2.08 0 4.204.987 5.466 2.625.82 1.054 1.195 2.108 1.195 3.745v.426zM9.074 20.061c0-.504.462-.734.89-.833.5-.106 3.545-.106 4.045 0 .428.099.89.33.89.833-.025.48-.306.904-.695 1.174a3.635 3.635 0 01-1.713.731 3.795 3.795 0 01-1.008 0 3.618 3.618 0 01-1.714-.732c-.39-.269-.67-.694-.695-1.173z"
                    fill="currentColor"
                    fillRule="evenodd"
                />
            </svg>
        );
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedStudentId = localStorage.getItem("student_id");
            const storedSchoolId = localStorage.getItem("school_id");
            setStudentId(storedStudentId);
            setSchoolId(storedSchoolId);
            console.log(school, "sadasdasdasdasd");
=======
    const router = useRouter(); // ✅ Initialize Next.js router


    // ✅ Handle Avatar Click to Navigate
    const handleAvatarClick = () => {
        router.push("/main/student/profile?role=student");
    };


    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedStudentId = localStorage.getItem("student_id");
            setStudentId(storedStudentId);
>>>>>>> 8c161dff35ceb5e4130dbbf5164120827a129398
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

<<<<<<< HEAD
    useEffect(() => {
        const fetchSchool = async () => {
            if (!schoolId) return; // Prevent fetching if school_id is not available

            const { data, error } = await supabase
                .from("school")
                .select("name")
                .eq("school_id", schoolId);


            if (error) {
                console.error("Error fetching school:", error);
            } else if (data && data.length > 0) {
                setSchool(data[0]); // ✅ Extract first object from array
                console.log("Updated school object:", data[0]); // ✅ Debugging log
            } else {
                console.warn("No school data found.");
            }
        };

        fetchSchool();
    }, [schoolId]); // Runs only when schoolId is available

    const handleOpen = () => {
        onOpen();
    };


    return (
    <>
        <div
        >
            <Popover placement="top" showArrow={true} backdrop="blur">
                <PopoverTrigger>
                    <Avatar className="cursor-pointer" isBordered color="success"  src={student?.photo || "https://i.pravatar.cc/150"} />
                </PopoverTrigger>
                <PopoverContent>
                    <div className="p-5 flex flex-col text-left gap-y-3">
                        <Avatar isBordered color="success" size="lg"
                                src={student?.photo || "https://i.pravatar.cc/150"}/>
                        <div className="text-lg font-bold">Name: {student?.student_name || "asda"}</div>
                        <div className="text-lg">Email: {student?.student_email || "asdsa"}</div>
                        <div className="text-lg">School: {school?.name || "asdas"}</div>
                        <div className="text-lg">Grade: {student?.student_grade || "asdas"}</div>
                    </div>
                </PopoverContent>
            </Popover>
        </div>

        {/*<Drawer isOpen={isOpen} size="sm" onClose={onClose}>*/}
        {/*    <DrawerContent>*/}
        {/*        {(onClose) => (*/}
        {/*            <>*/}
        {/*                <DrawerHeader className="flex flex-col gap-1">Drawer Title</DrawerHeader>*/}
        {/*                <DrawerBody>*/}
        {/*                    <p>*/}
        {/*                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non*/}
        {/*                        risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor*/}
        {/*                        quam.*/}
        {/*                    </p>*/}
        {/*                    <p>*/}
        {/*                        Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor*/}
        {/*                        adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit*/}
        {/*                        officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.*/}
        {/*                    </p>*/}
        {/*                </DrawerBody>*/}
        {/*                <DrawerFooter>*/}
        {/*                    <Button color="danger" variant="light" onPress={onClose}>*/}
        {/*                        Close*/}
        {/*                    </Button>*/}
        {/*                    <Button color="primary" onPress={onClose}>*/}
        {/*                        Action*/}
        {/*                    </Button>*/}
        {/*                </DrawerFooter>*/}
        {/*            </>*/}
        {/*        )}*/}
        {/*    </DrawerContent>*/}
        {/*</Drawer>*/}
=======
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
>>>>>>> 8c161dff35ceb5e4130dbbf5164120827a129398
    </>
    )
}
