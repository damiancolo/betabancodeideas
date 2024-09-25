"use client";  // Asegúrate de incluir esto al principio para que funcione con Client Components

import { useState } from 'react';
import Image from 'next/image';  // Usamos Next.js Image para manejar las imágenes
import './globals.css';  // Ajusta esta ruta según la ubicación real de globals.css

export default function Home() {
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    // resto del código...
  };
  

    const userMessage = { sender: 'user', text: message };
    setConversation([...conversation, userMessage]);

    // Simulamos la respuesta de la IA (puedes integrar una API aquí)
    const aiResponse = { sender: 'IA', text: 'Respuesta de la IA...' };
    setConversation([...conversation, userMessage, aiResponse]);
    setMessage('');  // Limpiar el input después de enviar el mensaje
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh', 
      backgroundColor: '#f4ecd8',  // Fondo sepia suave
      color: '#4b3f2f',  // Texto marrón suave
      position: 'relative',
    }}>
      {/* Icono de la lamparita */}
      <div style={{ marginBottom: '20px' }}>
        <Image
          src="/lamp.svg"  // Asegúrate de que este archivo SVG esté en la carpeta 'public'
          alt="Lamparita"
          width={20}  // Reducido a la mitad
          height={20}
        />
      </div>

      {/* Área de chat */}
      <div style={{ 
        backgroundColor: '#fff6e5', 
        padding: '20px', 
        borderRadius: '12px', 
        width: '100%', 
        maxWidth: '600px', 
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',  // Sombra suave
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center'  // Alinea el contenido del chat en el centro
      }}>
        <div style={{ 
          height: '300px', 
          overflowY: 'scroll', 
          marginBottom: '10px', 
          padding: '10px', 
          backgroundColor: '#faf3e6',  // Fondo cálido para el chat
          borderRadius: '8px', 
          width: '100%'  // Asegura que el área de mensajes ocupe todo el ancho disponible
        }}>
          {conversation.map((msg, index) => (
            <div key={index} style={{ 
              textAlign: msg.sender === 'user' ? 'right' : 'left', 
              marginBottom: '10px' 
            }}>
              <strong>{msg.sender === 'user' ? 'Tú' : 'IA'}:</strong> {msg.text}
            </div>
          ))}
        </div>

        {/* Input para el chat */}
        <form onSubmit={handleSendMessage} style={{ 
          display: 'flex', 
          width: '100%',  // El formulario debe ocupar todo el ancho del contenedor
          maxWidth: '600px',  // Limitar el tamaño máximo
          justifyContent: 'center',  // Asegura que el input esté centrado
          alignItems: 'center',
          padding: '10px',
          boxSizing: 'border-box'
        }}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Idea..."
            style={{ 
              flexGrow: 1, 
              padding: '10px', 
              borderRadius: '8px', 
              backgroundColor: '#faf3e6',  // Fondo cálido para el input
              border: 'none', 
              color: '#4b3f2f',  // Texto marrón suave
              width: '100%',  // El input ocupará el 100% del espacio disponible
              boxSizing: 'border-box'
            }}
          />
          <button type="submit" style={{ 
            marginLeft: '10px', 
            padding: '10px 20px', 
            backgroundColor: '#c8a165',  // Color cálido para el botón
            color: 'white', 
            borderRadius: '8px', 
            border: 'none', 
            cursor: 'pointer'
          }}>
            ↑
          </button>
        </form>
      </div>

      {/* Icono de la carpeta para navegar */}
      <a href="/submit" style={{ 
        position: 'absolute', 
        bottom: '60px', 
        right: '20px',  // Mueve la carpeta a la derecha
        color: '#4b3f2f', 
        textDecoration: 'none' 
      }}>
        <Image
          src="/folder.svg"  // Asegúrate de que este archivo SVG esté en la carpeta 'public'
          alt="Carpeta"
          width={30}  // Reducido a una cuarta parte
          height={30}
        />
      </a>
    </div>
  );
}
