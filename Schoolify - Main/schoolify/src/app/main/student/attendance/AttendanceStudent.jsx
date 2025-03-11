import React, {useEffect, useState} from 'react'
import { supabase } from "@/app/lib/supabaseClient";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/react";

const AttendanceStudent = () => {

    const [schoolId, setSchoolId] = useState(null);
    const [studentId, setStudentId] = useState(null);
    const [teacherId, setTeacherId] = useState(null);
    const [attendance, setAttendance] = useState(null);
    const [teacher, setTeacher] = useState(null);
    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedSchoolId = localStorage.getItem("school_id");
            const storedStudentId = localStorage.getItem("student_id");

            setSchoolId(storedSchoolId)  ;
            setStudentId(storedStudentId);
        }
        setCurrentDate(new Date().toISOString().split("T")[0]);
        
        

    }, []);

    useEffect(() => {
        const fetchAttendance = async () => {
            if (!studentId || !schoolId || !currentDate) return;

            const { data, error } = await supabase
                .from("attendance")
                .select("status, date, created_at, teacher_id")
                .eq("student_id", studentId)
                .eq("school_id", schoolId)
                .eq("date", currentDate)
                .single(); // Get only today's attendance record

            if (error) {
                console.error("Error fetching attendance:", error);
                return;
            }

            setAttendance(data || null);
            setTeacherId(data.teacher_id || null);
            
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
