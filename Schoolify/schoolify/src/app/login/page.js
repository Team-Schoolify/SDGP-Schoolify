"use client";

import React, { useState } from "react";
import { BackgroundLines } from "@/app/components/ui/background-lines";
<<<<<<< HEAD
import { Button, Input, Checkbox, Link, Form, Divider } from "@nextui-org/react";
=======
import { Button, Input, Checkbox, Link, Form, Divider, Image } from "@nextui-org/react";
>>>>>>> 8c161dff35ceb5e4130dbbf5164120827a129398
import { Icon } from "@iconify/react";
import { SchoolifyIcon } from "./SchoolifyIcon";
import NextLink from "next/link";
import { jwtDecode } from "jwt-decode";
import {Select, SelectItem} from "@nextui-org/react";
import { useRouter } from "next/navigation";
export const schoolRole = [
    {key: "teacher", label: "Teacher"},
    {key: "student", label: "Student"},
    {key: "parent", label: "Parent"},
<<<<<<< HEAD
=======
    { key: "admin", label: "Admin" },
>>>>>>> 8c161dff35ceb5e4130dbbf5164120827a129398
];

export default function LoginPage() {
    const [isVisible, setIsVisible] = React.useState(false);

    const [role, setRole] = useState("student"); // Default role
    const router = useRouter();

    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password, role }),
            });

            const data = await response.json();
            console.log("Full API Response:", data);

            if (response.ok) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('school_id', data.school_id); // Save school_id
                console.log(`schooooooooool id ${data.school_id}`);

                const decodedToken = jwtDecode(data.token);
                console.log("Decoded Token:", decodedToken);

                const decodedData = decodedToken.id; // Extract user ID from token

                // Save the correct user ID based on role
<<<<<<< HEAD
                if (role === "student") {
                    localStorage.setItem('student_id', decodedData);
                } else if (role === "teacher") {
                    localStorage.setItem('teacher_id', decodedData);
                } else if (role === "parent") {
                    localStorage.setItem('parent_id', decodedData);
                }

                console.log(`User ID (${role}): ${decodedData}`);
                router.push(`/main/${data.role}/dashboard/?role=${data.role}`);
=======
                // if (role === "student") {
                //     localStorage.setItem('student_id', decodedData);
                // } else if (role === "teacher") {
                //     localStorage.setItem('teacher_id', decodedData);
                // } else if (role === "parent") {
                //     localStorage.setItem('parent_id', decodedData);
                // } else if (role === "admin") {
                //     localStorage.setItem("admin_id", decodedData); // ✅ Save admin ID
                // }

                if (role === "student") {
                    localStorage.setItem("student_id", decodedData);
                    router.push(`/main/student/dashboard/?role=student`);
                } else if (role === "teacher") {
                    localStorage.setItem("teacher_id", decodedData);
                    router.push(`/main/teacher/dashboard/?role=teacher`);
                } else if (role === "parent") {
                    localStorage.setItem("parent_id", decodedData);
                    router.push(`/main/parent/dashboard/?role=parent`);
                } else if (role === "admin") {
                    localStorage.setItem("admin_id", decodedData); // ✅ Save admin ID
                    router.push(`/main/admin/student/?role=admin`); // ✅ Redirect admins to admin panel
                }

                console.log(`User ID (${role}): ${decodedData}`);
                // router.push(`/main/${data.role}/dashboard/?role=${data.role}`);
