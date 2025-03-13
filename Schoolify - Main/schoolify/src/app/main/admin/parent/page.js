"use client";
import React from 'react';
import AdminParentForm from "@/app/main/admin/parent/AdminParentForm";
import DeleteParentForm from "@/app/main/admin/parent/DeleteParentForm";
import UpdateParentForm from "@/app/main/admin/parent/UpadateParentForm";
import ParentList from "@/app/main/admin/parent/ParentList";

export default function LoginPage() {

    return (


    <div className="min-h-screen ">
        <div className="grid sm:grid-cols-2 ">
            <AdminParentForm/>
            <div>
                <DeleteParentForm/>
                <UpdateParentForm/>
            </div>
        </div>
        <ParentList/>
    </div>
)
    ;
}