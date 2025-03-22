import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

export default async function handler(req, res) {
    const { userId, role } = req.query;

    if (req.method === 'GET') {
        let query = supabase.from('notifications').select('*');

        if (role === 'student') {
            query = query.eq('student_id', userId);
        } else if (role === 'parent') {
            query = query.eq('parent_id', userId);
        } else {
            return res.status(400).json({ error: 'Invalid role' });
        }

        const { data, error } = await query.order('created_at', { ascending: false });

        if (error) return res.status(500).json({ error: error.message });
        return res.status(200).json(data);
    }
}