>>>>>>> 8c161dff35ceb5e4130dbbf5164120827a129398
            } else {
                alert(data.message || 'Login failed, please check your credentials.');
            }
        } catch (error) {
            alert('Error logging in. Please try again.');
            console.error(error);
        }
    };

    console.log(`this is the login ${role}`);

    return (
        <div className="flex items-center justify-center min-h-screen bg-black overflow-hidden">
            {/* Prevent Scrolling */}
            <style jsx global>{`
                body {
                    overflow: hidden;
                }
            `}</style>

            {/* Background Lines */}
<<<<<<< HEAD
            <BackgroundLines className="absolute inset-0 z-0 bg-black" />

            {/* Login Content */}
            <div className="relative z-10 flex flex-col items-center w-full max-w-md px-6 py-8 bg-black border-1 border-gray-600 rounded-lg shadow-lg">
                {/* Welcome Section */}
                <div className="flex flex-col items-center mb-6">
                    <SchoolifyIcon size={60} />
                    <p className="text-lg sm:text-xl font-medium text-white">Welcome Back</p>
                    <p className="text-sm sm:text-base text-gray-400">
                        Log in to your account to continue
                    </p>
                </div>

                {/* Sign In Card */}
                <div className="w-full">
                    <div className="flex flex-col gap-1 mb-4">
                        <h1 className="text-lg sm:text-xl font-medium text-white">
                            Sign in to your account
                        </h1>
                        <p className="text-sm text-gray-400">to continue to Schoolify</p>
                    </div>

                    <Form
                        className="flex flex-col gap-3"
                        validationBehavior="native"
                        onSubmit={handleSubmit}
                    >
                        <Select
                            isRequired
                            className="max-w-xs"
                            defaultSelectedKeys={["student"]}
                            label="Your Role"
                            placeholder="Select your role"
                            variant="bordered"
                            fullWidth={true}
                            selectedKeys={new Set([role])} // Pass current role as a Set
                            onSelectionChange={(keys) => {
                                // Extract the first value from the Set
                                const selectedRole = Array.from(keys)[0];
                                setRole(selectedRole); // Update role as a string
                            }}
                            >
                            {schoolRole.map((schoolRole) => (
                                <SelectItem key={schoolRole.key}>{schoolRole.label}</SelectItem>
                            ))}
                        </Select>
                        
                        <Input
                            isRequired
                            label="Email Address"
                            labelPlacement={"outside"}
                            name="email"
                            placeholder="Enter your email"
                            type="email"
                            variant="bordered"
                        />

                        <Input
                            isRequired
                            endContent={
                                <button type="button" onClick={toggleVisibility}>
                                    {isVisible ? (
                                        <Icon
                                            className="pointer-events-none text-2xl text-gray-400"
                                            icon="solar:eye-closed-linear"
                                        />
                                    ) : (
                                        <Icon
                                            className="pointer-events-none text-2xl text-gray-400"
                                            icon="solar:eye-bold"
                                        />
                                    )}
                                </button>
                            }
                            label="Password"
                            name="password"
                            placeholder="Enter your password"
                            type={isVisible ? "text" : "password"}
                            variant="bordered"
                        />

                        <div className="flex w-full items-center justify-between px-1 py-2">
                            <Checkbox name="remember" size="sm" className="text-gray-400">
                                Remember me
                            </Checkbox>
                            <Link className="text-sm text-gray-400" href="#" size="sm">
                                Forgot password?
                            </Link>
                        </div>
                        <Button
                            className="w-full"
                            color="primary"
                            type="submit"
                        >
                            Sign In
                        </Button>
                    </Form>
                    <div className="flex items-center gap-4 py-2">
                        <Divider className="flex-1" />
                        <p className="shrink-0 text-xs sm:text-sm text-gray-400">OR</p>
                        <Divider className="flex-1" />
                    </div>
                    {/*<div className="flex flex-col gap-2">*/}
                    {/*    <Button*/}
                    {/*        startContent={*/}
                    {/*            <Icon*/}
                    {/*                icon="flat-color-icons:google"*/}
                    {/*                width={24}*/}
                    {/*            />*/}
                    {/*        }*/}
                    {/*        variant="bordered"*/}
                    {/*    >*/}
                    {/*        Continue with Google*/}
                    {/*    </Button>*/}
                    {/*</div>*/}
                    {/*<p className="text-center text-sm text-gray-400">*/}
                    {/*    Need to create an account?&nbsp;*/}
                        <Link href="#" size="sm" className="text-blue-500">
                            Sign Up
                        </Link>
                    {/*</p>*/}
=======
            <BackgroundLines className="fixed inset-0 w-full h-full z-0 bg-black"/>
            {/*<div className="w-full bg-red-700 z-50 grid sm:grid-cols-2">*/}
            <div
                className="grid sm:grid-cols-2 w-full px-12 py-8 rounded-2xl shadow-lg">
                {/* Login Content */}
                <div>
                    <div
                        className=" relative z-10 flex flex-col items-center w-full max-w-md px-6 py-8 bg-black border-1 border-gray-600 rounded-2xl shadow-lg">
                        {/* Welcome Section */}
                        <div className="flex flex-col items-center mb-6">
                            <img src="/img/logos/logowhite.png" alt="logo" className="w-16"/>
                            <p className="text-lg sm:text-xl font-medium text-white">Welcome To SchooliFy</p>
                            <p className="text-sm sm:text-base text-gray-400">
                                Log in to your account to continue
                            </p>
                        </div>

                        {/* Sign In Card */}
                        <div className="w-full">
                            <div className="flex flex-col gap-1 mb-4">
                                <h1 className="text-lg sm:text-xl font-medium text-white">
                                    Sign in to your account
                                </h1>
                                <p className="text-sm text-gray-400">to continue to SchooliFy</p>
                            </div>

                            <Form
                                className="flex flex-col gap-3"
                                validationBehavior="native"
                                onSubmit={handleSubmit}
                            >
                                <Select
                                    isRequired
                                    className="w-full"
                                    defaultSelectedKeys={["student"]}
                                    label="Your Role"
                                    placeholder="Select your role"
                                    variant="bordered"
                                    fullWidth={true}
                                    selectedKeys={new Set([role])} // Pass current role as a Set
                                    onSelectionChange={(keys) => {
                                        // Extract the first value from the Set
                                        const selectedRole = Array.from(keys)[0];
                                        setRole(selectedRole); // Update role as a string
                                    }}
                                >
                                    {schoolRole.map((schoolRole) => (
                                        <SelectItem key={schoolRole.key}>{schoolRole.label}</SelectItem>
                                    ))}
                                </Select>
                                <Input
                                    isRequired
                                    label="Email Address"
                                    labelPlacement={"outside"}
                                    name="email"
                                    placeholder="Enter your email"
                                    type="email"
                                    variant="bordered"
                                />

                                <Input
                                    isRequired
                                    endContent={
                                        <button type="button" onClick={toggleVisibility}>
                                            {isVisible ? (
                                                <Icon
                                                    className="pointer-events-none text-2xl text-gray-400"
                                                    icon="solar:eye-closed-linear"
                                                />
                                            ) : (
                                                <Icon
                                                    className="pointer-events-none text-2xl text-gray-400"
                                                    icon="solar:eye-bold"
                                                />
                                            )}
                                        </button>
                                    }
                                    label="Password"
                                    name="password"
                                    placeholder="Enter your password"
                                    type={isVisible ? "text" : "password"}
                                    variant="bordered"
                                />

                                <div className="flex w-full items-center justify-between px-1 py-2">
                                    <Checkbox name="remember" size="sm" className="text-gray-400">
                                        Remember me
                                    </Checkbox>
                                    <Link className="text-sm text-gray-400" href="#" size="sm">
                                        Forgot password?
                                    </Link>
                                </div>
                                <Button
                                    className="w-full"
                                    color="primary"
                                    type="submit"
                                >
                                    Sign In
                                </Button>
                            </Form>
                            {/*<div className="flex items-center gap-4 py-2">*/}
                            {/*    <Divider className="flex-1" />*/}
                            {/*    <p className="shrink-0 text-xs sm:text-sm text-gray-400">OR</p>*/}
                            {/*    <Divider className="flex-1" />*/}
                            {/*</div>*/}
                            {/*<div className="flex flex-col gap-2">*/}
                            {/*    <Button*/}
                            {/*        startContent={*/}
                            {/*            <Icon*/}
                            {/*                icon="flat-color-icons:google"*/}
                            {/*                width={24}*/}
                            {/*            />*/}
                            {/*        }*/}
                            {/*        variant="bordered"*/}
                            {/*    >*/}
                            {/*        Continue with Google*/}
                            {/*    </Button>*/}
                            {/*</div>*/}
                            {/*<p className="text-center text-sm text-gray-400">*/}
                            {/*    Need to create an account?&nbsp;*/}
                            {/*    <Link href="#" size="sm" className="text-blue-500">*/}
                            {/*        Sign Up*/}
                            {/*    </Link>*/}
                            {/*</p>*/}
                        </div>
                    </div>
                </div>

                <div className="hidden sm:flex justify-center items-center">
                    <Image
                        isBlurred
                        alt="HeroUI Album Cover"
                        className="object-contain w-full"
                        src="/img/aboutus.png"
                    />

>>>>>>> 8c161dff35ceb5e4130dbbf5164120827a129398
                </div>
            </div>
        </div>
    );
}
<<<<<<< HEAD



