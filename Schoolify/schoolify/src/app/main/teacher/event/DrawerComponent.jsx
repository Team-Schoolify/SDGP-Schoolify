"use client";

import React, {useEffect, useState} from "react";
import {  Drawer,  
    DrawerContent,  
    DrawerHeader,  
    DrawerBody,  
    DrawerFooter, 
    Button, 
    Input, 
    DatePicker, 
    TimeInput, 
    Card, 
    CardBody, 
    CardHeader, 
    CardFooter, 
    Divider, 
    RadioGroup, 
    Radio, 
    Textarea, 
    Calendar,
    Image
    } 
    from "@heroui/react";

import { useDisclosure } from "@heroui/react";
import { Time, today, getLocalTimeZone } from "@internationalized/date";
import {supabase} from "@/app/lib/supabaseClient";
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f8965ee033cdaf20f83f9b8aa8b8ec53c9c2b881


export default function DrawerComponent() {
    // Disclosure hooks for main and nested drawers
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
<<<<<<< HEAD
=======
=======
import {Form} from "@nextui-org/react";


export default function DrawerComponent({ isOpen, onOpenChange }) {
    // Disclosure hooks for main and nested drawers
    // const {isOpen, onOpen, onOpenChange} = useDisclosure();
>>>>>>> 8c161dff35ceb5e4130dbbf5164120827a129398
>>>>>>> f8965ee033cdaf20f83f9b8aa8b8ec53c9c2b881
    const {isOpen: isNestedOpen, onOpen: onNestedOpen, onOpenChange: onNestedOpenChange} = useDisclosure();
    const { isOpen: isViewAllOpen, onOpen: onViewAllOpen, onOpenChange: onViewAllChange } = useDisclosure();
    const { isOpen: isEventDetailOpen, onOpen: onEventDetailOpen, onOpenChange: onEventDetailChange } = useDisclosure();
    
    // Form fields states
    const [selectedOption, setSelectedOption] = useState("all-day");
    const [startTime, setStartTime] = useState(new Time(0, 0));
    const [endTime, setEndTime] = useState(new Time(23, 59));

    // new
    const [eventTitle, setEventTitle] = useState("");
    const [eventDate, setEventDate] = useState(today(getLocalTimeZone()));
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    const [photo, setPhoto] = useState("");
>>>>>>> 8c161dff35ceb5e4130dbbf5164120827a129398
>>>>>>> f8965ee033cdaf20f83f9b8aa8b8ec53c9c2b881

    // State for the list of events
    const [events, setEvents] = useState([]);

    // State for More Details 
<<<<<<< HEAD
    const [selectedEvent, setSelectedEvent] = useState(null)
=======
<<<<<<< HEAD
    const [selectedEvent, setSelectedEvent] = useState(null)
=======
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [schoolId, setSchoolId] = useState(null);


    // fetching the school id
    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedSchoolId = localStorage.getItem("school_id");

            setSchoolId(storedSchoolId);
        }
    }, []);
>>>>>>> 8c161dff35ceb5e4130dbbf5164120827a129398
>>>>>>> f8965ee033cdaf20f83f9b8aa8b8ec53c9c2b881

    // Handle radio button change for time selection
    const handleOptionChange = (value) => {
        setSelectedOption(value);

        if (value === "all-day") {
          setStartTime(new Time(0, 0));
          setEndTime(new Time(23, 59));
        }

    };

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f8965ee033cdaf20f83f9b8aa8b8ec53c9c2b881
    // Handle form submission to save a new event
    // const handleSaveEvent = (e) => {
    //     if (e && e.preventDefault) {
    //         e.preventDefault(); // Ensure it's an event object before calling this
    //     }
    //
    //     const newEvent = {
    //     title: eventTitle,
    //     date: eventDate,
    //
    //     // Format time based on the option selected
    //     time: selectedOption === "all-day" ? "All Day" : `${startTime.toString()} - ${endTime.toString()}`,
    //     location,
    //     description,
    //     };
    //
    //     // Add the new event to the events list
    //     setEvents([...events, newEvent]);
    //
    //     // Reset form fields after saving
    //     setEventTitle("");
    //     setEventDate(today(getLocalTimeZone()));
    //     setLocation("");
    //     setDescription("");
    //     setSelectedOption("all-day");
    //     setStartTime(new Time(0, 0));
    //     setEndTime(new Time(23, 59));
    //
    //     // Close the nested drawer
    //     onNestedOpenChange(false);
    //
    // };

