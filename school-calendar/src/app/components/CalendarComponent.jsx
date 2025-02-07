"use client";

import {Calendar} from "@heroui/react";
import {today, getLocalTimeZone} from "@internationalized/date";

export default function CalendarComponent() {
  return (
    <div className="flex justify-center items-center">
        <Calendar  calendarWidth={300} isReadOnly aria-label="Date (Read Only)" value={today(getLocalTimeZone())} />
    </div>
  )
}

