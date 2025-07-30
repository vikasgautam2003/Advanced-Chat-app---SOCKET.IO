import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

const App = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim() !== '') {
      socket.emit('message', input);
      setInput('');
    }
  };

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off('message');
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-xl flex flex-col h-[90vh] overflow-hidden">
        <header className="bg-gray-900 text-center py-4 border-b border-gray-700 text-xl font-semibold">
          💬 Chat App
        </header>
        <section className="flex-1 overflow-y-auto px-4 py-3 space-y-2 custom-scrollbar">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`px-4 py-2 rounded-2xl max-w-fit text-sm font-medium ${
                index % 2 === 0
                  ? 'bg-yellow-400 text-black'
                  : 'bg-gray-300 text-black'
              }`}
            >
              {message}
            </div>
          ))}
        </section>
        <div className="flex items-center gap-2 p-4 bg-gray-900 border-t border-gray-700">
          <input
            type="text"
            value={input}
            placeholder="Type your message..."
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            onClick={sendMessage}
            className="bg-yellow-400 hover:bg-yellow-300 text-black px-4 py-2 rounded-lg transition font-semibold"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
