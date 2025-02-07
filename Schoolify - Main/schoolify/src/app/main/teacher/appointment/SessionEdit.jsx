"use client";
import React, {useEffect, useState} from 'react'
import {Button, DatePicker, Input, Textarea} from "@heroui/react";
import {getLocalTimeZone, today, parseZonedDateTime, Time} from "@internationalized/date";
import {Form, Select, SelectItem, Switch, cn, TimeInput} from "@nextui-org/react";
import {supabase} from "@/app/lib/supabaseClient";

export const SessionEdit = () => {

    const [teacherId, setTeacherId] = useState(null); // Store school_id in state
    const [wednesdayTimeslots, setWednesdayTimeslots] = useState([]);
    const [fridayTimeslots, setFridayTimeslots] = useState([]);

    const [isWednesdayAvailable, setIsWednesdayAvailable] = useState(false);
    const [isFridayAvailable, setIsFridayAvailable] = useState(false);
    const [isTeacherAvailable, setIsTeacherAvailable] = useState(false);


    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedTeacherId = localStorage.getItem("teacher_id");

            if (!storedTeacherId) {
                console.error("❌ teacher_id not found in localStorage.");
            } else {
                console.log("✅ teacher_id retrieved:", storedTeacherId);
                setTeacherId(storedTeacherId);
            }
        }
    }, []);

    // useEffect(() => {
    //     const fetchTeachers = async () => {
    //         console.log("Fetching Teachers");
    //         if (!teacherId) {
    //             return;
    //         }
    //         console.log("Fetching started teachers");
    //
    //         const {teacherData, error} = await supabase
    //             .from("teacher")
    //             .select("teacher_id, status")
    //             .eq("teacher_id", teacherId);
    //
    //         if (error) {
    //             console.error("Error fetching teachers:",error);
    //             return;
    //         }
    //
    //         setIsTeacherAvailable(teacherData[0].status === "Available" ? true : false);
    //     };
    //     if (teacherId) {
    //         fetchTeachers();
    //     }
    // }, [teacherId]);

    useEffect(() => {
        const fetchTeachers = async () => {
            console.log("Fetching Teachers");
            if (!teacherId) return;

            console.log("Fetching started teachers");

            const { data, error } = await supabase
                .from("teacher")
                .select("teacher_id, status")
                .eq("teacher_id", teacherId);
            console.log("TeacherData", data);

            if (error) {
                console.error("❌ Error fetching teachers:", error);
                return;
            }

            if (!data || data.length === 0) {
                console.warn("⚠️ No teacher found for teacher_id:", teacherId);
                setIsTeacherAvailable(false); // Default to false if no teacher is found
                return;
            }

            // ✅ Check the first teacher's status
            setIsTeacherAvailable(data[0].status === "Available");
        };

        if (teacherId) {
            fetchTeachers(); // ✅ Fetch only if teacherId exists
        }
    }, [teacherId]);

    useEffect(() => {
        const fetchTimeSlots = async () => {
            console.log("🔄 Fetching timeslots for Teacher ID:", teacherId);
            if (!teacherId) {
                console.error("❌ No teacherId found. Skipping fetch.");
                return; // Now return only executes when teacherId is null/undefined
            }


            console.log("fetching started TimeSlots:");

            const { data, error } = await supabase
                .from("timeslots")
                .select("id, teacher_id, time_slot, day, availability")
                .eq("teacher_id", teacherId);

            if (error) {
                console.error("Error fetching timeslots:", error);
                return;
            }
            console.log("Fetched TimeSlots:", data);

            // ✅ Set the switch default state based on availability
            setIsWednesdayAvailable(data.filter(slot => slot.day === "wednesday").every(slot => slot.availability === "available") ? true : false);
            setIsFridayAvailable(data.filter(slot => slot.day === "friday").every(slot => slot.availability === "available") ? true : false);


            // Separate timeslots by day and convert them into Time objects
            const convertTimeSlot = (slot) => ({
                ...slot,
                time_slot: new Time(...slot.time_slot.split(":").map(Number))
            });

            // Separate timeslots based on the day
            setWednesdayTimeslots(data.filter(slot => slot.day === "wednesday").map(convertTimeSlot));
            setFridayTimeslots(data.filter(slot => slot.day === "friday").map(convertTimeSlot));

            console.log("✅ Wednesday Slots:", wednesdayTimeslots);
            console.log("✅ Friday Slots:", fridayTimeslots);

        };

            if (teacherId) {
                fetchTimeSlots();
            }
        }, [teacherId]); // Runs only when schoolId is available

    const handleTeacherAvailability = async (isTeacherAvailable) => {
        if (!teacherId) {
            return;
        }
        setIsTeacherAvailable(isTeacherAvailable);
        const {error} = await supabase
            .from("teacher")
            .update({status: isTeacherAvailable ? "Available" : "Unavailable"})
            .eq("teacher_id", teacherId);
        if (error) {
            console.error(`❌ Error updating availability for ${teacherId}:`, error.message);
        } else {
            console.log(`✅Teacher Availability updated successfully for ${teacherId}`);
        }
    };

    //Handle Availability
    const handleAvailabilityChange = async (day, isAvailable) => {
        if (!teacherId) {
            console.error("❌ No teacherId found. Cannot update.");
            return;
        }

        console.log(`🔄 Updating availability for ${day} to ${isAvailable ? "available" : "unavailable"}`);

        // Update the frontend state
        if (day === "wednesday") {
            setIsWednesdayAvailable(isAvailable);
            setWednesdayTimeslots((prev) =>
                prev.map(slot => ({ ...slot, availability: isAvailable }))
            );
        } else if (day === "friday") {
            setIsFridayAvailable(isAvailable);
            setFridayTimeslots((prev) =>
                prev.map(slot => ({ ...slot, availability: isAvailable }))
            );
        }

        // Update in Supabase
        const { error } = await supabase
            .from("timeslots")
            .update({ availability: isAvailable ? "available" : "unavailable" }) // Assuming you have an "available" column
            .eq("teacher_id", teacherId)
            .eq("day", day);

        if (error) {
            console.error(`❌ Error updating availability for ${day}:`, error.message);
        } else {
            console.log(`✅Date Availability updated successfully for ${day}`);
        }
    };


    // Function to update time in state

    const handleTimeChange = (day, index, newTime) => {
        const formattedTime = `${newTime.hour.toString().padStart(2, "0")}:${newTime.minute.toString().padStart(2, "0")}`;

        if (day === "wednesday") {
            setWednesdayTimeslots((prev) =>
                prev.map((slot, i) =>
                    i === index ? { ...slot, time_slot: formattedTime } : slot
                )
            );
        } else if (day === "friday") {
            setFridayTimeslots((prev) =>
                prev.map((slot, i) =>
                    i === index ? { ...slot, time_slot: formattedTime } : slot
                )
            );
        }
    };

    // Function to save updated times to the database
    const handleSave = async (day, timeslots) => {
        if (!teacherId) {
            console.error("❌ No teacherId found. Cannot update.");
            return;
        }

        console.log(`🔄 Updating timeslots for ${day}...`, timeslots);

        // Ensure timeslots have valid data
        const validTimeslots = timeslots.filter(slot => slot.id && slot.time_slot);

        if (validTimeslots.length === 0) {
            console.error(`❌ No valid timeslots to update.`);
            return;
        }

        const updates = validTimeslots.map(async (slot) => {
            const formattedTime = slot.time_slot; // Already formatted in "HH:MM"

            console.log(`⏳ Updating slot ID ${slot.id} -> ${formattedTime}`);

            const { error } = await supabase
                .from("timeslots")
                .update({ time_slot: formattedTime })
                .eq("id", slot.id)
                .eq("teacher_id", teacherId)
                .eq("day", day);

            if (error) {
                console.error(`❌ Error updating slot ID ${slot.id}:`, error.message);
                return error.message;
            }

            return null;
        });

        const results = await Promise.all(updates);
        const failedUpdates = results.filter((res) => res !== null);

        if (failedUpdates.length > 0) {
            alert(`❌ Some updates failed: ${failedUpdates.join(", ")}`);
        } else {
            alert(`✅ ${day.toUpperCase()} times updated successfully!`);
        }
    };



    return (
        <div className="mt-10">
            <h1 className="heading text-customBlue mb-8">
                Session Configuration
            </h1>

            <div className=" bg-customBlack rounded-3xl sm:pb-10 sm:px-10 sm:pt-4 p-0">

                <div className="justify-center mb-4">
                    <Switch
                        isSelected={isTeacherAvailable}
                        onValueChange={(value) => handleTeacherAvailability(value)}
                        size="md"
                        classNames={{
                            base: cn(
                                "inline-flex flex-row-reverse sm:w-3/4 w-full  h-16 max-w-md bg-black hover:bg-content2 items-center",
                                "justify-between cursor-pointer rounded-3xl gap-2 p-4 border-2 border-transparent",
                                "data-[selected=true]:border-primary",
                            ),
                            wrapper: "p-0 h-4 overflow-visible",
                            thumb: cn(
                                "w-6 h-6 border-2 shadow-lg",
                                "group-data-[hover=true]:border-primary",
                                //selected
                                "group-data-[selected=true]:ms-6",
                                // pressed
                                "group-data-[pressed=true]:w-7",
                                "group-data-[selected]:group-data-[pressed]:ms-4",
                            ),
                        }}
                    >
                        <div className="flex flex-col gap-1">
                            <p className="lg:text-medium md:text-xs text-xs">Set Availability</p>
                            <p className={`text-tiny ${isTeacherAvailable ? "text-success" : "text-danger"} text-left`}>
                                {isTeacherAvailable ? "Available" : "Unavailable"}
                            </p>
                        </div>
                    </Switch>
                </div>

                <div
                    className="grid grid-cols-1 md:grid-cols-2 max-w-screen-lg mx-auto items-center sm:gap-10 gap-4 lg:grid-cols-2">

                    <div className="flex flex-col gap-y-1.5 bg-black w-full p-5 border-1 rounded-3xl">
                        <h1 className="font-bold text-xl">WEDNESDAY</h1>
                        <div className="justify-center mt-3 mb-3">
                            <Switch
                                isSelected={isWednesdayAvailable}
                                onValueChange={(value) => handleAvailabilityChange("wednesday", value)}
                                size="md"
                                classNames={{
                                    base: cn(
                                        "inline-flex flex-row-reverse sm:w-3/4 w-full  h-16 max-w-md bg-content1 hover:bg-content2 items-center",
                                        "justify-between cursor-pointer rounded-3xl gap-2 p-4 border-2 border-transparent",
                                        "data-[selected=true]:border-primary",
                                    ),
                                    wrapper: "p-0 h-4 overflow-visible",
                                    thumb: cn(
                                        "w-6 h-6 border-2 shadow-lg",
                                        "group-data-[hover=true]:border-primary",
                                        //selected
                                        "group-data-[selected=true]:ms-6",
                                        // pressed
                                        "group-data-[pressed=true]:w-7",
                                        "group-data-[selected]:group-data-[pressed]:ms-4",
                                    ),
                                }}
                            >
                                <div className="flex flex-col gap-1">
                                    <p className="lg:text-medium md:text-xs text-xs">Date Availability</p>
                                    <p className={`text-tiny ${isWednesdayAvailable ? "text-success" : "text-danger"} text-left`}>
                                        {isWednesdayAvailable ? "Available" : "Unavailable"}
                                    </p>
                                </div>
                            </Switch>
                        </div>

                        <div className="flex flex-wrap gap-1 justify-center ">
                            <Form
                                className="flex flex-col gap-6 text-left items-left sm:w-3/4 w-full"
                                validationBehavior="native"
                                onSubmit={(e) => {
                                    e.preventDefault();  // ⛔ Prevents page reload
                                    handleSave("wednesday", wednesdayTimeslots);
                                }}
                            >
                                {wednesdayTimeslots.length > 0 ? (
                                    wednesdayTimeslots.map((time, index) => (
                                        <TimeInput
                                            key={`wednesday-${index}`}
                                            defaultValue={
                                                typeof time.time_slot === "string"
                                                    ? new Time(...time.time_slot.split(":").map(Number))  // Convert "HH:MM" string to Time object
                                                    : time.time_slot  // Already a Time object
                                            } granularity="minute"
                                            hourCycle={24}
                                            label={`Time Slot ${index + 1}`}
                                            onChange={(newTime) => handleTimeChange("wednesday", index, newTime)}
                                        />
                                    ))
                                ) : (
                                    <p className="text-gray-400 text-sm">No time slots available for Wednesday.</p>
                                )}

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

                    <div className="flex flex-col gap-y-1.5 bg-black w-full p-5 border-1 rounded-3xl">
                        <h1 className="font-bold text-2xl">FRIDAY</h1>
                        <div className="justify-center mt-3 mb-3">
                            <Switch
                                isSelected={isFridayAvailable}
                                onValueChange={(value) => handleAvailabilityChange("friday", value)}
                                size="md"
                                classNames={{
                                    base: cn(
                                        "inline-flex flex-row-reverse sm:w-3/4 w-full  h-16 max-w-md bg-content1 hover:bg-content2 items-center",
                                        "justify-between cursor-pointer rounded-3xl gap-2 p-4 border-2 border-transparent",
                                        "data-[selected=true]:border-primary",
                                    ),
                                    wrapper: "p-0 h-4 overflow-visible",
                                    thumb: cn(
                                        "w-6 h-6 border-2 shadow-lg",
                                        "group-data-[hover=true]:border-primary",
                                        //selected
                                        "group-data-[selected=true]:ms-6",
                                        // pressed
                                        "group-data-[pressed=true]:w-7",
                                        "group-data-[selected]:group-data-[pressed]:ms-4",
                                    ),
                                }}
                            >
                                <div className="flex flex-col gap-1">
                                    <p className="lg:text-medium md:text-xs text-xs">Date Availability</p>
                                    <p className={`text-tiny ${isFridayAvailable ? "text-success" : "text-danger"} text-left`}>
                                        {isFridayAvailable ? "Available" : "Unavailable"}
                                    </p>
                                </div>
                            </Switch>
                        </div>

                        <div className="flex flex-wrap gap-1 justify-center ">
                            <Form
                                className="flex flex-col gap-6 text-left items-left sm:w-3/4 w-full"
                                validationBehavior="native"
                                onSubmit={(e) => {
                                    e.preventDefault();  // ⛔ Prevents page reload
                                    handleSave("friday", fridayTimeslots);
                                }}
                            >
                                {fridayTimeslots.length > 0 ? (
                                    fridayTimeslots.map((time, index) => (
                                        <TimeInput
                                            key={`wednesday-${index}`}
                                            defaultValue={
                                                typeof time.time_slot === "string"
                                                    ? new Time(...time.time_slot.split(":").map(Number))  // Convert "HH:MM" string to Time object
                                                    : time.time_slot  // Already a Time object
                                            } granularity="minute"
                                            hourCycle={24}
                                            label={`Time Slot ${index + 1}`}
                                            onChange={(newTime) => handleTimeChange("wednesday", index, newTime)}
                                        />
                                    ))
                                ) : (
                                    <p className="text-gray-400 text-sm">No time slots available for Wednesday.</p>
                                )}

                                <div className="flex justify-end gap-4 mt-4">
                                    <Button variant="bordered"
                                            color="warning" type="submit"
                                    >
                                        Save
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
