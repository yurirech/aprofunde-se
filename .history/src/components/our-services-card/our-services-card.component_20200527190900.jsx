import React from 'react';

import { Content } from './our-services-card.styles';
import { FlexContainer } from '../../_styles';
import { colors } from '../../_variables';

const OurServicesCard = ({services}) => (
  <FlexContainer color= wrap='wrap' justify='space-around'>
    {
      services.map(service => (
        <Content>
          <h6>{service.title}</h6>
          <p>{service.description}</p>
        </Content>
      ))
    }
  </FlexContainer>
);

export default OurServicesCard;