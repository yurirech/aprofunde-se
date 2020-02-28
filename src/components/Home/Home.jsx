import React, {Component} from 'react';
import HomeHeader from "./HomeHeader/HomeHeader";
import {Container, Col, Row} from "react-bootstrap";
import {dayTours, headerContent, homeTours, toursCard} from "./HomeContent";
import CentralizedSection from "../SharedComponents/CentrilizedSection/CentralizedSection";
import {RowStyled} from "./HomeStyled";
import TourCard from "./TourCard/TourCard";
import AvatarPicture from "../SharedComponents/AvatarPicture/AvatarPicture";
import CarouselWithArrows from "../SharedComponents/CarouselWithArrows/CarouselWithArrows";
import ContactForm from "../ContactForm/ContactForm";

class Home extends Component {
  render() {

    let tourCard = toursCard.map((content, i) =>
      <Col key={i} lg={4}>
        <TourCard key={i} title={content.title} numberOfDays={content.numberOfDays} subTitle={content.subTitle}
                  mainText={content.mainText} buttonText={content.buttonText}>
          <AvatarPicture key={i} avatarImg={content.image} />
        </TourCard>
      </Col>
    );

    return (
      <Container className="p-0" fluid="true">
          <RowStyled noGutters={true}>
            <Col lg={12} className='header'>
              <HomeHeader title={ headerContent.title } subTitle={ headerContent.subTitle } />
            </Col>
              <Col lg={12} className='tours'>
                <CentralizedSection title={homeTours.title} mainText={homeTours.mainText} />
                <h5 style={{ margin: "2rem 0"}}>{homeTours.subTitle}</h5>
              </Col>
            <Row noGutters={true} className='tourCards'>
              { tourCard }
            </Row>
            <Row noGutters={true} className='justify-content-center' >
               <Col lg={12} className='dayTours'>
                 <CentralizedSection title={dayTours.title} mainText={dayTours.mainText} />
               </Col>
              <Col lg={8}>
                <CarouselWithArrows />
              </Col>
            </Row>
            <Col lg={12} className='contact'>
              <ContactForm />
            </Col>
        </RowStyled>
      </Container>
    );
  }
}

export default Home;
