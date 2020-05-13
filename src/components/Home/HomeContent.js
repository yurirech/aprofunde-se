import embrenhaSe from '../../assets/img/housesTour.jpg';
import entranheSe from '../../assets/img/millsTour.jpg';
import entregueSe from '../../assets/img/header-map.jpg';
import cultureSe from '../../assets/img/culture.jpg';
import aventureSe from '../../assets/img/adventure.jpg';
import naturezeSe from '../../assets/img/nature.jpg';
import relaxeSe from '../../assets/img/relaxe.jpg';
import tecnologieSe from '../../assets/img/technology.jpg';
import Kroller from '../../assets/img/Kroller.jpg';
import Haarlem from '../../assets/img/Haarlem.jpg';
import Giethoorn from '../../assets/img/Giethoorn.jpg';

export const headerContent = {
  title: 'Aprofunde-se',
  subTitle: 'Aprofunde a sua percepção de mundo e deixa que nós cuidamos de tudo'
};

export const aboutNetherlands = {
  text: `A Holanda, ou Países Baixos, é um dos centros culturais e econômicos de maior importância no mundo e costuma estar sempre a frente no estabelecimento de regras sociais modernas e legislação liberal, ditando tendências. 
  Nas nossas midias sociais discutiremos Arte, Turismo, Sustentabilidade, Estilos de vida e curiosidades em geral, enquanto proporcionamos tours personalizadas, confortáveis e pessoais.
  Deixe o planejamento de suas férias por nossa conta! O Aprofunde-se está aqui para fazer da sua experiência na Holanda a mais fácil, agradável e única possível.  Levamos muito a sério todas as suas solicitações 
  e nos comprometemos em providenciar todas as informações e ferramentas necessárias para a viagem perfeita. Veja abaixo as ofertas de serviços personalizados e fique à vontade para entrar em contato diretamente se tiver perguntas.`
}

export const homeTours = {
  title: 'Day tours',
  mainText: `Está com viagem marcada pra Holanda mas não sabe o que fazer fora passear em Amsterdam? Independentemente do tipo de viagem que você procura, 
  somos seus guias em todas as etapas. Dá uma olhada nos passeios que a gente montou pra você aproveitar ao máximo seu tempo no país das maravilhas.`,
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
    name: 'number-of-nights',
    id: 'five-nights'
  },
  {
    type: 'radio',
    label:'7 diárias',
    name: 'number-of-nights',
    id: 'seven-nights'
  },
  {
    type: 'radio',
    label:'9 diárias',
    name: 'number-of-nights',
    id: 'nine-nights'
  },
  {
    type: 'radio',
    label:'NDA',
    name: 'number-of-nights',
    id: 'none'
  }
];

export const formTypeofTrip = [
  {
    type: 'checkbox',
    label:'Relaxe-se',
    name: 'relax',
    id: 'relax'
  },
  {
    type: 'checkbox',
    label:'Aventure-se',
    name: 'adventure',
    id: 'adventure'
  },
  {
    type: 'checkbox',
    label:'Natureze-se',
    name: 'nature',
    id: 'nature'
  },
  {
    type: 'checkbox',
    label:'Culture-se',
    name: 'culture',
    id: 'culture'
  },
  {
    type: 'checkbox',
    label:'Tecnoligie-se',
    name: 'technology',
    id: 'technology'
  }
];


export const formTypeOfAccomodation = [
  {
    type: 'checkbox',
    label:'Hotel 5*',
    name: 'five-star',
    id: 'five-star'
  },
  {
    type: 'checkbox',
    label:'Hotel 4*',
    name: 'four-star',
    id: 'four-star'
  },
  {
    type: 'checkbox',
    label:'Acomodações especiais únicas',
    name: 'unique',
    id: 'unique'
  },
  {
    type: 'checkbox',
    label:'Fora da cidade',
    name: 'outside-city',
    id: 'outside-city'
  },
  {
    type: 'checkbox',
    label:'Dentro da cidade',
    name: 'inside-city',
    id: 'inside-city'
  },
  {
    type: 'checkbox',
    label:'Não me importo',
    name: 'dont-care',
    id: 'dont-care'
  }
];

export const tourOptions = [
  {
    name: 'Haarlem & Praia de Bicicleta',
    tourImage: Haarlem
  },
  {
    name: 'Giethoorn & Dolmen',
    tourImage: Giethoorn
  },
  {
    name: 'Museu Kroller Müller & Amersfoort',
    tourImage: Kroller
  }
]


