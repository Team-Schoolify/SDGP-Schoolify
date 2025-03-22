import React, { useEffect, useState } from "react";
import { supabase } from "@/app/lib/supabaseClient";
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
    useDisclosure, CardHeader,
    Link,
} from "@heroui/react";

export default function SubjectResources() {
    // State variables
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [studentId, setStudentId] = useState(null);
    const [studentGrade, setStudentGrade] = useState(null);
    const [subjectScheme, setSubjectScheme] = useState(null);
    const [selectedSubject, setSelectedSubject] = useState("");
    const [resources, setResources] = useState([]);

    // Fetch student ID from local storage
    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedStudentId = localStorage.getItem("student_id");
            setStudentId(storedStudentId);
        }
    }, []);

    // Fetch student grade & subject scheme from Supabase
    useEffect(() => {
        const fetchStudentDetails = async () => {
            if (studentId) {
                const { data, error } = await supabase
                    .from("student")
                    .select("student_grade, subject_scheme")
                    .eq("student_id", studentId)
                    .single();

                if (error) {
                    console.error("Error fetching student data:", error.message);
                } else {
                    setStudentGrade(data.student_grade);
                    setSubjectScheme(data.subject_scheme);
                }
            }
        };

        fetchStudentDetails();
    }, [studentId]);

    // Fetch resources for the selected subject
    const fetchResources = async (subject) => {
        if (!studentGrade) return;

        const { data, error } = await supabase
            .from("resources")
            .select("*")
            .eq("grade", studentGrade)
            .eq("subject", subject);

        if (error) {
            console.error("Error fetching resources:", error.message);
        } else {
            setResources(data);
        }
    };

    // Handle subject card click
    const handleOpen = (subject) => {
        setSelectedSubject(subject);
        fetchResources(subject);
        onOpen();
    };

    // Define subjects based on `subject_scheme`
    const subjectsByScheme = {
        "1": ["Mathematics", "Science", "English", "History", "ICT", "Sinhala", "Commerce", "Music"], // Grade 6-10
        "2": ["Mathematics", "Science", "English", "History", "ICT", "Sinhala"], // Grade 10-11
        "3": ["Mathematics", "Physics", "Chemistry"], // Grade 12-13 (Mathematical Stream)
        "4": ["Biology", "Chemistry", "Physics"], // Grade 12-13 (Biology Stream)
        "5": ["Commerce", "Accounting", "Business Studies"], // Grade 12-13 (Commerce Stream)
        "6": ["Arts", "Political Science", "History"], // Grade 12-13 (Arts Stream)
    };

    // Get subjects based on subject scheme
    const availableSubjects = subjectScheme ? subjectsByScheme[subjectScheme] || [] : [];

    return (
        <div className="mt-4">
            {/* Subject Cards Grid */}
            <div className="text-black text-4xl font-bold mb-8">Your Subjects</div>
            <div className="flex justify-center items-center">
            `<div className="grid grid-cols-1  gap-x-6 gap-y-6 mt-6 mb-20  sm:w-2/3">
                {availableSubjects.map((subject, index) => (
                    <Card
                        key={index}
                        className="bg-white bg-opacity-40"
                        isPressable
                        shadow="sm"
                        onPress={() => handleOpen(subject)}
                    >
                        <CardBody className="overflow-visible p-0">
                            <Image
                                alt={subject}
                                className="w-full object-cover h-[140px]"
                                radius="lg"
                                shadow="sm"
                                src={`/img/Subjects/${subject.toLowerCase().replace(/\s/g, "-")}.jpg`}
                                width="100%"
                            />
                        </CardBody>
                        <CardFooter className="text-2xl font-semibold text-black justify-between">
                            {subject}
                        </CardFooter>
                    </Card>
                ))}
            </div>`
            </div>

            {/* Full-Screen Drawer for Resources */}
            <Drawer isOpen={isOpen} size="full" onClose={onClose}>
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerHeader className="flex flex-col gap-1 text-3xl">
                                Resources for {selectedSubject}
                            </DrawerHeader>
                            <DrawerBody>
                                {resources.length > 0 ? (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {resources.map((resource) => (
                                            <Card key={resource.id} className="bg-white bg-opacity-40">
                                                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                                    <h3 className="text-lg text-black font-bold">{resource.title}</h3>
                                                    <p className="text-black text-sm">
                                                        {new Date(resource.created_at).toLocaleDateString()}
                                                    </p>
                                                </CardHeader>
                                                <CardBody className="overflow-visible py-2">
                                                    <Image
                                                        alt="Resource Image"
                                                        className="object-cover rounded-xl"
                                                        src={`/img/Subjects/${selectedSubject.toLowerCase().replace(/\s/g, "-")}.jpg`}
                                                        width="100%"
                                                        height="140px"
                                                    />
                                                    <p className="text-black mt-2">{resource.description}</p>
                                                </CardBody>
                                                <CardFooter>
                                                    <Link isBlock showAnchorIcon color="success" href={resource.file_url} target="_blank">
                                                        View Resource
                                                    </Link>
                                                </CardFooter>
                                            </Card>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-gray-600">No resources available for this subject.</p>
                                )}
                            </DrawerBody>
                            <DrawerFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                            </DrawerFooter>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </div>
    );
}