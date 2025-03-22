import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";

// Supabase setup
const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// OpenAI setup
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { message } = req.body;
    if (!message) {
        return res.status(400).json({ error: "Message is required!" });
    }

    try {
        let queryResult = null;

        if (message.toLowerCase().includes("event")) {
            const { data, error } = await supabase
                .from("events")
                .select("event_name, event_date")
                .order("event_date", { ascending: true })
                .limit(3);

            if (error) {
                console.error("Supabase Query Error:", error);
                return res.status(500).json({ error: "Database query failed." });
            }
            queryResult = data;
        } else if (message.toLowerCase().includes("resource")) {
            const { data, error } = await supabase
                .from("resources")
                .select("title, description")
                .limit(3);

            if (error) {
                console.error("Supabase Query Error:", error);
                return res.status(500).json({ error: "Database query failed." });
            }
            queryResult = data;
        } else if (message.toLowerCase().includes("gradebook")) {
            const { data, error } = await supabase
                .from("gradebook")
                .select("student_name, subject, grade")
                .order("student_name", { ascending: true })
                .limit(3);

            if (error) {
                console.error("Supabase Query Error:", error);
                return res.status(500).json({ error: "Database query failed." });
            }
            queryResult = data;
        } else if (message.toLowerCase().includes("attendance")) {
            const { data, error } = await supabase
                .from("attendance")
                .select("student_name, status")
                .order("student_name", { ascending: true })
                .limit(3);

            if (error) {
                console.error("Supabase Query Error:", error);
                return res.status(500).json({ error: "Database query failed." });
            }
            queryResult = data;
        }

        // Generate AI response
        const prompt = queryResult
            ? `The user asked: "${message}". Based on the school database, here is the relevant information: ${JSON.stringify(
                queryResult
            )}. Respond in a helpful way.`
            : `The user asked: "${message}". There is no database-related information available, respond naturally.`;

        const chatResponse = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: prompt }],
        });

        res.json({ reply: chatResponse.choices[0].message.content });
    } catch (error) {
        console.error("Chatbot API Error:", error);
        res.status(500).json({ error: "Something went wrong!" });
    }
}