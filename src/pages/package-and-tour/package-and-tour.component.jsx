import React, {useEffect} from 'react';

import "react-datepicker/dist/react-datepicker.css";

import { Content, TourForm, Spacing } from './package-and-tour.styles';
import { FlexContainer } from '../../_styles';
import { numberOfPeople, serviceHours } from '../day-tours/day-tours.data';

import ItineraryTable from "../../components/SharedComponents/itinerary-table/itinerary-table.component";
import OurServicesCard from '../../components/our-services-card/our-services-card.component';
import TourDetails from '../../components/tours-details/tours-details.component';
import Button from '../../components/SharedComponents/button/button.component';
import CustomSelect from '../../components/custom-select/custom-select.component';
import DayToursDatePicker from '../../components/date-picker/date-picker';


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
                        dayTourStyles={isDayTour ? true : false} 
                        isDayTour={isDayTour}
                        
                        >
                        
          </TourDetails>

          {
            !isDayTour ? <h2>Nossos serviços</h2> : <Spacing></Spacing>
          }
          
          <OurServicesCard
                            isDayTour={isDayTour ? true : false}
                            {...otherProps}  
                          />
          
          {
            !isDayTour ?
            <div>
              <h2>Programação</h2>
              <ItineraryTable {...otherProps} />
              <Button text='Entre em contato' /> 
            </div> 
            : 
            <TourForm>
              <FlexContainer column justify='center' width='490px' margin='2rem' >
                <h2 style={{marginBottom: '3rem', marginTop: '-1.5rem', fontSize: '1.90rem'}}>Ver disponibilidade</h2>
                {/* <DatePicker selected={date} onChange={handleChange} dateFormat="dd/MM/yyyy"/> */}
                <DayToursDatePicker />
                <CustomSelect options={serviceHours} />
                <CustomSelect options={numberOfPeople} />
                <Button text='Enviar' bgColor='#6e5f9e' />
              </FlexContainer>
            </TourForm> 
          }
        </Content>
      );
    } 

export default PackageAndTour;
