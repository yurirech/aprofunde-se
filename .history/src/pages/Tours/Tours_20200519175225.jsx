import React, {Component} from 'react';
import styled from "styled-components";
import CentralizedSection from "../SharedComponents/CentrilizedSection/CentralizedSection";
import {homeTours, toursCard} from "../Tours/ToursContent";
import ListWithIcons from "../SharedComponents/ListWithIcon/ListWithIcons";
import {Col, Row} from "react-bootstrap";
import TourCard from "../Home/TourCard/TourCard";
import AvatarPicture from "../../SharedComponents/AvatarPicture/AvatarPicture";

const Content = styled.div`
  background-color: #E8E8E8;
  padding: 5rem 0 2rem 0;
  
  p {
    padding: 0 15%;
  }
  
  .list {
    margin-bottom: 3.5rem;
    
    li {
      font-size: 1rem;
    }
  }
  
  .cards {
    padding: 0 7rem;
    
    h1, label, button {
      color: #000;
    }
    
    h1 {
      min-height: 70px;
    }
    
    .btn-outline-primary {
      border-color: #000;
      
      &:hover {
        background: #000;
      }
    }
  }
`;

class Tours extends Component {
  render() {

    let listWithIcons = homeTours.whatIsIncluded.map((content, i) =>
      <ListWithIcons key={i} listItem={content.content} icon={content.icon} />
    );

    let tourCard = toursCard.map((content, i) =>
      <Col key={i} lg={4}>
        <TourCard key={i} title={content.title} subTitle={content.subTitle} buttonText={content.buttonText}>
          <AvatarPicture key={i} avatarImg={content.image} />
        </TourCard>
      </Col>
    );

    return (
      <Content>
        <div className='title'>
          <CentralizedSection mainText={homeTours.mainText}/>
        </div>
        <CentralizedSection mainText={homeTours.subTitle}/>
       <div className='list'>
         {listWithIcons}
       </div>
        <Row className='cards' noGutters={true}>
          {tourCard}
        </Row>
      </Content>
    );
  }
}

export default Tours;
