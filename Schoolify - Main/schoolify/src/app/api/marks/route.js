import { NextResponse } from "next/server";

// Sample marks database (Replace with real database query)
const marksData = [
  {
    year: 2023,
    term: 1,
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