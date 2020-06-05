import React from 'react';

import shopping from "../../assets/img/shopping.jpg";
import dayTrip from "../../assets/img/day-trip.jpg";
import busTrip from "../../assets/img/day-bus.jpg";

import embrenhaSe from '../../assets/img/embrenha-se.jpg'
import entregueSe from '../../assets/img/entregue-se.jpg'
import entranheSe from '../../assets/img/entranhe-se.jpg'

export const homeTours = {
  title: 'Tours',
  mainText: 'Nosso amplo conhecimento sobre o mundo das viagens e sobre a Holanda nos permite oferecer as melhores ofertas ' +
    'para os nossos clientes de acordo com seus gostos pessoais e solicitações.  Nossos tours ocorrerão de Abril à Setembro ' +
    'já que muitos parques ficam fechados no inverno e muitas atividades ocorrem apenas no verão. Veja as ofertas disponíveis ' +
    'no momento e nos mande uma mensagem dizendo a quantidade de dias que você gostaria de ficar e que tipo de viajante és, para fazer sua reserva.',

  subTitle: 'O que está incluso no nosso tour?',
  whatIsIncluded: [
    {
      icon: 'home',
      content: 'Hospedagem com café da manhã'
    },
    {
      icon: 'utensils',
      content: 'Jantar ou almoço'
    },
    {
      icon: 'biking',
      content: 'Dois passeios por dia'
    },
    {
      icon: 'car',
      content: 'Traslado aeroporto/hotel/aeroporto'
    },
    {
      icon: 'language',
      content: 'Guia em português'
    }
  ]
};

export const toursCard = [
  {
    image: shopping,
    title: 'Compras na Europa',
    subTitle: 'R$ 4.000',
    buttonText: 'Saiba Mais'
  },
  {
    image: dayTrip,
    title: 'Excursão particular pela cidade',
    subTitle: 'R$ 8.000',
    buttonText: 'Saiba Mais'
  },
  {
    image: busTrip,
    title: 'Excursão de ônibus pelo deserto',
    subTitle: 'R$ 1.000',
    buttonText: 'Saiba Mais'
  }
];

export const ourSevices = {
  embrenhaSe: [
  {
    title: `Transporte`,
    description: `Translado do Aeroporto para o Hotel em Amsterdam. Uma atividade a tarde e a noite esta incluso um jantar no barco pelos canais de Amsterdam.` 
  },
  {
    title: `Hospedagem`,
    description: `5 diárias em hotel com café da manhā, sendo 2 noites em Amsterdam, 1 noite em Amersfoort, 1 noite em Rotterdam, 1 noite em Den Haag.` 
  },
  {
    title: `Atividades e mais`,
    description: `Dois passeios por dia incluindo entrada de museus, bicicleta, passeios de barco, petiscos. Um almoço ou jantar por dia. Acompanhamento de guia em português ou inglês durante a viagem. Surpresas durante a viagem.` 
  }
],
  entranheSe: [
  {
    title: `Transporte`,
    description: `Translado Aeroporto - Hotel - Aeroporto. Transporte por todo o circuito em van, carro ou trem, de acordo com o número de passageiros e partes do roteiro` 
  },
  {
    title: `Hospedagem`,
    description: `7 diárias em hotel com café da manhā, sendo 3 noites em Amsterdam, 1 noite em Amersfoort, 1 noite em Utrecht, 1 noite em Rotterdam, 1 noite em Den Haag.` 
  },
  {
    title: `Atividades e mais`,
    description: `Dois passeios por dia incluindo entrada de museus, bicicleta, passeios de barco, petiscos. Um almoço ou jantar por dia. Acompanhamento de guia em português ou inglês durante a viagem. Surpresas durante a viagem.` 
  }
],
  entregueSe: [
  {
    title: `Transporte`,
    description: `Translado Aeroporto - Hotel - Aeroporto. Transporte por todo o circuito em van, carro ou trem, de acordo com o número de passageiros e partes do roteiro` 
  },
  {
    title: `Hospedagem`,
    description: `9 diárias em hotel com café da manhā, sendo 3 noites em Amsterdam, 1 noite em Amersfoort, 1 noite em Utrecht, 1 noite em Antwerp, 1 noite em Rotterdam, 1 noite em Den Haag e 1 noite em Haarlem.` 
  },
  {
    title: `Atividades e mais`,
    description: `Dois passeios por dia incluindo entrada de museus, bicicleta, passeios de barco, petiscos. Um almoço ou jantar por dia. Acompanhamento de guia em português ou inglês durante a viagem. Surpresas durante a viagem.` 
  }
]
}

