import React from 'react';

import {Container, Content} from './our-services-card.styles';

const OurServicesCard = ({services}) => (
  <Container>
    {
      services.map(service => (
        <Container>
          <h5>{service.title}</h5>
          <p>{service.description}</p>
        </Container>
      ))
    }
  </div>
);

export default OurServicesCard;