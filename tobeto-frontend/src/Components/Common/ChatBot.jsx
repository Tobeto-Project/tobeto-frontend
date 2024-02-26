import React, { useState, useEffect, useRef } from 'react';
import '../../Styles/CommonStyles/ChatBot.css';
import { BsChatLeft } from "react-icons/bs";
import { FaMessage } from "react-icons/fa6";


const ChatBot = () => {
  const [userMessage, setUserMessage] = useState('');
  const API_KEY = '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';
  const [chatMessages, setChatMessages] = useState([
    { content: 'Merhaba! Nasıl Yardımcı Olabilirim?', role: 'incoming' }
  ]);

  const generateResponse = async () => {
    const API_URL = 'https://api.openai.com/v1/chat/completions';
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: userMessage }],
      }),
    };

    try {
      const response = await fetch(API_URL, requestOptions);
      const data = await response.json();
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { content: data.choices[0].message.content.trim(), role: 'incoming' },
      ]);
    } catch (error) {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { content: 'Oops! Something went wrong. Please try again.', role: 'incoming', error: true },
      ]);
    } finally {
      chatboxRef.current.scrollTo(0, chatboxRef.current.scrollHeight);
    }
  };

  useEffect(() => {
  }, []);

  const createChatLi = (message, role, key) => {
    const chatKey = key !== undefined ? key : Date.now();
    return (
      <li className={`chat ${role}`} key={chatKey}>
        {role === 'outgoing' ? <p>{message}</p> : <><span className="material-symbols-outlined">T</span><p>{message}</p></>}
      </li>
    );
  };


  const handleChat = () => {
    const trimmedMessage = userMessage.trim();
    if (!trimmedMessage) return;

    setUserMessage('');
    setChatMessages((prevMessages) => [...prevMessages, { content: trimmedMessage, role: 'outgoing' }]);

    setTimeout(() => {
      setChatMessages((prevMessages) => [...prevMessages, { content: 'Thinking...', role: 'incoming' }]);
      generateResponse();
    }, 600);
  };

  const handleInputChange = (e) => {
    setUserMessage(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey && window.innerWidth > 800) {
      e.preventDefault();
      handleChat();
    }
  };

  const chatboxRef = useRef();

  return (
    <>
      <button className="chatbot-toggler" onClick={() => document.body.classList.toggle('show-chatbot')}>
        <span className="material-symbols-rounded"><FaMessage size={25}/></span>
        <span className="material-symbols-outlined"><FaMessage /></span>
      </button>
      <div className="chatbot">
        <header>
          <h2>Tobeto Yardım</h2>
          <span className="close-btn material-symbols-outlined" onClick={() => document.body.classList.remove('show-chatbot')}>
            close
          </span>
        </header>
        <ul className="chatbox" ref={chatboxRef}>
          {chatMessages.map((message, index) => createChatLi(message.content, message.role, index))}
        </ul>
        <div className="chat-input">
          <textarea
            placeholder="Enter a message..."
            spellCheck="false"
            required
            value={userMessage}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          ></textarea>
          <span id="send-btn" className="material-symbols-rounded" onClick={handleChat}>
            send
          </span>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
