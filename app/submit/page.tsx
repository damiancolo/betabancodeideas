"use client";

import { useState } from 'react';
import './globals.css'; // Enlazar los estilos globales

export default function SubmitIdea() {
  const [idea, setIdea] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ idea }),
    });

    if (response.ok) {
      setSubmitted(true);
      setIdea('');  // Limpiar el formulario después de enviar la idea
    }
  };

  return (
    <div>
      <h1>Banco de Ideas</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="Escribe tu idea aquí..."
          rows="5"
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
      {submitted && <p>¡Gracias por enviar tu idea!</p>}
    </div>
  );
}