//
// "use client";
//
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import { Button, Input, Select, SelectItem, Form } from "@nextui-org/react";
//
// export default function LoginPage() {
//     const [role, setRole] = useState("student");
//     const router = useRouter();
//     const schoolRole = [
//         {key: "teacher", label: "Teacher"},
//         {key: "student", label: "Student"},
//         {key: "parent", label: "Parent"},
//     ];
//
//     const handleSubmit = async (event) => {
//         event.preventDefault();
//
//         const email = event.target.email.value;
//         const password = event.target.password.value;
//
//         try {
//             const response = await fetch('/api/auth/login', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ email, password, role }),
//             });
//
//             const data = await response.json();
//
//             if (response.ok) {
//                 // Store JWT token & school_id
//                 localStorage.setItem('token', data.token);
//                 localStorage.setItem('school_id', data.school_id); // Save school_id
//                 console.log(`schooooooooool id ${data.school_id}`);
//
//                 // Redirect user to their dashboard
//                 router.push(`/main/${data.role}/dashboard/?role=${data.role}`);
//             } else {
//                 alert(data.message || 'Login failed, please check your credentials.');
//             }
//         } catch (error) {
//             alert('Error logging in. Please try again.');
//             console.error(error);
//         }
//     };
//
//     return (
//         <div className="flex items-center justify-center min-h-screen bg-black">
//             <div className="relative z-10 flex flex-col items-center w-full max-w-md px-6 py-8 bg-black border-1 border-gray-600 rounded-lg shadow-lg">
//                 <h1 className="text-lg sm:text-xl font-medium text-white">Sign in to your account</h1>
//
//                 <Form onSubmit={handleSubmit} className="flex flex-col gap-3">
//                     <Select
//                         isRequired
//                         label="Your Role"
//                         selectedKeys={new Set([role])}
//                         onSelectionChange={(keys) => setRole(Array.from(keys)[0])}
//                     >
//                         {schoolRole.map((schoolRole) => (
//                             <SelectItem key={schoolRole.key}>{schoolRole.label}</SelectItem>
//                         ))}
//                     </Select>
//
//                     <Input isRequired label="Email Address" name="email" type="email" />
//                     <Input isRequired label="Password" name="password" type="password" />
//
//                     <Button className="w-full" color="primary" type="submit">Sign In</Button>
//                 </Form>
//             </div>
//         </div>
//     );
// }
=======
>>>>>>> 8c161dff35ceb5e4130dbbf5164120827a129398
