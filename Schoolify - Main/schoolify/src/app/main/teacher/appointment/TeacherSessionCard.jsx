import React, {useEffect, useState} from 'react'
import {supabase} from "@/app/lib/supabaseClient";
import {Button, Card, CardBody, CardHeader, Image, Link, Popover, PopoverTrigger, PopoverContent} from "@heroui/react";
import {TrashIcon, InformationCircleIcon} from "@heroicons/react/24/outline";
// import { InformationCircleIcon } from "@heroicons/react/24/solid";

const TeacherSessionCard = () => {
    const [sessions, setSessions] = useState([]);
    const [teacherId, setTeacherId] = useState(null); // Store school_id in state

    useEffect(() => {
        // Ensure localStorage is accessed only in the browser
        if (typeof window !== "undefined") {
            const storedTeacherId = localStorage.getItem("teacher_id");
            setTeacherId(storedTeacherId);
            console.log("parent:",storedTeacherId);
        }
    }, []);

    useEffect(() => {
        if (!teacherId) {
            console.warn("⚠️ Skipping session fetch - teacherId is missing.");
            return;
        }

        const fetchSessions = async () => {
            try {
                const { data, error } = await supabase
                    .from("sessions")
                    .select("*")
                    .eq("teacher_session_id", teacherId) // Only filter if parentId exists
                    .order("id", { ascending: false });

                if (error) {
                    console.error("❌ Error fetching sessions:", error);
                } else {
                    setSessions(data || []);
                    console.log("✅ Fetched Sessions:", data);
                }
            } catch (err) {
                console.error("Unexpected error fetching sessions:", err);
            }
        };

        fetchSessions();
    }, [teacherId]); // Runs only when parentId changes

    const handleDelete = async (sessionId, selectedTime, selectedDate) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this session?");
        if (!confirmDelete) return;

        try {
            // Step 1: Delete session from "sessions" table
            const { error: deleteError } = await supabase
                .from("sessions")
                .delete()
                .eq("id", sessionId);

            if (deleteError) {
                console.error("Error deleting session:", deleteError);
                return;
            }

            // Step 2: Update the "timeslots" table to make the time available again
            const { error: updateError } = await supabase
                .from("timeslots")
                .update({ availability: "available" })
                .eq("time_slot", selectedTime)
                .eq("teacher_id", teacherId)
                .eq("day", selectedDate);

            if (updateError) {
                console.error("Error updating timeslot availability:", updateError);
                return;
            }

            // Step 3: Remove the deleted session from state
            setSessions((prevSessions) => prevSessions.filter(session => session.id !== sessionId));

            console.log("Session deleted and timeslot set to available.");
            window.location.reload();

        } catch (err) {
            console.error("Unexpected error:", err);
        }
    };

    return (
        <div className="mt-10">
            <h1 className="heading text-customBlue">
                Sessions you've Got
            </h1>
            <div className="mt-16">
                {sessions.length > 0 ? (
                    <div className="mt-4 flex flex-wrap justify-center gap-4 ">
                        {sessions.map((session) => (
                            <Card key={session.id} className="py-2">
                                <CardHeader className="pb-0 pt-2 px-4 grid grid-cols-2 items-start">
                                    <div className="text-left gap-y-1.5">
                                        <h4 className="font-bold text-large">{session.selected_time}</h4>
                                        <p className="text-tiny uppercase font-bold">{session.parent_name}</p>
                                        <small className="text-default-500">{session.selected_date}</small>
                                        <div>
                                            <small className="text-warning">
                                                {session.selected_day_name.charAt(0).toUpperCase() + session.selected_day_name.slice(1)}
                                            </small>
                                        </div>
                                    </div>
                                    <div className="text-right flex justify-end gap-x-0.5">
                                        <Link
                                            isBlock
                                            showAnchorIcon
                                            color="success"
                                            href={session.teacher_link}
                                            size="sm"
                                        >
                                            Start
                                        </Link>
                                        <Popover key={session.id} color="secondary" placement="top-end">
                                            <PopoverTrigger>
                                                <InformationCircleIcon
                                                    className="w-6 text-primary hover:cursor-pointer"
                                                />
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <div className="px-1 py-2 text-left">
                                                    <p className="text-medium mb-1">Student Name: <span
                                                        className="uppercase font-bold">{session.student_name}</span>
                                                    </p>
                                                    <p className="text-medium ">Meeting Purpose: <span
                                                        className="font-bold">{session.purpose}</span>
                                                    </p>
                                                </div>
                                            </PopoverContent>
                                        </Popover>
                                    </div>
                                </CardHeader>
                                <CardBody className="overflow-visible py-2 gap-y-2 ">
                                    <div className="flex flex-col items-center">
                                        <Image
                                            alt="Card background"
                                            className="object-cover rounded-xl"
                                            src={session.parent_photo}
                                            width={270}
                                            height={270}
                                        />
                                    </div>


                                    <Button
                                        variant="flat"
                                        size="sm"
                                        color="danger"
                                        startContent={<TrashIcon className="size-4" />}
                                        onClick={() => handleDelete(session.id,session.selected_time, session.selected_day_name)}
                                    >
                                    <span className="text-medium">
                                        Cancel
                                    </span>
                                    </Button>
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <p className="text-white font-bold text-2xl">No sessions booked for youyet.</p>
                )}
            </div>
        </div>

    )
}
export default TeacherSessionCard
