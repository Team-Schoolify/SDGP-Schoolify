// import React, { useEffect, useState } from 'react';
// import {
//     Table,
//     TableHeader,
//     TableColumn,
//     TableBody,
//     TableRow,
//     TableCell,
//     RadioGroup,
//     Radio,
// } from "@heroui/react";
//
// import { supabase } from "@/app/lib/supabaseClient";
//
// const ReportSheetOfStudent = () => {
//     const [schoolId, setSchoolId] = useState(null);
//     const [studentId, setStudentId] = useState(null);
//     const [studentName, setStudentName] = useState("");
//     const [parentId, setParentId] = useState(null);
//     const [grades, setGrades] = useState([]);
//     const [teacherName, setTeacherName] = useState(null);
//
//     useEffect(() => {
//         if (typeof window !== "undefined") {
//             const storedSchoolId = localStorage.getItem("school_id");
//             const storedParentId = localStorage.getItem("parent_id");
//
//             setSchoolId(storedSchoolId);
//             setParentId(storedParentId);
//         }
//     }, []);
//
//     useEffect(() => {
//         const fetchStudent = async () => {
//             if (!parentId) return;
//
//             const { data, error } = await supabase
//                 .from("parent")
//                 .select("student_id")
//                 .eq("parent_id", parentId)
//                 .single(); // <-- Use .single() to get a single record
//
//             if (error) {
//                 console.error("Error fetching student ID:", error);
//                 return;
//             }
//             setStudentId(data.student_id); // <-- Corrected access to student_id
//         };
//
//         fetchStudent();
//     }, [parentId]); // <-- Use parentId instead of schoolId
//
//     useEffect(() => {
//         const fetchStudentName = async () => {
//             if (!studentId) return;
//
//             const { data, error } = await supabase
//                 .from("student")
//                 .select("student_name")
//                 .eq("student_id", studentId)
//                 .single(); // <-- Use .single() to get a single record
//
//             if (error) {
//                 console.error("Error fetching student Name:", error);
//                 return;
//             }
//             setStudentName(data.student_name); // <-- Corrected access to student_id
//         };
//
//         fetchStudentName();
//     }, [studentId]); // <-- Use parentId instead of schoolId
//
//     useEffect(() => {
//         const fetchStudentGrades = async () => {
//             if (!studentId) return;
//
//             const { data, error } = await supabase
//                 .from("gradebook")
//                 .select("subject, grade, remarks, created_at, teacher_id")
//                 .eq("student_id", studentId);
//
//             if (error) {
//                 console.error("Error fetching student grades:", error);
//                 return;
//             }
//             setGrades(data);
//
//             if (data.length > 0 && data[0].teacher_id) {
//                 const teacherId = data[0].teacher_id;
//                 const { data: teacherData, error: teacherError } = await supabase
//                     .from("teacher")
//                     .select("teacher_name")
//                     .eq("teacher_id", teacherId)
//                     .single();
//
//                 if (teacherError) {
//                     console.error("Error fetching teacher name:", teacherError);
//                     return;
//                 }
//                 setTeacherName(teacherData?.teacher_name || 'N/A');
//             }
//         };
//
//         fetchStudentGrades();
//     }, [studentId]);
//
//     return (
//         <div className="flex flex-col gap-3">
//             <h2 className="text-4xl text-black font-bold">Result Sheet</h2>
//             {teacherName && <p className="text-black text-2xl"><strong>Teacher:</strong> {teacherName}</p>}
//             <p className="text-black text-2xl mb-2"><strong>Student:</strong> {studentName}</p>
//             {grades.length > 0 ? (
//                 <Table aria-label="Student Grade Table" color="primary" selectionMode="single">
//                     <TableHeader>
//                         <TableColumn>Subject</TableColumn>
//                         <TableColumn>Grade</TableColumn>
//                         <TableColumn>Remarks</TableColumn>
//                         <TableColumn>Date</TableColumn>
//                     </TableHeader>
//                     <TableBody>
//                         {grades.map((grade, index) => (
//                             <TableRow key={index}>
//                                 <TableCell>{grade.subject}</TableCell>
//                                 <TableCell>{grade.grade}</TableCell>
//                                 <TableCell>{grade.remarks}</TableCell>
//                                 <TableCell>{new Date(grade.created_at).toLocaleDateString()}</TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             ) : (
//                 <p className="text-black">No grades available.</p>
//             )}
//         </div>
//     );
// };
//
// export default ReportSheetOfStudent;

