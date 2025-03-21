"use client";

import React, { useState } from "react";
import { Form, Input, Button } from "@heroui/react";
import bcrypt from "bcryptjs";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/lib/supabaseClient";

export default function AdminTeacherForm() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = Object.fromEntries(new FormData(e.currentTarget));

        // // 🔍 Manual Validation
        // if (
        //     !formData.teacher_name ||
        //     !formData.teacher_email ||
        //     !formData.teacher_password ||
        //     !formData.school_id ||
        //     !formData.link ||
        //     !formData.status ||
        //     !formData.photo ||
        //     !formData.subject ||
        //     !formData.grade
        // ) {
        //     alert("❌ Please fill in all required fields before submitting!");
        //     setLoading(false);
        //     return;
        // }

        try {
            // ✅ Check if email already exists
            const { data: existingTeacher, error: checkError } = await supabase
                .from("teacher") // ✅ Correct table name
                .select("teacher_email")
                .eq("teacher_email", formData.teacher_email)
                .maybeSingle();

            if (existingTeacher) {
                alert("❌ A teacher with this email already exists!");
                setLoading(false);
                return;
            }

            if (checkError && checkError.code !== "PGRST116") {
                console.error("❌ Error checking teacher:", checkError.message);
                alert(`Database Error: ${checkError.message}`);
                setLoading(false);
                return;
            }

            // ✅ Hash password
            const hashedPassword = await bcrypt.hash(formData.password, 12);

            // ✅ Prepare teacher data
            const teacherData = {
                teacher_name: formData.teacher_name,
                teacher_email: formData.teacher_email,
                teacher_password: hashedPassword, // ✅ Matches column name
                school_id: parseInt(formData.school_id, 10),
                link: formData.link || null, // Optional
                status: formData.status || "active", // Default to active
                photo: formData.photo || null, // Optional
                subject: formData.subject,
                grade: parseInt(formData.grade, 10),
            };

            // ✅ Insert into `teacher` table
            const { error } = await supabase.from("teacher").insert([teacherData]);

            if (error) {
                console.error("❌ Error inserting teacher:", error.message);
                alert(`Failed to add teacher: ${error.message}`);
            } else {
                alert("✅ Teacher added successfully!");
                router.refresh();
            }
        } catch (err) {
            console.error("❌ Unexpected error:", err);
            alert("An unexpected error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center">
            <Form className="w-full max-w-md flex flex-col gap-4 bg-black p-8 rounded-xl" onSubmit={handleSubmit}
                  validationBehavior="native">
                <Input
                    isRequired
                    label="Teacher Name"
                    labelPlacement="outside"
                    name="teacher_name"
                    placeholder="Enter teacher name"
                />
                <Input
                    isRequired
                    label="Email"
                    labelPlacement="outside"
                    name="teacher_email"
                    type="email"
                    placeholder="Enter teacher email"
                />
                <Input
                    isRequired
                    label="Password"
                    labelPlacement="outside"
                    name="password"
                    type="password"
                    placeholder="Enter teacher password"
                />
                <Input
                    isRequired
                    label="School ID"
                    labelPlacement="outside"
                    name="school_id"
                    type="number"
                    placeholder="Enter school ID"
                    min={1}
                />
                <Input
                    isRequired
                    label="Link"
                    labelPlacement="outside"
                    name="link"
                    type="url"
                    placeholder="Enter teacher profile link (optional)"
                />
                <Input
                    isRequired
                    label="Status"
                    labelPlacement="outside"
                    name="status"
                    placeholder="Enter teacher status (optional)"
                />
                <Input
                    isRequired
                    label="Photo URL"
                    labelPlacement="outside"
                    name="photo"
                    type="url"
                    placeholder="Enter teacher photo URL (optional)"
                />
                <Input
                    isRequired
                    label="Subject"
                    labelPlacement="outside"
                    name="subject"
                    placeholder="Enter subject"
                />
                <Input
                    isRequired
                    label="Grade"
                    labelPlacement="outside"
                    name="grade"
                    type="number"
                    placeholder="Enter grade"
                    min={1}
                    max={13}
                />

                <div className="flex gap-2">
                    <Button color="primary" type="submit" isLoading={loading}>
                        {loading ? "Submitting..." : "Submit"}
                    </Button>
                    <Button type="reset" color="danger" variant="flat">
                        Reset
                    </Button>
                </div>
            </Form>
        </div>
    );
}