"use client";
import React, {useEffect, useState} from 'react';
import MainNavbar from "@/app/components/MainNavbar";
import Hero from "@/app/main/student/dashboard/Hero";
import Subjects from "@/app/main/student/dashboard/Subjects";
import CardSlideshow from "@/app/main/student/dashboard/CardSlideshow"
import {FooterSection} from "@/app/components/FooterSection";
import {useRouter} from "next/navigation";
import {ProfileStudent} from "@/app/main/student/profileStudent";
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
        // return <p className="text-center text-white">Loading...</p>;
        return <SplashScreen onFinish={() => setLoading(false)} />;
    }

    if (!user) {
        return null;  // Return nothing until redirection occurs
    }

    return (
        <div >
            {/*<MainNavbar/>*/}
            <Hero/>
            <Subjects/>
            <CardSlideshow/>
            {/*<ProfileStudent/>*/}
            {/*<FooterSection/>*/}
        </div>
    );
}