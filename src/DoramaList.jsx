import React from 'react';

function DoramaList({ doramas }) {
  return (
    <div className="dorama-list">
      {doramas.length > 0 ? (
        doramas.map(dorama => (
          <div key={dorama.id} className="dorama-card">
            <h3>{dorama.title}</h3>
            <p>Жанр: {dorama.genre}</p>
            <p>Год: {dorama.year}</p>
          </div>
        ))
      ) : (
        <p>Дорамы не найдены.</p>
      )}
    </div>
  );
}

export default DoramaList;