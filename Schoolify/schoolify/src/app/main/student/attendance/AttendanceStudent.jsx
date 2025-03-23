<<<<<<< HEAD
import React, {useEffect, useState} from 'react'
=======
<<<<<<< HEAD
import React, {useEffect, useState} from 'react'
=======
// import React, {useEffect, useState} from 'react'
// import { supabase } from "@/app/lib/supabaseClient";
// import { Card, CardHeader, CardBody, CardFooter } from "@heroui/react";
//
// const AttendanceStudent = () => {
//
//     const [schoolId, setSchoolId] = useState(null);
//     const [studentId, setStudentId] = useState(null);
//     const [teacherId, setTeacherId] = useState(null);
//     const [attendance, setAttendance] = useState(null);
//     const [teacher, setTeacher] = useState(null);
//     const [currentDate, setCurrentDate] = useState("");
//
//     useEffect(() => {
//         if (typeof window !== "undefined") {
//             const storedSchoolId = localStorage.getItem("school_id");
//             const storedStudentId = localStorage.getItem("student_id");
//
//             setSchoolId(storedSchoolId);
//             setStudentId(storedStudentId);
//         }
//         setCurrentDate(new Date().toISOString().split("T")[0]);
//     }, []);
//
//     useEffect(() => {
//         const fetchAttendance = async () => {
//             if (!studentId || !schoolId || !currentDate) return;
//
//             const { data, error } = await supabase
//                 .from("attendance")
//                 .select("status, date, created_at, teacher_id")
//                 .eq("student_id", studentId)
//                 .eq("school_id", schoolId)
//                 .eq("date", currentDate)
//                 .single(); // Get only today's attendance record
//
//             if (error) {
//                 console.error("Error fetching attendance:", error);
//                 return;
//             }
//
//             setAttendance(data || null);
//             setTeacherId(data.teacher_id || null);
//         };
//
//         fetchAttendance();
//     }, [studentId, schoolId, currentDate]);
//
//     useEffect(() => {
//         const fetchTeacherName = async () => {
//             if (!teacherId) return;
//
//             const { data, error } = await supabase
//                 .from("teacher")
//                 .select("teacher_name")
//                 .eq("teacher_id", teacherId)
//                 .single(); // Get only today's attendance record
//
//             if (error) {
//                 console.error("Error fetching teacher name:", error);
//                 return;
//             }
//
//             setTeacher(data || null);
//         };
//
//         fetchTeacherName();
//     }, [teacherId]);
//
//     return (
//         <div className="p-6 flex justify-center">
//             <Card className="w-96 shadow-lg">
//                 <CardHeader className="text-xl font-bold text-center">Attendance Record</CardHeader>
//                 <CardBody className="text-center">
//                     <p className="text-lg text-white opacity-70">Date: {attendance ? attendance.date : "date"}</p>
//                     <p className={`text-2xl font-semibold ${attendance?.status === "Present" ? "text-success" : "text-danger"}`}>
//                         {attendance ? attendance.status : "Attendance Not Marked"}
//                     </p>
//                 </CardBody>
//                 <CardFooter className="text-left text-sm text-white opacity-70">
//                     {attendance ? `Marked at: ${new Date(attendance.created_at).toLocaleTimeString()}` : "No record found"}<br/>
//                     {teacher ? `Marked by: ${teacher.teacher_name}` : "No record found"}
//                 </CardFooter>
//             </Card>
//         </div>
//     )
// }
// export default AttendanceStudent

import React, { useEffect, useState } from "react";
>>>>>>> 8c161dff35ceb5e4130dbbf5164120827a129398
>>>>>>> f8965ee033cdaf20f83f9b8aa8b8ec53c9c2b881
import { supabase } from "@/app/lib/supabaseClient";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/react";

const AttendanceStudent = () => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f8965ee033cdaf20f83f9b8aa8b8ec53c9c2b881

    const [schoolId, setSchoolId] = useState(null);
    const [studentId, setStudentId] = useState(null);
    const [teacherId, setTeacherId] = useState(null);
    const [attendance, setAttendance] = useState(null);
    const [teacher, setTeacher] = useState(null);
    const [currentDate, setCurrentDate] = useState("");
<<<<<<< HEAD
=======
=======
    const [schoolId, setSchoolId] = useState(null);
    const [studentId, setStudentId] = useState(null);
    const [attendanceRecords, setAttendanceRecords] = useState([]);
    const [teacherNames, setTeacherNames] = useState({});
>>>>>>> 8c161dff35ceb5e4130dbbf5164120827a129398
>>>>>>> f8965ee033cdaf20f83f9b8aa8b8ec53c9c2b881

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedSchoolId = localStorage.getItem("school_id");
            const storedStudentId = localStorage.getItem("student_id");

<<<<<<< HEAD
            setSchoolId(storedSchoolId);
            setStudentId(storedStudentId);
        }
        setCurrentDate(new Date().toISOString().split("T")[0]);
=======
<<<<<<< HEAD
            setSchoolId(storedSchoolId)  ;
            setStudentId(storedStudentId);
        }
        setCurrentDate(new Date().toISOString().split("T")[0]);
    
        

=======
            setSchoolId(storedSchoolId);
            setStudentId(storedStudentId);
        }