<<<<<<< HEAD
=======
=======
>>>>>>> 8c161dff35ceb5e4130dbbf5164120827a129398
>>>>>>> f8965ee033cdaf20f83f9b8aa8b8ec53c9c2b881
    const handleSaveEvent = async (e) => {
        if (e && e.preventDefault) {
            e.preventDefault();
        }

        // Ensure time fields have a valid format
        let formattedStartTime = selectedOption === "all-day" ? "00:00" : startTime.toString();
        let formattedEndTime = selectedOption === "all-day" ? "23:59" : endTime.toString();

        // Ensure required fields are not empty
        if (!eventTitle || !eventDate) {
            console.error("Error: Title and Date are required");
            return;
        }

        const newEvent = {
            title: eventTitle.trim(),
            date: eventDate.toString(),
            start_time: formattedStartTime,
            end_time: formattedEndTime,
            location: location.trim() || "No location specified",
<<<<<<< HEAD
            description: description.trim() || "No description provided"
=======
<<<<<<< HEAD
            description: description.trim() || "No description provided"
=======
            description: description.trim() || "No description provided",
            photo: photo.trim() || "No description provided",
            school_id: schoolId
>>>>>>> 8c161dff35ceb5e4130dbbf5164120827a129398
>>>>>>> f8965ee033cdaf20f83f9b8aa8b8ec53c9c2b881
        };

        console.log("Inserting new event:", newEvent);

        const { data, error } = await supabase.from("events").insert([newEvent]).select("*");

        if (error) {
            console.error("Error saving event:", error);
            return;
        }

        if (data && data.length > 0) {
            console.log("Event saved successfully:", data[0]);
            setEvents([...events, data[0]]);
        } else {
            console.warn("Event saved, but no data returned. Fetching updated list...");
            fetchEvents(); // Fetch latest events if no direct data is returned
        }

        // Reset form fields
        setEventTitle("");
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
        setPhoto("");
>>>>>>> 8c161dff35ceb5e4130dbbf5164120827a129398
>>>>>>> f8965ee033cdaf20f83f9b8aa8b8ec53c9c2b881
        setEventDate(today(getLocalTimeZone()));
        setLocation("");
        setDescription("");
        setSelectedOption("all-day");
        setStartTime(new Time(0, 0));
        setEndTime(new Time(23, 59));

        // Close the drawer
        onNestedOpenChange(false);
    };


    // Delete event cards
    // const handleDeleteEvent = (eventIndex) => {
    //     const updatedEvents = events.filter((_, index) => index !== eventIndex);
    //     setEvents(updatedEvents);
    // };

    const handleDeleteEvent = async (eventId) => {
        // Confirm deletion before proceeding (optional)
        const confirmDelete = window.confirm("Are you sure you want to delete this event?");
        if (!confirmDelete) return;

        console.log(`Deleting event with ID: ${eventId}`);

        // Delete the event from Supabase
        const { error } = await supabase.from("events").delete().eq("id", eventId);

        if (error) {
            console.error("Error deleting event:", error);
            return;
        }

        console.log("Event deleted successfully:", eventId);

        // Remove the event from the state
        setEvents((prevEvents) => prevEvents.filter(event => event.id !== eventId));
    };

    // Open the event details drawer
    const handleViewMore = (event) => {
        setSelectedEvent(event);
        onEventDetailOpen();
    };



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
  
    return (
      <>
<<<<<<< HEAD
        <Button onPress={onOpen}>Open Drawer</Button>

        <Drawer isOpen={isOpen} size="md" onOpenChange={onOpenChange}>
=======
<<<<<<< HEAD
        <Button onPress={onOpen}>Open Drawer</Button>

        <Drawer isOpen={isOpen} size="md" onOpenChange={onOpenChange}>
=======
        {/*<Button onPress={onOpen}>Open Drawer</Button>*/}

        <Drawer isOpen={isOpen} size="md" onOpenChange={onOpenChange} backdrop="blur">
>>>>>>> 8c161dff35ceb5e4130dbbf5164120827a129398
>>>>>>> f8965ee033cdaf20f83f9b8aa8b8ec53c9c2b881

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

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f8965ee033cdaf20f83f9b8aa8b8ec53c9c2b881
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

                {/*                        /!* Delete Button *!/*/}
                {/*                        <Button */}
                {/*                            color="none"*/}
                {/*                            variant="ghost"*/}
                {/*                            size="sm" */}
                {/*                            onPress={() => handleDeleteEvent(index)}*/}
                {/*                            >*/}
                {/*                            Delete*/}
                {/*                        </Button>*/}
                {/*                    */}
                {/*                    </CardFooter>*/}

                {/*                </Card>*/}
                {/*            ))*/}
                {/*        )}*/}

                {/*    </div>*/}

                {/*</DrawerBody>*/}

<<<<<<< HEAD
=======
=======
>>>>>>> 8c161dff35ceb5e4130dbbf5164120827a129398
>>>>>>> f8965ee033cdaf20f83f9b8aa8b8ec53c9c2b881
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
                                          <Button
                                              color="none"
                                              variant="ghost"
                                              size="sm"
                                              onPress={() => handleDeleteEvent(event.id)}
                                          >
                                              Delete
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
                  <Button color="primary" onPress={onNestedOpen}>
                    Add New Event
                  </Button>
                </DrawerFooter>
              </>
            )}
          </DrawerContent>
        </Drawer>

        <Drawer 
            isOpen={isNestedOpen} 
            onOpenChange={onNestedOpenChange} 
            disableAnimation={true} 
            backdrop="transparent" 
            placement="right"
        >
            <DrawerContent>
                {(onNestedClose) => (
                    <>
                        <DrawerHeader className="flex flex-col gap-1 justify-center items-center">Add New Event</DrawerHeader>
<<<<<<< HEAD
                            <DrawerBody>
=======
<<<<<<< HEAD
                            <DrawerBody>
=======

                            <DrawerBody>
                                <Form validationBehavior="native" className="w-full gap-y-9" onSubmit={handleSaveEvent}>
>>>>>>> 8c161dff35ceb5e4130dbbf5164120827a129398
>>>>>>> f8965ee033cdaf20f83f9b8aa8b8ec53c9c2b881

                                
                                    <Input 
                                        isRequired 
                                        label="Event Title" 
                                        placeholder="Add an event title" 
<<<<<<< HEAD
                                        maxLength={45} 
=======
<<<<<<< HEAD
                                        maxLength={45} 
=======
>>>>>>> 8c161dff35ceb5e4130dbbf5164120827a129398
>>>>>>> f8965ee033cdaf20f83f9b8aa8b8ec53c9c2b881
                                        value={eventTitle}
                                        onChange={(e) => setEventTitle(e.target.value)}
                                    />

                                    <DatePicker 
                                        label="Event Date" 
                                        isRequired
                                        value={eventDate}
                                        onChange={setEventDate}
                                    />

                                    <div className="flex flex-col gap-4">
                                        <RadioGroup orientation="horizontal" value={selectedOption} onValueChange={handleOptionChange}>
                                            <Radio value="all-day">All Day</Radio>
                                            <Radio value="specific-time" >Specific Time</Radio>
                                        </RadioGroup>

                                        <TimeInput 
                                            isRequired 
                                            label="Starting time" 
                                            isDisabled={selectedOption === "all-day"} 
                                            value={startTime} 
                                            onChange={setStartTime}
                                        />

                                        <TimeInput 
                                            isRequired 
                                            label="End time" 
                                            isDisabled={selectedOption === "all-day"} 
                                            value={endTime} 
                                            onChange={setEndTime}
                                        />

                                    </div>
                                    
                                    
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f8965ee033cdaf20f83f9b8aa8b8ec53c9c2b881
                                    <Input 
                                        label="Location" 
                                        placeholder="Add a location" 
                                        maxLength={45}
<<<<<<< HEAD
=======
=======
                                    <Input
                                        isRequired
                                        label="Location" 
                                        placeholder="Add a location" 
>>>>>>> 8c161dff35ceb5e4130dbbf5164120827a129398
>>>>>>> f8965ee033cdaf20f83f9b8aa8b8ec53c9c2b881
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)} 
                                    />

