import React from 'react';
import { v4 as uuid } from 'uuid';
import { Content, FlexContainerExtended } from './our-services-card.styles';
import SimpleList from '../simple-list/simple-list.component';

const OurServicesCard = ({ourServices, isDayTour}) => (
  <FlexContainerExtended color={!isDayTour ? '#f4681b17' : null} wrap='wrap' justify='space-around'>
    {
      ourServices.map(service => (
        <Content contentBgColor={isDayTour ? '#f4681b17' : null} key={uuid()}>
          <h6>{service.title}</h6>
          {
            isDayTour ?
            <SimpleList listItems={service.description} /> 
            : 
            <small>{service.description}</small>
          }
        </Content>
      ))
    }
  </FlexContainerExtended>
);

export default OurServicesCard;