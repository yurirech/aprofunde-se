import React, {Component} from 'react';
import HomeHeader from "./HomeHeader/HomeHeader";
import {Container, Col, Row} from "react-bootstrap";
import {dayTours, headerContent, homeTours, toursCard} from "./HomeContent";
import CentralizedSection from "../SharedComponents/CentrilizedSection/CentralizedSection";
import {RowStyled} from "./HomeStyled";
import ListWithIcons from "../SharedComponents/ListWithIcon/ListWithIcons";
import TourCard from "./TourCard/TourCard";
import AvatarPicture from "../SharedComponents/AvatarPicture/AvatarPicture";
import CarouselWithArrows from "../SharedComponents/CarouselWithArrows/CarouselWithArrows";
import HomeContactForm from "./HomeContactForm/HomeContactForm";




class Home extends Component {
  render() {

    let listWithIcons = homeTours.whatIsIncluded.map((content, i) =>
      <ListWithIcons key={i} listItem={content.content} icon={content.icon} />
    );

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
                { listWithIcons }
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
            <Col lg={{span: 8, offset: 2}} noGutters={true} className='contact'>
              <HomeContactForm />
            </Col>
        </RowStyled>
      </Container>
    );
  }
}

export default Home;
