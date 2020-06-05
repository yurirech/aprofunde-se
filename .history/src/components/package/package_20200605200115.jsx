import React from 'react';
import ItineraryTable from "../SharedComponents/itinerary-table/itinerary-table.component";
import { Content } from './package.styles'
import OurServicesCard from '../our-services-card/our-services-card.component';
import PackageDetails from '../package-details/package-details.component';
import {  } from "";

const Package = ({packageDetails, ...otherProps}) => (

        <Content>
          <PackageDetails image={packageDetails.image} title={packageDetails.title} 
          description={packageDetails.description} subtitle={packageDetails.subtitle}  />
          <h2>Nossos serviços</h2>
          <OurServicesCard {...otherProps}  />
          <h2>Programação</h2>
          <ItineraryTable {...otherProps} />
          <Button />
        </Content>
      ); 

export default Package;
