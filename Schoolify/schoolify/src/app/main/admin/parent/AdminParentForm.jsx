"use client";

import React, { useState } from "react";
import { Form, Input, Button } from "@heroui/react";
import bcrypt from "bcryptjs";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/lib/supabaseClient";

export default function AdminParentForm() {
    const [loading, setLoading] = useState(false);
    const [contactNumber, setContactNumber] = useState("");
    const [contactError, setContactError] = useState("");
    const [submitted, setSubmitted] = React.useState(null);


    const router = useRouter();

    const onSubmit = (e) => {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.currentTarget));

        setSubmitted(data);
    };

    const handleContactChange = (e) => {
        const value = e.target.value.replace(/\D/g, ""); // 🔍 Allow only digits
        setContactNumber(value);

        if (value.length !== 10) {
            setContactError("Please enter a valid 10-digit contact number");
        } else {
            setContactError(""); // ✅ Clear error when valid
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = Object.fromEntries(new FormData(e.currentTarget));

        //
        // // 🔍 Manual Validation
        // if (
        //     !formData.parent_name ||
        //     !formData.parent_email ||
        //     !formData.password ||
        //     !formData.student_id ||
        //     !formData.school_id ||
        //     !contactNumber ||
        //     !formData.address ||
        //     !formData.photo
        // ) {
        //     alert("❌ Please fill in all required fields before submitting!");
        //     setLoading(false);
        //     return;
        // }

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
                address: formData.address, // ✅ Ensure address is included
                contact: contactNumber, // ✅ Fixed contact number
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
        <div className="flex items-center justify-center ">
            <Form
                className="w-full max-w-md flex flex-col gap-4 bg-black p-8 rounded-xl"
                onSubmit={handleSubmit}
                validationBehavior="native"
            >
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
                    errorMessage={({validationDetails, validationErrors}) => {
                        if (validationDetails.typeMismatch) {
                            return "Please enter a valid email address";
                        }

                        return validationErrors;
                    }}
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
                    isRequired
                    label="Photo URL"
                    labelPlacement="outside"
                    name="photo"
                    placeholder="Enter parent photo URL (optional)"
                />

                <Input
                    isRequired
                    label="Address"
                    labelPlacement="outside"
                    name="address"
                    placeholder="Enter your address"
                />

                <Input
                    isRequired
                    label="Contact Number"
                    labelPlacement="outside"
                    name="contact"
                    type="tel" // 🔍 HeroUI does not support `type="tel"`
                    placeholder="Enter your contact number"
                    maxLength={10} // ✅ Limit input to 10 digits
                    value={contactNumber}
                    onChange={handleContactChange}
                    errorMessage={contactError} // ✅ Display error message
                />

                {/*<div className="flex gap-2">*/}
                    <Button color="primary" type="submit" isLoading={loading}>
                        {loading ? "Submitting..." : "Submit"}
                    </Button>
                    <Button type="reset" color="danger" variant="flat">
                        Reset
                    </Button>
                {/*</div>*/}
            </Form>

        </div>
    );
}