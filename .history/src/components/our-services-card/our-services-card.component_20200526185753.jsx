import React from 'react';

import './our-services-card.styles';

const OurServicesCard = ({services}) => (
  <div>
    {
      services.map(service => (
        <Conteiner>
          <h5>{service.title}</h5>
          <p>{service.description}</p>
        </Conteiner>
      ))
    }
  </div>
);

export default OurServicesCard