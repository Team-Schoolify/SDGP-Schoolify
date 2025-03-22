"use client";
import React from 'react';
import AdminStudentForm from "@/app/main/admin/student/AdminStudentForm";
import DeleteStudentForm from "@/app/main/admin/student/DeleteStudentForm";
import StudentList from "@/app/main/admin/student/StudentList";
import UpdateStudentForm from "@/app/main/admin/student/UpdateStudentForm";

export default function LoginPage() {

    return (
        <div className="min-h-screen ">
            <div className="grid sm:grid-cols-2 ">
                <AdminStudentForm/>
                <div>
                <DeleteStudentForm/>
                    <UpdateStudentForm/>
                </div>
            </div>
            <StudentList/>
        </div>
    );
}