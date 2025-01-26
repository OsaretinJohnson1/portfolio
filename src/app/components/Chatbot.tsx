'use client';

import React, { useState, useRef, useEffect } from "react";
import '../globals.css';

type Message = {
  user: string;
  bot: string;
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const chatRef = useRef<HTMLDivElement | null>(null);
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const savedMessages = localStorage.getItem("chatMessages");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  const saveMessages = () => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  };

  const handleDragStart = (e: React.MouseEvent) => {
    setDragging(true);
    setOffset({
      x: e.clientX - chatRef.current!.getBoundingClientRect().left,
      y: e.clientY - chatRef.current!.getBoundingClientRect().top,
    });
  };

  const handleDragEnd = () => {
    setDragging(false);
  };

  const handleDrag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (dragging && chatRef.current) {
      chatRef.current.style.left = `${e.clientX - offset.x}px`;
      chatRef.current.style.top = `${e.clientY - offset.y}px`;
    }
  };

  const handleOpenClose = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (question: string) => {
    if (!question.trim()) return;
    const response = await fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question }),
    });

    const data = await response.json();
    setMessages((prev) => [...prev, { user: question, bot: data.answer }]);
    saveMessages();
    setInputValue('');
  };

  return (
    <div
      ref={chatRef}
      className={`fixed z-50 p-4 bg-pink-200 rounded-lg shadow-lg ${
        isOpen ? "bottom-20 sm:bottom-10 right-10 w-full max-w-xs md:max-w-md lg:max-w-lg h-80" : "bottom-10 right-10 w-20 h-20 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 shadow-neon-blue"
      } transition-all duration-300 cursor-pointer`}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onMouseMove={handleDrag}
    >
      {!isOpen && (
        <div
          className="flex items-center justify-center text-white font-semibold animate-fade-in text-sm"
          onClick={handleOpenClose}
        >
          Chat with me!
        </div>
      )}
      {isOpen && (
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center mb-2">
            <button
              onClick={handleOpenClose}
              className="bg-pink-300 text-white p-2 rounded-full"
            >
              X
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-2">
            {messages.map((message, idx) => (
              <div key={idx} className="mb-2">
                <div className="chatbot-message-user">{message.user}</div>
                <div className="chatbot-message-bot">{message.bot}</div>
              </div>
            ))}
          </div>
          <div className="mt-auto p-2 flex items-center gap-2 border-t border-gray-300 bg-pink-100">
            <input
              type="text"
              placeholder="Ask me..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full p-2 rounded-md border border-gray-400 bg-white text-gray-800 placeholder-gray-500 font-medium"
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                if (e.key === "Enter") {
                  handleSubmit(inputValue);
                }
              }}
            />
            <button
              onClick={() => handleSubmit(inputValue)}
              className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 font-semibold"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
