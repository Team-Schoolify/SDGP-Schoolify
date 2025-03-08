"use client";

import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";

export default function GradebookPage() {
    const reportData = [
      {
        year: "2023",
        studentName: "John Doe",
        grade: "10",
        subjects: [
          { name: "Maths", score: 75 },
          { name: "Science", score: 68 },
          { name: "English Language", score: 80 },
          { name: "Tamil", score: 76 },
          { name: "History", score: 50 },
          { name: "Western Music", score: 68 },
          { name: "ICT", score: 90 },
        ],
      },
      {
        year: "2024",
        studentName: "Jane Smith",
        grade: "11",
        subjects: [
          { name: "Maths", score: 86 },
          { name: "Science", score: 80 },
          { name: "English Language", score: 90 },
          { name: "Tamil", score: 82 },
          { name: "History", score: 64 },
          { name: "Western Music", score: 79 },
          { name: "ICT", score: 85 },
        ],
      },
    ];