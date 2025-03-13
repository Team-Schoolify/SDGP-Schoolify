// import React, {useEffect, useState} from 'react'
// import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Input} from "@heroui/react";
// import {Form, Select, SelectItem} from "@nextui-org/react";
// import {supabase} from "@/app/lib/supabaseClient";
// import {schoolRole} from "@/app/login/page";
//
// const GradeSheet = () => {
//     const [schoolId, setSchoolId] = useState(null); // Store school_id in state
//     const [teacherId, setTeacherId] = useState(null);
//     const [students, setStudents] = useState([]);
//     const [selectedStudent, setSelectedStudent] = useState(null); // Default role
//     const [selectedSubjects, setSelectedSubjects] = useState([]);
//     const [grades, setGrades] = useState({});
//     const [remarks, setRemarks] = useState("");
//
//     const subjects = [
//         ["Maths","Science","English","Sinhala","History","Arts","Geography","PTS","Maths",],
//         ["Maths","Science","English","Sinhala","History","Buddhism","Basket 1","Basket 2","Basket 3",],
//         ["Maths","Physics","Chemistry"],
//         ["Bio","Physics","Chemistry"],
//         ["Commerce","anan","manan"],
//         ["Sinhala","sakala","bujan"]
//     ];
//
//
//     useEffect(() => {
//         // Ensure localStorage is accessed only in the browser
//         if (typeof window !== "undefined") {
//             const storedSchoolId = localStorage.getItem("school_id");
//             const storedTeacherId = localStorage.getItem("teacher_id");
//             setTeacherId(storedTeacherId);
//             setSchoolId(storedSchoolId);
//         }
//     }, []);
//
//     useEffect(() => {
//         const fetchStudents = async () => {
//             if (!schoolId) return; // Prevent fetching if school_id is not available
//
//             const { data, error } = await supabase
//                 .from("student")
//                 .select("student_id, student_name, student_grade, subject_scheme")
//                 .eq("school_id", schoolId);
//
//             if (error) {
//                 console.error("Error fetching students:", error);
//                 return;
//             }
//             setStudents(data);
//         };
//
//         fetchStudents();
//     }, [schoolId]); // Runs only when schoolId is available
//
//
//     const handleSave = async (e) => {
//         e.preventDefault();
//
//         if (!selectedStudent || !selectedSubjects.length) {
//             alert("Please select a student and enter grades.");
//             return;
//         }
//
//         const student = students.find(s => s.student_id === selectedStudent);
//         if (!student) {
//             alert("Invalid student selection.");
//             return;
//         }
//
//         const entries = selectedSubjects.map(subject => ({
//             student_id: student.student_id,
//             school_id: schoolId,
//             teacher_id: teacherId,
//             subject: subject,
//             grade: grades[subject] || null,
//             remarks: remarks,
//         }));
//
//         const { data, error } = await supabase.from("gradebook").insert(entries);
//
//         if (error) {
//             console.error("Error saving grades:", error);
//             alert("Failed to save grades. Please try again.");
//         } else {
//             alert("Grades saved successfully!");
//             console.log("Inserted Data:", data);
//             setGrades({});
//             setRemarks("");
//         }
//     };
//
//
//
//     return (
//         <div className="flex flex-col gap-y-1.5 bg-black w-full p-5 border-1 rounded-3xl">
//             <h1 className="font-bold text-xl">GradeSheet</h1>
//             <div className="justify-center mt-3 mb-3 ">
//                 <Form
//                     className="flex flex-col gap-6 text-left items-left  w-full"
//                     validationBehavior="native"
//                     onSubmit={handleSave}
//                 >
//
//                 <Select
//                     isRequired
//                     className="w-full rounded-lg"
//                     defaultSelectedKeys={[" "]}
//                     label="Student Name"
//                     labelPlacement="outside"
//                     placeholder="Select A Student"
//                     variant="bordered"
//                     fullWidth={true}
//                     selectedKeys={selectedStudent ? new Set([String(selectedStudent)]) : new Set()} // Ensure string
//                     onSelectionChange={(keys) => {
//                         if (!keys || keys.size === 0) return;
//
//                         const selectedId = Number(Array.from(keys)[0]); // Convert to Number
//                         console.log("selectedId:", selectedId);
//
//                         setSelectedStudent(selectedId); // Store as Number
//
//                         const student = students.find(s => Number(s.student_id) === selectedId); // Compare as Number
//                         console.log("Selected Student Object:", student);
//
//                         if (student) {
//                             setSelectedSubjects(subjects[student.subject_scheme - 1] || []);
//                         } else {
//                             setSelectedSubjects([]);
//                             console.error("No matching student found in the students array.");
//                         }
//                     }}
//                 >
//                     {students.map((student) => (
//                         <SelectItem key={student.student_id}>{student.student_name}</SelectItem>
//                     ))}
//                 </Select>
//                     <div className="w-full  grid grid-cols-1 sm:grid-cols-2 gap-6">
//                         {/*{selectedSubjects.map((subject, index) => (*/}
//                         {/*    <Input*/}
//                         {/*        isRequired*/}
//                         {/*        key={index}*/}
//                         {/*        label={subject}*/}
//                         {/*        labelPlacement="outside"*/}
//                         {/*        name={subject}*/}
//                         {/*        placeholder="Enter Grade"*/}
//                         {/*    />*/}
//                         {/*))}*/}
//                         {selectedSubjects.map((subject, index) => (
//                             <Input
//                                 isRequired
//                                 key={index}
//                                 label={subject}
//                                 labelPlacement="outside"
//                                 name={subject}
//                                 placeholder="Enter Grade"
//                                 onChange={(e) => setGrades({ ...grades, [subject]: e.target.value })}
//                             />
//                         ))}
//                         <Input
//                             isRequired
//                             label="Remarks"
//                             labelPlacement={"outside"}
//                             name="remarks"
//                             placeholder="Remark"
//                             type="textarea"
//                             variant="bordered"
//                             onChange={(e) => setRemarks(e.target.value)}
//                         />
//                     </div>
//                     <div className="flex justify-end gap-4 mt-4">
//                         <Button
//                             variant="bordered"
//                             color="warning"
//                             type="submit"
//
//                         >
//                             Save
//                         </Button>
//                     </div>
//                 </Form>
//             </div>
//         </div>)
// }
// export default GradeSheet



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
    Select,
    SelectItem,
    Button,
    Form
} from "@heroui/react";
import { supabase } from "@/app/lib/supabaseClient";

