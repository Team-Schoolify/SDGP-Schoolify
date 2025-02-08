"use client";
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    useDisclosure,
    Input,
    Checkbox,
    DatePicker,
    Textarea,
    Image,
    Link, Accordion, AccordionItem, Avatar, Button
} from "@heroui/react";
import {getLocalTimeZone, today} from "@internationalized/date";
import React, { useEffect, useState } from "react";
import { supabase } from "@/app/lib/supabaseClient";
import {Form, Select, SelectItem} from "@nextui-org/react";

const Booking = () => {
    const [formData, setFormData] = useState({
        teacherId:"",
        teacherName: "",
        teacherLink: "",
        teacherPhoto:"",
        selectedTime: "",
        selectedDate: "",
        selectedDay: "",
        sessionParentId:"",
        parentName: "",
        parentPhoto:"",
        studentName: "",
        studentId:"",
        studentGrade:"",
    });
    useEffect(() => {
        console.log("Updated useeffect Form Data:", formData);
    }, [formData]); // Logs when formData changes


    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [backdrop, setBackdrop] = React.useState("opaque");
    const handleBackdropChange = (backdrop) => {
        setBackdrop(backdrop);
        onOpen();
    };

    const [parentId, setParentId] = useState(null); // Store school_id in state

    const [timeSlots, setTimeSlots] = useState({}); // Store time slots per teacher
    const [teachers, setTeachers] = useState([]);
    const [disabledKeys, setDisabledKeys] = useState([]); // Store disabled teacher IDs
    const [schoolId, setSchoolId] = useState(null); // Store school_id in state

    useEffect(() => {
        // Ensure localStorage is accessed only in the browser
        if (typeof window !== "undefined") {
            const storedSchoolId = localStorage.getItem("school_id");
            const storedParentId = localStorage.getItem("parent_id");
            setSchoolId(storedSchoolId);
            setParentId(storedParentId);
        }
    }, []);

    useEffect(() => {
        const fetchTeachers = async () => {
            if (!schoolId) return; // Prevent fetching if school_id is not available

            const { data, error } = await supabase
                .from("teacher")
                .select("teacher_id, teacher_name, link, status, school_id, teacher_email, photo, subject")
                .eq("school_id", schoolId);

            if (error) {
                console.error("Error fetching teachers:", error);
                return;
            }
            setTeachers(data);

            // Extract IDs of unavailable teachers and store in disabledKeys state
            const unavailableTeachers = data
                .filter((teacher) => teacher.status === "Unavailable") // Filter unavailable teachers
                .map((teacher) => String(teacher.teacher_id)); // Convert to string for keys

            console.log("Disabled teacher IDs:", unavailableTeachers);
            setDisabledKeys(unavailableTeachers);
        };

        fetchTeachers();
    }, [schoolId]); // Runs only when schoolId is available

    useEffect(() => {
        const fetchTimeSlots = async () => {
            if (!teachers.length) return; // Prevent fetching if no teachers are loaded

            const teacherIds = teachers.map((teacher) => teacher.teacher_id);
            const { data, error } = await supabase
                .from("timeslots")
                .select("teacher_id, time_slot, availability, day")
                .in("teacher_id", teacherIds); // Fetch for all teachers at once

            if (error) {
                console.error("Error fetching time slots:", error);
                return;
            }

            // Group time slots by teacher_id
            const slotsByTeacher = {};
            data.forEach((slot) => {
                if (!slotsByTeacher[slot.teacher_id]) {
                    slotsByTeacher[slot.teacher_id] = [];
                }
                slotsByTeacher[slot.teacher_id].push({
                    time: slot.time_slot,
                    day: slot.day,
                    status: slot.availability
                });
            });

            setTimeSlots(slotsByTeacher);
        };

        if (teachers.length) {
            fetchTimeSlots();
        }
    }, [teachers]); // Runs after teachers are fetched

    // Fetch parent details (parent_name & student_id)
    useEffect(() => {
        const fetchParentDetails = async () => {
            if (!parentId) return;

            try {
                const { data, error } = await supabase
                    .from("parent")
                    .select("parent_name, student_id, parent_email, photo")
                    .eq("parent_id", parentId)
                    .single(); // Fetch only one row

                if (error) {
                    console.error("❌ Error fetching parent details:", error);
                    return;
                }

                if (data) {
                    console.log("✅ Parent Details:", data);
                    setFormData((prev) => ({
                        ...prev,
                        parentName: data.parent_name,
                        parentPhoto: data.photo,
                        studentId: data.student_id, // Store student_id to fetch student details
                    }));
                }
            } catch (err) {
                console.error("❌ Unexpected error fetching parent details:", err);
            }
        };

        fetchParentDetails();
    }, [parentId]); // Runs when parentId is available

    // Fetch student details (student_name & grade) after studentId is retrieved
    useEffect(() => {
        const fetchStudentDetails = async () => {
            console.log("formdatastudent", formData.studentId)
            if (!formData.studentId) return;

            try {
                const { data, error } = await supabase
                    .from("student")
                    .select("student_name, student_grade")
                    .eq("student_id", formData.studentId)
                    .single(); // Fetch only one row

                if (error) {
                    console.error("❌ Error fetching student details:", error);
                    return;
                }

                if (data) {
                    console.log("✅ Student Details:", data);
                    setFormData((prev) => ({
                        ...prev,
                        studentName: data.student_name,
                        studentGrade: data.student_grade,
                    }));
                }
            } catch (err) {
                console.error("❌ Unexpected error fetching student details:", err);
            }
        };

        fetchStudentDetails();
    }, [formData.studentId]); // Runs when studentId is available



    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent page reload

        if (!formData.teacherId || !formData.selectedTime || !formData.selectedDate) {
            alert("Please fill in all required fields.");
            return;
        }

        try {
            // Insert new session
            const { data, error } = await supabase
                .from("sessions")
                .insert([
                    {
                        teacher_name: formData.teacherName,
                        teacher_session_id: formData.teacherId,
                        teacher_link: formData.teacherLink,
                        selected_time: formData.selectedTime,
                        selected_date: formData.selectedDate,
                        teacher_photo: formData.teacherPhoto,
                        selected_day_name: formData.selectedDay,
                        parent_session_id: formData.sessionParentId,
                        parent_name: formData.parentName,
                        parent_photo: formData.parentPhoto,
                        student_grade: formData.studentGrade,
                        student_name: formData.studentName,
                    },
                ]);

            if (error) {
                console.error("Error inserting session:", error);
                alert("Failed to book a session. Please try again.");
                return;
            }

            // Update the timeslot availability to "unavailable"
            const { error: updateError } = await supabase
                .from("timeslots")
                .update({ availability: "unavailable" })
                .eq("teacher_id", formData.teacherId)
                .eq("day", formData.selectedDay)
                .eq("time_slot", formData.selectedTime);

            if (updateError) {
                console.error("Error updating timeslot:", updateError);
                alert("Booking was successful, but the timeslot was not updated.");
            } else {
                alert("Session booked successfully!");
            }
            // Refresh the page after the alert
            setTimeout(() => {
                window.location.reload();
            }, 500); // 500ms delay to ensure alert is seen

        } catch (error) {
            console.error("Unexpected error:", error);
        }
    };

    return (
        <>
            <div className="mt-10">
                <h1 className="heading text-customBlue">
                    Book A Session
                </h1>
                <div className="py-12 rounded-3xl flex flex-wrap items-center justify-center ">
                    <div className=" sm:w-1/2 ">
                        <Accordion
                            variant="splitted"
                            hideIndicator={true}
                            disableIndicatorAnimation={true}
                            disabledKeys={disabledKeys}
                            selectionMode="single"
                            className="rounded-xl">
                            {teachers.map((teacher) => (
                                <AccordionItem
                                    key={teacher.teacher_id}
                                    className="border-1 bg-customBlack border-white sm:px-5 rounded-xl mb-5"
                                    aria-label={teacher.teacher_name}
                                    startContent={
                                        <Avatar
                                            isBordered
                                            color="primary"
                                            radius="lg"
                                            src={teacher.photo}
                                        />
                                    }
                                    subtitle={
                                        <>
                                            <span
                                                className={`font-semibold ${
                                                    teacher.status.toLowerCase() === "available" ? "text-success" : "text-danger"
                                                }`}
                                            >
                                                {teacher.status}
                                            </span>
                                            {" "}for booking
                                        </>
                                    }
                                    title={teacher.teacher_name}
                                >
                                    <div className="flex sm:flex-row justify-between sm:gap-x-3 items-center w-full">
                                        <p className="sm:text-md text-left font-bold">Subject: {teacher.subject}</p>
                                        <Button
                                            size="sm"
                                            key={backdrop}
                                            color="primary"
                                            variant="ghost"
                                            onPress={() => handleBackdropChange(backdrop)}>
                                            Book
                                        </Button>
                                    </div>
                                    <Drawer  backdrop={backdrop} isOpen={isOpen} onOpenChange={onOpenChange}>
                                        <DrawerContent>
                                            {(onClose) => (
                                                <>
                                                    <DrawerHeader className="grid grid-cols-2 sm:gap-3 gap-10">
                                                        <div>
                                                            <Image
                                                                isBlurred
                                                                alt="HeroUI Album Cover"
                                                                className="m-5 object-cover"
                                                                src={teacher.photo}
                                                                width={150}
                                                                height={150}
                                                            />
                                                        </div>
                                                        <div className="mt-8 flex flex-col gap-y-1.5">
                                                            <p className="text-xl">Name: {teacher.teacher_name}</p>

                                                            <p className="text-sm font-bold">
                                                                <span className="opacity-45">
                                                                Availability:{" "}
                                                                    </span>
                                                                <span
                                                                    className={`opacity-100 ${
                                                                        teacher.status.toLowerCase() === "available" ? "text-green-500" : "text-red-500"
                                                                    }`}
                                                                >
                                                                    {teacher.status}
                                                                </span>
                                                            </p>

                                                            <p className="text-sm">Subject: {teacher.subject}</p>

                                                        </div>
                                                    </DrawerHeader>

                                                    <DrawerBody>
                                                        <Form
                                                            className="flex flex-col gap-6 items-left"
                                                            validationBehavior="native"
                                                            onSubmit={handleSubmit}
                                                        >

                                                            <DatePicker
                                                                isRequired
                                                                labelPlacement={"outside"}
                                                                className="w-full"
                                                                label="Select A Date"
                                                                defaultValue={today(getLocalTimeZone())}
                                                                minValue={today(getLocalTimeZone())}
                                                                maxValue={today(getLocalTimeZone()).add({days: 6})}
                                                                onChange={(date) => {
                                                                    let formattedDate;
                                                                    let dayName;

                                                                    if (date instanceof Date) {
                                                                        // If it's a JavaScript Date object, format it
                                                                        formattedDate = date.toISOString().split("T")[0]; // Convert to "YYYY-MM-DD"
                                                                        dayName = date.toLocaleDateString("en-US", { weekday: "long" }).toLowerCase();
                                                                    } else if (typeof date === "object" && date.year && date.month && date.day) {
                                                                        // If it's an object with year, month, and day properties, format manually
                                                                        formattedDate = `${date.year}-${String(date.month).padStart(2, "0")}-${String(date.day).padStart(2, "0")}`;
                                                                        // Convert to a Date object to get the day name
                                                                        const jsDate = new Date(date.year, date.month - 1, date.day);
                                                                        dayName = jsDate.toLocaleDateString("en-US", { weekday: "long" }).toLowerCase();
                                                                    } else {
                                                                        formattedDate = "Invalid Date"; // Fallback in case of an unknown format
                                                                        dayName = "Invalid Day";
                                                                    }

                                                                    setFormData((prev) => {
                                                                        const updatedData = { ...prev, selectedDate: formattedDate, selectedDay: dayName };
                                                                        console.log("Updated Form Data:", updatedData);
                                                                        return updatedData;
                                                                    });
                                                                    // console.log("Formatted Date:", formattedDate);
                                                                    // console.log("Day of the Week:", dayName);
                                                                    // console.log("form data", formData.selectedDay);
                                                                }}
                                                            />


                                                            <Select
                                                                isRequired
                                                                className="w-full"
                                                                // defaultSelectedKeys={"Student"} // Ensures default value is used
                                                                label="Select a Time"
                                                                labelPlacement={"outside"}
                                                                placeholder="Select a time slot"
                                                                variant="bordered"
                                                                fullWidth
                                                                onSelectionChange={(keys) => {
                                                                    const selectedSlot = Array.from(keys)[0]; // Extract selected time slot
                                                                    setFormData((prev) => ({
                                                                        ...prev,
                                                                        selectedTime: selectedSlot,
                                                                        teacherName: teacher.teacher_name, // Capture teacher's name
                                                                        teacherLink: teacher.link,
                                                                        teacherId: teacher.teacher_id,
                                                                        teacherPhoto: teacher.photo,
                                                                        sessionParentId: parentId,
                                                                    }));
                                                                }}
                                                            >
                                                                {timeSlots[teacher.teacher_id] && timeSlots[teacher.teacher_id]
                                                                    .filter((slot) => {
                                                                        console.log("inside selec",formData.selectedDay);
                                                                        console.log("slot date",slot.day);
                                                                        return slot.status === "available" && slot.day === formData.selectedDay;}) // Show only available slots
                                                                    .map(({ time }) => (
                                                                        <SelectItem key={time} value={time}>
                                                                            {time}
                                                                        </SelectItem>
                                                                    ))
                                                                }
                                                            </Select>



                                                            <Input
                                                                isDisabled={true}
                                                                isRequired
                                                                className="w-full"
                                                                // placeholder={formData.parent_name}
                                                                label="Parent Name"
                                                                labelPlacement={"outside"}
                                                                type="name"
                                                                defaultValue={formData.parentName}
                                                                // onChange={(e) => setFormData((prev) => ({ ...prev, yourName: e.target.value }))}
                                                            />
                                                            <Input
                                                                isDisabled={true}
                                                                isRequired
                                                                className="w-full"
                                                                // placeholder={formData.student_name}
                                                                label="Student Name"
                                                                labelPlacement={"outside"}
                                                                type="name"
                                                                defaultValue={formData.studentName}
                                                                // onChange={(e) => setFormData((prev) => ({ ...prev, studentName: e.target.value }))}
                                                            />
                                                            <Textarea
                                                                minRows={6}
                                                                isRequired
                                                                className="w-full"
                                                                label="Purpose"
                                                                labelPlacement="outside"
                                                                placeholder="Enter your description"
                                                                onChange={(e) => setFormData((prev) => ({ ...prev, purpose: e.target.value }))}
                                                            />
                                                            <div className="flex justify-end gap-4 mt-4">
                                                                <Button
                                                                    variant="bordered"
                                                                    color="warning"
                                                                    type="submit"
                                                                >
                                                                    Submit
                                                                </Button>
                                                                <Button color="danger" variant="flat" onPress={onClose}>
                                                                    Close
                                                                </Button>
                                                            </div>
                                                        </Form>
                                                    </DrawerBody>
                                                </>
                                            )}
                                        </DrawerContent>
                                    </Drawer>

                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Booking;