>>>>>>> 8c161dff35ceb5e4130dbbf5164120827a129398
>>>>>>> f8965ee033cdaf20f83f9b8aa8b8ec53c9c2b881
    }, []);

    useEffect(() => {
        const fetchAttendance = async () => {
<<<<<<< HEAD
            if (!studentId || !schoolId || !currentDate) return;
=======
<<<<<<< HEAD
            if (!studentId || !schoolId || !currentDate) return;
=======
            if (!studentId || !schoolId) return;
>>>>>>> 8c161dff35ceb5e4130dbbf5164120827a129398
>>>>>>> f8965ee033cdaf20f83f9b8aa8b8ec53c9c2b881

            const { data, error } = await supabase
                .from("attendance")
                .select("status, date, created_at, teacher_id")
                .eq("student_id", studentId)
                .eq("school_id", schoolId)
<<<<<<< HEAD
                .eq("date", currentDate)
                .single(); // Get only today's attendance record
=======
<<<<<<< HEAD
                .eq("date", currentDate)
                .single(); // Get only today's attendance record
=======
                .order("date", { ascending: false }); // Get all attendance records sorted by latest date
>>>>>>> 8c161dff35ceb5e4130dbbf5164120827a129398
>>>>>>> f8965ee033cdaf20f83f9b8aa8b8ec53c9c2b881

            if (error) {
                console.error("Error fetching attendance:", error);
                return;
            }

<<<<<<< HEAD
            setAttendance(data || null);
            setTeacherId(data.teacher_id || null);
=======
<<<<<<< HEAD
            setAttendance(data || null);
            setTeacherId(data.teacher_id || null);
            
            
>>>>>>> f8965ee033cdaf20f83f9b8aa8b8ec53c9c2b881
        };

        fetchAttendance();
    }, [studentId, schoolId, currentDate]);

    useEffect(() => {
        const fetchTeacherName = async () => {
            if (!teacherId) return;

            const { data, error } = await supabase
                .from("teacher")
                .select("teacher_name")
                .eq("teacher_id", teacherId)
                .single(); // Get only today's attendance record

            if (error) {
                console.error("Error fetching teacher name:", error);
                return;
            }

            setTeacher(data || null);
<<<<<<< HEAD
=======
            setTeacher(data?.teacher || null);
>>>>>>> f8965ee033cdaf20f83f9b8aa8b8ec53c9c2b881
        };

        fetchTeacherName();
    }, [teacherId]);

    return (
        <div className="p-6 flex justify-center">
            <Card className="w-96 shadow-lg">
                <CardHeader className="text-xl font-bold text-center">Attendance Record</CardHeader>
                <CardBody className="text-center">
                    <p className="text-lg text-white opacity-70">Date: {attendance ? attendance.date : "date"}</p>
                    <p className={`text-2xl font-semibold ${attendance?.status === "Present" ? "text-success" : "text-danger"}`}>
                        {attendance ? attendance.status : "Attendance Not Marked"}
                    </p>
                </CardBody>
                <CardFooter className="text-left text-sm text-white opacity-70">
                    {attendance ? `Marked at: ${new Date(attendance.created_at).toLocaleTimeString()}` : "No record found"}<br/>
                    {teacher ? `Marked by: ${teacher.teacher_name}` : "No record found"}
                </CardFooter>
            </Card>
        </div>
    )
}
export default AttendanceStudent
<<<<<<< HEAD
=======
=======
            setAttendanceRecords(data || []);
        };

        fetchAttendance();
    }, [studentId, schoolId]);

    useEffect(() => {
        const fetchTeacherNames = async () => {
            if (!attendanceRecords.length) return;

            const teacherIds = [...new Set(attendanceRecords.map(record => record.teacher_id))];

            const { data, error } = await supabase
                .from("teacher")
                .select("teacher_id, teacher_name")
                .in("teacher_id", teacherIds);

            if (error) {
                console.error("Error fetching teacher names:", error);
                return;
            }

            // Map teacher_id to teacher_name for quick lookup
            const teacherMap = {};
            data.forEach(teacher => {
                teacherMap[teacher.teacher_id] = teacher.teacher_name;
            });

            setTeacherNames(teacherMap);
        };

        fetchTeacherNames();
    }, [attendanceRecords]);

    return (
        <div className="p-6 flex flex-col items-center gap-4">
            <h2 className="text-4xl font-bold text-center text-black">
                Attendance Records
            </h2>
            <div className="grid sm:grid-cols-3 items-center gap-4">

            {attendanceRecords.length > 0 ? (
                attendanceRecords.map((attendance, index) => (
                    <Card key={index} className="w-80 shadow-lg bg-customBlack">
                        <CardHeader className="text-xl font-bold text-center">Attendance</CardHeader>
                        <CardBody className="text-center">
                            <p className="text-lg text-white opacity-70">Date: {attendance.date}</p>
                            <p className={`text-2xl font-semibold ${attendance.status === "Present" ? "text-success" : "text-danger"}`}>
                                {attendance.status}
                            </p>
                        </CardBody>
                        <CardFooter className="text-left text-sm text-white opacity-70">
                            Marked at: {new Date(attendance.created_at).toLocaleTimeString()} <br />
                            Marked by: {teacherNames[attendance.teacher_id] || "Unknown"}
                        </CardFooter>
                    </Card>
                ))

            ) : (
                <p className="text-danger text-lg font-bold">No attendance records found.</p>
            )}
            </div>
        </div>
    );
};

export default AttendanceStudent;
>>>>>>> 8c161dff35ceb5e4130dbbf5164120827a129398
>>>>>>> f8965ee033cdaf20f83f9b8aa8b8ec53c9c2b881
