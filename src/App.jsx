import { useState } from 'react';
import Filter from './Filter';
import DoramaList from './DoramaList';
import './App.css'; 

const initialDoramas = [
  { id: 1, title: 'Милый дом', genre: 'Драма', year: 2020 },
  { id: 2, title: 'Игра в кальмара', genre: 'Драма', year: 2021 },
  { id: 3, title: 'Аварийная посадка любви', genre: 'Любовь', year: 2019 },
  { id: 4, title: 'Отель Дель Луна', genre: 'Фэнтези', year: 2019 },
];

function App() {
  const [doramas, setDoramas] = useState(initialDoramas);

  const handleSearch = (genre, year) => {
    const filtered = initialDoramas.filter(d => 
      (d.genre === genre || !genre) && (d.year === year || !year)
    );
    setDoramas(filtered);
  };

  return (
    <div className="app-container">
      <h1>Поиск дорам</h1>
      {}
      <Filter onSearch={handleSearch} />
      {}
      <DoramaList doramas={doramas} />
    </div>
  );
}

export default App;