import React from 'react';
import DoramaCard from './DoramaCard'; 
import './DoramaList.css'; 
function DoramaList({ doramas }) {
  return (
    <div className="dorama-list">
      {doramas.length > 0 ? (
        doramas.map(dorama => (
          <DoramaCard key={dorama.id} dorama={dorama} />
        ))
      ) : (
        <p>Дорамы не найдены.</p>
      )}
    </div>
  );
}

export default DoramaList;