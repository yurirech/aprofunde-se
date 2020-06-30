import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import {homeTours, ourSevices, tourDetails, itineraryTables, packageCard} from "./packages.data";
import { FlexContainer, Overlay } from '../../_styles';
import { Content } from './packages.styles';

import {v4 as uuid} from 'uuid';

import CentralizedSection from "../../components/SharedComponents/centrilized-section/centrilized-section.component";
import ListWithIcons from "../../components/SharedComponents/list-with-icons/list-with-icons.component";
import Package from '../../components/package/package'
import CustomCardWithBackground from '../../components/custom-card-with-background/custom-card-with-background.component';

class Packages extends Component {
  

  // Get packages items to show in view
  getPackages(packageTour) {
    if(this.props.location.pathname === packageTour) {
      let currentTour = packageTour.split('/')[2];
      return (
        <Package tourDetails={tourDetails[currentTour]} 
                 ourServices={ourSevices[currentTour]} 
                 itineraryTables={itineraryTables[currentTour]} />
      );
    }
  };

  render() {
    const {location} = this.props;
    
    // Mapping through list of icons
    let whatIsIncluded = homeTours.whatIsIncluded.map((content) =>
      <ListWithIcons key={uuid()} 
                     listItem={content.content} 
                     icon={content.icon} />
    );

    // Mapping through custom card with background
    let packagesCards = packageCard.map(({...otherProps}) => (
      <CustomCardWithBackground {...otherProps} 
                                buttonBackgroungColor='#000' 
                                key={uuid()} >
        <Overlay />
      </CustomCardWithBackground>
    ));
    
    if(location.pathname === '/packages') {
      return (
        <Content>
          <div className='title'>
            <CentralizedSection title={'Pacotes'} mainText={homeTours.mainText}/>
          </div>
          <div className='list'>
            <p>{homeTours.subTitle}</p>
            { whatIsIncluded }
            <p>{homeTours.label}</p>
          </div> 
          <FlexContainer margin='0' justify='center' alignMd='center' columnMd>
            { packagesCards }
          </FlexContainer>
        </Content>
      );

    } else {
       return this.getPackages(location.pathname);
    }
  }
}

export default withRouter(Packages);
