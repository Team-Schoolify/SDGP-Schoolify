// "use client";
//
// import React, { useState, useEffect, useMemo } from "react";
// import {
//     Table,
//     TableHeader,
//     TableColumn,
//     TableBody,
//     TableRow,
//     TableCell,
//     Input,
//     Pagination,
// } from "@heroui/react";
// import { supabase } from "@/app/lib/supabaseClient";
//
// export default function TeacherList() {
//     const [teachers, setTeachers] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [filterValue, setFilterValue] = useState("");
//     const [page, setPage] = useState(1);
//     const [rowsPerPage, setRowsPerPage] = useState(5);
//
//     const SearchIcon = (props) => {
//         return (
//             <svg
//                 aria-hidden="true"
//                 fill="none"
//                 focusable="false"
//                 height="1em"
//                 role="presentation"
//                 viewBox="0 0 24 24"
//                 width="1em"
//                 {...props}
//             >
//                 <path
//                     d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                 />
//                 <path
//                     d="M22 22L20 20"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                 />
//             </svg>
//         );
//     };
//
//     useEffect(() => {
//         fetchTeachers();
//     }, []);
//
//     const fetchTeachers = async () => {
//         setLoading(true);
//         const { data, error } = await supabase
//             .from("teacher")
//             .select("teacher_id, teacher_name, teacher_email, grade, subject, school_id")
//             .order("teacher_id", { ascending: true });
//         if (error) {
//             console.error("Error fetching teachers:", error.message);
//             alert(`Failed to load teachers: ${error.message}`);
//         } else {
//             setTeachers(data.map(teacher => ({
//                 ...teacher,
//                 teacher_id: `TEA-${String(teacher.teacher_id).padStart(4, '0')}`
//             })));
//         }
//         setLoading(false);
//     };
//
//     const filteredItems = useMemo(() => {
//         let filteredTeachers = [...teachers];
//         if (filterValue) {
//             filteredTeachers = filteredTeachers.filter((teacher) =>
//                 teacher.teacher_name.toLowerCase().includes(filterValue.toLowerCase())
//             );
//         }
//         return filteredTeachers;
//     }, [teachers, filterValue]);
//
//     const paginatedItems = useMemo(() => {
//         const start = (page - 1) * rowsPerPage;
//         const end = start + rowsPerPage;
//         return filteredItems.slice(start, end);
//     }, [page, filteredItems, rowsPerPage]);
//
//     return (
//         <div className="grid grid-cols-1 mt-16">
//             <div className="text-black text-3xl font-bold">Teacher List</div>
//             <div className="flex justify-between items-center mt-5">
//                 <span className="text-default-400 text-small">Total {filteredItems.length} teachers</span>
//                 <Input
//                     isClearable
//                     classNames={{ base: "w-full sm:max-w-[44%]", inputWrapper: "border-1", input: "text-black" }}
//
//                     placeholder="Search by name..."
//                     size="sm"
//                     startContent={<SearchIcon className="text-default-300" />}
//                     value={filterValue}
//                     variant="bordered"
//                     onClear={() => setFilterValue("")}
//                     onValueChange={setFilterValue}
//                     color="primary"
//                 />
//                 <label className="flex items-center text-default-400 text-small">
//                     Rows per page:
//                     <select
//                         className="bg-transparent outline-none text-default-400 text-small"
//                         value={rowsPerPage}
//                         onChange={(e) => setRowsPerPage(Number(e.target.value))}
//                     >
//                         <option value="5">5</option>
//                         <option value="10">10</option>
//                         <option value="15">15</option>
//                     </select>
//                 </label>
//             </div>
//             {loading ? (
//                 <p>Loading teachers...</p>
//             ) : paginatedItems.length === 0 ? (
//                 <p>No students found.</p>
//             ) : (
//                 <Table
//                     aria-label="Student List"
//                     className="w-full mt-4"
//                     defaultSelectedKeys={["2"]}
//                     selectionMode="single"
//                     color="primary"
//                 >
//                     <TableHeader>
//                         <TableColumn key="student_id">Student ID</TableColumn>
//                         <TableColumn key="student_name">Name</TableColumn>
//                         <TableColumn key="school_id">School Id</TableColumn>
//                         <TableColumn key="student_email">Email</TableColumn>
//                         <TableColumn key="grade">Grade</TableColumn>
//                         <TableColumn key="subject">Subject Scheme</TableColumn>
//                     </TableHeader>
//                     <TableBody>
//                         {paginatedItems.map((teacher) => (
//                             <TableRow key={teacher.teacher_id}>
//                                 <TableCell>{teacher.teacher_id}</TableCell>
//                                 <TableCell>{teacher.teacher_name}</TableCell>
//                                 <TableCell>{teacher.school_id}</TableCell>
//                                 <TableCell>{teacher.teacher_email}</TableCell>
//                                 <TableCell>{teacher.grade}</TableCell>
//                                 <TableCell>{teacher.subject}</TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             )}
//             <br/>
//             <Pagination
//                 showControls
//                 color="primary"
//                 page={page}
//                 total={Math.ceil(filteredItems.length / rowsPerPage)}
//                 onChange={setPage}
//             />
//         </div>
//     );
// }


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

