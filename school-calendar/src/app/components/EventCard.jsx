"use client";

import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@heroui/react";

export default function EventCard() {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        Event One
      </CardHeader>
      <Divider />
      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
      
    </Card>
  );
}
