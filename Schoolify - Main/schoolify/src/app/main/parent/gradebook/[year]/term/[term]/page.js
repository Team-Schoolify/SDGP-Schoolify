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
