import React from 'react';

function PokemonCard({ name, image, onClick }) {
  return (
    <div className="card-container" onClick={onClick}>
      <img id="image" src={image} alt={name} style={{ width: '150px', height: '150px' }} />
      <h3 className="desc">{name}</h3>
      <div className="bg"></div>
      <div className="blob"></div>
    </div>
  );
}

export default PokemonCard;
