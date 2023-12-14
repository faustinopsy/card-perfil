import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function DetailPage() {
  const [detail, setDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch('/src/json/home.json') 
      .then(response => response.json())
      .then(data => {
        const itemDetail = data.find(item => item.id.toString() === id);
        setDetail(itemDetail);
      });
  }, [id]);

  if (!detail) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="card">
      <h2>{detail.conteudo}</h2>
    </div>
  );
}

export default DetailPage;
