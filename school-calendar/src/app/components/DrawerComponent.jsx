"use client";

import {  Drawer,  DrawerContent,  DrawerHeader,  DrawerBody,  DrawerFooter, Button, Input, DatePicker, Checkbox, TimeInput, Card, CardBody, CardHeader, Divider} from "@heroui/react";
import { useDisclosure } from "@heroui/react";
import CalendarComponent from "./CalendarComponent";

export default function DrawerComponent() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {isOpen: isNestedOpen, onOpen: onNestedOpen, onOpenChange: onNestedOpenChange} = useDisclosure();
  
    return (
      <>
        <Button onPress={onOpen}>Open Drawer</Button>

        <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
          <DrawerContent>
            {(onClose) => (
              <>
                <DrawerHeader className="flex flex-col gap-1 justify-center items-center">School Calendar</DrawerHeader>
                <CalendarComponent/>
                <br/><hr/>
                {/* <h4>Upcoming Events</h4> */}
                <DrawerBody className="flex flex-col gap-4 overflow-y-auto max-h-[50vh] px-4">
                    <h3 className="text-lg font-semibold">Upcoming Events</h3>

                    {/* <Card className="w-full p-4 shadow-md">
                        <CardHeader>Card</CardHeader>
                        <Divider />
                        <CardBody> Content for Card</CardBody>
                    </Card> */}

                    <div className="flex flex-col gap-2">

                        <Card className="w-full p-1">
                        <CardHeader>Card 1</CardHeader>
                        <Divider />
                        <CardBody>Content for Card</CardBody>
                        </Card>

                        <Card className="w-full p-1">
                        <CardHeader>Card 2</CardHeader>
                        <Divider />
                        <CardBody>Another Content</CardBody>
                        </Card>

                        <Card className="w-full p-1">
                        <CardHeader>Card 3</CardHeader>
                        <Divider />
                        <CardBody>More Content</CardBody>
                        </Card>

                        <Card className="w-full p-1">
                        <CardHeader>Card 3</CardHeader>
                        <Divider />
                        <CardBody>More Content</CardBody>
                        </Card>

                        <Card className="w-full p-1">
                        <CardHeader>Card 3</CardHeader>
                        <Divider />
                        <CardBody>More Content</CardBody>
                        </Card>

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

        <Drawer isOpen={isNestedOpen} onOpenChange={onNestedOpenChange} disableAnimation={true} backdrop="transparent" placement="right">
            <DrawerContent>
                {(onNestedClose) => (
                    <>
                        <DrawerHeader className="flex flex-col gap-1">Add New Event</DrawerHeader>
                            <DrawerBody>

                                <form className="flex flex-col gap-4">
                                    <Input label="Event Title" placeholder="Add an event title" />
                                    <DatePicker label="Event Date" />
                                    <TimeInput label="Starting time"></TimeInput>
                                    <TimeInput label="End time"></TimeInput>
                                    {/* <DatePicker label="End Date" /> */}
                                    <Checkbox>All Day</Checkbox>
                                    <Checkbox>Repeat Event</Checkbox>
                                    <Input label="Location" placeholder="Add a location" />
                                    <Input label="Description" placeholder="Describe the event" />
                                </form>

                            </DrawerBody>
                            <DrawerFooter>
                                <Button color="danger" variant="light" onPress={onNestedClose}>
                                    Cancel
                                </Button>
                                <Button color="primary">
                                    Save Event
                                </Button>
                            </DrawerFooter>
                    </>
                )}
            </DrawerContent>
        </Drawer>
      </>
    );
  }