import React, { useEffect, useState } from 'react';
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell
} from "@heroui/react";

import { supabase } from "@/app/lib/supabaseClient";

const ReportSheetOfStudent = () => {
    const [schoolId, setSchoolId] = useState(null);
    const [studentId, setStudentId] = useState(null);
    const [studentName, setStudentName] = useState("");
    const [parentId, setParentId] = useState(null);
    const [grades, setGrades] = useState([]);
    const [teacherName, setTeacherName] = useState(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedSchoolId = localStorage.getItem("school_id");
            const storedParentId = localStorage.getItem("parent_id");

            setSchoolId(storedSchoolId);
            setParentId(storedParentId);
        }
    }, []);

    useEffect(() => {
        const fetchStudent = async () => {
            if (!parentId) return;

            const { data, error } = await supabase
                .from("parent")
                .select("student_id")
                .eq("parent_id", parentId)
                .single();

            if (error) {
                console.error("Error fetching student ID:", error);
                return;
            }
            setStudentId(data.student_id);
        };

        fetchStudent();
    }, [parentId]);

    useEffect(() => {
        const fetchStudentName = async () => {
            if (!studentId) return;

            const { data, error } = await supabase
                .from("student")
                .select("student_name")
                .eq("student_id", studentId)
                .single();

            if (error) {
                console.error("Error fetching student Name:", error);
                return;
            }
            setStudentName(data.student_name);
        };

        fetchStudentName();
    }, [studentId]);

    useEffect(() => {
        const fetchStudentGrades = async () => {
            if (!studentId) return;

            const { data, error } = await supabase
                .from("gradebook")
                .select("subject, grade, remarks, created_at, term, teacher_id")
                .eq("student_id", studentId)
                .order("term", { ascending: true });

            if (error) {
                console.error("Error fetching student grades:", error);
                return;
            }
            setGrades(data);

            if (data.length > 0 && data[0].teacher_id) {
                const teacherId = data[0].teacher_id;
                const { data: teacherData, error: teacherError } = await supabase
                    .from("teacher")
                    .select("teacher_name")
                    .eq("teacher_id", teacherId)
                    .single();

                if (teacherError) {
                    console.error("Error fetching teacher name:", teacherError);
                    return;
                }
                setTeacherName(teacherData?.teacher_name || 'N/A');
            }
        };

        fetchStudentGrades();
    }, [studentId]);

    // Group grades by term
    const termGrades = {
        1: grades.filter(grade => grade.term === 1),
        2: grades.filter(grade => grade.term === 2),
        3: grades.filter(grade => grade.term === 3),
    };

    return (
        <div className="flex flex-col gap-6">
            <h2 className="text-4xl text-black font-bold">Result Sheet</h2>
            {teacherName && <p className="text-black text-2xl"><strong>Teacher:</strong> {teacherName}</p>}
            <p className="text-black text-2xl mb-2"><strong>Student:</strong> {studentName}</p>

            {[1, 2, 3].map(term => (
                <div key={term}>
                    <h3 className="text-2xl text-black font-semibold">Term {term} Results</h3>
                    {termGrades[term].length > 0 ? (
                        <Table aria-label={`Term ${term} Grade Table`} color="primary" selectionMode="single">
                            <TableHeader>
                                <TableColumn>Subject</TableColumn>
                                <TableColumn>Grade</TableColumn>
                                <TableColumn>Remarks</TableColumn>
                                <TableColumn>Date</TableColumn>
                            </TableHeader>
                            <TableBody>
                                {termGrades[term].map((grade, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{grade.subject}</TableCell>
                                        <TableCell>{grade.grade}</TableCell>
                                        <TableCell>{grade.remarks}</TableCell>
                                        <TableCell>{new Date(grade.created_at).toLocaleDateString()}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    ) : (
                        <p className="text-black">No grades available for Term {term}.</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ReportSheetOfStudent;
