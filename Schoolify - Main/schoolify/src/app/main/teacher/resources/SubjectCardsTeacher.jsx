import React, {useEffect, useState} from "react";
import {supabase} from "@/app/lib/supabaseClient";
import {
    Card,
    CardBody,
    CardFooter,
    Image,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Input,
    useDisclosure,
} from "@heroui/react";

export default function SubjectCardsTeacher() {
    // Subject data for different grades
    const subjects = {
        "Grade 6 - 10": [
            { title: "Mathematics", img: "/img/mathematics.png" },
            { title: "Science", img: "/img/science.png" },
            { title: "English", img: "/img/english.png" },
            { title: "History", img: "/img/history.png" },
            { title: "ICT", img: "/img/ict.png" },
            { title: "Sinhala", img: "/img/sinhala.png" },
            { title: "Commerce", img: "/img/commerce.png" },
            { title: "Music", img: "/img/music.png" },
        ],
        "Ordinary Level (O/L)": [
            { title: "Mathematics", img: "/img/mathematics.png" },
            { title: "Science", img: "/img/science.png" },
            { title: "English", img: "/img/english.png" },
            { title: "History", img: "/img/history.png" },
            { title: "ICT", img: "/img/ict.png" },
            { title: "Sinhala", img: "/img/sinhala.png" },
        ],
        "Advanced Level (A/L)": {
            "Mathematics Stream": [
                { title: "Mathematics", img: "/img/mathematics.png" },
                { title: "Physics", img: "/img/physics.png" },
                { title: "Chemistry", img: "/img/chemistry.png" },
            ],
            "Biological Science Stream": [
                { title: "Biology", img: "/img/biology.png" },
                { title: "Chemistry", img: "/img/chemistry.png" },
                { title: "Physics", img: "/img/physics.png" },
            ],
            "Commerce Stream": [
                { title: "Commerce", img: "/img/commerce.png" },
                { title: "Accounting", img: "/img/accounting.png" },
                { title: "Business Studies", img: "/img/business.png" },
            ],
            "Arts Stream": [
                { title: "Arts", img: "/img/arts.png" },
                { title: "Political Science", img: "/img/political.png" },
                { title: "History", img: "/img/history.png" },
            ],
        },
    };

    const [schoolId, setSchoolId] = useState(null); // Store school_id in state
    const [teacherId, setTeacherId] = useState(null); // Store teacher_id in state


    // Modal control
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        file_url: "",
        grade: "",
        subject: "",
    });


    useEffect(() => {
        // Ensure localStorage is accessed only in the browser
        if (typeof window !== "undefined") {
            const storedSchoolId = localStorage.getItem("school_id");
            const storedTeacherId = localStorage.getItem("teacher_id");
            setTeacherId(storedTeacherId);
            setSchoolId(storedSchoolId);
        }
    }, []);

    // Open modal and set subject
    const handleOpen = (subject) => {
        setSelectedSubject(subject);
        setFormData({ ...formData, subject: subject.title }); // Pre-fill subject name
        onOpen();
    };

    // Handle form input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Submit form
    const handleSubmit = async () => {
        if (!schoolId || !teacherId) {
            alert("Missing school_id or teacher_id. Please check your local storage.");
            return;
        }

        // Prepare data for insertion
        const resourceData = {
            school_id: schoolId,
            teacher_id: teacherId,
            title: formData.title,
            description: formData.description,
            file_url: formData.file_url,
            grade: formData.grade,
            subject: formData.subject,
            created_at: new Date().toISOString(), // Add timestamp
        };

        try {
            // Insert into Supabase `resources` table
            const { data, error } = await supabase.from("resources").insert([resourceData]);

            if (error) {
                console.error("Supabase insert error:", error.message);
                alert(`Error adding resource: ${error.message}`);
            } else {
                console.log("Resource added successfully:", data);
                alert("Resource added successfully!");

                // Reset form data
                setFormData({
                    title: "",
                    description: "",
                    file_url: "",
                    grade: "",
                    subject: "",
                });

                onClose(); // Close the modal
            }
        } catch (err) {
            console.error("Request failed:", err);
            alert("Failed to add resource. Please try again.");
        }
    };

    return (
        <div className="mt-4">
            {/* Loop through main categories */}
            {Object.entries(subjects).map(([gradeRange, subjectList]) => (
                <div key={gradeRange} className="mb-8">
                    {/* Section Header */}
                    <h1 className="text-4xl text-black font-sans font-bold relative inline-block">
                        {gradeRange}
                        <span
                            className="absolute bottom-[-4px] left-0 w-1/2 h-[3px] bg-gradient-to-r from-blue-500 to-blue-200"
                            style={{ width: "30%" }}
                        ></span>
                    </h1>

                    {/* Render subjects directly for Grades 6-10 & O/L */}
                    {Array.isArray(subjectList) ? (
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-2 gap-y-6 mt-6 mb-20">
                            {subjectList.map((item, index) => (
                                <Card key={index} className="bg-white bg-opacity-40" isPressable shadow="sm"
                                      onPress={() => handleOpen(item)}>
                                    <CardBody className="overflow-visible p-0">
                                        <Image
                                            alt={item.title}
                                            className="w-full object-cover h-[140px]"
                                            radius="lg"
                                            shadow="sm"
                                            src={item.img}
                                            width="100%"
                                        />
                                    </CardBody>
                                    <CardFooter className="text-small text-black justify-between">
                                        <b>{item.title}</b>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        // Render subjects for A/L Streams
                        Object.entries(subjectList).map(([stream, subjects]) => (
                            <div key={stream} className="mt-16">
                                <h2 className="text-2xl font-semibold text-gray-800">{stream}</h2>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-6 mt-4">
                                    {subjects.map((item, index) => (
                                        <Card key={index} className="bg-white bg-opacity-40" isPressable shadow="sm"
                                              onPress={() => handleOpen(item)}>
                                            <CardBody className="overflow-visible p-0">
                                                <Image
                                                    alt={item.title}
                                                    className="w-full object-cover h-[140px]"
                                                    radius="lg"
                                                    shadow="sm"
                                                    src={item.img}
                                                    width="100%"
                                                />
                                            </CardBody>
                                            <CardFooter className="text-small text-black justify-between">
                                                <b>{item.title}</b>
                                            </CardFooter>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            ))}

            {/* Blur Modal */}
            <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                {selectedSubject?.title || "Subject"}
                            </ModalHeader>
                            <ModalBody>
                                <Input
                                    label="Title"
                                    placeholder="Enter Title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    fullWidth
                                />
                                <Input
                                    label="Description"
                                    placeholder="Enter Description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    fullWidth
                                />
                                <Input
                                    label="File URL"
                                    placeholder="Enter File URL"
                                    name="file_url"
                                    value={formData.file_url}
                                    onChange={handleChange}
                                    fullWidth
                                />
                                <Input
                                    label="Grade"
                                    type="number"
                                    placeholder="Enter Grade (6-13)"
                                    name="grade"
                                    value={formData.grade}
                                    onChange={handleChange}
                                    fullWidth
                                    min={6}
                                    max={13}
                                />
                                <Input
                                    label="Subject"
                                    placeholder="Enter Subject"
                                    name="subject"
                                    value={formData.subject}
                                    readOnly // Pre-filled from selection
                                    fullWidth
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={handleSubmit}>
                                    Save
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}