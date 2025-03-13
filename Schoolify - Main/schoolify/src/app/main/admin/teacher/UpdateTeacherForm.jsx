"use client";

import React, { useState } from "react";
import { Form, Input, Button } from "@heroui/react";
import bcrypt from "bcryptjs";
import { supabase } from "@/app/lib/supabaseClient";

export default function UpdateTeacherForm() {
    const [loading, setLoading] = useState(false);

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = Object.fromEntries(new FormData(e.currentTarget));
        const teacherId = parseInt(formData.teacher_id.replace("TEA-", ""), 10);

        if (isNaN(teacherId)) {
            alert("❌ Invalid Teacher ID!");
            setLoading(false);
            return;
        }

        try {
            // Hash new password
            const hashedPassword = await bcrypt.hash(formData.password, 12);

            // Prepare updated student data
            const updatedData = {
                teacher_password: hashedPassword,
                grade: parseInt(formData.grade, 10),
                subject: formData.subject,
            };

            // Update student in the database
            const { error } = await supabase
                .from("teacher")
                .update(updatedData)
                .eq("teacher_id", teacherId);

            if (error) {
                console.error("❌ Error updating teacher:", error.message);
                alert(`Failed to update teacher: ${error.message}`);
            } else {
                alert("✅ Teacher updated successfully!");
                window.location.reload(); // Refresh page to reflect changes
            }
        } catch (err) {
            console.error("❌ Unexpected error:", err);
            alert("An unexpected error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center sm:mt-14 mt-5">
            <Form className="w-full max-w-md flex flex-col gap-4 bg-black p-8 rounded-xl" onSubmit={handleUpdate}>
                <Input
                    isRequired
                    label="Teacher ID"
                    labelPlacement="outside"
                    name="teacher_id"
                    type="text"
                    placeholder="Enter teacher ID (TEA-XXXX)"
                />
                <Input
                    isRequired
                    label="New Password"
                    labelPlacement="outside"
                    name="password"
                    type="password"
                    placeholder="Enter new password"
                />
                <Input
                    isRequired
                    label="New Grade"
                    labelPlacement="outside"
                    name="grade"
                    type="number"
                    placeholder="Enter new teacher grade"
                    min={6}
                    max={13}
                />
                <Input
                    isRequired
                    label="New Subject"
                    labelPlacement="outside"
                    name="subject"
                    type="text"
                    placeholder="Enter new subject"
                />
                <Button color="primary" type="submit" isLoading={loading}>
                    {loading ? "Updating..." : "Update Teacher"}
                </Button>
            </Form>
        </div>
    );
}
