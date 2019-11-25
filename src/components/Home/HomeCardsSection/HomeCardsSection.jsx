import React, {Component} from 'react';
import { Card } from "react-bootstrap";


class HomeCardsSection extends Component {
  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>
            LALALALALA
          </Card.Title>
          <Card.Text >
            {this.props.cardContent}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default HomeCardsSection;
