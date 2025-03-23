"use client";

import React, { useEffect, useState } from "react";
import { Card } from "@heroui/card";

export default function TeacherGradebook() {
  const [terms, setTerms] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedTerm, setSelectedTerm] = useState("");
  const [subject, setSubject] = useState("");
  const [marks, setMarks] = useState([]);
  const [newEntry, setNewEntry] = useState({ studentName: "", marks: "" });

  // Available subjects
  const subjects = [
    "Maths",
    "Science",
    "English Language",
    "Tamil",
    "History",
    "Western Music",
    "ICT",
  ];

  // Fetch available years & terms for teachers
  useEffect(() => {
    const fetchTerms = async () => {
      try {
        const response = await fetch("/api/terms");
        const data = await response.json();
        setTerms(data);
      } catch (error) {
        console.error("Error fetching terms:", error);
      }
    };
    fetchTerms();
  }, []);

  // Fetch marks for selected year, term, and subject
  useEffect(() => {
    if (selectedYear && selectedTerm && subject) {
      const fetchMarks = async () => {
        try {
          const response = await fetch(
            `/api/teacher/marks?year=${selectedYear}&term=${selectedTerm}&subject=${subject}`
          );
          const data = await response.json();
          setMarks(data);
        } catch (error) {
          console.error("Error fetching marks:", error);
        }
      };
      fetchMarks();
    }
  }, [selectedYear, selectedTerm, subject]);

  // Handle input changes for editing marks
  const handleInputChange = (index, field, value) => {
    const updatedMarks = [...marks];
    updatedMarks[index][field] = value;
    setMarks(updatedMarks);
  };

  // Handle adding a new mark entry
  const handleAddEntry = async () => {
    if (
      !newEntry.studentName ||
      !newEntry.marks ||
      !selectedYear ||
      !selectedTerm ||
      !subject
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const updatedData = [
      ...marks,
      { ...newEntry, year: selectedYear, term: selectedTerm, subject },
    ];
    setMarks(updatedData);
    setNewEntry({ studentName: "", marks: "" });

    await saveMarks(updatedData);
  };

  // Save marks to teacher API
  const saveMarks = async (updatedData) => {
    try {
      await fetch("/api/teacher/marks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData[updatedData.length - 1]),
      });
      alert("Marks saved successfully!");
    } catch (error) {
      console.error("Error saving marks:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
        Teacher Gradebook Management
      </h1>

      {/* Select Year & Term */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="p-2 border border-gray-400 rounded bg-white text-gray-800"
        >
          <option value="">Select Year</option>
          {[...new Set(terms.map((t) => t.year))].map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <select
          value={selectedTerm}
          onChange={(e) => setSelectedTerm(e.target.value)}
          className="p-2 border border-gray-400 rounded bg-white text-gray-800"
        >
          <option value="">Select Term</option>
          {[1, 2, 3].map((term) => (
            <option key={term} value={term}>
              Term {term}
            </option>
          ))}
        </select>

        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="p-2 border border-gray-400 rounded bg-white text-gray-800"
        >
          <option value="">Select Subject</option>
          {subjects.map((subj) => (
            <option key={subj} value={subj}>
              {subj}
            </option>
          ))}
        </select>
      </div>

      {/* Display Marks */}
      {marks.length > 0 && (
        <Card className="bg-white shadow-md rounded-lg p-6 w-96 border border-gray-300">
          <h2 className="text-lg font-bold mb-4 text-gray-900">
            Marks for {subject}
          </h2>
          {marks.map((entry, index) => (
            <div key={index} className="flex justify-between items-center mb-2">
              <span className="text-gray-900">{entry.studentName}</span>
              <input
                type="number"
                value={entry.marks}
                onChange={(e) =>
                  handleInputChange(index, "marks", e.target.value)
                }
                className="border border-gray-400 p-1 w-16 bg-white text-gray-800 rounded"
              />
            </div>
          ))}
        </Card>
      )}

      {/* Add New Entry */}
      <div className="mt-6 flex space-x-2">
        <input
          type="text"
          placeholder="Student Name"
          value={newEntry.studentName}
          onChange={(e) =>
            setNewEntry({ ...newEntry, studentName: e.target.value })
          }
          className="border border-gray-400 p-2 rounded bg-white text-gray-900"
        />
        <input
          type="number"
          placeholder="Marks"
          value={newEntry.marks}
          onChange={(e) => setNewEntry({ ...newEntry, marks: e.target.value })}
          className="border border-gray-400 p-2 rounded w-16 bg-white text-gray-900"
        />
        <button
          onClick={handleAddEntry}
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
}
