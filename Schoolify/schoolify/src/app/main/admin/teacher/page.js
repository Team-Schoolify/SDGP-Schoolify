"use client";
import React from 'react';
import AdminTeacherForm from "@/app/main/admin/teacher/AdminTeacherForm";
import DeleteTeacherForm from "@/app/main/admin/teacher/DeleteTeacherForm";
import UpdateTeacherForm from "@/app/main/admin/teacher/UpdateTeacherForm";
import TeacherList from "@/app/main/admin/teacher/TeacherList";


export default function LoginPage() {

    return (
    <div className="min-h-screen ">
        <div className="grid sm:grid-cols-2 ">
            <AdminTeacherForm/>
            <div>
                <DeleteTeacherForm/>
                <UpdateTeacherForm/>
            </div>
        </div>
        <TeacherList/>
    </div>
)
    ;
}