"use client";

import React, { useState } from "react";
import { Form, Input, Button } from "@heroui/react";
import bcrypt from "bcryptjs";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/lib/supabaseClient";

export default function AdminParentForm() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            // ✅ Check if email already exists
            const { data: existingParent, error: checkError } = await supabase
                .from("parent") // ✅ Correct table name
                .select("parent_email")
                .eq("parent_email", formData.parent_email)
                .maybeSingle();

            if (existingParent) {
                alert("❌ A parent with this email already exists!");
                setLoading(false);
                return;
            }

            if (checkError && checkError.code !== "PGRST116") {
                console.error("❌ Error checking parent:", checkError.message);
                alert(`Database Error: ${checkError.message}`);
                setLoading(false);
                return;
            }

            // ✅ Hash password
            const hashedPassword = await bcrypt.hash(formData.password, 12);

            // ✅ Prepare parent data
            const parentData = {
                parent_name: formData.parent_name,
                parent_email: formData.parent_email,
                parent_password: hashedPassword, // ✅ Matches column name
                student_id: parseInt(formData.student_id, 10), // ✅ Matches column name
                school_id: parseInt(formData.school_id, 10), // ✅ Matches column name
                photo: formData.photo || null, // Optional
            };

            // ✅ Insert into `parent` table
            const { error } = await supabase.from("parent").insert([parentData]);

            if (error) {
                console.error("❌ Error inserting parent:", error.message);
                alert(`Failed to add parent: ${error.message}`);
            } else {
                alert("✅ Parent added successfully!");
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
            <Form className="w-full max-w-md flex flex-col gap-4 bg-black p-8 rounded-xl" onSubmit={handleSubmit}>
                <Input
                    isRequired
                    label="Parent Name"
                    labelPlacement="outside"
                    name="parent_name"
                    placeholder="Enter parent name"
                />
                <Input
                    isRequired
                    label="Email"
                    labelPlacement="outside"
                    name="parent_email"
                    type="email"
                    placeholder="Enter parent email"
                />
                <Input
                    isRequired
                    label="Password"
                    labelPlacement="outside"
                    name="password"
                    type="password"
                    placeholder="Enter parent password"
                />
                <Input
                    isRequired
                    label="Student ID"
                    labelPlacement="outside"
                    name="student_id"
                    type="number"
                    placeholder="Enter student ID"
                    min={1}
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
                    label="Photo URL"
                    labelPlacement="outside"
                    name="photo"
                    placeholder="Enter parent photo URL (optional)"
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