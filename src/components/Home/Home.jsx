import React, {Component} from 'react';
import './Home.scss'
import HomeHeader from "./HomeHeader/HomeHeader";
import { Container, Row, Col } from "react-bootstrap";
import HomeCardsSection from "./HomeCardsSection/HomeCardsSection";

class Home extends Component {
  render() {
    return (
      <Container>
      <Row>
        <Col lg={12}>
          <HomeHeader />
        </Col>
        <Col lg={6}>
          <HomeCardsSection/>
        </Col>
      </Row>
      </Container>
    );
  }
}

export default Home;
