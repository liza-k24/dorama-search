import React from 'react';
import './DoramaCard.css'; 

function DoramaCard({ dorama }) {
  return (
    <div className="dorama-card">
      <img 
        src={dorama.imageUrl} 
        alt={`Постер к дораме "${dorama.title}"`} 
        className="dorama-image"
      />
      <div className="dorama-info">
        <h3>{dorama.title}</h3>
        <p><strong>Жанр:</strong> {dorama.genre}</p>
        <p><strong>Год:</strong> {dorama.year}</p>
        <p className="dorama-description">{dorama.description}</p>
      </div>
    </div>
  );
}

export default DoramaCard;