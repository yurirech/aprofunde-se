import React from 'react';
import { v4 as uuid } from 'uuid';
import { Content, FlexContainerExtended } from './our-services-card.styles';

const OurServicesCard = ({ourServices, color, contentBgColor}) => (
  <FlexContainerExtended color={color ? '#f4681b17' : null} wrap='wrap' justify='space-around'>
    {
      ourServices.map(service => (
        <Content contentBgColor={contentBgColor ? '#f4681b17' : null} key={uuid()}>
          <h6>{service.title}</h6>
          <small>{service.description}</small>
        </Content>
      ))
    }
  </FlexContainerExtended>
);

export default OurServicesCard;