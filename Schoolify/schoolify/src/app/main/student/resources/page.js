"use client";

import Link from "next/link";

const subjects = [
  {
    id: 1,
    name: "Mathematics",
    description: "Algebra, Geometry, Calculus and more",
    href: "/main/student/resources/Subjects/Mathematics",
    color: "bg-blue-500",
  },
  {
    id: 2,
    name: "Science",
    description: "Physics, Chemistry, Biology",
    href: "/main/student/resources/Subjects/Science",
    color: "bg-green-500",
  },
  {
    id: 3,
    name: "English",
    description: "Grammar, Literature, Writing",
    href: "/Subjects/English",
    color: "bg-yellow-500",
  },
  {
    id: 4,
    name: "History",
    description: "World History, Civilizations",
    href: "/Subjects/History",
    color: "bg-red-500",
  },
  {
    id: 5,
    name: "ICT",
    description: "Programming, Digital Skills",
    href: "/Subjects/ICT",
    color: "bg-purple-500",
  },
  {
    id: 6,
    name: "Sinhala",
    description: "Language and Literature",
    href: "/Subjects/Sinhala",
    color: "bg-orange-500",
  },
  {
    id: 7,
    name: "Commerce",
    description: "Business Studies, Economics",
    href: "/Subjects/Commerce",
    color: "bg-indigo-500",
  },
  {
    id: 8,
    name: "Music",
    description: "Theory and Practice",
    href: "/Subjects/Music",
    color: "bg-pink-500",
  },
];

export default function SubjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background-color to-white p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 relative inline-block text-black">
          Subjects
          <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"></span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {subjects.map((subject) => (
            <Link key={subject.id} href={subject.href} className="block group">
              <div
                className={`${subject.color} rounded-2xl p-6 text-white shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:opacity-90`}
              >
                <h2 className="text-2xl font-bold mb-2">{subject.name}</h2>
                <p className="text-white/90">{subject.description}</p>
                <div className="mt-4 flex items-center text-sm">
                  <span>Learn more</span>
                  <svg
                    className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
