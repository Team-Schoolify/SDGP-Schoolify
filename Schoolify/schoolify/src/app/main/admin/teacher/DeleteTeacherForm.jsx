"use client";

import React, { useState } from "react";
import { Form, Input, Button } from "@heroui/react";
import { supabase } from "@/app/lib/supabaseClient";

export default function DeleteTeacherForm( { onDelete } ) {
    const [deleteLoading, setDeleteLoading] = useState(false);

    const handleDelete = async (e) => {
        e.preventDefault();
        setDeleteLoading(true);

        const formData = Object.fromEntries(new FormData(e.currentTarget));
        const teacherId = parseInt(formData.teacher_id.replace("TEA-", ""), 10);

        if (isNaN(teacherId)) {
            alert("❌ Invalid Teacher ID!");
            setDeleteLoading(false);
            return;
        }

        const { error } = await supabase.from("teacher").delete().eq("teacher_id", teacherId);

        if (error) {
            console.error("❌ Error deleting teacher:", error.message);
            alert(`Failed to delete teacher: ${error.message}`);
        } else {
            alert("✅ Teacher deleted successfully!");
            window.location.reload();
        }

        setDeleteLoading(false);
    };

    return (
        <div className=" flex items-center justify-center mt-5 sm:mt-0 ">

            <Form
                className="w-full max-w-md flex flex-col gap-4 bg-black p-8 rounded-xl"
                onSubmit={handleDelete}
                validationBehavior="native">
                <Input
                    isRequired
                    label="Teacher ID"
                    labelPlacement="outside"
                    name="teacher_id"
                    type="text"
                    placeholder="Enter teacher ID (TEA-XXXX) to delete"
                />
                <Button color="danger" type="submit" isLoading={deleteLoading}>
                    {deleteLoading ? "Deleting..." : "Delete Teacher"}
                </Button>
            </Form>
        </div>
    );
}
