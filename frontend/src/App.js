import React from 'react';
import './App.css';
import ChatWindow from './components/ChatWindow';

const App = () => {
  return (
    <div className="App">
      {/* <nav className="navbar">
        <h1 className="title">Welcome to Chatbot</h1>
      </nav> */}
      <ChatWindow />
    </div>
  );
};

export default App;
