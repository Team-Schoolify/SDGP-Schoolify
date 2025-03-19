import { useEffect, useRef } from "react";
import { Card, CardHeader, Image } from "@nextui-org/react";

export default function Features() {
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
            { threshold: 0.2 }
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
        <div id="features" className="mt-9 bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-15 rounded-3xl">
            <div className="mb-10">
                <h1 className="text-4xl text-black font-sans font-bold relative inline-block">
                    Features
                    <span
                        className="absolute bottom-[-4px] left-0 w-1/2 h-[3px] bg-gradient-to-r from-blue-500 to-blue-200"
                        style={{
                            width: "30%",
                        }}
                    ></span>
                </h1>
            </div>
            <div className="w-full max-w-[1200px] mx-auto gap-4 grid grid-cols-12 grid-rows-2 px-4">
                {[
                    { title: "Real-Time Notifications", image: "/img/notification.png", description: "Notify parents, students, and teachers about important event, deadlines, and updates." },
                    { title: "Attendance Tracking", image: "/img/attendance.png", description: "Digital submission, grading, and feedback on resources." },
                    { title: "Homework and Assignments", image: "/img/homework.png", description: "Digital submission, grading, and feedback on resources." },
                    { title: "Analytics and Insights", image: "/img/analytics.png", description: "Detailed reports for teachers and administrators on student performance." },
                    { title: "Your day your way", image: "https://nextui.org/images/card-example-5.jpeg", description: "Help save the planet" },
                    { title: "What to watch", image: "https://nextui.org/images/card-example-4.jpeg", description: "Help save the planet" },
                ].map((card, index) => (
                    <Card
                        key={index}
                        ref={(el) => (cardRefs.current[index] = el)}
                        className="opacity-0 transition-opacity duration-500 col-span-12 sm:col-span-4 h-[300px] relative group cursor-pointer"
                    >
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-large text-white/80 uppercase font-bold">{card.title}</p>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src={card.image}
                        />
                        {/* Hover Description */}
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                            <p className="text-white text-lg font-semibold text-center ml-3 mr-3">{card.description}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}