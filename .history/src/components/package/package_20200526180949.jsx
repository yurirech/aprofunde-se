import React from 'react';
import styled from "styled-components";
import ListWithPhoto from "../SharedComponents/ListWithPhoto/ListWithPhoto";
import imgTest from "../../assets/img/day-trip.jpg"
import ItineraryTable from "../SharedComponents/ItineraryTable/ItineraryTable";
import CentralizedSection from "../SharedComponents/centrilized-section/centrilized-section.component";
import ListWithIcons from "../SharedComponents/ListWithIcon/ListWithIcons";
import { colors } from '../../_variables';

const Content = styled.div`
  ul {
    list-style-type: none;
    padding-left: 0;
  }  
  img {
    max-width: 100%;
  }
  
  .list-with-photo {
    padding: 0 5%;
    
    h2 {
      margin-bottom: 2rem;
      font-weight: bold;
      color: ${colors.aprofundeSeOrange};
    }
  }
  
  .list-with-photo:first-of-type {
    text-align: center;
    
    .col:last-of-type {
      padding-top: 5rem;
      
      svg {
        display: none;
      }
    }
  }
  
  .itinerary-table {
    h1 {
      display: block;
      width: 100%;
      text-align: center;
    }
  }
  
  .list-with-icons {
    svg {
      display: none;
    }
  }
  
`;
const test = [
  
]
const Package = () => (
        <Content>
          <ItineraryTable days='10 days' city='Amsterdam' description='Amazing city fun exciting'>
            <h1>Programacao</h1>
          </ItineraryTable>
          <CentralizedSection title='Datas da viagem' />
          <ListWithIcons icon='utensils' listItem='05/04 - 11/04' />
        </Content>
      ); 

export default Package;
