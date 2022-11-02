import { Component } from 'react';

import './card-list.styles.css';

import Card from '../Card/Card.component.jsx';

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div>
        {monsters.map((monster) => {
          return <Card key={monster.id} data={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
