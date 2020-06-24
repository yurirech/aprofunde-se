import React from 'react';

import {cardsLeft, cardsRight} from './day-tours.data';

import {Content} from  './day-tours.styles';
import {FlexContainer} from '../../_styles';
import {colors} from '../../_variables';
import { header } from './day-tours.data';

import CentralizedSection from '../../components/SharedComponents/centrilized-section/centrilized-section.component';
import CustomCardWithBackground from '../../components/custom-card-with-background/custom-card-with-background.component'

const DayTours = () => {
  
  // Looping 
    const leftColumn = cardsLeft.map(card => (
      <CustomCardWithBackground backgroundImage={card.image}
                                title={card.title} 
                                description={card.description} 
                                route={card.route} 
                                buttonBackgroungColor={colors.aprofundeSeOrange}
                                contentPadding='22% 0 22% 0'
                                hideOverlay >
                                </CustomCardWithBackground>
  )); 

    const rightColumn = cardsRight.map(card => (
      <CustomCardWithBackground backgroundImage={card.image}
                                title={card.title} 
                                description={card.description} 
                                route={card.route} 
                                buttonBackgroungColor={colors.aprofundeSeOrange}
                                contentPadding='22% 0 22% 0'
                                hideOverlay />
    ));
  
  return (
    <Content>
      <FlexContainer justify='center'>
        <CentralizedSection title={header.title} mainText={header.mainText} >
          <label>{header.subtitle}</label>
        </CentralizedSection>
      </FlexContainer>
      <FlexContainer  justify='space-between' margin='4rem 5%'>
        <FlexContainer column width='46%' margin='0'>
          { leftColumn }
        </FlexContainer>
        <FlexContainer column width='46%' margin='0'>
          { rightColumn }
        </FlexContainer>
      </FlexContainer>
      
    </Content>
  )
};

export default DayTours;