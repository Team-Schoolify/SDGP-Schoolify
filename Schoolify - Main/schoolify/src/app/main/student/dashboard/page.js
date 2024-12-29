"use client";
import  React from 'react';
import MainNavbar from "@/app/components/MainNavbar";
import Hero from "@/app/main/student/dashboard/Hero";
import Subjects from "@/app/main/student/dashboard/Subjects";
import CardSlideshow from "@/app/main/student/dashboard/CardSlideshow"
import {FooterSection} from "@/app/components/FooterSection";

export default function LoginPage() {
    return (
        <div>
            {/*<MainNavbar/>*/}
            <Hero/>
            <Subjects/>
            <CardSlideshow/>
            {/*<FooterSection/>*/}
        </div>
    );
}