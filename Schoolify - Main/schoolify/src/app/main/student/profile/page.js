"use client";

import React from "react";
import { ProfileCard } from "./ProfileCard";

const profile = {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    dob: "2005-01-01",
    gender: "Male",
    phone: "0771234567",
    address: "123, Main Street, Colombo 01",
    grade: "Grade 10",
    school: "Royal College",
    chosen_subjects: [
        {
            id: 1,
            name: "Mathematics",
            description: "Algebra, Geometry, Calculus and more",
            color: "bg-blue-500",
        },
        {
            id: 2,
            name: "Science",
            description: "Physics, Chemistry, Biology",
            color: "bg-green-500",
        },
        {
            id: 3,
            name: "English",
            description: "Grammar, Literature, Writing",
            color: "bg-yellow-500",
        },
        {
            id: 4,
            name: "History",
            description: "World History, Civilizations",
            color: "bg-red-500",
        },
        {
            id: 5,
            name: "ICT",
            description: "Programming, Digital Skills",
            color: "bg-purple-500",
        },
        {
            id: 6,
            name: "Sinhala",
            description: "Language and Literature",
            color: "bg-orange-500",
        },
        {
            id: 7,
            name: "Commerce",
            description: "Business Studies, Economics",
            color: "bg-indigo-500",
        },
        {
            id: 8,
            name: "Music",
            description: "Theory and Practice",
            color: "bg-pink-500",
        },
    ],

    id: 2,
    name: "Jane Doe",
    email: "janedoe@example.com",
    dob: "2005-08-23",
    gender: "Female",
    phone: "0777654321",
    address: "456, Main Street, Colombo 02",
    grade: "Grade 10",
    school: "Ladies College",
    chosen_subjects: [
        {
            id: 1,
            name: "Mathematics",
            description: "Algebra, Geometry, Calculus and more",
            color: "bg-blue-500",
        },
        {
            id: 2,
            name: "Science",
            description: "Physics, Chemistry, Biology",
            color: "bg-green-500",
        },
        {
            id: 3,
            name: "English",
            description: "Grammar, Literature, Writing",
            color: "bg-yellow-500",
        },
        {
            id: 4,
            name: "History",
            description: "World History, Civilizations",
            color: "bg-red-500",
        },
        {
            id: 5,
            name: "ICT",
            description: "Programming, Digital Skills",
            color: "bg-purple-500",
        },
        {
            id: 6,
            name: "Sinhala",
            description: "Language and Literature",
            color: "bg-orange-500",
        },
        {
            id: 7,
            name: "Commerce",
            description: "Business Studies, Economics",
            color: "bg-indigo-500",
        },
        {
            id: 8,
            name: "Music",
            description: "Theory and Practice",
            color: "bg-pink-500",
        },
    ],
}

export default function ProfilePage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-800">
                User Profile
            </h1>
            <ProfileCard
                src="/img/music.png"
                alt="Profile Picture"
                size={128}
                borderColor="border-gray-200"
            />
        </div>
    );
}