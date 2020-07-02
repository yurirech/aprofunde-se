import React, {useState} from 'react';

import {Content} from './day-tour.styles';

import "react-datepicker/dist/react-datepicker.css";

import DatePicker from "react-datepicker";
import test from '../../assets/img/day-tours/delta.jpg'
import ToursDetails from '../tours-details/tours-details.component';
import OurServicesCard from '../our-services-card/our-services-card.component';
import CustomSelect from '../custom-select/custom-select.component';
import Button from '../SharedComponents/button/button.component';
import { FlexContainer } from '../../_styles';

const dummy = {
  title: 'Haarlem & Praia de bicicleta',
  description: <span>Conheça a charmosa cidade de Haarlem que fica localizada a 20 minutos de trem de Amsterdam. Devido a proximidade, se você estiver em Amsterdam, nós iremos até Haarlem de trem, mas pode deixar que a gente te encontra no seu Hotel. <br/>
  Chegando em Haarlem, voce escutará histórias e fatos locais do nosso guia, e conhecerá um museu de sua escolha - arte moderna ou clássica. Você pode escolher se quer almoçar em Haarlem ou na praia. <br/>
  Depois de pegar a bicicleta você terá a experiência local de pedalar pela cidade e ir até a praia, 20 - 30 minutos. <br/>
  Chegando lá você terá uma uma porção e uma cadeira de sol reservada em um dos melhores bares te esperando, então tudo que você tem que fazer é relaxar e deixar com a gente! <br/>
  Se você quiser ficar na praia até a noite ao invés de voltar no horário do fim do tour não tem problema nenhum, tudo pode ser esquematizado.</span>,
  image: test,
  arr: [
    {
      title: 'Nulla et ligula arcu',
      description: `Cras tristique scelerisque mi, a maximus elit tincidunt vel. Vivamus id nibh nisi. Morbi laoreet dui et neque tristique tristique. Proin pulvinar interdum dui eget imperdiet.`,
    },
    {
      title: 'Nulla et ligula arcu',
      description: `Cras tristique scelerisque mi, a maximus elit tincidunt vel. Vivamus id nibh nisi. Morbi laoreet dui et neque tristique tristique. Proin pulvinar interdum dui eget imperdiet.`,
    },
    {
      title: 'Nulla et ligula arcu',
      description: `Cras tristique scelerisque mi, a maximus elit tincidunt vel. Vivamus id nibh nisi. Morbi laoreet dui et neque tristique tristique. Proin pulvinar interdum dui eget imperdiet.`,
    }
  ]
}

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

const DayTour = ({handleChange}) => { 
  const [date, setDate] = useState(new Date());

  handleChange = date => setDate(date);


  return (
    <Content>
      <FlexContainer margin='0 5rem'>
        <Button text='<-' />
      </FlexContainer>
      <ToursDetails title={dummy.title} 
                    description={dummy.description} 
                    image={dummy.image} 
                    direction='row-reverse'
                    paragraphWidth='84%'
                    paragraphLineHeight='33px'
                    imageWrapperHeight='645px'
                    imageWrapperBoxShadow='14px 14px 4px 3px #6e6e6e3d'
                    />      
      <OurServicesCard ourServices={dummy.arr} color />
      <h2>Ver Disponibilidade</h2>
      <form>
        <DatePicker selected={date} onChange={handleChange} dateFormat="dd/MM/yyyy"/>
        <CustomSelect options={hour} />
        <CustomSelect options={people} />
        <Button text='Enviar' bgColor='black' />
      </form>
    </Content>
  )
};

export default DayTour;