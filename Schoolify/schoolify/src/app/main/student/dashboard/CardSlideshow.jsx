import * as React from "react"

// import { Card, CardContent } from "@/components/ui/card"
import {
    Card,
    CardBody,
    CardFooter,
    Image,
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Button,
    useDisclosure,
    Link,
    Tooltip,
    Avatar,
    AvatarGroup,
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


    const list = [
        {
            title: "Mathematics",
            img: "/img/Subjects/mathematics.jpg",
        },
        {
            title: "Science",
            img: "/img/Subjects/science.jpg",
        },
        {
            title: "English",
            img: "/img/Subjects/english.jpg",
        },
        {
            title: "History",
            img: "/img/Subjects/history.jpg",
        },
        {
            title: "ICT",
            img: "/img/Subjects/ict.jpg",
        },
        {
            title: "Sinhala",
            img: "/img/Subjects/sinhala.jpg",
        },
        {
            title: "Commerce",
            img: "/img/Subjects/commerce.jpg",
        },
        {
            title: "Music",
            img: "/img/Subjects/arts.jpg",
        },
    ];

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
                        {list.map((item, index) => (
                            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card className="bg-white bg-opacity-40 w-80" key={index} isPressable shadow="sm" onPress={onOpen} >
                                        <CardBody className="overflow-visible p-0">
                                            <Image
                                                alt={item.title}
                                                className="w-full h-48 object-cover "
                                                radius="lg"
                                                shadow="sm"
                                                src={item.img}
                                                width="100%"
                                            />
                                        </CardBody>
                                        <CardFooter className="text-small text-black justify-between xw">
                                            <b>{item.title}</b>
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
            <Drawer
                hideCloseButton
                backdrop="blur"
                classNames={{
                    base: "data-[placement=right]:sm:m-2 data-[placement=left]:sm:m-2  rounded-medium",
                }}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
            >
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerBody>
                                <div className="flex w-full justify-center items-center pt-4">
                                    <Image
                                        isBlurred
                                        isZoomed
                                        alt="Event image"
                                        className="aspect-square w-full hover:scale-110"
                                        height={300}
                                        src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/places/san-francisco.png"
                                    />
                                </div>
                                <div className="flex flex-col gap-2 py-4">
                                    <h1 className="text-2xl font-bold leading-7">SF Bay Area Meetup in November</h1>
                                    <p className="text-sm text-default-500">
                                        555 California St, San Francisco, CA 94103
                                    </p>
                                    <div className="mt-4 flex flex-col gap-3">
                                        <div className="flex gap-3 items-center">
                                            <div className="flex-none border-1 border-default-200/50 rounded-small text-center w-11 overflow-hidden">
                                                <div className="text-tiny bg-default-100 py-0.5 text-default-500">Nov</div>
                                                <div className="flex items-center justify-center font-semibold text-medium h-6 text-default-500">
                                                    19
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-0.5">
                                                <p className="text-medium text-foreground font-medium">
                                                    Tuesday, November 19
                                                </p>
                                                <p className="text-small text-default-500">5:00 PM - 9:00 PM PST</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 items-center">
                                            <div className="flex items-center justify-center border-1 border-default-200/50 rounded-small w-11 h-11">
                                                <svg
                                                    className="text-default-500"
                                                    height="20"
                                                    viewBox="0 0 16 16"
                                                    width="20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g
                                                        fill="none"
                                                        fillRule="evenodd"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="1.5"
                                                    >
                                                        <path d="M2 6.854C2 11.02 7.04 15 8 15s6-3.98 6-8.146C14 3.621 11.314 1 8 1S2 3.62 2 6.854" />
                                                        <path d="M9.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="flex flex-col gap-0.5">
                                                <Link
                                                    isExternal
                                                    showAnchorIcon
                                                    anchorIcon={
                                                        <svg
                                                            className="group-hover:text-inherit text-default-400 transition-[color,transform] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                                            fill="none"
                                                            height="16"
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            viewBox="0 0 24 24"
                                                            width="16"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M7 17 17 7M7 7h10v10" />
                                                        </svg>
                                                    }
                                                    className="group gap-x-0.5 text-medium text-foreground font-medium"
                                                    href="https://www.google.com/maps/place/555+California+St,+San+Francisco,+CA+94103"
                                                    rel="noreferrer noopener"
                                                >
                                                    555 California St suite 500
                                                </Link>
                                                <p className="text-small text-default-500">San Francisco, California</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col mt-4 gap-3 items-start">
                                            <span className="text-medium font-medium">About the event</span>
                                            <div className="text-medium text-default-500 flex flex-col gap-2">
                                                <p>
                                                    Hey Bay Area! We are excited to announce our next meetup on Tuesday,
                                                    November 19th.
                                                </p>
                                                <p>
                                                    Join us for an evening of insightful discussions and hands-on workshops
                                                    focused on the latest developments in web development and design. Our
                                                    featured speakers will share their experiences with modern frontend
                                                    frameworks, responsive design patterns, and emerging web technologies.
                                                    You&apos;ll have the opportunity to network with fellow developers and
                                                    designers while enjoying refreshments and snacks.
                                                </p>
                                                <p>
                                                    During the main session, we&apos;ll dive deep into practical examples of
                                                    building scalable applications, exploring best practices for component
                                                    architecture, and understanding advanced state management techniques. Our
                                                    interactive workshop portion will let you apply these concepts directly,
                                                    with experienced mentors available to provide guidance and answer your
                                                    questions. Whether you&apos;re a seasoned developer or just starting your
                                                    journey, you&apos;ll find valuable takeaways from this session.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </DrawerBody>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </>
    )
}
