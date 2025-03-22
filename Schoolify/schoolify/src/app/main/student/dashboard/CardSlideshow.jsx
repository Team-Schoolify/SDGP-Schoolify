import * as React from "react"
import { useEffect, useState } from "react"
import { supabase } from "@/app/lib/supabaseClient"

import {
    Card,
    CardBody,
    CardFooter,
    Image,
    Drawer,
    DrawerContent,
    DrawerBody,
    useDisclosure,
} from "@nextui-org/react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/app/components/ui/carousel"

export default function CardSlideshow() {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);

    useEffect(() => {
        const fetchEvents = async () => {
          const { data, error } = await supabase
            .from("events")
            // fetch the columns you need
            .select("id, title, date, start_time, end_time, location, description, photo");
          if (error) {
            console.error("Error fetching events:", error);
          } else {
            setEvents(data);
          }
        };

        fetchEvents();
    }, []);

    // Function to open the drawer with selected event details
    const handleOpenDrawer = (event) => {
        setSelectedEvent(event);
        onOpen();
    };

    // Helper function to get the correct image src
    const getEventImage = (event) => {
        if (!event.photo) {
            return "/img/default-image.jpg";
        }
        // if 'photo' is a full URL
        if (event.photo.startsWith("http")) {
            return event.photo;
        }
        // else assume it's a local image in /public/img
        return `/img/${event.photo}`;
    };

    // Helper function to format time
    const formatTime = (timeString) => {
        if (!timeString) return ""; // Handle null or undefined values
        const dateObj = new Date(`1970-01-01T${timeString}`);
        return dateObj.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true });
    };
    
    // Helper function to format date
    const formatDate = (dateString) => {
        if (!dateString) return ""; // Handle null or undefined values
        const dateObj = new Date(dateString);
        return dateObj.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    };

    return (
        <>
            <div >
                <h1 className="mt-24 text-4xl font-sans font-bold left-0 relative inline-block text-black">
                    Events
                    <span
                        className="absolute bottom-[-4px] left-0 w-1/2 h-[3px] bg-gradient-to-r from-blue-500 to-blue-200"
                        style={{
                            width: "30%",
                        }}
                    ></span>
                </h1>
            </div>

            <section id="hero" className="mt-5 px-10 py-10 sm:py-16 lg:py-15 rounded-3xl">
                <Carousel className="w-full max-w-full">
                    <CarouselContent className="-ml-1">
                        {events.map((event, index) => (
                            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card className="bg-white bg-opacity-40" key={index} isPressable shadow="sm" onPress={() => handleOpenDrawer(event)}>
                                        <CardBody className="overflow-visible p-0">
                                        <Image
                                            alt={event.title}
                                            className="w-full h-50 object-cover"
                                            radius="lg"
                                            shadow="sm"
                                            src={getEventImage(event)} 
                                            width="100%"
                                        />
                                        </CardBody>
                                        <CardFooter className="text-small text-black justify-between xw">
                                            <b>{event.title}</b>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </section>

            {/* Drawer - Displays Selected Event Details */}
            <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
                <DrawerContent className="bg-gray-600 p-5">
                    <DrawerBody className="p-5">
                        {selectedEvent ? (
                            <div className="flex flex-col items-center space-y-4">
                                {/* Event Image */}
                                <Image
                                    alt={selectedEvent.title}
                                    className="w-full max-w-lg object-cover rounded-lg"
                                    src={getEventImage(selectedEvent)}
                                />

                                {/* Event Title */}
                                <h2 className="text-3xl font-bold text-center">{selectedEvent.title}</h2>

                                {/* Event Location */}
                                <p className="text-lg text-gray-300 font-medium">📍 {selectedEvent.location}</p>

                                {/* Event Date & Time */}
                                <p className="text-md text-gray-300">
                                    📅 {formatDate(selectedEvent.date)} | 🕒 {formatTime(selectedEvent.start_time)} - {formatTime(selectedEvent.end_time)}
                                </p>

                                {/* Event Description */}
                                <p className="mt-2 text-gray-300 text-center px-4">{selectedEvent.description}</p>
                            </div>
                        ) : (
                            <p className="text-center">Loading...</p>
                        )}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}