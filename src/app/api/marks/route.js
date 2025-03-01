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
  {
    year: 2023,
    term: 3,
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
    year: 2024,
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
];

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const year = searchParams.get("year");
  const term = searchParams.get("term");

  const data = marksData.find(
    (m) => m.year.toString() === year && m.term.toString() === term
  );
  return NextResponse.json(data || {});
}
