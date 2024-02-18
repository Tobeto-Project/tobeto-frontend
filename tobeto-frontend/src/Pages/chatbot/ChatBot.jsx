import React, { useState, useRef, useEffect } from 'react';

const ChatBot = () => {
  const [userMessage, setUserMessage] = useState(null);
  const [inputHeight, setInputHeight] = useState(0);
  const chatInputRef = useRef(null);
  const chatboxRef = useRef(null);

  const API_KEY = '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';
  const API_URL = "https://api.openai.com/v1/chat/completions";

  const handleInputChange = () => {
    setInputHeight(0);
    setInputHeight(chatInputRef.current.scrollHeight);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
      e.preventDefault();
      handleChat();
    }
  };

  const handleChat = () => {
    setUserMessage(chatInputRef.current.value.trim());
    if (!userMessage) return;

    chatInputRef.current.value = "";
    setInputHeight(0);

    chatboxRef.current.appendChild(createChatLi(userMessage, "outgoing"));
    chatboxRef.current.scrollTo(0, chatboxRef.current.scrollHeight);

    setTimeout(() => {
      const incomingChatLi = createChatLi("Thinking...", "incoming");
      chatboxRef.current.appendChild(incomingChatLi);
      chatboxRef.current.scrollTo(0, chatboxRef.current.scrollHeight);
      generateResponse(incomingChatLi);
    }, 600);
  };

  const createChatLi = (message, className) => {
    // ... (Same as in your original code)
  };

  const generateResponse = async (chatElement) => {
    const messageElement = chatElement.querySelector("p");

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: userMessage }],
      })
    };

    try {
      const response = await fetch(API_URL, requestOptions);
      const data = await response.json();
      messageElement.textContent = data.choices[0].message.content.trim();
    } catch (error) {
      messageElement.classList.add("error");
      messageElement.textContent = "Oops! Something went wrong. Please try again.";
    } finally {
      chatboxRef.current.scrollTo(0, chatboxRef.current.scrollHeight);
    }
  };

  return (
    <div>
      <button className="chatbot-toggler">
        <span className="material-symbols-rounded">mode_comment</span>
        <span className="material-symbols-outlined">close</span>
      </button>
      <div className="chatbot">
        <header>
          <h2>Tobeto Yardım</h2>
          <span className="close-btn material-symbols-outlined">close</span>
        </header>
        <ul className="chatbox" ref={chatboxRef}>
          <li className="chat incoming">
            <span className="material-symbols-outlined">smart_toy</span>
            <p>Merhaba! Nasıl Yardımcı Olabilirim?</p>
          </li>
        </ul>
        <div className="chat-input">
          <textarea
            ref={chatInputRef}
            placeholder="Enter a message..."
            spellCheck={false}
            required
            style={{ height: `${inputHeight}px` }}
            onInput={handleInputChange}
            onKeyDown={handleKeyDown}
          ></textarea>
          <span id="send-btn" className="material-symbols-rounded" onClick={handleChat}>send</span>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
