import React, { useState } from 'react';

function Filter({ onSearch }) {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const genres = ['Любовь', 'Детектив', 'Комедия', 'Драма', 'Фэнтези', 'Научная фантастика'];
  const years = [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017];

  const handleSearch = () => {
    onSearch(selectedGenre, selectedYear);
  };

  return (
    <div className="filter-container">
      <div>
        <h4>Жанры:</h4>
        {genres.map(genre => (
          <button 
            key={genre}
            onClick={() => setSelectedGenre(genre)}
            className={selectedGenre === genre ? 'active' : ''}
          >
            {genre}
          </button>
        ))}
      </div>
      <div>
        <h4>Годы:</h4>
        {years.map(year => (
          <button 
            key={year}
            onClick={() => setSelectedYear(year)}
            className={selectedYear === year ? 'active' : ''}
          >
            {year}
          </button>
        ))}
      </div>
      <button onClick={handleSearch} 
      className="search-button">Искать</button>
    </div>
  );
}

export default Filter;