"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@heroui/card";

export default function GradebookPage() {
    const router = useRouter();
    const [terms, setTerms] = useState([]);