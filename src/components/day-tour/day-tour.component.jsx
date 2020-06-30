import React from 'react';

import {Content} from './day-tour.styles';

import test from '../../assets/img/day-tours/delta.jpg'
import ToursDetails from '../tours-details/tours-details.component';
import OurServicesCard from '../our-services-card/our-services-card.component';

const dummy = {
  title: 'Haarlem & Praia de bicicleta',
  description: `Conheça a charmosa cidade de Haarlem que fica localizada a 20 minutos de trem de Amsterdam. Devido a proximidade, se você estiver em Amsterdam, nós iremos até Haarlem de trem, mas pode deixar que a gente te encontra no seu Hotel. 
  Chegando em Haarlem, voce escutará histórias e fatos locais do nosso guia, e conhecerá um museu de sua escolha - arte moderna ou clássica. Você pode escolher se quer almoçar em Haarlem ou na praia.
  Depois de pegar a bicicleta você terá a experiência local de pedalar pela cidade e ir até a praia, 20 - 30 minutos. 
  Chegando lá você terá uma uma porção e uma cadeira de sol reservada em um dos melhores bares te esperando, então tudo que você tem que fazer é relaxar e deixar com a gente! 
  Se você quiser ficar na praia até a noite ao invés de voltar no horário do fim do tour não tem problema nenhum, tudo pode ser esquematizado. `,
  image: test,
  arr: [
    {
      title: 'la',
      description: 'la',
    },
    {
      title: 'la',
      description: 'la',
    },
    {
      title: 'la',
      description: 'la',
    }
  ]
}

const DayTour = () => (
    <Content>
      <ToursDetails title={dummy.title} 
                    description={dummy.description} 
                    image={dummy.image} 
                    direction='row-reverse'/>
      <OurServicesCard ourServices={dummy.arr} />
    </Content>
);

export default DayTour;