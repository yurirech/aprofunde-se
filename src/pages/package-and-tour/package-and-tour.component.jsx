import React, {useEffect, useState} from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { Content, TourForm, Spacing } from './package-and-tour.styles';
import { FlexContainer } from '../../_styles';

import ItineraryTable from "../../components/SharedComponents/itinerary-table/itinerary-table.component";
import OurServicesCard from '../../components/our-services-card/our-services-card.component';
import TourDetails from '../../components/tours-details/tours-details.component';
import Button from '../../components/SharedComponents/button/button.component';
import CustomSelect from '../../components/custom-select/custom-select.component';

const hour = [
  {
    value: '06:15',
    option: '06:15'
  },
  {
    value: '08:15',
    option: '08:15'
  },
  {
    value: '10:15',
    option: '10:15'
  },
  {
    value: '16:15',
    option: '16:15'
  },
]
const people = [
  {
    value: '1',
    option: '1 pessoa'
  },
  {
    value: '2',
    option: '2 pessoas'
  },
  {
    value: '3',
    option: '3 pessoas'
  },
  {
    value: '4',
    option: '4 pessoas'
  },
  {
    value: '5',
    option: '5 pessoas'
  },
]

const PackageAndTour = ({tourDetails, handleChange, handleClick, isDayTour, ...otherProps}) => {

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    window.scrollTo(0, 0)
  });

  handleChange = date => setDate(date);

  const {image, title, description, subtitle} = tourDetails;
 
  return (
        <Content>  
          <TourDetails  image={image} 
                        title={title} 
                        description={description} 
                        subtitle={subtitle}
                        direction= {!isDayTour ? 'row-reverse' : null}
                        dayTourStyles={isDayTour ? true : false} 
                        isDayTour={isDayTour}
                        >
                        
          </TourDetails>

          {
            !isDayTour ? <h2>Nossos serviços</h2> : <Spacing></Spacing>
          }
          
          <OurServicesCard  color={isDayTour ? false : true} 
                            contentBgColor={isDayTour ? true : false}
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
                <DatePicker selected={date} onChange={handleChange} dateFormat="dd/MM/yyyy"/>
                <CustomSelect options={hour} />
                <CustomSelect options={people} />
                <Button text='Enviar' bgColor='#6e5f9e' />
              </FlexContainer>
            </TourForm>
            
          }
        </Content>
      );
    } 

export default PackageAndTour;
