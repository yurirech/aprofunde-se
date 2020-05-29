import shopping from "../../assets/img/shopping.jpg";
import dayTrip from "../../assets/img/day-trip.jpg";
import busTrip from "../../assets/img/day-bus.jpg";

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

export const ourSevicesEmbrenhaSe = [
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

export const packageDetails = {
  embrenhaSe: {
    title: 'Embrenha-se',
    subtitle: '6 dias 5 noites',
    description: `A Holanda é um pais muito pequeno, o que significa que pra ir de uma cidade grande pra outra 
    leva-se 30 minutos ou menos. Ou seja, mesmo que você decida passar pouco tempo na Holanda, com o Aprofunde-se 
    é possível visitar as principais cidades do país: Amsterdam, Giethoorn, Otterlo, Amersfoort, Utrecht, Rotterdam, Den Haag e Haarlem.`
  },
  entranheSe: {
    title: 'Entranhe-se',
    subtitle: '8 dias 7 noites',
    description: 'lilili'
  },
  entregueSe: {
    title: 'lalala',
    subtitle: 'lelele',
    description: 'lilili'
  }
}
