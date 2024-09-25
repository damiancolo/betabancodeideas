"use client";
import '../globals.css';

import { useState } from 'react';

export default function Chat() {
  const [message, setMessage] = useState('');
  interface Message {
    sender: string;
    text: string;
  }
  
  const [conversation, setConversation] = useState<Message[]>([]);
  

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage = { sender: 'user', text: message };
    setConversation([...conversation, userMessage]);

    const responseMessage = { sender: 'IA', text: 'Respuesta de la IA aquí...' };
    setConversation([...conversation, userMessage, responseMessage]);
    setMessage('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Chat con la IA</h1>
      <div style={{ border: '1px solid #ccc', padding: '10px', height: '300px', overflowY: 'scroll' }}>
        {conversation.map((msg, index) => (
          <div key={index} style={{ margin: '10px 0', textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
            <strong>{msg.sender === 'user' ? 'Tú' : 'IA'}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} style={{ marginTop: '10px' }}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escribe tu mensaje..."
          style={{ width: '80%', padding: '10px' }}
        />
        <button type="submit" style={{ padding: '10px 20px' }}>
          Enviar
        </button>
      </form>
    </div>
  );
}
