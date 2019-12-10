import embrenhaSe from '../../assets/img/housesTour.jpg';
import entranheSe from '../../assets/img/millsTour.jpg';
import entregueSe from '../../assets/img/header-map.jpg';
import cultureSe from '../../assets/img/culture.jpg';
import aventureSe from '../../assets/img/adventure.jpg';
import naturezeSe from '../../assets/img/nature.jpg';
import relaxeSe from '../../assets/img/relaxe.jpg';
import tecnologieSe from '../../assets/img/technology.jpg';
import {Form} from "react-bootstrap";
import React from "react";

export const headerContent = {
  title: 'Organize a sua próxima viagem com o Aprofunde-se',
  subTitle: 'Infinitas possibilidades de viagem'
};

 // export const cardContent = [{
 //
 //   icon: 'plane',
 //   content: 'Para você que tem interesse em viajar mas acaba indo sempre aos mesmos destinos populares e cheios de turistas.'
 // },
 //   {
 //     icon: 'map-marked-alt',
 //     content: 'Para você que quer conhecer a fundo sobre a vida na Holanda, você que desconfia que existe mais neste país do que somente Amsterdam.'
 //   }
 //  ];

export const aboutNetherlandsContent = {
  title: 'Sobre a Holanda',
  subTitle: 'A Holanda, ou Países Baixos, é um dos centros culturais e econômicos de maior importância no mundo e ' +
    'costuma estar sempre a frente no estabelecimento de regras sociais modernas e legislação liberal, ditando tendências. '
};


export const whatWillYouSeeContent = {
  title: 'Sobre o que vamos falar?',
  mainText: 'Discutiremos Arte, Turismo, Sustentabilidade, Estilos de vida e curiosidades em geral, enquanto ' +
    'proporcionamos tours personalizados, confortáveis e pessoais\n'
};

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
    image: embrenhaSe,
    title: 'Embrenha-se',
    numberOfDays: '5 diárias',
    subTitle: 'À partir de R$ 6.000',
    mainText: 'Este é um pacote especial oferecido exclusivamente pelo(a) nosso(a) Agência de passeios turísticos.\n' +
      '          Se presenteie com uma aventura inesquecível. Os lugares são limitados então entre em contato ainda hoje para\n' +
      '          não perder esta oportunidade única.',
    buttonText: 'Saiba Mais'
  },
  {
    image: entranheSe,
    title: 'Entranhe-se',
    numberOfDays: '7 diárias',
    subTitle: 'À partir de R$ 7.500',
    mainText: 'Entre em contato para conhecer nosso(a) Excursão particular pela cidade exclusivo(a). Só tem mais alguns ' +
      'lugares disponíveis então seja rápido para assegurar o ingresso. Se prepare para criar recordações inesquecíveis e ' +
      'não esqueça de nos mandar um cartão postal!',
    buttonText: 'Saiba Mais'
  },
  {
    image: entregueSe,
    title: 'Entregue-se',
    numberOfDays: '9 diárias',
    subTitle: 'À partir de R$ 8.500',
    mainText: 'Se você gosta de viver experiências únicas, nosso(a) Excursão de ônibus pelo deserto é a oportunidade ' +
      'perfeita para você. Entre em contato conosco hoje para reserve o seu ticket hoje por apenas R$ 8.000 por pessoa ' +
      'e se prepare para uma aventura inesquecível.',
    buttonText: 'Saiba Mais'
  }
  ];

export const dayTours = {
  title: 'Passeios',
  mainText: 'Nos comprometemos em providenciar todas as informações e ferramentas necessárias para a viagem perfeita. ' +
    'Veja abaixo as ofertas de serviços, personalizadas de acordo com as necessidades de cada cliente. Fique à vontade ' +
    'para entrar em contato diretamente se tiver perguntas.',

  carousel: [
    {
      carouselTitle: 'Relaxe-se',
      carouselImage: relaxeSe
    },
    {
      carouselTitle: 'Culture-se',
      carouselImage: cultureSe
    },
    {
      carouselTitle: 'Aventure-se',
      carouselImage: aventureSe
    },
    {
      carouselTitle: 'Natureze-se',
      carouselImage: naturezeSe
    },
    {
      carouselTitle: 'Tecnologie-se',
      carouselImage: tecnologieSe
    }
  ]
};

export const contactForm = [
  {
    controlId: 'email',
    type: 'email',
    placeholder: 'E-mail'
  },
  {
    controlId: 'nome',
    type: 'text',
    placeholder: 'Nome'
  },
  {
    controlId: 'preferences',
    type: 'text',
    placeholder: 'Quantos viajantes e quantos quartos deseja?'
  }
  ];

export const formNumberOfNights = [
  {
    type: 'radio',
    label:'5 diárias',
    name: 'five-nights',
    id: '1'
  },
  {
    type: 'radio',
    label:'7 diárias',
    name: 'seven-nights',
    id: '2'
  },
  {
    type: 'radio',
    label:'9 diárias',
    name: 'nine-nights',
    id: '3'
  },
  {
    type: 'radio',
    label:'NDA',
    name: 'none',
    id: '4'
  }
];

export const formTypeofTrip = [
  {
    type: 'checkbox',
    label:'Relaxe-se',
    name: 'relax',
    id: '1'
  },
  {
    type: 'checkbox',
    label:'Aventure-se',
    name: 'adventure',
    id: '2'
  },
  {
    type: 'checkbox',
    label:'Natureze-se',
    name: 'nature',
    id: '3'
  },
  {
    type: 'checkbox',
    label:'Culture-se',
    name: 'culture',
    id: '4'
  },
  {
    type: 'checkbox',
    label:'Tecnoligie-se',
    name: 'technology',
    id: '5'
  }
];


export const formTypeOfAccomodation = [
  {
    type: 'checkbox',
    label:'Hotel 5*',
    name: 'five-star',
    id: '1'
  },
  {
    type: 'checkbox',
    label:'Hotel 4*',
    name: 'four-star',
    id: '2'
  },
  {
    type: 'checkbox',
    label:'Acomodações especiais únicas',
    name: 'unique',
    id: '3'
  },
  {
    type: 'checkbox',
    label:'Fora da cidade',
    name: 'outside-city',
    id: '4'
  },
  {
    type: 'checkbox',
    label:'Dentro da cidade',
    name: 'inside-city',
    id: '5'
  },
  {
    type: 'checkbox',
    label:'Não me importo',
    name: 'none',
    id: '6'
  }
];


