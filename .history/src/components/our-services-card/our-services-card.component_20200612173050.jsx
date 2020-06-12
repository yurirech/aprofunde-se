import React from 'react';
import { v4 as uuid } from 'uuid';
import { Content, FlexContainerExtended } from './our-services-card.styles';
import { FlexContainer } from '../../_styles';

const OurServicesCard = ({ourServices}) => (
  <FlexContainerExtended color='#f4681b17' wrap='wrap' justify='space-around'>
    {
      ourServices.map(service => (
        <Content key={uuid()}>
          <h6>{service.title}</h6>
          <small>{service.description}</small>
        </Content>
      ))
    }
  </FlexContainer>
);

export default OurServicesCard;