export const packageDetails = {
  embrenhaSe: {
    title: 'Embrenha-se',
    subtitle: '6 dias 5 noites',
    image: embrenhaSe,
    description: `A Holanda é um pais muito pequeno, o que significa que pra ir de uma cidade grande pra outra 
    leva-se 30 minutos ou menos. Ou seja, mesmo que você decida passar pouco tempo na Holanda, com o Aprofunde-se 
    é possível visitar as principais cidades do país: Amsterdam, Giethoorn, Otterlo, Amersfoort, Utrecht, 
    Rotterdam, Den Haag e Haarlem.`
  },
  entranheSe: {
    title: 'Entranhe-se',
    subtitle: '8 dias 7 noites',
    image: entranheSe,
    description: `Uma semana é um tempo perfeito pra conhecer a fundo essa cultura maravilhosa. 
    Com o Aprofunde-se é possível visitar as principais cidades do país assim como lugares menos conhecidos,
    mas ainda sim muito especiais, como: Amsterdam, Giethoorn, Zaanse Schans, Gouda, Otterlo, Amersfoort, 
    Utrecht, Rotterdam, Den Haag e Haarlem.`
  },
  entregueSe: {
    title: 'Entregue-se',
    subtitle: '10 dias 9 noites',
    image: entregueSe,
    description: `Nesse tour você vai sair da Holanda como um expert sobre o país. 
    Com o Aprofunde-se você vai viajar de norte a sul do país, com direito a uma noite na Bélgica até! 
    Cidades a serem conhecidas: Amsterdam, Giethoorn, Zaanse Schans, Gouda, Otterlo, Amersfoort, Utrecht,
    Rotterdam, Den Haag, Haarlem, Maastricht, Middelburg,Volendam e Antwerp.`
  }
}

