"use client";

import React, { useState } from "react";
import { Form, Input, Button } from "@heroui/react";
import { supabase } from "@/app/lib/supabaseClient";

export default function DeleteParentForm( { onDelete } ) {
    const [deleteLoading, setDeleteLoading] = useState(false);

    const handleDelete = async (e) => {
        e.preventDefault();
        setDeleteLoading(true);

        const formData = Object.fromEntries(new FormData(e.currentTarget));
        const parentId = parseInt(formData.parent_id.replace("PAR-", ""), 10);

        if (isNaN(parentId)) {
            alert("❌ Invalid Parent ID!");
            setDeleteLoading(false);
            return;
        }

        const { error } = await supabase.from("parent").delete().eq("parent_id", parentId);

        if (error) {
            console.error("❌ Error deleting parent:", error.message);
            alert(`Failed to delete parent: ${error.message}`);
        } else {
            alert("✅ Parent deleted successfully!");
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
                    label="Parent ID"
                    labelPlacement="outside"
                    name="parent_id"
                    type="text"
                    placeholder="Enter parent ID (PAR-XXXX) to delete"
                />
                <Button color="danger" type="submit" isLoading={deleteLoading}>
                    {deleteLoading ? "Deleting..." : "Delete Parent"}
                </Button>
            </Form>
        </div>
    );
}
