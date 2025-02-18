'use client';

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Gradebook() {
  const [isMaterialsOpen, setIsMaterialsOpen] = useState(false);

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Science</h2>

      <Card className="mb-2">
        <Button 
          onClick={() => setIsMaterialsOpen(!isMaterialsOpen)}
          className="w-full flex justify-between items-center p-4 text-left"
        >
          Materials
          {isMaterialsOpen ? <ChevronUp /> : <ChevronDown />}
        </Button>
        {isMaterialsOpen && (
          <CardContent className="p-4">
            <p>Material 1</p>
            <p>Material 2</p>
          </CardContent>
        )}
      </Card>

      <Card className="mb-2 p-4">Past Papers</Card>
      <Card className="p-4">Model Papers</Card>
    </div>
  );
}
