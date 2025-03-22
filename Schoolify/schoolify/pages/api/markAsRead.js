import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
    if (req.method !== 'PATCH') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { notificationId, userId, role } = req.body;

    if (!notificationId || !userId || !role) {
        return res.status(400).json({ error: 'Missing required parameters' });
    }

    // Identify the correct column for the user role
    const roleColumn = role === "student" ? "student_id" :
        role === "parent" ? "parent_id" :
            role === "teacher" ? "teacher_id" : null;

    if (!roleColumn) {
        return res.status(400).json({ error: "Invalid role" });
    }

    // Mark the notification as read only for this user
    const { error } = await supabase
        .from('notifications')
        .update({ is_read: true })
        .eq('id', notificationId)
        .eq(roleColumn, userId);

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ success: true });
}
