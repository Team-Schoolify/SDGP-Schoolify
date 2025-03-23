"use client";

import React, { useState, useEffect } from "react";
import {  Drawer,  
    DrawerContent,  
    DrawerHeader,  
    DrawerBody,  
    DrawerFooter, 
    Button,   
    Card, 
    CardBody, 
    CardHeader, 
    CardFooter, 
    Divider,  
    Calendar,
    Image
    } 
    from "@heroui/react";

import { useDisclosure } from "@heroui/react";
import { today, getLocalTimeZone } from "@internationalized/date";
import { supabase } from "@/app/lib/supabaseClient";


export default function DrawerComponentParentAndStudent({ isOpen, onOpenChange }) {
    // Disclosure hooks for main and nested drawers
    // const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { isOpen: isViewAllOpen, onOpen: onViewAllOpen, onOpenChange: onViewAllChange } = useDisclosure();
    const { isOpen: isEventDetailOpen, onOpen: onEventDetailOpen, onOpenChange: onEventDetailChange } = useDisclosure();

    // State for the list of events
    const [events, setEvents] = useState([]);

    // State for More Details 
    const [selectedEvent, setSelectedEvent] = useState(null);

    // Fetch events from Supabase on component mount
    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        const { data, error } = await supabase.from("events").select("*");
        if (error) {
            console.error("Error fetching events:", error);
        } else {
            setEvents(data);
        }
    };

    // Open the event details drawer
    const handleViewMore = (event) => {
        setSelectedEvent(event);
        onEventDetailOpen();
    };
  
    return (
      <>
        {/*<Button onPress={onOpen}>Open Drawer</Button>*/}

        <Drawer isOpen={isOpen} size="md" onOpenChange={onOpenChange} backdrop="blur">

          <DrawerContent>
            {(onClose) => (
              <>

                <DrawerHeader className="flex flex-col gap-1 justify-center items-center">School Calendar</DrawerHeader>
                
                <div className="flex justify-center items-center">
                    <Calendar 
                        classNames={{cell: "custom-cell", gridHeaderCell: "custom-header-cell"}} 
                        calendarWidth={350} 
                        isReadOnly 
                        aria-label="Date (Read Only)" 
                        value={today(getLocalTimeZone())} 
                    />
                </div>

                <br/>
                <div className="sticky top-0 z-10 p-1 pl-4 pb-2 flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Upcoming Events</h3>
                    <div className="pr-1">
                        <Button radius="full" color="primary" variant="light" size="sm" onPress={onViewAllOpen}>
                            View All
                        </Button>
                    </div>
                    
                </div>
                <hr/>

                {/*<DrawerBody className="flex flex-col gap-4 overflow-y-scroll max-h-[50vh] px-5 scrollbar-hide">*/}
                {/*    */}
                {/*    <div className="flex flex-col gap-2">*/}

                {/*        {events.length === 0 ? (*/}
                {/*            <p className="text-sm text-gray-500">No upcoming events</p>*/}

                {/*        ) : (*/}

                {/*            events.map((event, index) => (*/}

                {/*                <Card key={index} className="w-full p-1" classNames={{ header: "text-sm", body: "text-sm" }}>*/}

                {/*                    <CardHeader */}
                {/*                        className="pr-1 pb-2 pt-1 font-medium flex justify-between items-center">*/}
                {/*                        {event.title}*/}
                {/*                    </CardHeader>*/}

                {/*                    <Divider />*/}
                {/*                    */}
                {/*                    <CardBody className="pb-0">*/}
                {/*                        Date: {event.date.toString()} <br/>*/}
                {/*                        Time: {event.time}*/}
                {/*                    </CardBody>*/}
                {/*                    */}
                {/*                    <CardFooter className="flex justify-end gap-2">*/}

                {/*                        /!* More Details Button *!/*/}
                {/*                        <Button */}
                {/*                            color="none"*/}
                {/*                            variant="ghost"*/}
                {/*                            size="sm" */}
                {/*                            onPress={() => handleViewMore(event)}*/}
                {/*                            >*/}
                {/*                            More Details*/}
                {/*                        </Button>*/}

                {/*                    */}
                {/*                    */}
                {/*                    </CardFooter>*/}

                {/*                </Card>*/}
                {/*            ))*/}
                {/*        )}*/}

                {/*    </div>*/}

                {/*</DrawerBody>*/}

                  <DrawerBody className="flex flex-col gap-4 overflow-y-scroll max-h-[50vh] px-5 scrollbar-hide">
                      <div className="flex flex-col gap-2">
                          {events.length === 0 ? (
                              <p className="text-sm text-gray-500">No upcoming events</p>
                          ) : (
                              events.map((event) => (
                                  <Card key={event.id} className="w-full p-1" classNames={{ header: "text-sm", body: "text-sm" }}>
                                      <CardHeader className="pr-1 pb-2 pt-1 font-medium flex justify-between items-center">
                                          {event.title}
                                      </CardHeader>
                                      <Divider />
                                      <CardBody className="pb-0">
                                          Date: {new Date(event.date).toLocaleDateString("en-GB")} <br/>
                                          Time: {event.start_time ? `${event.start_time} - ${event.end_time}` : "All Day"}
                                      </CardBody>
                                      <CardFooter className="flex justify-end gap-2">
                                          <Button
                                              color="none"
                                              variant="ghost"
                                              size="sm"
                                              onPress={() => handleViewMore(event)}
                                          >
                                              More Details
                                          </Button>
                                      </CardFooter>
                                  </Card>
                              ))
                          )}
                      </div>
                  </DrawerBody>


                  <hr/>
                <DrawerFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </DrawerFooter>
              </>
            )}
          </DrawerContent>
        </Drawer>

        {/* View All Drawer */}
        <Drawer isOpen={isViewAllOpen} onOpenChange={onViewAllChange} disableAnimation={true} backdrop="transparent" placement="right">
                <DrawerContent>
                    {(onViewAllClose) => (
                        <>
                            <DrawerHeader className="flex flex-col gap-1 justify-center items-center">Upcoming Events</DrawerHeader>
                            <DrawerBody className="flex flex-col gap-4 overflow-y-scroll px-5 scrollbar-hide">

                                {/* Display Events in New Event Drawer */}
                                <div className="flex flex-col gap-2">
                                    {events.length === 0 ? (
                                        <p className="text-sm text-gray-500">No upcoming events</p>
                                    ) : (
                                        events.map((event, index) => (
                                            <Card key={index} className="w-full p-1" classNames={{ header: "text-sm", body: "text-sm" }}>

                                                <CardHeader className="pr-1 pb-2 pt-1 font-medium flex justify-between items-center">
                                                    {event.title}

                                                    
                                                    
                                                    </CardHeader>

                                                <Divider />
                                                <CardBody className="pb-0">
                                                    Date: {event.date.toString()} <br/>
                                                    Time: {event.time}
                                                </CardBody>
                                                <CardFooter className="flex justify-end gap-2">

                                                    {/* More Details Button */}
                                                    <Button 
                                                        color="none"
                                                        variant="ghost"
                                                        size="sm" 
                                                        onPress={() => handleViewMore(event)}
                                                        >
                                                        More Details
                                                    </Button>
                                                
                                                </CardFooter>
                                            </Card>
                                        ))
                                    )}
                                </div>

                            </DrawerBody>
                            <DrawerFooter>
                                <Button color="danger" variant="light" onPress={onViewAllClose}>
                                    Go Back
                                </Button>
                            </DrawerFooter>
                        </>
                    )}
                </DrawerContent>
            </Drawer>

            {/* Event Details Drawer */}
            <Drawer isOpen={isEventDetailOpen} onOpenChange={onEventDetailChange} disableAnimation={true} backdrop="transparent" placement="right">
                
                <DrawerContent>

                    {(onEventDetailClose) => (
                        <>
                        <DrawerHeader className="flex flex-col gap-1 justify-center items-center">
                            <h1 className="text-2xl font-bold leading-7">{selectedEvent?.title}</h1>
                        </DrawerHeader>
                        <DrawerBody>
                            {selectedEvent ? (
                            <>
                                <div className="flex w-full justify-center items-center pt-4">
                                    <Image
                                    isBlurred
                                    isZoomed
                                    alt="Event image"
                                    className="aspect-square w-full hover:scale-110"
                                    height={300}
                                    src={selectedEvent.photo || "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/places/san-francisco.png"}
                                    />
                                </div>
                                 
                                
                                <div className="flex flex-col gap-2 py-4">


                                </div>
                                
                                <p><strong>Date:</strong> {new Date(selectedEvent.date).toLocaleDateString("en-GB", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                })}</p>
                                <p><strong>Time:</strong> {selectedEvent.start_time}</p>
                                <p><strong>Location:</strong> {selectedEvent.location}</p>
                                <p><strong>About the Event:</strong> {selectedEvent.description}</p>
                            </>
                            ) : (
                                <p>No event selected</p>
                            )}
                        </DrawerBody>
                        <DrawerFooter>
                            <Button color="danger" variant="light" onPress={onEventDetailClose}>
                                Close
                            </Button>
                        </DrawerFooter>
                        </>
                    )}

                </DrawerContent>
        </Drawer>
      </>
    );
  }

  