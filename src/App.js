import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import CardList from './components/card-list/CardList.component';
import SearchBox from './components/search-box/SearchBox.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const users = await response.json();
      this.setState(() => {
        return { monsters: users };
      });
    } catch (err) {
      console.log(err.message);
    }
  }

  onSearchChange = (event) => {
    this.setState(() => {
      return {
        searchField: event.target.value.toLocaleLowerCase(),
      };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className='App'>
        <h1 className='app-title'>Monster-Rolodex</h1>

        <SearchBox
          className='search-box'
          onChangeHandler={this.onSearchChange}
          placeholder='Search Monsters'
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
