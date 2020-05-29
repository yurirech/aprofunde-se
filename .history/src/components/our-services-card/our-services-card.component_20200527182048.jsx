import React from 'react';

import {Container, Content} from './our-services-card.styles';
import { FlexContainer } from '../../_styles';

const OurServicesCard = ({services}) => (
  <FlexContainer>
    {
      services.map(service => (
        <Content>
          <h5>{service.title}</h5>
          <p>{service.description}</p>
        </Content>
      ))
    }
  </FlexContainer>
);

export default OurServicesCard;