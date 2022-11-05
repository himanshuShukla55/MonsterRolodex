import './card-list.styles.css';

import Card from '../Card/Card.component.jsx';

const CardList = ({ monsters }) => (
  <div>
    {monsters.map((monster) => {
      return <Card key={monster.id} data={monster} />;
    })}
  </div>
);
export default CardList;
