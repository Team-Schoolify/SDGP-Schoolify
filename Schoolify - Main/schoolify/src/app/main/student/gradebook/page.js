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

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        Student Report Books
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reportData.map((report, index) => {
          const totalMarks = report.subjects.reduce(
            (sum, subject) => sum + subject.score,
            0
          );
          const averageMarks = (totalMarks / report.subjects.length).toFixed(2);

          return (
            <Card
              key={index}
              className="bg-white shadow-xl rounded-lg p-6 w-96 border border-gray-300"
            >
              <CardHeader className="text-center font-bold text-lg text-gray-900">
                Report Book - {report.year}
              </CardHeader>
              <CardBody className="text-gray-800">
                <p className="mb-2">
                  <strong>Name:</strong> {report.studentName}
                </p>
                <p className="mb-2">
                  <strong>Grade:</strong> {report.grade}
                </p>
                <ul className="space-y-2">
                  {report.subjects.map((subject, idx) => (
                    <li key={idx} className="flex justify-between">
                      <span>{subject.name}</span>
                      <span className="font-semibold">{subject.score}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 border-t-2 border-gray-700 w-full"></div>

                <div className="flex justify-between mt-2 text-gray-900 font-bold">
                  <span>Average</span>
                  <span className="font-semibold">{averageMarks}</span>
                </div>
                <div className="mt-4 border-t-2 border-gray-700 w-full"></div>
                <div className="mt-2 border-t-2 border-gray-700 w-full"></div>
              </CardBody>
              <CardFooter />
            </Card>
          );
        })}
      </div>
    </div>
  );
}
