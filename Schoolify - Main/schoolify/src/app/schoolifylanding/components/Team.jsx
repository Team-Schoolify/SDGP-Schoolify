import React, { useEffect, useRef } from "react";
import { Card, CardBody, Image, Link } from "@nextui-org/react";

const teamMembers = [
    {
        name: "Sonal Kethaka Pathinayaka",
        title: "Computer Science Undergraduate",
        description:
            "I'm a second-year student passionate about frontend and UI/UX, with solid backend skills in Spring Boot.",
        image: "https://nextui.org/images/album-cover.png",
        social: {
            twitter: "https://twitter.com/sonalkethaka",
            linkedin: "https://linkedin.com/in/sonalkethaka",
            github: "https://github.com/sonalkethaka",
        },
    },
    {
        name: "Jane Doe",
        title: "UI/UX Designer",
        description:
            "Experienced in crafting intuitive and user-friendly interfaces for modern web applications.",
        image: "https://nextui.org/images/card-example-3.jpeg",
        social: {
            twitter: "https://twitter.com/sonalkethaka",
            linkedin: "https://linkedin.com/in/sonalkethaka",
            github: "https://github.com/sonalkethaka",
        },
    },
    {
        name: "John Smith",
        title: "Backend Developer",
        description:
            "Specialized in building scalable backend solutions with expertise in Java and Spring Boot.",
        image: "https://nextui.org/images/card-example-4.jpeg",
        social: {
            twitter: "https://twitter.com/sonalkethaka",
            linkedin: "https://linkedin.com/in/sonalkethaka",
            github: "https://github.com/sonalkethaka",
        },
    },
    {
        name: "Alice Johnson",
        title: "Frontend Developer",
        description:
            "Focused on creating seamless and visually appealing user experiences using React and Tailwind.",
        image: "https://nextui.org/images/card-example-2.jpeg",
        social: {
            twitter: "https://twitter.com/sonalkethaka",
            linkedin: "https://linkedin.com/in/sonalkethaka",
            github: "https://github.com/sonalkethaka",
        },
    },
    {
        name: "Robert Brown",
        title: "Data Analyst",
        description:
            "Driven by insights and data visualization to make impactful decisions and strategies.",
        image: "https://nextui.org/images/card-example-6.jpeg",
        social: {
            twitter: "https://twitter.com/sonalkethaka",
            linkedin: "https://linkedin.com/in/sonalkethaka",
            github: "https://github.com/sonalkethaka",
        },
    },
    {
        name: "Emily White",
        title: "Project Manager",
        description:
            "Expert in coordinating and managing teams to deliver projects on time and with excellence.",
        image: "https://nextui.org/images/card-example-5.jpeg",
        social: {
            twitter: "https://twitter.com/sonalkethaka",
            linkedin: "https://linkedin.com/in/sonalkethaka",
            github: "https://github.com/sonalkethaka",
        },
    },
];