export const itineraryTables = {
  embrenhaSe: [
  {
    day: `1o dia`,
    city: `Amsterdam`,
    description: `Translado do Aeroporto para o Hotel em Amsterdam. 
    Uma atividade a tarde e a noite esta incluso um jantar no barco pelos canais de Amsterdam.` 
  },
  {
    day: `2o dia`,
    city: <span>Giethoorn <br/> Otterlo <br/>	Amersfoort</span>,
    description: `Cafe da manha no hotel em Amsterdam. Buscamos os clientes no hotel as 9:00 e vamos para Giethoorn 
    fazermos um tour de barco pela cidade de duas horas e a depois partimos s pra Otterlo no museu Kroller Muller e 
    de la vamos para o Hotel em Amersfoort. Percurso feito de Carro` 
  },
  {
    day: `3o dia`,
    city: <span>Utrecht <br/> Rotterdam</span>,
    description: `Cafe da manha no hotel em Amersfoort. Trem para Utrecht e uma atividade.
    No final da tarde pegamos trem para Rotterdam onde deixaremos as malas no hotel e a noite jantar especial.` 
  },
  {
    day: `4o dia`,
    city: <span>Rotterdam <br/> Den Haag </span>,
    description: `Cafe da manha no hotel em Rotterdam. Tour pela cidade das 10:00 as 11:30. 
    A tarde vamos para Den Haag no jardim japones parque clingaendel e depois no museu voorlinden. Noite em hotel em Den Haag.` 
  },
  {
    day: `5o dia`,
    city: <span>Rotterdam <br/> Haarlem <br/> Amsterdam </span>,
    description: `Cafe da manha no hotel em Den Haag. Ida para Haarlem de carro, passeio no campo de Tulipas. 
    A noite jantar especial com show ao vivo.` 
  },
  {
    day: `6o dia`,
    city: `Amsterdam`,
    description: `Cafe da manha hotel Amsterdam. Translado hotel - aeroporto.` 
  }
],
  entranheSe: [
  {
    day: `1o dia`,
    city: `Amsterdam`,
    description: `Translado do Aeroporto para o Hotel em Amsterdam. 
    Uma atividade a tarde e a noite esta incluso um jantar no barco pelos canais de Amsterdam.` 
  },
  {
    day: `2o dia`,
    city: <span>Zaanse Schans <br/> Volendam <br/>	Amsterdam</span>,
    description: `Cafe da manha no hotel em Amsterdam. Buscamos os clientes no hotel as 9:00 e vamos visitar os moinhos. 
    De la vamos visitar a vila dos pescdores de Volendam.No final da tarde voltamos para o Hotel em Amsterdam.` 
  },
  {
    day: `3o dia`,
    city: <span>Giethoorn <br/> Otterlo <br/> Amersfoort</span>,
    description: `Cafe da manha no hotel em Amsterdam
    buscamos os clientes no hotel as 9:00 e vamos para Giethoorn fazermos um tour de barco pela cidade de duas horas e a depois partimos 
    para Otterlo no museu Kroller Muller e de la vamos para o Hotel em Amersfoort. Percurso feito de Carro` 
  },
  {
    day: `4o dia`,
    city: <span>Gouda <br/> Utrecht </span>,
    description: `Cafe da manha no Hotel em Amersfoort. Por volta das 11 iremos conhecer Gouda e depois disso iremos ao 
    Castelo de Haar em Utrecht. Estadia em Utrecht.` 
  },
  {
    day: `5o dia`,
    city: <span>Utrecht <br/> Rotterdam </span>,
    description: `Cafe da manha no hotel em Utrecht.
    No almoço pegamos trem para Rotterdam onde deixaremos as malas no hotel e sairemos para almoçar e passear.` 
  },
  {
    day: `6o dia`,
    city: <span>  Rotterdam <br/> Den Haag </span>,
    description: `Cafe da manha no hotel em Rotterdam. Tour pela cidade das 10:00 as 11:3. 
    A tarde vamos para Den Haag em um belo jardim museu. Noite em hotel em Den Haag.` 
  },
  {
    day: `7o dia`,
    city: <span>  Den Haag <br/> Haarlem <br/> Amsterdam </span>,
    description: `Cafe da manha no hotel em Den Haag Ida para Haarlem de carro, passeio no campo de Tulipas. 
    A noite jantar especial com show ao vivo.` 
  },
  {
    day: `8o dia`,
    city: 'Amsterdam',
    description: `Cafe da manha hotel Amsterdam. Translado hotel - aeroporto.` 
  },
],
  entregueSe: [
  {
    day: `1o dia`,
    city: `Amsterdam`,
    description: `Translado do Aeroporto para o Hotel em Amsterdam. 
    Uma atividade a tarde e a noite esta incluso um jantar no barco pelos canais de Amsterdam.` 
  },
  {
    day: `2o dia`,
    city: <span>Zaanse Schans <br/> Volendam <br/>	Amsterdam</span>,
    description: `Cafe da manha no hotel em Amsterdam. Buscamos os clientes no hotel as 9:00 e vamos visitar os moinhos. 
    De la vamos visitar a vila dos pescdores de Volendam. No final da tarde voltamos para o Hotel em Amsterdam.` 
  },
  {
    day: `3o dia`,
    city: <span>Giethoorn <br/> Otterlo <br/> Amersfoort</span>,
    description: `Cafe da manha no hotel em Amsterdam
    buscamos os clientes no hotel as 9:00 e vamos para Giethoorn fazermos um tour de barco pela cidade de duas horas e a depois partimos 
    para Otterlo no museu Kroller Muller e de la vamos para o Hotel em Amersfoort. Percurso feito de Carro` 
  },
  {
    day: `4o dia`,
    city: <span>Gouda <br/> Utrecht </span>,
    description: `Cafe da manha no Hotel em Amersfoort. Por volta das 11 iremos conhecer Gouda e depois disso iremos ao 
    Castelo de Haar em Utrecht. Estadia em Utrecht.` 
  },
  {
    day: `5o dia`,
    city: <span> Maastricht <br/> Antwerp </span>,
    description: `Cafe da manha em Utrecht.
    Sairemos as 08:30 pra descermos para Maastricht onde passaremos a tarde conhecendo essa fantástica cidade. 
No final da tarde seguiremos para Antwerp na Belgica.` 
  },
  {
    day: `5o dia`,
    city: <span>Utrecht <br/> Rotterdam </span>,
    description: `Cafe da manha no hotel em Utrecht.
    No almoço pegamos trem para Rotterdam onde deixaremos as malas no hotel e sairemos para almoçar e passear.` 
  },
  {
    day: `6o dia`,
    city: <span>Antwerp<br/> Middelburg <br/> Rotterdam </span>,
    description: `Cafe da manha no hotel em Utrecht.
    No almoço pegamos trem para Rotterdam onde deixaremos as malas no hotel e sairemos para almoçar e passear.` 
  },
  {
    day: `6o dia`,
    city: <span>  Rotterdam <br/> Den Haag </span>,
    description: `Cafe da manha no hotel em Rotterdam. Tour pela cidade das 10:00 as 11:3. 
    A tarde vamos para Den Haag em um belo jardim museu. Noite em hotel em Den Haag.` 
  },
  {
    day: `7o dia`,
    city: <span>  Den Haag <br/> Haarlem <br/> Amsterdam </span>,
    description: `Cafe da manha no hotel em Den Haag Ida para Haarlem de carro, passeio no campo de Tulipas. 
    A noite jantar especial com show ao vivo.` 
  },
  {
    day: `8o dia`,
    city: 'Amsterdam',
    description: `Cafe da manha hotel Amsterdam. Translado hotel - aeroporto.` 
  },
]
}
