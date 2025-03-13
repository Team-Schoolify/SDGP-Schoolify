"use client";

import React, { useState } from "react";
import { Form, Input, Button } from "@heroui/react";
import { supabase } from "@/app/lib/supabaseClient";
import {useRouter} from "next/navigation";

export default function DeleteStudentForm( { onDelete } ) {
    const [deleteLoading, setDeleteLoading] = useState(false);
    const router = useRouter();

    const handleDelete = async (e) => {
        e.preventDefault();
        setDeleteLoading(true);

        const formData = Object.fromEntries(new FormData(e.currentTarget));
        const studentId = parseInt(formData.student_id.replace("STU-", ""), 10);

        if (isNaN(studentId)) {
            alert("❌ Invalid Student ID!");
            setDeleteLoading(false);
            return;
        }

        const { error } = await supabase.from("student").delete().eq("student_id", studentId);

        if (error) {
            console.error("❌ Error deleting student:", error.message);
            alert(`Failed to delete student: ${error.message}`);
        } else {
            alert("✅ Student deleted successfully!");
            window.location.reload();
        }

        setDeleteLoading(false);
    };

    return (
        <div className=" flex items-center justify-center mt-5 sm:mt-0 ">

            <Form
                className="w-full max-w-md flex flex-col gap-4 bg-black p-8 rounded-xl"
                onSubmit={handleDelete}>
                <Input
                    isRequired
                    label="Student ID"
                    labelPlacement="outside"
                    name="student_id"
                    type="text"
                    placeholder="Enter student ID (STU-XXXX) to delete"
                />
                <Button color="danger" type="submit" isLoading={deleteLoading}>
                    {deleteLoading ? "Deleting..." : "Delete Student"}
                </Button>
            </Form>
        </div>
            );
            }