<<<<<<< HEAD
                                    <Textarea 
=======
<<<<<<< HEAD
                                    <Textarea 
=======
                                    <Input
                                        isRequired
                                        label="Photo"
                                        placeholder="Add a Poto"
                                        value={photo}
                                        onChange={(e) => setPhoto(e.target.value)}
                                    />

                                    <Textarea
                                        isRequired
>>>>>>> 8c161dff35ceb5e4130dbbf5164120827a129398
>>>>>>> f8965ee033cdaf20f83f9b8aa8b8ec53c9c2b881
                                        label="Description" 
                                        placeholder="Describe the event" 
                                        maxLength={315} 
                                        minRows={1} 
                                        maxRows={7} 
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />

<<<<<<< HEAD
                            </DrawerBody>
                            <DrawerFooter>
=======
<<<<<<< HEAD
                            </DrawerBody>
                            <DrawerFooter>
=======
                                    <div className="flex gap-2">
>>>>>>> 8c161dff35ceb5e4130dbbf5164120827a129398
>>>>>>> f8965ee033cdaf20f83f9b8aa8b8ec53c9c2b881
                                        <Button color="danger" variant="light" onPress={onNestedClose}>
                                            Cancel
                                        </Button>

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f8965ee033cdaf20f83f9b8aa8b8ec53c9c2b881
                                        <Button color="primary" onPress={handleSaveEvent}>
                                            Save Event
                                        </Button>
                            </DrawerFooter>
