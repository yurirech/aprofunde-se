import React, {Component} from 'react';
import {homeTours} from "../HomeContent";
import {Accordion, Card, Button} from "react-bootstrap";

class HomeTours extends Component {
  render() {

    let whatIsIncludedList = homeTours.whatIsIncludedText.map((text, i) => <li key={i}>{ text }</li>);

    return (
      <div>
        <h1>{ homeTours.title }</h1>
        <p> {homeTours.mainText} </p>
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                { homeTours.whatIsIncluded }
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <ul>
                  { whatIsIncludedList }
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}

export default HomeTours;
