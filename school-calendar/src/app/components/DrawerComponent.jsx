"use client";

import {  Drawer,  DrawerContent,  DrawerHeader,  DrawerBody,  DrawerFooter, Button} from "@heroui/react";
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
                <DrawerHeader className="flex flex-col gap-1">School Calendar</DrawerHeader>
                <CalendarComponent/>
                <DrawerBody>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                    risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                    quam.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                    risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                    quam.
                  </p>
                  <p>
                    Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
                    adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
                    officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                    nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
                    deserunt nostrud ad veniam.
                  </p>
                </DrawerBody>
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
                                <p>Forum here</p>
                            </DrawerBody>
                            <DrawerFooter>
                                <Button color="danger" variant="light" onPress={onNestedClose}>
                                    Cancel
                                </Button>
                            </DrawerFooter>
                    </>
                )}
            </DrawerContent>
        </Drawer>
      </>
    );
  }