import React, {Component} from 'react';
import HomeHeader from "./HomeHeader/HomeHeader";
import {Container, Col} from "react-bootstrap";
import {headerContent, homeTours, toursCard} from "./HomeContent";
import CentralizedSection from "../SharedComponents/CentrilizedSection/CentralizedSection";
import {RowStyled} from "./HomeStyled";
import ListWithIcons from "../SharedComponents/ListWithIcon/ListWithIcons";
import TourCard from "./TourCard/TourCard";
import AvatarPicture from "../SharedComponents/AvatarPicture/AvatarPicture";




class Home extends Component {
  render() {

    // let cardContentList = cardContent.map((content, i) =>
    //     <Col key={i} lg={3}>
    //       <CardWithIcon key={i} cardContentProp={ content.content } cardIcon={ content.icon } />
    //     </Col>
    //   );

    let tourCard = toursCard.map((content, i) =>
      <Col key={i} lg={3}>
        <TourCard key={i} title={content.title} numberOfDays={content.numberOfDays} subTitle={content.subTitle}
                  mainText={content.mainText} buttonText={content.buttonText}>
          <AvatarPicture key={i} avatarImg={content.image} />
        </TourCard>
      </Col>
    );

    let listWithIcons = homeTours.whatIsIncluded.map((content, i) =>
      <ListWithIcons key={i} listItem={content.content} icon={content.icon} />
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
          { tourCard }
        </RowStyled>
      </Container>
    );
  }
}

export default Home;