const GradeSheet = () => {
    const [schoolId, setSchoolId] = useState(null);
    const [teacherId, setTeacherId] = useState(null);
    const [students, setStudents] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const [grades, setGrades] = useState({});
    const [remarks, setRemarks] = useState("");
    const [term, setTerm] = useState(null);

    const subjects = [
        ["Maths", "Science", "English", "Sinhala", "History", "Arts", "Geography", "PTS"],
        ["Maths", "Science", "English", "Sinhala", "History", "Buddhism", "Basket 1", "Basket 2", "Basket 3"],
        ["Maths", "Physics", "Chemistry"],
        ["Bio", "Physics", "Chemistry"],
        ["Commerce", "Accounting", "Management"],
        ["Sinhala", "Political Science", "Buddhism"]
    ];

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedSchoolId = localStorage.getItem("school_id");
            const storedTeacherId = localStorage.getItem("teacher_id");
            setTeacherId(storedTeacherId);
            setSchoolId(storedSchoolId);
        }
    }, []);

    useEffect(() => {
        const fetchStudents = async () => {
            if (!schoolId) return;
            const { data, error } = await supabase
                .from("student")
                .select("student_id, student_name, student_grade, subject_scheme")
                .eq("school_id", schoolId);
            if (error) {
                console.error("Error fetching students:", error);
                return;
            }
            setStudents(data);
        };
        fetchStudents();
    }, [schoolId]);

    const handleSave = async (e) => {
        e.preventDefault();

        if (!selectedStudent || !selectedSubjects.length || !term) {
            alert("Please select a student, a term, and enter grades.");
            return;
        }

        const student = students.find((s) => s.student_id === selectedStudent);
        if (!student) {
            alert("Invalid student selection.");
            return;
        }

        // Check if the student already has results for the selected term
        const { data: existingGrades, error: checkError } = await supabase
            .from("gradebook")
            .select("*")
            .eq("student_id", student.student_id)
            .eq("term", term);

        if (checkError) {
            console.error("Error checking existing grades:", checkError);
            alert("An error occurred while checking grades.");
            return;
        }

        if (existingGrades.length > 0) {
            alert(`This student's results for Term ${term} are already recorded.`);
            return;
        }

        // Prepare the entries
        const entries = selectedSubjects.map((subject) => ({
            student_id: student.student_id,
            school_id: schoolId,
            teacher_id: teacherId,
            subject: subject,
            grade: grades[subject] || null,
            term: term,
            remarks: remarks,
        }));

        // Insert data
        const { data, error } = await supabase.from("gradebook").insert(entries);

        if (error) {
            console.error("Error saving grades:", error);
            alert("Failed to save grades. Please try again.");
        } else {
            alert("Grades saved successfully!");
            setGrades({});
            setRemarks("");
            setTerm(null);
            window.location.reload();

        }
    };

    return (
        <div className="flex flex-col gap-y-1.5 bg-black w-full p-5 border-1 rounded-3xl">
            <h1 className="font-bold text-xl">GradeSheet</h1>
            <div className="justify-center mt-3 mb-3 ">
                <Form
                    className="flex flex-col gap-6 text-left items-left w-full"
                    validationBehavior="native"
                    onSubmit={handleSave}
                >
                    <Select
                        isRequired
                        className="w-full rounded-lg"
                        label="Student Name"
                        labelPlacement="outside"
                        placeholder="Select A Student"
                        variant="bordered"
                        fullWidth={true}
                        selectedKeys={selectedStudent ? new Set([String(selectedStudent)]) : new Set()}
                        onSelectionChange={(keys) => {
                            if (!keys || keys.size === 0) return;
                            const selectedId = Number(Array.from(keys)[0]);
                            setSelectedStudent(selectedId);
                            const student = students.find(s => Number(s.student_id) === selectedId);
                            if (student) {
                                setSelectedSubjects(subjects[student.subject_scheme - 1] || []);
                            } else {
                                setSelectedSubjects([]);
                                console.error("No matching student found.");
                            }
                        }}
                    >
                        {students.map((student) => (
                            <SelectItem key={student.student_id}>{student.student_name}</SelectItem>
                        ))}
                    </Select>

                    {/* Term Selection */}
                    <Select
                        isRequired
                        className="w-full rounded-lg"
                        label="Term"
                        labelPlacement="outside"
                        placeholder="Select Term"
                        variant="bordered"
                        fullWidth={true}
                        selectedKeys={term ? new Set([String(term)]) : new Set()}
                        onSelectionChange={(keys) => {
                            if (!keys || keys.size === 0) return;
                            setTerm(Number(Array.from(keys)[0]));
                        }}
                    >
                        <SelectItem key="1">Term 1</SelectItem>
                        <SelectItem key="2">Term 2</SelectItem>
                        <SelectItem key="3">Term 3</SelectItem>
                    </Select>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {selectedSubjects.map((subject, index) => (
                            <Input
                                isRequired
                                key={index}
                                label={subject}
                                labelPlacement="outside"
                                name={subject}
                                placeholder="Enter Grade"
                                onChange={(e) => setGrades({ ...grades, [subject]: e.target.value })}
                            />
                        ))}
                        <Input
                            isRequired
                            label="Remarks"
                            labelPlacement="outside"
                            name="remarks"
                            placeholder="Remark"
                            type="textarea"
                            variant="bordered"
                            onChange={(e) => setRemarks(e.target.value)}
                        />
                    </div>

                    <div className="flex justify-end gap-4 mt-4">
                        <Button
                            variant="bordered"
                            color="warning"
                            type="submit"
                        >
                            Save
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default GradeSheet;