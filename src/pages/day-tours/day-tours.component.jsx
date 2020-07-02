import React from 'react';
import {v4 as uuid} from 'uuid';
import {withRouter} from 'react-router-dom';

import {cardsLeft, cardsRight} from './day-tours.data';
import {Content, FlexContainerExtended} from  './day-tours.styles';
import {FlexContainer, Overlay} from '../../_styles';
import {colors} from '../../_variables';
import { header } from './day-tours.data';


import CentralizedSection from '../../components/SharedComponents/centrilized-section/centrilized-section.component';
import CustomCardWithBackground from '../../components/custom-card-with-background/custom-card-with-background.component'
import PackageAndTour from '../package-and-tour/package-and-tour.component';
import test from '../../assets/img/day-tours/delta.jpg'


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

const DayTours = ({location}) => {
  
  // Looping through cards of left column
    const leftColumn = cardsLeft.map(card => (
      <CustomCardWithBackground backgroundImage={card.image}
                                title={card.title} 
                                description={card.description} 
                                route={card.route} 
                                buttonBackgroungColor={colors.aprofundeSeOrange}
                                contentPadding='22% 0 22% 0'
                                marginBottom='4rem'
                                key={uuid()} >
        <Overlay color='black' opacity='.2' height='100%' />
      </CustomCardWithBackground>
                                
  )); 

  // Looping through cards of right column
    const rightColumn = cardsRight.map(card => (
      <CustomCardWithBackground backgroundImage={card.image}
                                title={card.title} 
                                description={card.description} 
                                route={card.route} 
                                buttonBackgroungColor={colors.aprofundeSeOrange}
                                contentPadding='22% 0 22% 0'
                                marginBottom='4rem'
                                key={uuid()} >
        <Overlay color='black'  opacity='.2' height='100%' />
      </CustomCardWithBackground>  
    ));
  
  if(location.pathname === '/day-tours') {
    return (
      <Content>
        <FlexContainer justify='center'>
          <CentralizedSection title={header.title} mainText={header.mainText} >
            <label>{header.subtitle}</label>
          </CentralizedSection>
        </FlexContainer>
        <FlexContainerExtended wrap='wrap' justify='space-between' margin='9rem 5% 3rem 5%'>
          <FlexContainer column width='47%' margin='0' widthLg='100%'>
            { leftColumn }
          </FlexContainer>
          <FlexContainer className='right-column' column width='47%' margin='0' widthLg='100%'>
            { rightColumn }
          </FlexContainer>
        </FlexContainerExtended>  
      </Content>
    )
  } else {
    return <PackageAndTour tourDetails={dummy} ourServices={dummy.arr} isDayTour />
  }
};

export default withRouter(DayTours);