export default function TeacherList() {
    const [teachers, setTeachers] = useState([]);
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
        fetchTeachers();
    }, []);

    const fetchTeachers = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from("teacher")
            .select("teacher_id, teacher_name, teacher_email, grade, subject, school_id")
            .order("teacher_id", { ascending: true });
        if (error) {
            console.error("Error fetching teachers:", error.message);
            alert(`Failed to load teachers: ${error.message}`);
        } else {
            setTeachers(data.map(teacher => ({
                ...teacher,
                teacher_id: `TEA-${String(teacher.teacher_id).padStart(4, '0')}`
            })));
        }
        setLoading(false);
    };

    const filteredItems = useMemo(() => {
        let filteredTeachers = [...teachers];
        if (filterValue) {
            filteredTeachers = filteredTeachers.filter((teacher) =>
                teacher.teacher_name.toLowerCase().includes(filterValue.toLowerCase()) ||
                teacher.teacher_id.toLowerCase().includes(filterValue.toLowerCase())
            );
        }
        return filteredTeachers;
    }, [teachers, filterValue]);

    const paginatedItems = useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        return filteredItems.slice(start, end);
    }, [page, filteredItems, rowsPerPage]);

    return (
        <div className="grid grid-cols-1 mt-16">
            <div className="text-black text-3xl font-bold">Teacher List</div>
            <div className="flex justify-between items-center mt-5">
                <span className="text-default-400 text-small">Total {filteredItems.length} teachers</span>
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
                <p>Loading teachers...</p>
            ) : paginatedItems.length === 0 ? (
                <p>No teachers found.</p>
            ) : (
                <Table
                    aria-label="Teacher List"
                    className="w-full mt-4"
                    defaultSelectedKeys={["2"]}
                    selectionMode="single"
                    color="primary"
                >
                    <TableHeader>
                        <TableColumn key="teacher_id">Teacher ID</TableColumn>
                        <TableColumn key="teacher_name">Name</TableColumn>
                        <TableColumn key="school_id">School ID</TableColumn>
                        <TableColumn key="teacher_email">Email</TableColumn>
                        <TableColumn key="grade">Grade</TableColumn>
                        <TableColumn key="subject">Subject</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {paginatedItems.map((teacher) => (
                            <TableRow key={teacher.teacher_id}>
                                <TableCell>{teacher.teacher_id}</TableCell>
                                <TableCell>{teacher.teacher_name}</TableCell>
                                <TableCell>{teacher.school_id}</TableCell>
                                <TableCell>{teacher.teacher_email}</TableCell>
                                <TableCell>{teacher.grade}</TableCell>
                                <TableCell>{teacher.subject}</TableCell>
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