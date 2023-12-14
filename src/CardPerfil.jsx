import React from 'react';

function Card({ title, image,tamanho, desc, links }) {
  return (
    <div className="card-container">
      <h3>{title}</h3>
      <img src={image} alt={title} 
        style={{
          width: tamanho,
          height: tamanho
        }}
        />
      <div className="desc">
        <p>{desc}</p>
        {links && links.map(link => <a href={link} key={link}>Link</a>)}
      </div>
       <div className="bg"></div>
      <div className="blob"></div>
    </div>
  );
}


export default Card;
