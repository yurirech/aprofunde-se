import React from 'react';

import {cardsLeft, cardsRight} from './day-tours.data';

import {Content, FlexContainerExtended} from  './day-tours.styles';
import {FlexContainer, Overlay} from '../../_styles';
import {colors} from '../../_variables';
import { header } from './day-tours.data';
import {v4 as uuid} from 'uuid';

import CentralizedSection from '../../components/SharedComponents/centrilized-section/centrilized-section.component';
import CustomCardWithBackground from '../../components/custom-card-with-background/custom-card-with-background.component'

const DayTours = () => {
  
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
};

export default DayTours;