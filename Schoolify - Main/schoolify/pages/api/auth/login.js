import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { query } from '../../../lib/auth/db';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { email, password, role } = req.body;

    // Ensure role is valid
    if (!['student', 'parent', 'teacher'].includes(role)) {
        return res.status(400).json({ message: 'Invalid role selected' });
    }

    try {
        // Dynamically select the correct table based on role
        const table = role;
        const userQuery = `SELECT * FROM ${table} WHERE email = $1`;
        const result = await query(userQuery, [email]);

        if (result.rows.length === 0) {
            return res.status(401).json({ message: 'Invalid email ' });
        }

        const user = result.rows[0];
        console.log(user);

        // Compare hashed password
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user.id, email: user.email, role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({ message: 'Login successful', token, role });
    } catch (error) {
        res.status(500).json({ message: 'Invalid Username or Password', error });
    }
}