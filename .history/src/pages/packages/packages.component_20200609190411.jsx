import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import CentralizedSection from "../../components/SharedComponents/centrilized-section/centrilized-section.component";
import {homeTours, ourSevices, packageDetails, itineraryTables, packa} from "./packages.data";
import ListWithIcons from "../../components/SharedComponents/ListWithIcon/ListWithIcons";
import {Col, Row} from "react-bootstrap";
import { Content } from './packages.styles';
import Package from '../../components/package/package'
import CustomCardWithBackground from '../../components/custom-card-with-background/custom-card-with-background.component';

class Packages extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {location} = this.props;
    let listWithIcons = homeTours.whatIsIncluded.map((content, i) =>
      <ListWithIcons key={i} listItem={content.content} icon={content.icon} />
    );

    if(location.pathname === '/packages') {
      return (
        <Content>
          <div className='title'>
            <CentralizedSection title={'Pacotes'} mainText={homeTours.mainText}/>
          </div>
         <div className='list'>
          <p>{homeTours.subTitle}</p>
           {listWithIcons}
         </div>
          <Row noGutters={true}>
            <CustomCardWithBackground cards={['ui']} />
          </Row>
        </Content>
      );
    } else if(location.pathname === '/packages/embrenhe-se') {
      return <Package packageDetails={packageDetails.embrenhaSe} ourServices={ourSevices.embrenhaSe} itineraryTables={itineraryTables.embrenhaSe} />
    } else if (location.pathname === '/packages/entranhe-se') {
     return <Package packageDetails={packageDetails.entranheSe} ourServices={ourSevices.entranheSe} itineraryTables={itineraryTables.entranheSe} />
    } else {
      return <Package packageDetails={packageDetails.entregueSe} ourServices={ourSevices.entregueSe} itineraryTables={itineraryTables.entregueSe} />
    }
  }
}

export default withRouter(Packages);
