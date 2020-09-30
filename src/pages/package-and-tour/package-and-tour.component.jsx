import React, {useEffect} from 'react';

import "react-datepicker/dist/react-datepicker.css";

import { Content, TourForm, Spacing } from './package-and-tour.styles';
import { FlexContainer } from '../../_styles';
import { numberOfPeople, serviceHours } from '../day-tours/day-tours.data';

import ItineraryTable from "../../components/shared-components/itinerary-table/itinerary-table.component";
import OurServicesCard from '../../components/our-services-card/our-services-card.component';
import TourDetails from '../../components/tours-details/tours-details.component';
import Button from '../../components/shared-components/button/button.component';
import CustomSelect from '../../components/custom-select/custom-select.component';
import DayToursDatePicker from '../../components/date-picker/date-picker';
import {Link} from "react-router-dom";


const PackageAndTour = ({tourDetails, handleChange, handleClick, isDayTour, ...otherProps}) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  });

  const {image, title, description, subtitle} = tourDetails;
 
  return (
        <Content>  
          <TourDetails  image={image} 
                        title={title} 
                        description={description} 
                        subtitle={subtitle}
                        carouselImages={image}
                        direction= {!isDayTour ? 'row-reverse' : null}
                        dayTourStyles={!!isDayTour}
                        isDayTour={isDayTour}
                        
                        >
                        
          </TourDetails>

          {
            !isDayTour ? <h2>Nossos serviços</h2> : <Spacing></Spacing>
          }
          
          <OurServicesCard
                            isDayTour={!!isDayTour}
                            {...otherProps}  
                          />
          
          {
            !isDayTour ?
            <div>
              <h2>Programação</h2>
              <ItineraryTable {...otherProps} />
               <Link to='/contact-us' >
                 <Button text='Entre em contato' />
               </Link>
            </div> 
            : 
            <TourForm>
              <FlexContainer column justify='center' width='375px' margin='2rem' >
                <Link to='/contact-us'>
                  <Button width='100%' text='Entrar em contato' bgColor='#6e5f9e' />
                </Link>
              </FlexContainer>
            </TourForm> 
          }
        </Content>
      );
    } 

export default PackageAndTour;
