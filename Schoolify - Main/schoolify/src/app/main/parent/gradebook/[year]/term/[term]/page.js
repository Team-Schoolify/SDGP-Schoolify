"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";

export default function TermMarksPage() {
  const { year, term } = useParams();
  const [marksData, setMarksData] = useState(null);

  // Fetch marks from API
  useEffect(() => {
    const fetchMarks = async () => {
      try {
        const response = await fetch(`/api/marks?year=${year}&term=${term}`);
        const data = await response.json();
        setMarksData(data);
      } catch (error) {
        console.error("Error fetching marks:", error);
      }
    };
    fetchMarks();
  }, [year, term]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        Report Book - {year} Term {term}
      </h1>
      {marksData ? (
        <Card className="bg-white shadow-xl rounded-lg p-6 w-96 border border-gray-300">
          <CardHeader className="text-center font-bold text-lg text-gray-900">
            Report Book - {year} Term {term}
          </CardHeader>
          <CardBody className="text-gray-800">
            <p className="mb-2">
              <strong>Name:</strong> {marksData.studentName}
            </p>
            <p className="mb-2">
              <strong>Grade:</strong> {marksData.grade}
            </p>
            <ul className="space-y-2">
              {marksData.subjects.map((subject, idx) => (
                <li key={idx} className="flex justify-between">
                  <span>{subject.name}</span>
                  <span className="font-semibold">{subject.score}</span>
                </li>
              ))}
            </ul>

            {/* Line Above Average */}
            <div className="mt-3 border-t-2 border-gray-700 w-full"></div>

            {/* Average Row */}
            <div className="flex justify-between mt-2 text-gray-900 font-bold">
              <span>Average</span>
              <span className="font-semibold">
                {(
                  marksData.subjects.reduce(
                    (sum, subject) => sum + subject.score,
                    0
                  ) / marksData.subjects.length
                ).toFixed(2)}
              </span>
            </div>

            {/* Two Lines Below Average */}
            <div className="mt-4 border-t-2 border-gray-700 w-full"></div>
            <div className="mt-2 border-t-2 border-gray-700 w-full"></div>
          </CardBody>
          <CardFooter />
        </Card>
      ) : (
        <p className="text-red-500 font-semibold">Loading marks...</p>
      )}
    </div>
  );
}





