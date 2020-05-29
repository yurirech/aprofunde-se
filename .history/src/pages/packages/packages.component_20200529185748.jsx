import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import CentralizedSection from "../../components/SharedComponents/centrilized-section/centrilized-section.component";
import {homeTours, toursCard, test, test2} from "./packages.data";
import ListWithIcons from "../../components/SharedComponents/ListWithIcon/ListWithIcons";
import {Col, Row} from "react-bootstrap";
import TourCard from "../Home/TourCard/TourCard";
import AvatarPicture from "../../components/SharedComponents/AvatarPicture/AvatarPicture";
import { Content } from './packages.styles';
import Package from '../../components/package/package'

class Packages extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {location} = this.props;
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

    if(location.pathname === '/packages') {
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
    } else if(location.pathname === '/packages/embrenhe-se') {
      return <Package packagea={} />
    } else {
     return <div>nothing to see here</div>
    }
  }
}

export default withRouter(Packages);
