import React, {Component} from 'react';
import './Home.scss'
import HomeHeader from "./HomeHeader/HomeHeader";
import { Container, Row, Col } from "react-bootstrap";
import HomeCardsSection from "./HomeCardsSection/HomeCardsSection";
import { cardContent } from "./HomeContent";
import HomeAboutNetherlands from "./HomeAboutNetherlands/HomeAboutNetherlands";

class Home extends Component {
  render() {

    let cardContentList = cardContent.map((text, i) =>
        <Col key={i} lg={6}>
          <HomeCardsSection key={i} cardContent={ text }/>
        </Col>
      );

    return (
      <Container>
      <Row>
        <Col lg={12}>
          <HomeHeader />
        </Col>
        { cardContentList }
        <Col lg={12}>
          <HomeAboutNetherlands />
        </Col>
      </Row>
      </Container>
    );
  }
}

export default Home;
