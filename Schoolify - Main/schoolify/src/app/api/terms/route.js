import { NextResponse } from "next/server";

// connect the database here
const termsData = [
  { year: 2023, term: 1 },
  { year: 2023, term: 2 },
  { year: 2023, term: 3 },
  { year: 2024, term: 1 },
  { year: 2024, term: 2 },
  { year: 2024, term: 3 },
];

export async function GET() {
  return NextResponse.json(termsData);
}
