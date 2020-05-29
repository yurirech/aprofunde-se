import React from 'react';
import styled from "styled-components";
import imgTest from "../../assets/img/day-trip.jpg"
import ItineraryTable from "../SharedComponents/itinerary-table/itinerary-table.component";
import { colors } from '../../_variables';
import OurServicesCard from '../our-services-card/our-services-card.component';
import PackageDetails from '../package-details/package-details.component';

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
  {
    day: '1o Dia',
    city: 'Amsterdam',
    title: `Transporte`,
    description: `Translado do Aeroporto para o Hotel em Amsterdam. Uma atividade a tarde e a noite esta incluso um jantar no barco pelos canais de Amsterdam.`
    
  },
  {
    day: '1o Dia',
    city: 'Amsterdam',
    title: `Transporte`,
    description: `Translado do Aeroporto para o Hotel em Amsterdam. Uma atividade a tarde e a noite esta incluso um jantar no barco pelos canais de Amsterdam.`
  },
  {
    day: '1o Dia',
    city: 'Amsterdam',
    title: `Transporte`,
    description: `Translado do Aeroporto para o Hotel em Amsterdam. Uma atividade a tarde e a noite esta incluso um jantar no barco pelos canais de Amsterdam.`
  },
]
const Package = () => (
        <Content>
          <PackageDetails title='LALALA' description='lalalal' subTitle='lalalalal'  />
          <h2>Nossos Serviços</h2>
          <OurServicesCard  />
          <ItineraryTable  />
        </Content>
      ); 

export default Package;
