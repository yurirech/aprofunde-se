import React, {Component} from 'react';
import { Card } from "react-bootstrap";


class HomeCardsSection extends Component {
  render() {
    const cardContent = ['Para você que tem interesse em viajar mas acaba indo sempre aos mesmos destinos populares e cheios ' +
    'de turistas.\n',
      'Para você que quer conhecer a fundo sobre a vida na Holanda, você que desconfia que existe mais neste país do que ' +
      'somente Amsterdam.'];

    let cardContentList = cardContent.map(text =>
      <Card>
      <Card.Body>
        <Card.Title>
          LALALALALA
        </Card.Title>
        <Card.Text key={text.id}>
          { text }
        </Card.Text>
      </Card.Body>
    </Card> );

    return (
      <div>
        { cardContentList }
      </div>
    );
  }
}

export default HomeCardsSection;
