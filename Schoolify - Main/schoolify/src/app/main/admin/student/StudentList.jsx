"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Input,
    Pagination,
} from "@heroui/react";
import { supabase } from "@/app/lib/supabaseClient";

export default function StudentList() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filterValue, setFilterValue] = useState("");
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const SearchIcon = (props) => {
        return (
            <svg
                aria-hidden="true"
                fill="none"
                focusable="false"
                height="1em"
                role="presentation"
                viewBox="0 0 24 24"
                width="1em"
                {...props}
            >
                <path
                    d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                />
                <path
                    d="M22 22L20 20"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                />
            </svg>
        );
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from("student")
            .select("student_id, student_name, student_email, student_grade, subject_scheme, school_id")
            .order("student_id", { ascending: true });
        if (error) {
            console.error("Error fetching students:", error.message);
            alert(`Failed to load students: ${error.message}`);
        } else {
            setStudents(data.map(student => ({
                ...student,
                student_id: `STU-${String(student.student_id).padStart(4, '0')}`
            })));
        }
        setLoading(false);
    };

    const filteredItems = useMemo(() => {
        let filteredStudents = [...students];
        if (filterValue) {
            filteredStudents = filteredStudents.filter((student) =>
                student.student_name.toLowerCase().includes(filterValue.toLowerCase()) ||
                student.student_id.toLowerCase().includes(filterValue.toLowerCase())
            );
        }
        return filteredStudents;
    }, [students, filterValue]);

    const paginatedItems = useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        return filteredItems.slice(start, end);
    }, [page, filteredItems, rowsPerPage]);

    return (
        <div className="grid grid-cols-1 mt-16">
            <div className="text-black text-3xl font-bold">Student List</div>
            <div className="flex justify-between items-center mt-5">
                <span className="text-default-400 text-small">Total {filteredItems.length} students</span>
                <Input
                    isClearable
                    classNames={{ base: "w-full sm:max-w-[44%]", inputWrapper: "border-1", input: "text-black" }}
                    placeholder="Search by ID or name..."
                    size="sm"
                    startContent={<SearchIcon className="text-default-300" />}
                    value={filterValue}
                    variant="bordered"
                    onClear={() => setFilterValue("")}
                    onValueChange={setFilterValue}
                    color="primary"
                />
                <label className="flex items-center text-default-400 text-small">
                    Rows per page:
                    <select
                        className="bg-transparent outline-none text-default-400 text-small"
                        value={rowsPerPage}
                        onChange={(e) => setRowsPerPage(Number(e.target.value))}
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                    </select>
                </label>
            </div>
            {loading ? (
                <p>Loading students...</p>
            ) : paginatedItems.length === 0 ? (
                <p>No students found.</p>
            ) : (
                <Table
                    aria-label="Student List"
                    className="w-full mt-4"
                    defaultSelectedKeys={"2"}
                    selectionMode="single"
                    color="primary"
                >
                    <TableHeader>
                        <TableColumn key="student_id">Student ID</TableColumn>
                        <TableColumn key="student_name">Name</TableColumn>
                        <TableColumn key="school_id">School Id</TableColumn>
                        <TableColumn key="student_email">Email</TableColumn>
                        <TableColumn key="student_grade">Grade</TableColumn>
                        <TableColumn align="center" key="subject_scheme">Subject Scheme</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {paginatedItems.map((student) => (
                            <TableRow key={student.student_id}>
                                <TableCell>{student.student_id}</TableCell>
                                <TableCell>{student.student_name}</TableCell>
                                <TableCell>{student.school_id}</TableCell>
                                <TableCell>{student.student_email}</TableCell>
                                <TableCell>{student.student_grade}</TableCell>
                                <TableCell>{student.subject_scheme}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
            <br/>
            <Pagination
                showControls
                color="primary"
                page={page}
                total={Math.ceil(filteredItems.length / rowsPerPage)}
                onChange={setPage}
            />
        </div>
    );
}
