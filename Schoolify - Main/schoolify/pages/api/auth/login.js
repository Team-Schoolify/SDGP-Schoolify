//
//
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import { supabase } from '../../../lib/supabaseClient';
//
// export default async function handler(req, res) {
//     if (req.method !== 'POST') {
//         return res.status(405).json({ message: 'Method Not Allowed' });
//     }
//
//     const { email, password, role } = req.body;
//
//     if (!['student', 'parent', 'teacher'].includes(role)) {
//         return res.status(400).json({ message: 'Invalid role selected' });
//     }
//
//     try {
//         const tableName = role.toLowerCase(); // Ensure correct table name
//
//         // Dynamically generate column names
//         const emailField = `${role}_email`;
//         const passwordField = `${role}_password`;
//         const roleIdField = `${role}_id`;
//
//         const sanitizedEmail = email.trim().toLowerCase(); // Standardize email format
//
//         console.log("Fetching from table:", tableName);
//         console.log("Querying email from column:", emailField);
//         console.log("Querying email value:", sanitizedEmail);
//
//         // Fetch user by email (case-insensitive & trimmed)
//         const { data, error } = await supabase
//             .from(tableName)
//             .select(`${roleIdField}, ${emailField}, ${passwordField}`) // Select only necessary fields
//             .ilike(emailField, sanitizedEmail)  // Ensure case-insensitive match
//             .single();
//
//         console.log("Supabase Response:", data);
//
//         if (error || !data) {
//             console.log("Error fetching user:", error || "User not found.");
//             return res.status(401).json({ message: 'Invalid email' });
//         }
//
//         console.log("Fetched User:", data);
//
//         // Debugging Password Verification
//         console.log("User Entered Password:", password);
//         console.log("Stored Hashed Password:", data[passwordField]);
//
//         // Verify password
//         const isValidPassword = await bcrypt.compare(password, data[passwordField]);
//         console.log("Password Match Result:", isValidPassword);
//
//         if (!isValidPassword) {
//             return res.status(401).json({ message: 'Invalid password' });
//         }
//
//         // Generate JWT token with the correct role_id
//         const token = jwt.sign(
//             { id: data[roleIdField], email: data[emailField], role }, // Use dynamic ID column
//             process.env.JWT_SECRET,
//             { expiresIn: '1h' }
//         );
//
//         return res.status(200).json({ message: 'Login successful', token, role });
//
//     } catch (error) {
//         console.error("Login error:", error);
//         return res.status(500).json({ message: 'Error logging in', error });
//     }
// }


import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { supabase } from '../../../lib/supabaseClient';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { email, password, role } = req.body;

    if (!['student', 'parent', 'teacher'].includes(role)) {
        return res.status(400).json({ message: 'Invalid role selected' });
    }

    try {
        const tableName = role.toLowerCase(); // Ensure correct table name
        const emailField = `${role}_email`;
        const passwordField = `${role}_password`;
        const roleIdField = `${role}_id`;

        const sanitizedEmail = email.trim().toLowerCase();

        // Fetch user by email (case-insensitive)
        const { data, error } = await supabase
            .from(tableName)
            .select(`${roleIdField}, ${emailField}, ${passwordField}, school_id`) // Fetch school_id
            .ilike(emailField, sanitizedEmail)
            .single();

        if (error || !data) {
            return res.status(401).json({ message: 'Invalid email' });
        }

        // Verify password
        const isValidPassword = await bcrypt.compare(password, data[passwordField]);
        if (!isValidPassword) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Generate JWT token including `school_id`
        const token = jwt.sign(
            { id: data[roleIdField], email: data[emailField], role, school_id: data.school_id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        return res.status(200).json({
            message: 'Login successful',
            token,
            role,
            school_id: data.school_id  // Return school_id in response
        });

    } catch (error) {
        return res.status(500).json({ message: 'Error logging in', error });
    }
}