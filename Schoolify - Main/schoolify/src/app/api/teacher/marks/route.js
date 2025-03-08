// Simulated teacher-entered marks database (replace with a real database)
let teacherMarks = [
    { year: 2023, term: 1, subject: "Maths", studentName: "John Doe", marks: 75 },
  ];
  
  // Fetch marks for teachers (based on selected year & term)
  export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const year = searchParams.get("year");
    const term = searchParams.get("term");
    const subject = searchParams.get("subject");
  
    const data = teacherMarks.filter(
      (m) =>
        m.year.toString() === year &&
        m.term.toString() === term &&
        m.subject === subject
    );
  
    return NextResponse.json(data || []);
  }

  // Add or Update Marks (Teachers only)
export async function POST(req) {
    const { year, term, subject, studentName, marks } = await req.json();
  
    // Check if entry exists
    const index = teacherMarks.findIndex(
      (m) =>
        m.year === year &&
        m.term === term &&
        m.subject === subject &&
        m.studentName === studentName
    );