import React, {Component} from 'react';
import { Card } from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { HomeCard } from "./HomeCardsSectionStyled";

class HomeCardsSection extends Component {
  render() {
    return (
      <HomeCard>
        <Card.Body className='card-body'>
          <Card.Title>
            <FontAwesomeIcon size='2x' icon={this.props.cardContent.icon}/>
          </Card.Title>
          <Card.Text >
            {this.props.cardContent.content}
          </Card.Text>
        </Card.Body>
      </HomeCard>
    );
  }
}

export default HomeCardsSection;
