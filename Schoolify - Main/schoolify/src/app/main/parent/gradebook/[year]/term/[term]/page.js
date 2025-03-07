"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";

export default function TermMarksPage() {
  const { year, term } = useParams();
  const [marksData, setMarksData] = useState(null);
}
