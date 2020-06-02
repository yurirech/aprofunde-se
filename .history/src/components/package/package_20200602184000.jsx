import React from 'react';
import imgTest from "../../assets/img/day-trip.jpg"
import ItineraryTable from "../SharedComponents/itinerary-table/itinerary-table.component";
import { colors } from '../../_variables';
import { Content } from './package.styles'
import OurServicesCard from '../our-services-card/our-services-card.component';
import PackageDetails from '../package-details/package-details.component';


const Package = ({packageDetails, ...otherProps}) => (

        <Content>
          <PackageDetails title={packageDetails.title} description={packageDetails.description} subtitle={packageDetails.subtitle}  />
          <h2>Nossos Serviços</h2>
          <OurServicesCard {...otherProps}  />
          <h2>Programação</h2>
          <ItineraryTable {...otherProps} />
        </Content>
      ); 

export default Package;
