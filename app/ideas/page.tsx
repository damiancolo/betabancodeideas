"use client";
import '../globals.css';

import { useState, useEffect } from 'react';
import '../globals.css'; // Enlace a los estilos globales

export default function Ideas() {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    const fetchedIdeas = [
      'Idea 1: Un chatbot para mejorar propuestas',
      'Idea 2: Una plataforma colaborativa de ideas',
      'Idea 3: Un sistema de inteligencia artificial para analizar ideas',
    ];
    setIdeas(fetchedIdeas);
  }, []);

  return (
    <div>
      <h1>Ideas Similares</h1>
      <ul>
        {ideas.map((idea, index) => (
          <li key={index} style={{ margin: '10px 0' }}>
            {idea}
          </li>
        ))}
      </ul>
    </div>
  );
}
