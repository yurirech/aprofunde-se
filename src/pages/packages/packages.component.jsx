import React, {Component, useEffect} from 'react';
import { withRouter } from 'react-router-dom';

import {homeTours, ourSevices, tourDetails, itineraryTables, packageCard} from "./packages.data";
import { FlexContainer, Overlay } from '../../_styles';
import { Content } from './packages.styles';

import {v4 as uuid} from 'uuid';

import CentralizedSection from "../../components/shared-components/centrilized-section/centrilized-section.component";
import ListWithIcons from "../../components/shared-components/list-with-icons/list-with-icons.component";
import PackageAndTour from '../package-and-tour/package-and-tour.component'
import CustomCardWithBackground from '../../components/custom-card-with-background/custom-card-with-background.component';

class Packages extends Component {
  

  // Get packages items to show in view
  getPackages(packageTour) {
    let currentTour = packageTour.split('/')[2];
    if(tourDetails[currentTour]) {
      return (
        <PackageAndTour tourDetails={tourDetails[currentTour]} 
                        ourServices={ourSevices[currentTour]} 
                        itineraryTables={itineraryTables[currentTour]} />
      );
    } return <div>404 PAGE NOT FOUND</div>
  };

  render() {
    const {location} = this.props;
    window.scrollTo(0, 0)

    
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
                                mobileMinWidth='320px'
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
