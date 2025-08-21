import React from 'react';

function Filter({ onSearch }) {
  const genres = ['Любовь', 'Детектив', 'Комедия', 'Драма', 'Фэнтези', 'Научная фантастика'];
  const years = [2024, 2023, 2022, 2021, 2020];

  const handleSearch = () => {
    const selectedGenre = 'Любовь'; // Пример
    const selectedYear = 2024; // Пример
    onSearch(selectedGenre, selectedYear);
  };

  return (
    <div className="filter-container">
      <h3>Фильтры</h3>
      <div>
        <h4>Жанры:</h4>
        {genres.map(genre => (
          <button key={genre}>{genre}</button>
        ))}
      </div>
      <div>
        <h4>Годы:</h4>
        {years.map(year => (
          <button key={year}>{year}</button>
        ))}
      </div>
      <button onClick={handleSearch}>Искать</button>
    </div>
  );
}

export default Filter;