"use client";

import React, { useState } from "react";
import { Form, Input, Button } from "@heroui/react";
import bcrypt from "bcryptjs";
import { supabase } from "@/app/lib/supabaseClient";

export default function UpdateParentForm() {
    const [loading, setLoading] = useState(false);

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = Object.fromEntries(new FormData(e.currentTarget));
        const parentId = parseInt(formData.parent_id.replace("PAR-", ""), 10);

        if (isNaN(parentId)) {
            alert("❌ Invalid Parent ID!");
            setLoading(false);
            return;
        }

        try {
            // Hash new password
            const hashedPassword = await bcrypt.hash(formData.password, 12);

            // Prepare updated student data
            const updatedData = {
                parent_password: hashedPassword,
                // student_grade: parseInt(formData.student_grade, 10),
                // subject_scheme: parseInt(formData.subject_scheme, 10),
            };

            // Update student in the database
            const { error } = await supabase
                .from("parent")
                .update(updatedData)
                .eq("parent_id", parentId);

            if (error) {
                console.error("❌ Error updating parent:", error.message);
                alert(`Failed to update parent: ${error.message}`);
            } else {
                alert("✅ Parent updated successfully!");
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
            <Form className="w-full max-w-md flex flex-col gap-4 bg-black p-8 rounded-xl" onSubmit={handleUpdate}
                  validationBehavior="native">
                <Input
                    isRequired
                    label="Parent ID"
                    labelPlacement="outside"
                    name="parent_id"
                    type="text"
                    placeholder="Enter parent ID (PAR-XXXX)"
                />
                <Input
                    isRequired
                    label="New Password"
                    labelPlacement="outside"
                    name="password"
                    type="password"
                    placeholder="Enter new password"
                />
                {/*<Input*/}
                {/*    isRequired*/}
                {/*    label="New Grade"*/}
                {/*    labelPlacement="outside"*/}
                {/*    name="student_grade"*/}
                {/*    type="number"*/}
                {/*    placeholder="Enter new student grade"*/}
                {/*    min={6}*/}
                {/*    max={13}*/}
                {/*/>*/}
                {/*<Input*/}
                {/*    isRequired*/}
                {/*    label="New Subject Scheme ID"*/}
                {/*    labelPlacement="outside"*/}
                {/*    name="subject_scheme"*/}
                {/*    type="number"*/}
                {/*    placeholder="Enter new subject scheme ID"*/}
                {/*    min={1}*/}
                {/*    max={6}*/}
                {/*/>*/}
                <Button color="primary" type="submit" isLoading={loading}>
                    {loading ? "Updating..." : "Update Parent"}
                </Button>
            </Form>
        </div>
    );
}
