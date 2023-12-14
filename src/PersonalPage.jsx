import React, { useState, useEffect } from 'react';
import Card from './CardPerfil';

function PersonalPage() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch('/json/persona.json')
      .then(response => response.json())
      .then(data => setProfiles(data));
    
  }, []);

  return (
    <div>
      {profiles.map(profile => (
        <Card key={profile.id} title={profile.nome} image={profile.foto} tamanho={profile.imageSize} links={profile.links} />
      ))}
    </div>
  );
}

export default PersonalPage;
