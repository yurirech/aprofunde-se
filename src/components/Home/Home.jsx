import React, {Component} from 'react';
import HomeHeader from "./HomeHeader/HomeHeader";
import {Container, Col, Row} from "react-bootstrap";
import HomeCardsSection from "./HomeCardsSection/HomeCardsSection";
import { cardContent } from "./HomeContent";
import HomeAboutNetherlands from "./HomeAboutNetherlands/HomeAboutNetherlands";
import HomeWhatWillYouSee from "./HomeWhatYouWillSee/HomeWhatWillYouSee";
import HomeTours from "./HomeTours/HomeTours";
import {RowStyled} from "./HomeStyled";

class Home extends Component {
  render() {

    let cardContentList = cardContent.map((text, i) =>
        <Col key={i} lg={3}>
          <HomeCardsSection key={i} cardContent={ text }/>
        </Col>
      );

    return (
      <Container className="p-0" fluid="true">
        <RowStyled noGutters={true}>
          <Col lg={12} className='header'>
            <HomeHeader />
            <Row className='cards-header'>
            { cardContentList }
            </Row>
          </Col>
          <Col lg={12} className='about-netherlands'>
            <HomeAboutNetherlands />
          </Col>
            <Col lg={12} className='will-see'>
              <HomeWhatWillYouSee />
            </Col>
            <Col lg={12} className='tours'>
              <HomeTours />
            </Col>
        </RowStyled>
      </Container>
    );
  }
}

export default Home;
