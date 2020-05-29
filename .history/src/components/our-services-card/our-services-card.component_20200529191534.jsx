import React from 'react';

import { Content } from './our-services-card.styles';
import { FlexContainer } from '../../_styles';
import { colors } from '../../_variables';

const OurServicesCard = ({ourServices}) => (
  <FlexContainer color={colors.aprofundeSeOrange} wrap='wrap' justify='space-around'>
    {/* {
      ourServices.map(service => (
        <Content>
          <h6>{service.title}</h6>
          <small>{service.description}</small>
        </Content>
      ))
    } */}
  </FlexContainer>
);

export default OurServicesCard;