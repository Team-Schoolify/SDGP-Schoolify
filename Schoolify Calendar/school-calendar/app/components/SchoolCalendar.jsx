"use client";

import React from "react";
import {Calendar} from "@heroui/react";
import {parseDate} from "@internationalized/date";
import { calendar } from "../styles/calendarStyles";

export default function App() {
  let [value, setValue] = React.useState(parseDate("2024-03-07"));

  return (
    <div className={calendar().base()}>
      <Calendar aria-label="Date (Controlled)" value={value} onChange={setValue} />;
    </div>
  ) 
}


