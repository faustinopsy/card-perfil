import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function DetailPage() {
  const [details, setDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/src/json/details_${id}.json`)
      .then(response => response.json())
      .then(data => setDetails(data));
  }, [id]);

  if (!details) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      {/* Renderize os detalhes do card aqui */}
    </div>
  );
}

export default DetailPage;
