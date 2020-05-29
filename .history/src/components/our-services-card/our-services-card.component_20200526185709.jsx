import React from 'react';

import './our-services-card.styles';

const OurServicesCard = ({services}) => (
  <div>
    {
      services.map(service => (
        <div>
          <h5>{service.title}</h5>
          <p>{service.pro</p>
        </div>
      ))
    }
  </div>
);

export default OurServicesCard