"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@heroui/card";

export default function GradebookPage() {
    const router = useRouter();
    const [terms, setTerms] = useState([]);

    // Fetch available years & terms from API
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

  // Handle term selection and redirect
  const handleSelectTerm = (year, term) => {
    setTimeout(() => {
      router.push(`/main/parent/gradebook/${year}/term/${term}`);
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        Select Year & Term
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {terms.map(({ year, term }) => (
          <Card
            key={`${year}-${term}`}
            className="bg-white shadow-lg rounded-lg p-6 w-56 text-center cursor-pointer transition-transform duration-200 hover:scale-[1.05] border border-gray-300"
          >
            <a
              href={`/main/parent/gradebook/${year}/term/${term}`}
              className="block w-full h-full"
            >
              <p className="text-gray-900 font-semibold text-lg">
                {year} - Term {term}
              </p>
            </a>
          </Card>
        ))}
      </div>
    </div>
  );
}






  


