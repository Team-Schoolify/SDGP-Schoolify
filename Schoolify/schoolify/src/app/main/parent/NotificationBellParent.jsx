"use client";
import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import {
    Badge,
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    useDisclosure
} from "@heroui/react";
import { CheckIcon } from '@heroicons/react/24/solid';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const NotificationBell = () => {
    const NotificationIcon = ({size, height, width, ...props}) => {
        return (
            <svg
                fill="none"
                height={size || height || 24}
                viewBox="0 0 24 24"
                width={size || width || 24}
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <path
                    clipRule="evenodd"
                    d="M18.707 8.796c0 1.256.332 1.997 1.063 2.85.553.628.73 1.435.73 2.31 0 .874-.287 1.704-.863 2.378a4.537 4.537 0 01-2.9 1.413c-1.571.134-3.143.247-4.736.247-1.595 0-3.166-.068-4.737-.247a4.532 4.532 0 01-2.9-1.413 3.616 3.616 0 01-.864-2.378c0-.875.178-1.682.73-2.31.754-.854 1.064-1.594 1.064-2.85V8.37c0-1.682.42-2.781 1.283-3.858C7.861 2.942 9.919 2 11.956 2h.09c2.08 0 4.204.987 5.466 2.625.82 1.054 1.195 2.108 1.195 3.745v.426zM9.074 20.061c0-.504.462-.734.89-.833.5-.106 3.545-.106 4.045 0 .428.099.89.33.89.833-.025.48-.306.904-.695 1.174a3.635 3.635 0 01-1.713.731 3.795 3.795 0 01-1.008 0 3.618 3.618 0 01-1.714-.732c-.39-.269-.67-.694-.695-1.173z"
                    fill="currentColor"
                    fillRule="evenodd"
                />
            </svg>
        );
    };

    const [notifications, setNotifications] = useState([]);
    const [userId, setUserId] = useState(null);
    const [schoolId, setSchoolId] = useState(null);
    const [role, setRole] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedParentId = localStorage.getItem("parent_id");
            const storedSchoolId = localStorage.getItem("school_id");
            console.log("Retrieved parent ID from localStorage:", storedParentId);

            if (storedParentId && storedSchoolId) {
                setSchoolId(storedSchoolId);
                setUserId(storedParentId);
                setRole("parent");
            }
        }
    }, []);



    // Step 2: Fetch notifications only AFTER `userId` is set
    useEffect(() => {
        if (!userId || !role) {
            console.warn("User ID or Role is undefined. Skipping fetch.");
            return;
        }

        console.log("Fetching notifications for:", { userId, role });

        // const roleColumn = role === "student" ? "student_id" :
        //     role === "parent" ? "parent_id" :
        //         role === "teacher" ? "teacher_id" : null;
        //
        // if (!roleColumn) {
        //     console.error("Invalid role detected:", role);
        //     return;
        // }

        const fetchNotifications = async () => {
            const { data, error } = await supabase
                .from('notifications')
                .select('*')
                .eq('parent_id', userId)
                .eq('school_id', schoolId)
                .order('created_at', { ascending: false });

            if (error) {
                console.error("Error fetching notifications:", error);
            } else {
                console.log("Notifications fetched:", data);
                setNotifications(data || []);
            }
        };

        fetchNotifications();

        const subscription = supabase
            .channel('notifications')
            .on(
                'postgres_changes',
                { event: 'INSERT', schema: 'public', table: 'notifications' },
                (payload) => {
                    if (payload.new[roleColumn] === userId) {
                        setNotifications((prev) => [payload.new, ...prev]);
                    }
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(subscription);
        };
    }, [userId, role]); // ✅ Fetch only when `userId` and `role` change

    // Function to mark a notification as read
    const markAsRead = async (notificationId) => {
        const response = await fetch('/api/markAsRead', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ notificationId, userId, role }),
        });

        if (response.ok) {
            // Update the UI to show that the notification is read
            setNotifications((prev) =>
                prev.map((n) =>
                    n.id === notificationId ? { ...n, is_read: true } : n
                )
            );
        } else {
            console.error("Failed to mark notification as read");
        }
    };

    const {isOpen, onOpen, onClose} = useDisclosure();
    const handleOpen = (size) => {
        onOpen();
    };



    return (
        <div>
            <Badge color="danger" content={notifications.filter(n => !n.is_read).length} shape="circle"  >
                <Button className="bg-warning"
                        isIconOnly
                        aria-label="more than 99 notifications"
                        radius="full"
                        variant="solid"
                        onClick={handleOpen}
                >
                    <NotificationIcon size={24} />
                    {/*({notifications.filter(n => !n.is_read).length})*/}
                </Button>
            </Badge>

            <Drawer isOpen={isOpen} size="sm" onClose={onClose} backdrop="blur">
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerHeader className="flex flex-col gap-1 text-3xl mb-4 text-warning">Notifications</DrawerHeader>
                            <DrawerBody>

                                <ul className="flex flex-col gap-4">
                                    {notifications.length === 0 ? (
                                        <li className="text-white text-center">No notifications</li>
                                    ) : (
                                        notifications.map((n) => (
                                            <li
                                                key={n.id}
                                                className={`flex justify-between items-center px-5 py-3 border-2 border-white rounded-xl ${n.is_read ? "opacity-50" : ""}`}
                                            >
                                                <div>
                                                    <strong>{n.title}</strong>
                                                    <p>{n.message}</p>
                                                </div>
                                                {/* ✔️ Button to mark as read */}
                                                {!n.is_read && (
                                                    <button
                                                        onClick={() => markAsRead(n.id)}
                                                        className="text-success text-lg font-bold ml-2"
                                                    >
                                                        <CheckIcon className="w-7 h-7"/>
                                                    </button>
                                                )}
                                            </li>
                                        ))
                                    )}
                                </ul>

                            </DrawerBody>
                            <DrawerFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                            </DrawerFooter>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </div>
    );
};

export default NotificationBell;
