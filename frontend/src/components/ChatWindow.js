import React, { useState, useEffect, useRef } from 'react';
import './ChatWindow.css';

const ChatWindow = () => {
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      const userMessage = { text: inputMessage, isUserMessage: true };
      const newMessages = [...messages, userMessage];
      setMessages(newMessages);
      fetch(`${process.env.REACT_APP_BACKEND_URL}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputMessage }),
      })
        .then((response) => response.json())
        .then((data) => {
          const botMessage = { text: data.message, isUserMessage: false };
          setMessages([...newMessages, botMessage]);
        })
        .catch((error) => {
          console.error('Error:', error);
        });

      setInputMessage('');
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="chat-window-wrapper">
      <div className="chat-container">
        <div className="title-container">
          <h2 className="title">Welcome to Chatbot</h2>
        </div>
        <div className="message-container">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.isUserMessage ? 'user' : 'bot'}`}
            >
              {message.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type your message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
