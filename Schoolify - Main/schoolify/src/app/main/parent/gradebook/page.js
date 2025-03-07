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