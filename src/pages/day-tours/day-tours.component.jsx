import React from 'react';
import {v4 as uuid} from 'uuid';
import {withRouter} from 'react-router-dom';

import {header, cardsLeft, cardsRight, dayTours} from './day-tours.data';
import {Content, FlexContainerExtended} from  './day-tours.styles';
import {FlexContainer, Overlay} from '../../_styles';
import {colors} from '../../_variables';


import CentralizedSection from '../../components/SharedComponents/centrilized-section/centrilized-section.component';
import CustomCardWithBackground from '../../components/custom-card-with-background/custom-card-with-background.component'
import PackageAndTour from '../package-and-tour/package-and-tour.component';


const DayTours = ({location}) => {

 const getDayTours = (packageTour) => {
    if(location.pathname === packageTour) {
      let currentTour = packageTour.split('/')[2];
      console.log(currentTour);
      return (
       <PackageAndTour isDayTour 
                       tourDetails={dayTours[currentTour]} 
                       ourServices={dayTours[currentTour].services}  />
      )
    } else {
      return <div>404 PAGE NOT FOUND</div>;
    }
  };
  
  // Looping through cards of left column
    const leftColumn = cardsLeft.map(card => (
      <CustomCardWithBackground backgroundImage={card.image}
                                title={card.title} 
                                description={card.description} 
                                route={card.route} 
                                buttonBackgroungColor={colors.aprofundeSeOrange}
                                contentPadding='22% 0 22% 0'
                                marginBottom='4rem'
                                key={uuid()} >
        <Overlay color='black' opacity='.2' height='100%' />
      </CustomCardWithBackground>
                                
  )); 

  // Looping through cards of right column
    const rightColumn = cardsRight.map(card => (
      <CustomCardWithBackground backgroundImage={card.image}
                                title={card.title} 
                                description={card.description} 
                                route={card.route} 
                                buttonBackgroungColor={colors.aprofundeSeOrange}
                                contentPadding='22% 0 22% 0'
                                marginBottom='4rem'
                                key={uuid()} >
        <Overlay color='black'  opacity='.2' height='100%' />
      </CustomCardWithBackground>  
    ));
  
  if(location.pathname === '/day-tours') {
    return (
      <Content>
        <FlexContainer justify='center'>
          <CentralizedSection title={header.title} mainText={header.mainText} >
            <label>{header.subtitle}</label>
          </CentralizedSection>
        </FlexContainer>
        <FlexContainerExtended wrap='wrap' justify='space-between' margin='9rem 5% 3rem 5%'>
          <FlexContainer column width='47%' margin='0' widthLg='100%'>
            { leftColumn }
          </FlexContainer>
          <FlexContainer className='right-column' column width='47%' margin='0' widthLg='100%'>
            { rightColumn }
          </FlexContainer>
        </FlexContainerExtended>  
      </Content>
    )
  } else {
    return getDayTours(location.pathname);
  }
};

export default withRouter(DayTours);