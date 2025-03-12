import React, {useEffect, useState} from 'react'
import {supabase} from "@/app/lib/supabaseClient";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    User,
    Switch, Chip, Form, Button,
} from "@heroui/react";

const AttendanceMark = () => {

    const [schoolId, setSchoolId] = useState(null);
    const [teacherId, setTeacherId] = useState(null);
    const [grade, setGrade] = useState(null);
    const [students, setStudents] = useState([]);
    const [currentDate, setCurrentDate] = useState("");
    const [attendance, setAttendance] = useState({});
    

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedSchoolId = localStorage.getItem("school_id");
            const storedTeacherId = localStorage.getItem("teacher_id");

           
            setTeacherId(storedTeacherId);
            setSchoolId(storedSchoolId);
            setCurrentDate(new Date().toISOString().split("T")[0]);
              
        }
    }, []);

    useEffect(() => {
        const fetchGradeFromTeacher = async () => {
            if (!teacherId) return; // Prevent fetching if teacherId is not available

            const { data, error } = await supabase
                .from("teacher")
                .select("grade")
                .eq("teacher_id", teacherId)
                .single(); // Ensures a single object is returned

            if (error) {
                console.error("Error fetching grade from teacher:", error);
                return;
            }

            setGrade(data?.grade || "N/A"); // Set grade or default value
           
            
            
        };

        fetchGradeFromTeacher();
    }, [teacherId]); // Runs only when teacherId changes

    // Fetch students based on schoolId and grade
    useEffect(() => {
        const fetchStudents = async () => {
            if (!schoolId || !grade) return;

            const { data, error } = await supabase
                .from("student")
                .select("student_id, student_name, photo")
                .eq("school_id", schoolId)
                .eq("student_grade", grade)
                .order("student_id", { ascending: true }); // Sorts by student_id in ascending order

            if (error) {
                console.error("Error fetching students:", error);
                setState((prev) => ({ ...prev, students: studentData }));
                    setAttendance(new Map(studentData.map((s) => [s.student_id, false])));
                return;
            }

            setStudents(data || []);
        };
        const today = new Date().toISOString().split("T")[0];
        setCurrentDate(today);

        fetchStudents();
        // Set current date in YYYY-MM-DD format

    }, [schoolId, grade]);


    const handleAttendanceChange = (id) => {
        setAttendance((prev) => ({ ...prev, [id]: !prev[id] }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!schoolId || !teacherId || students.length === 0) {
            console.error("Missing required data");
            return;
        }

        const attendanceRecords = students.map((student) => ({
            student_id: student.student_id,
            school_id: schoolId,
            teacher_id: teacherId,
            status: attendance[student.student_id] ? "Present" : "Absent",
            date: currentDate,
        }));

        const { error } = await supabase.from("attendance").insert(attendanceRecords);

        if (error) {
            console.error("Error submitting attendance:", error);
            alert("Error submitting attendance");
        } else {
            alert("Attendance submitted successfully!");
        }
    };
    return (
        <div className="p-6 space-y-6">
            <h1 className="text-2xl font-bold text-black">Mark Attendance - Grade {grade}</h1>

        <Form onSubmit={handleSubmit}>
            <Table aria-label="Student Attendance Table">
                <TableHeader>
                    <TableColumn>STUDENT</TableColumn>
                    <TableColumn align="center">DATE</TableColumn>
                    <TableColumn align="center">STATUS</TableColumn>
                </TableHeader>
                <TableBody>
                    {students.map((student) => (
                        <TableRow key={student.student_id}>
                            <TableCell>
                                <User
                                    avatarProps={{
                                        radius: "lg",
                                        src: student.photo || "https://i.pravatar.cc/150",
                                    }}
                                    name={student.student_name}
                                />
                            </TableCell>
                            <TableCell>{currentDate}</TableCell>
                            <TableCell>
                                <Switch
                                    isSelected={attendance[student.student_id]}
                                    onChange={() => handleAttendanceChange(student.student_id)}
                                >
                                    {/*{attendance[student.student_id] ? "Present" : "Absent"}*/}
                                    <Chip className="capitalize" color={attendance[student.student_id] ? "success" : "danger"} size="md" variant="flat">
                                        {attendance[student.student_id] ? "Present" : "Absent"}
                                    </Chip>
                                </Switch>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Button className="w-full" type="submit" color="warning" variant="ghost">
                Submit Attendance
            </Button>
        </Form>
        </div>)
}
export default AttendanceMark
