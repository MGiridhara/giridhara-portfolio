import React, { useState } from "react";
import "./AIChat.css";

const AIChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([
        {
            sender: "ai",
            text: "Hi! I'm Giridhara's AI portfolio assistant. Ask me anything about Giridhara.",
        },
    ]);
    const [loading, setLoading] = useState(false);

    const quickQuestions = [
        "About Me",
        "Skills",
        "Projects",
        "Education",
        "Resume",
    ];

    const askAI = async (question) => {
        if (!question.trim() || loading) return;

        setMessages((prev) => [
            ...prev,
            {
                sender: "user",
                text: question,
            },
        ]);

        setMessage("");
        setLoading(true);

        try {
            const response = await fetch(
                "https://giridhara-portfolio.onrender.com/ai-chat",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        message: question,
                    }),
                }
            );

            const data = await response.json();

            if (data.success) {
                setMessages((prev) => [
                    ...prev,
                    {
                        sender: "ai",
                        text: data.reply,
                    },
                ]);
            } else {
                setMessages((prev) => [
                    ...prev,
                    {
                        sender: "ai",
                        text: "Sorry, I couldn't process your question right now.",
                    },
                ]);
            }
        } catch (error) {
            console.error("AI CHAT ERROR:", error);

            setMessages((prev) => [
                ...prev,
                {
                    sender: "ai",
                    text: "The AI assistant is temporarily unavailable. Please try again later.",
                },
            ]);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        askAI(message);
    };

    return (
        <>
            {/* Floating AI Orb */}
            <button
                className={`ai-orb ${isOpen ? "active" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Open Giridhara AI"
            >
                <span className="orb-ring"></span>
                <span className="orb-core">AI</span>
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="ai-chat-window">
                    {/* Header */}
                    <div className="ai-chat-header">
                        <div>
                            <h3>🤖 Giridhara AI</h3>
                            <span>
                                <span className="online-dot"></span>
                                Portfolio Assistant
                            </span>
                        </div>

                        <button
                            className="ai-close-btn"
                            onClick={() => setIsOpen(false)}
                        >
                            ×
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="ai-chat-messages">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`ai-message ${
                                    msg.sender === "user"
                                        ? "user-message"
                                        : "bot-message"
                                }`}
                            >
                                {msg.text}
                            </div>
                        ))}

                        {loading && (
                            <div className="ai-message bot-message typing">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        )}
                    </div>

                    {/* Quick Questions */}
                    <div className="ai-quick-questions">
                        {quickQuestions.map((question) => (
                            <button
                                key={question}
                                onClick={() => askAI(question)}
                                disabled={loading}
                            >
                                {question}
                            </button>
                        ))}
                    </div>

                    {/* Input */}
                    <form
                        className="ai-chat-input-container"
                        onSubmit={handleSubmit}
                    >
                        <input
                            type="text"
                            placeholder="Ask something..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            disabled={loading}
                        />

                        <button
                            type="submit"
                            disabled={!message.trim() || loading}
                        >
                            ➤
                        </button>
                    </form>
                </div>
            )}
        </>
    );
};

export default AIChat;