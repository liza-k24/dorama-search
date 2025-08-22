import { useState } from 'react';
import Filter from './Filter';
import DoramaList from './DoramaList';
import './App.css'; 

const initialDoramas = [
  { 
    id: 1, 
    title: 'Милый дом', 
    genre: 'Драма', 
    year: 2020, 
    imageUrl: '../src/assets/sweethome.jpg', 
    description: 'Группа жильцов пытается выжить в здании, где монстры-мутанты берут верх.'
  },
  { 
    id: 2, 
    title: 'Игра в кальмара', 
    genre: 'Драма', 
    year: 2021, 
    imageUrl: '../src/assets/squidgame.jpg',
    description: 'Сотни отчаявшихся людей принимают участие в смертельной игре за огромный денежный приз.'
  },
  { 
    id: 3, 
    title: 'Аварийная посадка любви', 
    genre: 'Любовь', 
    year: 2019, 
    imageUrl: '../src/assets/love.jpg',
    description: 'Богатая наследница из Южной Кореи случайно приземляется в Северной, где её спасает офицер.'
  },
  { 
    id: 4, 
    title: 'Отель Дель Луна', 
    genre: 'Фэнтези', 
    year: 2019, 
    imageUrl: '../src/assets/hotel.jpg',
    description: 'Проклятый отель для призраков и его холодная владелица встречают нового менеджера.'
  },
];

function App() {
  const [doramas, setDoramas] = useState(initialDoramas);

  const handleSearch = (genre, year) => {
    const filtered = initialDoramas.filter(d => {
      const genreMatch = genre ? d.genre === genre : true;
      const yearMatch = year ? d.year === year : true;
      
      return genreMatch && yearMatch;
    });

    setDoramas(filtered);
  };

  return (
    <div className="app-container">
      <h1>Найти свою дораму теперь легко!</h1>
      <Filter onSearch={handleSearch} />
      <DoramaList doramas={doramas} />
    </div>
  );
}

export default App;