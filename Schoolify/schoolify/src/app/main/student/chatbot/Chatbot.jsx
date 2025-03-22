import { useState } from "react";

export default function Chatbot() {
    const [message, setMessage] = useState("");
    const [conversation, setConversation] = useState([]); // Store chat history
    const [loading, setLoading] = useState(false);

    const handleSend = async () => {
        if (!message.trim()) return;
        setLoading(true);

        // Add user message to conversation
        const newConversation = [...conversation, { sender: "user", text: message }];
        setConversation(newConversation);
        setMessage(""); // Clear input after sending

        try {
            const res = await fetch("/api/chatbot", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message }),
            });

            const data = await res.json();
            setConversation([...newConversation, { sender: "bot", text: data.reply }]);
        } catch (error) {
            setConversation([...newConversation, { sender: "bot", text: "Error: Unable to get a response." }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 border rounded-lg w-96 shadow-lg bg-white">
            <h2 className="text-lg font-bold mb-2 text-center">AI Chatbot</h2>

            <div className="h-64 overflow-y-auto border p-2 bg-gray-100 rounded-lg">
                {conversation.length === 0 ? (
                    <p className="text-gray-500 text-center">Ask about events, resources, grades, or attendance...</p>
                ) : (
                    conversation.map((msg, index) => (
                        <div key={index} className={`mb-2 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                            <p className={`p-2 rounded-lg max-w-xs ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"}`}>
                                {msg.text}
                            </p>
                        </div>
                    ))
                )}
            </div>

            <div className="mt-2 flex">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-2 border rounded-l-lg"
                    placeholder="Type your question..."
                    disabled={loading}
                />
                <button
                    onClick={handleSend}
                    className="p-2 bg-blue-500 text-white rounded-r-lg"
                    disabled={loading}
                >
                    {loading ? "..." : "Send"}
                </button>
            </div>
        </div>
    );
}