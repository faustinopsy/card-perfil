import React from 'react';

function Card({ title, image,tamanho, desc, links }) {
  const baseUrl = process.env.NODE_ENV === 'production' ? process.env.BASE_URL : '';
  const imagePath = baseUrl + image;
  return (
    <div className="card-container">
      <h3>{title}</h3>
      <img src={imagePath} alt={title} 
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