export default function Team() {
    const cardRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("fade-in");
                        entry.target.classList.remove("fade-out");
                    } else {
                        entry.target.classList.add("fade-out");
                        entry.target.classList.remove("fade-in");
                    }
                });
            },
            { threshold: 0.2 } // Trigger animation when 20% of the card is visible
        );

        cardRefs.current.forEach((card) => {
            if (card) {
                observer.observe(card);
            }
        });

        return () => {
            cardRefs.current.forEach((card) => {
                if (card) {
                    observer.unobserve(card);
                }
            });
        };
    }, []);
    return (
        <div id="team" className="mt-24 mb-24">
            <div className="mb-10">
                <h1 className="text-4xl text-black font-sans font-bold relative inline-block">
                    Team
                    <span
                        className="absolute bottom-[-4px] left-0 w-1/2 h-[3px] bg-gradient-to-r from-blue-500 to-blue-200"
                        style={{
                            width: "30%",
                        }}
                    ></span>
                </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-[1200px] mx-auto">
                {teamMembers.map((member, index) => (
                    <Card
                        key={index}
                        ref={(el) => (cardRefs.current[index] = el)}
                        isBlurred
                        className="border-none bg-background/60 dark:bg-default-100/50 rounded-xl shadow-md opacity-0 transition-opacity duration-700"
                    >
                        <CardBody>
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                                {/* Image Section */}
                                <div className="col-span-12 md:col-span-4">
                                    <Image
                                        alt={`${member.name} Photo`}
                                        className="object-cover rounded-lg"
                                        height={200}
                                        shadow="md"
                                        src={member.image}
                                        width="100%"
                                    />
                                </div>

                                {/* Text Section */}
                                <div className="flex flex-col col-span-12 md:col-span-8">
                                    <h3 className="text-2xl font-medium text-foreground">
                                        {member.name}
                                    </h3>
                                    <p className="text-small text-foreground/80">{member.title}</p>
                                    <p className="text-medium mt-4 text-foreground/70">
                                        {member.description}
                                    </p>
                                    {/* Social Links */}
                                    <div className="flex gap-4 mt-4 justify-end">
                                        <Link
                                            href={member.social.twitter}
                                            isExternal
                                            className="text-blue-500 hover:text-blue-700"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                className="w-5 h-5"
                                            >
                                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.176 0-.353-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996A4.107 4.107 0 0 0 16.616 4c-2.27 0-4.107 1.835-4.107 4.103 0 .32.036.633.106.934a11.654 11.654 0 0 1-8.456-4.287 4.103 4.103 0 0 0 1.27 5.468 4.077 4.077 0 0 1-1.856-.514v.052c0 2.042 1.452 3.742 3.377 4.124a4.1 4.1 0 0 1-1.85.07 4.108 4.108 0 0 0 3.834 2.847 8.233 8.233 0 0 1-5.096 1.757A8.319 8.319 0 0 1 2 19.187a11.616 11.616 0 0 0 6.29 1.842" />
                                            </svg>
                                        </Link>
                                        <Link
                                            href={member.social.linkedin}
                                            isExternal
                                            className="text-blue-600 hover:text-blue-800"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                className="w-5 h-5"
                                            >
                                                <path d="M20.452 20.452H17.27V14.8c0-1.35-.023-3.086-1.884-3.086-1.887 0-2.176 1.47-2.176 2.984v5.755h-3.186V9.958h3.06v1.438h.044c.425-.806 1.462-1.656 3.012-1.656 3.222 0 3.815 2.121 3.815 4.881v6.832zM4.656 8.339c-1.025 0-1.854-.83-1.854-1.854 0-1.026.829-1.854 1.854-1.854 1.024 0 1.854.828 1.854 1.854s-.83 1.854-1.854 1.854zM5.842 20.452H3.472V9.958h2.37v10.494zM22.223 0H1.771C.792 0 0 .792 0 1.771v20.452C0 23.208.792 24 1.771 24h20.452C23.208 24 24 23.208 24 22.223V1.771C24 .792 23.208 0 22.223 0z" />
                                            </svg>
                                        </Link>
                                        <Link
                                            href={member.social.github}
                                            isExternal
                                            className="text-gray-800 hover:text-black"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                className="w-5 h-5"
                                            >
                                                <path d="M12 .5C5.455.5 0 5.955 0 12.5a12.1 12.1 0 0 0 8.205 11.545c.6.11.795-.26.795-.578 0-.285-.01-1.04-.015-2.04-3.34.725-4.045-1.6-4.045-1.6-.545-1.385-1.33-1.755-1.33-1.755-1.09-.74.08-.725.08-.725 1.205.085 1.835 1.235 1.835 1.235 1.07 1.83 2.81 1.3 3.5.995.105-.775.415-1.3.755-1.6-2.665-.3-5.465-1.335-5.465-5.93 0-1.31.475-2.385 1.255-3.225-.125-.305-.545-1.53.125-3.18 0 0 1.005-.32 3.3 1.235a11.53 11.53 0 0 1 3.005-.405c1.02 0 2.05.135 3.005.405 2.3-1.555 3.3-1.235 3.3-1.235.675 1.65.255 2.875.125 3.18.775.84 1.255 1.915 1.255 3.225 0 4.61-2.805 5.625-5.475 5.92.43.37.82 1.09.82 2.205 0 1.59-.015 2.88-.015 3.27 0 .315.2.695.81.575A12.11 12.11 0 0 0 24 12.5C24 5.955 18.545.5 12 .5z" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </div>
    );
}