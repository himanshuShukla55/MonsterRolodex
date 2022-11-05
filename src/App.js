import { useState, useEffect } from 'react';

import './App.css';

import CardList from './components/card-list/CardList.component';
import SearchBox from './components/search-box/SearchBox.component';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const onSearchChange = (event) => {
    setSearchField(event.target.value.toLocaleLowerCase());
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  return (
    <div className='App'>
      <h1 className='app-title'>Monster-Rolodex</h1>

      <SearchBox
        className='search-box'
        onChangeHandler={onSearchChange}
        placeholder='Search Monsters'
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
