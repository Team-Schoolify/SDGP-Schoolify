// import React, { useEffect, useState } from "react";
// import { supabase } from "@/app/lib/supabaseClient";
// import {
//     Card,
//     CardBody,
//     CardFooter,
//     Image,
//     Drawer,
//     DrawerContent,
//     DrawerHeader,
//     DrawerBody,
//     DrawerFooter,
//     Button,
//     useDisclosure,
// } from "@heroui/react";
//
// export default function SubjectResources() {
//     // State variables
//     const { isOpen, onOpen, onClose } = useDisclosure(); // Drawer controls
//     const [studentId, setStudentId] = useState(null);
//     const [studentGrade, setStudentGrade] = useState(null);
//     const [selectedSubject, setSelectedSubject] = useState("");
//     const [resources, setResources] = useState([]); // Store fetched resources
//
//     // Fetch student ID from local storage
//     useEffect(() => {
//         if (typeof window !== "undefined") {
//             const storedStudentId = localStorage.getItem("student_id");
//             setStudentId(storedStudentId);
//         }
//     }, []);
//
//     // Fetch student grade from Supabase
//     useEffect(() => {
//         const fetchStudentGrade = async () => {
//             if (studentId) {
//                 const { data, error } = await supabase
//                     .from("student")
//                     .select("student_grade")
//                     .eq("student_id", studentId)
//                     .single();
//
//                 if (error) {
//                     console.error("Error fetching student grade:", error.message);
//                 } else {
//                     setStudentGrade(data.student_grade);
//                 }
//             }
//         };
//
//         fetchStudentGrade();
//     }, [studentId]);
//
//     // Fetch resources for the selected subject
//     const fetchResources = async (subject) => {
//         if (!studentGrade) return;
//
//         const { data, error } = await supabase
//             .from("resources")
//             .select("*")
//             .eq("grade", studentGrade)
//             .eq("subject", subject);
//
//         if (error) {
//             console.error("Error fetching resources:", error.message);
//         } else {
//             setResources(data);
//         }
//     };
//
//     // Handle subject card click
//     const handleOpen = (subject) => {
//         setSelectedSubject(subject);
//         fetchResources(subject);
//         onOpen();
//     };
//
//     // Define available subjects based on grade
//     const subjectsByGrade = {
//         "6": ["Mathematics", "Science", "English", "History", "ICT", "Sinhala", "Commerce", "Music"],
//         "7": ["Mathematics", "Science", "English", "History", "ICT", "Sinhala", "Commerce", "Music"],
//         "8": ["Mathematics", "Science", "English", "History", "ICT", "Sinhala", "Commerce", "Music"],
//         "9": ["Mathematics", "Science", "English", "History", "ICT", "Sinhala", "Commerce", "Music"],
//         "10": ["Mathematics", "Science", "English", "History", "ICT", "Sinhala", "Commerce", "Music"],
//         "11": ["Mathematics", "Science", "English", "History", "ICT", "Sinhala"],
//         "12": ["Mathematics", "Physics", "Chemistry", "Biology", "Accounting", "Business Studies", "Arts"],
//         "13": ["Mathematics", "Physics", "Chemistry", "Biology", "Accounting", "Business Studies", "Arts"],
//     };
//
//     // Get subjects for the student's grade
//     const availableSubjects = studentGrade ? subjectsByGrade[studentGrade] || [] : [];
//
//     return (
//         <div className="mt-4">
//             {/* Subject Cards Grid */}
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-2 gap-y-6 mt-6 mb-20">
//                 {availableSubjects.map((subject, index) => (
//                     <Card
//                         key={index}
//                         className="bg-white bg-opacity-40"
//                         isPressable
//                         shadow="sm"
//                         onPress={() => handleOpen(subject)}
//                     >
//                         <CardBody className="overflow-visible p-0">
//                             <Image
//                                 alt={subject}
//                                 className="w-full object-cover h-[140px]"
//                                 radius="lg"
//                                 shadow="sm"
//                                 src={`/img/${subject.toLowerCase().replace(/\s/g, "-")}.png`}
//                                 width="100%"
//                             />
//                         </CardBody>
//                         <CardFooter className="text-small text-black justify-between">
//                             <b>{subject}</b>
//                         </CardFooter>
//                     </Card>
//                 ))}
//             </div>
//
//             {/* Full-Screen Drawer for Resources */}
//             <Drawer isOpen={isOpen} size="full" onClose={onClose}>
//                 <DrawerContent>
//                     {(onClose) => (
//                         <>
//                             <DrawerHeader className="flex flex-col gap-1">
//                                 Resources for {selectedSubject}
//                             </DrawerHeader>
//                             <DrawerBody>
//                                 {resources.length > 0 ? (
//                                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                                         {resources.map((resource) => (
//                                             <Card key={resource.id} className="bg-white bg-opacity-40">
//                                                 <CardBody>
//                                                     <h3 className="text-lg font-bold">{resource.title}</h3>
//                                                     <p className="text-gray-600">{resource.description}</p>
//                                                 </CardBody>
//                                                 <CardFooter>
//                                                     <Button
//                                                         color="primary"
//                                                         onPress={() => window.open(resource.file_url, "_blank")}
//                                                     >
//                                                         View Resource
//                                                     </Button>
//                                                 </CardFooter>
//                                             </Card>
//                                         ))}
//                                     </div>
//                                 ) : (
//                                     <p className="text-gray-600">No resources available for this subject.</p>
//                                 )}
//                             </DrawerBody>
//                             <DrawerFooter>
//                                 <Button color="danger" variant="light" onPress={onClose}>
//                                     Close
//                                 </Button>
//                             </DrawerFooter>
//                         </>
//                     )}
//                 </DrawerContent>
//             </Drawer>
//         </div>
//     );
// }

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
    useDisclosure,
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
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-2 gap-y-6 mt-6 mb-20">
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
                                src={`/img/${subject.toLowerCase().replace(/\s/g, "-")}.png`}
                                width="100%"
                            />
                        </CardBody>
                        <CardFooter className="text-small text-black justify-between">
                            <b>{subject}</b>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {/* Full-Screen Drawer for Resources */}
            <Drawer isOpen={isOpen} size="full" onClose={onClose}>
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerHeader className="flex flex-col gap-1">
                                Resources for {selectedSubject}
                            </DrawerHeader>
                            <DrawerBody>
                                {resources.length > 0 ? (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {resources.map((resource) => (
                                            <Card key={resource.id} className="bg-white bg-opacity-40">
                                                <CardBody>
                                                    <h3 className="text-lg font-bold">{resource.title}</h3>
                                                    <p className="text-gray-600">{resource.description}</p>
                                                </CardBody>
                                                <CardFooter>
                                                    <Button
                                                        color="primary"
                                                        onPress={() => window.open(resource.file_url, "_blank")}
                                                    >
                                                        View Resource
                                                    </Button>
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