import jwt from 'jsonwebtoken';
import { supabase } from '../../../lib/supabaseClient';

export default async function handler(req, res) {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded Token:", decoded);

        const tableName = decoded.role.toLowerCase();
        const roleIdField = `${decoded.role}_id`; // Correct column name

        console.log("Fetching from table:", tableName);
        console.log("Querying ID:", decoded.id);
        console.log("Using column:", roleIdField);

        // Fetch user from the respective table using correct ID column
        const { data, error } = await supabase
            .from(tableName)
            .select('*')
            .eq(roleIdField, decoded.id)  // Use correct ID field
            .single();

        console.log("Supabase Response:", data);

        if (error || !data) {
            console.log("Error fetching user:", error);
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ user: data });
    } catch (error) {
        console.error("Invalid Token:", error);
        res.status(401).json({ message: 'Invalid token' });
    }
}