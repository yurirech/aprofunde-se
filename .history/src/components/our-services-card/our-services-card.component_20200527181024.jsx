import React from 'react';

import {Container, Content} from './our-services-card.styles';

const OurServicesCard = ({services}) => (
  <Container>
    {
      services.map(service => (
        <Content>
          <h5>{service.title}</h5>
          <p>{service.description}</p>
        </Content>
      ))
    }
  </Container>
);

export default OurServicesCard;