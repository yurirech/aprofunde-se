import React, {useEffect} from 'react';

import { Content } from './package.styles'

import ItineraryTable from "../SharedComponents/itinerary-table/itinerary-table.component";
import OurServicesCard from '../our-services-card/our-services-card.component';
import TourDetails from '../tours-details/tours-details.component';
import Button from '../SharedComponents/button/button.component';



const Package = ({tourDetails, ...otherProps}) => {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  });

  const {image, title, description, subtitle} = tourDetails;

  return (
        <Content>
          <TourDetails image={image} title={title} 
          description={description} subtitle={subtitle}  />
          <h2>Nossos serviços</h2>
          <OurServicesCard {...otherProps}  />
          <h2>Programação</h2>
          <ItineraryTable {...otherProps} />
          <Button text='Entre em contato' />
        </Content>
      );
    } 

export default Package;
