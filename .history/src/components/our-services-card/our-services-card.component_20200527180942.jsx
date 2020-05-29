import React from 'react';

import {C} from './our-services-card.styles';

const OurServicesCard = ({services}) => (
  <div>
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