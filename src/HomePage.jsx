import React, { useState, useEffect } from 'react';
import Card from './Card';

function HomePage() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('/json/home.json')
    .then(response => response.json())
    .then(data => {
      setCards(data);
    });
  }, []);

  return (
    <div className="cards-container">
      {
      cards.map(card => (
        <Card  
        key={card.id}
        id={card.id}
        title={card.titulo} 
        image={card.imagem} 
        tamanho={card.imageSize} 
        desc={card.descricao} 
        />
      ))
      }
    </div>
  );
}

export default HomePage;