<<<<<<< HEAD
=======
=======
                                        <Button color="primary" type="submit" >
                                            Save Event
                                        </Button>
                                    </div>
                                </Form>

                            </DrawerBody>
                            {/*<DrawerFooter>*/}
                            {/*            <Button color="danger" variant="light" onPress={onNestedClose}>*/}
                            {/*                Cancel*/}
                            {/*            </Button>*/}

                            {/*            <Button color="primary" type="submit" >*/}
                            {/*                Save Event*/}
                            {/*            </Button>*/}
                            {/*</DrawerFooter>*/}

>>>>>>> 8c161dff35ceb5e4130dbbf5164120827a129398
>>>>>>> f8965ee033cdaf20f83f9b8aa8b8ec53c9c2b881
                            
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

                                                    {/* Delete Button */}
                                                    <Button 
                                                        color="none"
                                                        variant="ghost"
                                                        size="sm" 
                                                        onPress={() => handleDeleteEvent(index)}
                                                        >
                                                        Delete
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
<<<<<<< HEAD
                                    src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/places/san-francisco.png"
=======
<<<<<<< HEAD
                                    src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/places/san-francisco.png"
=======
                                    src={selectedEvent.photo || "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/places/san-francisco.png"}
>>>>>>> 8c161dff35ceb5e4130dbbf5164120827a129398
>>>>>>> f8965ee033cdaf20f83f9b8aa8b8ec53c9c2b881
                                    />
                                </div>
                                 
                                
                                <div className="flex flex-col gap-2 py-4">


                                </div>
                                
                                <p><strong>Date:</strong> {new Date(selectedEvent.date).toLocaleDateString("en-GB", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                })}</p>
<<<<<<< HEAD
                                <p><strong>Time:</strong> {selectedEvent.time}</p>
=======
<<<<<<< HEAD
                                <p><strong>Time:</strong> {selectedEvent.time}</p>
=======
                                <p><strong>Time:</strong> {selectedEvent.start_time}</p>
>>>>>>> 8c161dff35ceb5e4130dbbf5164120827a129398
>>>>>>> f8965ee033cdaf20f83f9b8aa8b8ec53c9c2b881
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

  