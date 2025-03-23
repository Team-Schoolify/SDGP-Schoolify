import React, { useEffect, useState } from "react";
import { supabase } from "@/app/lib/supabaseClient";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/react";

const AttendanceParent = () => {
    const [schoolId, setSchoolId] = useState(null);
    const [parentId, setParentId] = useState(null);
    const [studentId, setStudentId] = useState(null);
    const [attendanceRecords, setAttendanceRecords] = useState([]);
    const [teacherNames, setTeacherNames] = useState({});
    const [student, setStudent] = useState(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedSchoolId = localStorage.getItem("school_id");
            const storedParentId = localStorage.getItem("parent_id");

            setSchoolId(storedSchoolId);
            setParentId(storedParentId);
        }
    }, []);

    useEffect(() => {
        const fetchStudentId = async () => {
            if (!parentId) return;

            const { data, error } = await supabase
                .from("parent")
                .select("student_id")
                .eq("parent_id", parentId)
                .single();

            if (error) {
                console.error("Error fetching student id:", error);
                return;
            }

            setStudentId(data.student_id || null);
        };

        fetchStudentId();
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
                console.error("Error fetching student name:", error);
                return;
            }

            setStudent(data || null);
        };

        fetchStudentName();
    }, [studentId]);

    useEffect(() => {
        const fetchAttendance = async () => {
            if (!studentId || !schoolId) return;

            const { data, error } = await supabase
                .from("attendance")
                .select("status, date, created_at, teacher_id")
                .eq("student_id", studentId)
                .eq("school_id", schoolId)
                .order("date", { ascending: false }); // Fetch all records and sort by date (latest first)

            if (error) {
                console.error("Error fetching attendance:", error);
                return;
            }

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
                        <Card key={index} className="w-80 shadow-lg bg-customFooter bg-opacity-40">
                            <CardHeader className="text-xl text-black font-bold text-center">Attendance</CardHeader>
                            <CardBody className="text-center">
                                <p className="text-lg text-black opacity-70">Date: {attendance.date}</p>
                                <p className="text-lg text-black opacity-70">Student: {student ? student.student_name : "Loading..."}</p>
                                <p className={`text-2xl font-semibold ${attendance.status === "Present" ? "text-green-500" : "text-red-500"}`}>
                                    {attendance.status}
                                </p>
                            </CardBody>
                            <CardFooter className="text-left text-sm text-black opacity-70">
                                Marked at: {new Date(attendance.created_at).toLocaleTimeString()} <br/>
                                Marked by: {teacherNames[attendance.teacher_id] || "Unknown"}
                            </CardFooter>
                        </Card>
                    ))
                ) : (
                    <p className="text-danger text-center font-bold text-lg">No attendance records found for your student.</p>
                )}
            </div>
            </div>
            );
            };

            export default AttendanceParent;