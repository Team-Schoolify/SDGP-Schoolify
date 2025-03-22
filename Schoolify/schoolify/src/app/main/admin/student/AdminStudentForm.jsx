"use client";

import React, { useState } from "react";
import { Form, Input, Button,
    DateInput, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem
} from "@heroui/react";
import bcrypt from "bcryptjs";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/lib/supabaseClient";
import { CalendarDate, parseDate } from "@internationalized/date";


export default function AdminStudentForm() {
    const [loading, setLoading] = useState(false);
    const [selectedGender, setSelectedGender] = useState(new Set(["Male"]));
    const [dob, setDob] = useState(null);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = Object.fromEntries(new FormData(e.currentTarget));
        const gender = Array.from(selectedGender).join("");
        //
        // // 🔍 Manual Validation
        // if (
        //     !formData.student_name ||
        //     !formData.student_email ||
        //     !formData.student_grade ||
        //     !formData.password ||
        //     !formData.school_id ||
        //     !formData.subject_scheme ||
        //     !gender
        // ) {
        //     alert("❌ Please fill in all required fields before submitting!");
        //     setLoading(false);
        //     return;
        // }


        try {


            // Check if email already exists
            const { data: existingStudent, error: checkError } = await supabase
                .from("student") // ✅ Ensure correct table name
                .select("student_email")
                .eq("student_email", formData.student_email)
                .maybeSingle();

            if (existingStudent) {
                alert("❌ A student with this email already exists!");
                setLoading(false);
                return;
            }

            if (checkError && checkError.code !== "PGRST116") {
                console.error("❌ Error checking student:", checkError.message);
                alert(`Database Error: ${checkError.message}`);
                setLoading(false);
                return;
            }
            // Hash password
            const hashedPassword = await bcrypt.hash(formData.password, 12);

            // ✅ DO NOT insert student_id (PostgreSQL generates it)
            const studentData = {
                student_name: formData.student_name,
                student_email: formData.student_email,
                student_grade: parseInt(formData.student_grade, 10),
                student_password: hashedPassword, // ✅ Corrected column name
                photo: formData.photo || null, // Optional
                school_id: parseInt(formData.school_id, 10),
                subject_scheme: parseInt(formData.subject_scheme, 10), // ✅ Fixed column name
                gender: gender, // New field
            };

            // ✅ Ensure correct table name: "students"
            const { error } = await supabase.from("student").insert([studentData]);

            if (error) {
                console.error("❌ Error inserting student:", error.message);
                alert(`Failed to add student: ${error.message}`);
            } else {
                alert("✅ Student added successfully!");
                router.refresh();
                window.location.reload();

            }
        } catch (err) {
            console.error("❌ Unexpected error:", err);
            alert("An unexpected error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className=" flex items-center justify-center">
            <Form className="w-full max-w-md flex flex-col gap-4 bg-black p-8 rounded-xl" onSubmit={handleSubmit}
                  validationBehavior="native">
                <Input
                    isRequired
                    label="Student Name"
                    labelPlacement={"outside"}
                    name="student_name"
                    placeholder="Enter student name"
                />
                <Input
                    isRequired
                    label="Email"
                    labelPlacement={"outside"}
                    name="student_email"
                    type="email"
                    placeholder="Enter student email"
                />
                <Input
                    isRequired
                    label="Grade"
                    labelPlacement={"outside"}
                    name="student_grade"
                    type="number"
                    placeholder="Enter student grade"
                    min={6}
                    max={13}
                />
                <Input
                    isRequired
                    label="Password"
                    labelPlacement={"outside"}
                    name="password"
                    type="password"
                    placeholder="Enter student password"
                />
                <Input
                    isRequired
                    label="Photo URL"
                    labelPlacement={"outside"}
                    name="photo"
                    placeholder="Enter student photo URL (optional)"
                />
                <Input
                    isRequired
                    label="School ID"
                    labelPlacement={"outside"}
                    name="school_id"
                    type="number"
                    placeholder="Enter school ID"
                    min={1}
                />
                <Input
                    isRequired
                    label="Subject Scheme ID"
                    labelPlacement={"outside"}
                    name="subject_scheme"
                    type="number"
                    placeholder="Enter subject scheme ID"
                    min={1}
                    max={6}
                />

                 {/*Gender Dropdown */}
                <label className="text-white text-sm font-bold">Gender</label>
                <Dropdown className="w-full">
                    <DropdownTrigger>
                        <Button className="capitalize" variant="bordered">
                            {Array.from(selectedGender).join(" ")}
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                        disallowEmptySelection
                        aria-label="Select Gender"
                        selectedKeys={selectedGender}
                        selectionMode="single"
                        variant="flat"
                        onSelectionChange={setSelectedGender}
                    >
                        <DropdownItem key="Male">Male</DropdownItem>
                        <DropdownItem key="Female">Female</DropdownItem>
                    </DropdownMenu>
                </Dropdown>

                {/*/!* Date of Birth Input *!/*/}
                {/*<label className="text-white text-sm font-bold">Date of Birth</label>*/}
                {/*<DateInput isRequired labelPlacement="outside" placeholderValue={new CalendarDate(2000, 1, 1)} onChange={setDob} />*/}

                <div className="flex gap-2">
                    <Button color="primary" type="submit" isLoading={loading}>
                        {/*{loading ? "Submitting..." : "Submit"}*/}
                        Submit
                    </Button>
                    <Button type="reset" color="danger" variant="flat">
                        Reset
                    </Button>
                </div>
            </Form>
        </div>
    );
}