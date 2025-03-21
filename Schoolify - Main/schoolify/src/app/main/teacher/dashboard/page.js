"use client";
import React, {useEffect, useState} from 'react';
import Hero from "@/app/main/teacher/dashboard/Hero";
import Subjects from "@/app/main/teacher/dashboard/Subjects";
import CardSlideshow from "@/app/main/teacher/dashboard/CardSlideshow"
import {useRouter} from "next/navigation";
import SplashScreen from "@/app/components/ui/SplashScreen.jsx";

export default function LoginPage() {

    const router = useRouter();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            router.push('/');  // Redirect to login page if token is missing
            return;
        }

        // Fetch user details from the backend using the token
        fetch('/api/auth/profile', {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Unauthorized');
                }
                return res.json();
            })
            .then(data => {
                setUser(data);
                setLoading(false);
            })
            .catch(() => {
                localStorage.removeItem('token');
                router.push('/'); // Redirect to login if token is invalid
            });
    }, []);

    if (loading) {
        return <SplashScreen onFinish={() => setLoading(false)} />;
    }

    if (!user) {
        return null;  // Return nothing until redirection occurs
    }

    return (
        <div>
            <Hero/>
            {/*<Subjects/>*/}
            <CardSlideshow/>
        </div>
    );
}