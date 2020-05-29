import React from 'react';

import './our-services-card.styles';

const OurServicesCard = ({services}) => (
  <div>
    {
      services.map(service => (
        <div>
          <h5>{service.title}</h5>
          <p></p>
        </div>
      ))
    }
  </div>
);

export default OurServicesCard