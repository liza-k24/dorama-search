import { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './Filter';
import DoramaList from './DoramaList';
import './App.css';

const API_KEY = 'a43aae9b10e0d70f34e3e7b7930b9606'; 
const BASE_URL = 'https://api.themoviedb.org/3';

const GENRES_MAP = {
  'Драма': 18,
  'Фэнтези': 10765,
  'Комедия': 35,
  'Любовь': 10749,
  'Детектив': 9648,
  'Научная фантастика': 10765 
};

function App() {
  const [doramas, setDoramas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDoramas = async (genre, year) => {
    setLoading(true);
    setError(null); 

    const genreId = GENRES_MAP[genre] || null;
    const yearNumber = year ? parseInt(year) : null;

    try {
      const response = await axios.get(`${BASE_URL}/discover/tv`, {
        params: {
          api_key: API_KEY,
          language: 'ru-RU',
          with_genres: genreId,
          first_air_date_year: yearNumber,
          with_origin_country: 'KR'
        }
      });
      
      const data = response.data.results.map(item => ({
        id: item.id,
        title: item.name,
        genre: item.genre_ids.map(id => Object.keys(GENRES_MAP).find(key => GENRES_MAP[key] === id)).join(', '),
        year: item.first_air_date ? new Date(item.first_air_date).getFullYear() : 'Неизвестно',
        imageUrl: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
        description: item.overview || 'Описание отсутствует.'
      }));

      setDoramas(data);

    } catch (err) {
      setError('Не удалось найти дорамы по вашему запросу.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoramas();
  }, []);

  const handleSearch = (genre, year) => {
    fetchDoramas(genre, year);
  };

  if (loading) return <div className="loading">Загрузка...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="app-container">
      <h1>Поиск дорам</h1>
      <Filter onSearch={handleSearch} />
      <DoramaList doramas={doramas} />
    </div>
  );
}

export default App;