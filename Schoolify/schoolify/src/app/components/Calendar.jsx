"use client";
import React from 'react'
import {Badge, Button, useDisclosure} from "@heroui/react";
import DrawerComponentParentAndStudent from "../components/DrawerComponentParentAndStudent";

const Calendar = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const CalendarIcon = ({ size, height, width, ...props }) => {
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
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M6 2a1 1 0 0 1 1 1v1h10V3a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1V3a1 1 0 0 1 1-1ZM4 8v12h16V8H4Zm2 4a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm5-1a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2h-2Zm5 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Zm-10 5a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2H7Zm3 0a1 1 0 0 0 1 1h2a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1Zm6-1a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Z"
                    clipRule="evenodd"
                />
            </svg>
        );
    };

    return (
        <div>
            <Button className="bg-warning"
                    isIconOnly
                    aria-label="more than 99 notifications"
                    radius="full"
                    variant="solid"
                    onPress={onOpen}
            >
                <CalendarIcon size={24}/>
            </Button>
            <DrawerComponentParentAndStudent isOpen={isOpen} onOpenChange={onOpenChange} />
        </div>
    )
}
export default Calendar
