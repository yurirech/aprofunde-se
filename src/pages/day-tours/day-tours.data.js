import React from 'react';

import delft from '../../assets/img/day-tours/delft.jpg'
import delta from '../../assets/img/day-tours/delta.jpg'
import denHaag from '../../assets/img/day-tours/den-haag.jpg'
import giethoorn from '../../assets/img/day-tours/giethoorn.jpg'
import goudaRotterdam from '../../assets/img/day-tours/gouda-rotterdam.jpg'
import haarlem from '../../assets/img/day-tours/haarlem.jpg'
import kroller from '../../assets/img/day-tours/kroller.jpg'
import park from '../../assets/img/day-tours/park.jpg'
import utrech from '../../assets/img/day-tours/utrecht.jpg'
import zaanseSchans from '../../assets/img/day-tours/zaanse-schans.jpg'


import delftSliderOne from '../../assets/img/day-tour-items/delft/delft.jpg';
import delftSliderTwo from '../../assets/img/day-tour-items/delft/delft-plates.jpg';
import delftSliderThree from '../../assets/img/day-tour-items/delft/horticulture.jpg';

import deltaSliderOne from '../../assets/img/day-tour-items/delta/delta-one.jpg';
import deltaSliderTwo from '../../assets/img/day-tour-items/delta/delta-two.jpg';
import deltaSliderThree from '../../assets/img/day-tour-items/delta/delta-three.jpg';

import haagSliderOne from '../../assets/img/day-tour-items/den-haag/den-haag-one.jpg';
import haagSliderTwo from '../../assets/img/day-tour-items/den-haag/den-haag-two.jpg';
import haagSliderThree from '../../assets/img/day-tour-items/den-haag/den-haag-three.jpeg';

import giethoornSliderOne from '../../assets/img/day-tour-items/giethoorn/giethoorn-one.jpg';
import giethoornSliderTwo from '../../assets/img/day-tour-items/giethoorn/giethoorn-two.jpg';
import giethoornSliderThree from '../../assets/img/day-tour-items/giethoorn/giethoorn-three.jpg';

import goudaSliderTwo from '../../assets/img/day-tour-items/gouda/gouda-one.jpg';
import goudaSliderOne from '../../assets/img/day-tour-items/gouda/gouda-two.jpg';
import goudaSliderThree from '../../assets/img/day-tour-items/gouda/gouda-three.jpg';

import haarlemSliderTwo from '../../assets/img/day-tour-items/haarlem/haarlem-one.jpg';
import haarlemSliderOne from '../../assets/img/day-tour-items/haarlem/haarlem-two.jpg';
import haarlemSliderThree from '../../assets/img/day-tour-items/haarlem/haarlem-three.jpg';


import krollerSliderTwo from '../../assets/img/day-tour-items/kroller/kroller-one.jpg';
import krollerSliderOne from '../../assets/img/day-tour-items/kroller/kroller-two.JPG';
import krollerSliderThree from '../../assets/img/day-tour-items/kroller/kroller-three.jpg';


import parkSliderTwo from '../../assets/img/day-tour-items/park/park-one.jpg';
import parkSliderOne from '../../assets/img/day-tour-items/park/park-two.jpg';
import parkSliderThree from '../../assets/img/day-tour-items/park/park-three.jpg';

import utechtSliderTwo from '../../assets/img/day-tour-items/utrecht/utrecht-one.jpg';
import utechtSliderOne from '../../assets/img/day-tour-items/utrecht/utrecht-two.jpg';
import utechtSliderThree from '../../assets/img/day-tour-items/utrecht/utrecht-three.jpg';

import zaanseSliderTwo from '../../assets/img/day-tour-items/zaanse/zaanse-one.jpg';
import zaanseSliderOne from '../../assets/img/day-tour-items/zaanse/zaanse-two.jpg';
import zaanseSliderThree from '../../assets/img/day-tour-items/zaanse/zaanse-three.jpg';


import { Link } from 'react-router-dom';


export const header = {
  title: `Day Tours`,
  subtitle: `Passeios de 1 dia`,
  mainText: `Está com viagem marcada pra Holanda mas não sabe o que fazer fora passear em Amsterdam? 
  Dá uma olhada nos passeios de um dia que a gente montou pra você aproveitar ao máximo seu tempo no país das maravilhas. 
  Nós sabemos o que é preciso para planejar as férias perfeitas, então não se preocupe, apenas escolha uma de nossas opções 
  ou customize o seu próprio day tour e cuidaremos de todos os detalhes. Para mais idéias cheque Inspire-se e nosso Instagram.`
}

export const cardsLeft = [{
  image: goudaRotterdam,
  title: 'Gouda & Rotterdam',
  description: <small>Visite o mercado de queijo de Gouda pela manhã e vislumbre o estilo arquitetônico 
  da cidade de Rotterdam, com direito a tour guiado e tempo para compras. <br/> Duração: 8 horas</small>,
  route: '/day-tours/gouda'
},
{
  image: haarlem,
  title: 'Haarlem & Praia de bicicleta',
  description: <small>Conheça a charmosa cidade de Haarlem, viste o museu local e vá de bicicleta à 
  praia curtir o por do sol, tudo acompanhado de um guia turístico. <br/> Duração: 8 horas</small>,
  route: '/day-tours/haarlem'
},
{
  image: delft,
  title: 'T.U. Delft & Fazenda',
  description: <small>Faça um tour na renomada faculdade de tecnologia T.U. Delft e seja surpreendido   
  pelos últimos desenvolvimentos na área. Depois de conhecer o centro de Delft, visite uma das fazendas  
  sustentáveis da Holanda.  <br/> Duração: 8 horas</small>,
  route: '/day-tours/delft'

},
{
  image: giethoorn,
  title: 'Giethoorn & Dolmen',
  description: <small>Sinta-se em um conto de fadas ao passear pelos canais de Giethoorn, a cidade sem ruas. 
  Conheça também as misteriosas dolmen, túmulos de pedras mais antigas que as pirâmides do Egito. 
  <br/> Duração: 8 horas</small>,
  route: '/day-tours/giethoorn'

},
{
  image: delta,
  title: 'Delta Works & Middelburg',
  description: <small>Se você é fascinado por engenharia não pode deixar de conhecer as maiores barragens do mundo. 
  Após aproveitar essa passagem hipnotizante, aproveite um delicioso almoço em Middelburg e termine o dia curtindo uma sauna. 
  <br/> Duração: 12 horas</small>,
  route: '/day-tours/delta'

}];


export const cardsRight = [{
  image: utrech,
  title: 'Utrecht & Castelo',
  description: <small> Conheça um dos maiores castelos da Holanda, o De Haar, famoso por séculos e ponto de encontro de celebridades 
  do século passado. Depois passeie pelas ruas de Utrecht e se apaixone. <br/> Duração: 8 horas</small>,
  route: '/day-tours/utrecht'
},
{
  image: denHaag,
  title: 'Den Haag & Museu Voorlinden',
  description: <small>Passeie pela sede governamental da Holanda e da Europa, a cidade de Den Haag, e depois do tour vá de bicicleta 
  ao museu Voorlinden, onde ira se encantar com um dos museus mais únicos da Holanda <br/> Duração: 8 horas</small>,
  route: '/day-tours/haag'

},
{
  image: kroller,
  title: 'Museu Kroller Müller & Amersfoort',
  description: <small>Esse passeio é para os amantes de arte contemporânea, da natureza e de arquitetura. Admire os belos quadros e  
  esculturas e aproveite um piquenique no belíssimo parque ao redor do museu. Depois conheça Amersfoort, a cidade natal de Mondriaan. 
  <br/> Duração: 8 horas</small>,
  route: '/day-tours/kroller'

},
{
  image: zaanseSchans,
  title: 'Zaanse Schans & Volendam',
  description: <small>Passe o dia admirando a paisagem dos moinhos do Zaanse Schans e depois experimente os delicioso frutos do mar 
  da vila dos pescadores da Holanda, Volendam. <br/> Duração: 8 horas</small>,
  route: '/day-tours/zaanse'

},
{
  image: park,
  title: 'Parque de diversões & Sauna',
  description: <small>Amante de adrenalina? Que tal passar o dia em um dos mais famosos e mais antigos parques do mundo? e de pois 
  de um dia de aventura nada melhor que relaxar com uma massagem em uma sauna. <br/> Duração: 8 horas</small>,
  route: '/day-tours/park'

}];

const whatIsIncluded = 'O que está incluso?';
const price = 'Preço';
const info = 'Informação';
const moreInfo =  ['Duração total: 8 horas',
                    'Horário de encontro: 9:00',
                    'Horário de retorno: 17:00',
                    'Local de encontro: Depende da cidade que você estiver.',
                    'Experiência customizada para suas preferências.',
                    <span>Perguntas? Entre em &nbsp;
                      <Link to='/contact-us'><u>contato</u></Link>
                    </span>];

export const dayTours = {
 haarlem: {
  title: 'Haarlem & Praia de bicicleta',
  description: <span>Conheça a charmosa cidade de Haarlem que fica localizada a 20 minutos de trem de Amsterdam. Devido a proximidade, se você estiver em Amsterdam, nós iremos até Haarlem de trem, mas pode deixar que a gente te encontra no seu Hotel. <br/>
  Chegando em Haarlem, voce escutará histórias e fatos locais do nosso guia, e conhecerá um museu de sua escolha - arte moderna ou clássica. Você pode escolher se quer almoçar em Haarlem ou na praia. <br/>
  Depois de pegar a bicicleta você terá a experiência local de pedalar pela cidade e ir até a praia, 20 - 30 minutos. <br/>
  Chegando lá você terá uma uma porção e uma cadeira de sol reservada em um dos melhores bares te esperando, então tudo que você tem que fazer é relaxar e deixar com a gente!</span>,
  image: [haarlemSliderOne, haarlemSliderTwo, haarlemSliderThree],
  services: [
    {
      title: whatIsIncluded,
      description:   [  'Entrada para Museu',
                        'Bicicleta',
                        'Aperitivos',
                        'Cadeira reservada pra deitar na praia',
                        'Transporte',
                        'Guia Turístico acompanha o passeio inteiro']
                  
    },
    {
      title: price,
      description: ['1 pessoa €190',
                    '2 pessoas €160 p.p.',
                    '3 pessoas €130 p.p.',
                    '4 pessoas  €90 p.p.']
    },
    {
      title: info,
      description: moreInfo
    }
  ]
},
 utrecht: {
  title: 'Utrecht & Castelo',
  description: <span>Conheça um dos maiores castelos da Holanda, o De Haar, famoso por séculos e ponto de suntuosos encontros da high society, 
  incluindo visitantes frequentes como Coco Chanel, Maria Callas, Gregory Peck, Yves Saint Laurent, and Brigitte Bardot. <br/>
  Depois passeie pelas ruas de Utrecht, alguns dizem que é como Amsterdam mas sem turista, e se apaixone pelos canais, ruas e parques da cidade 
  que voce conhecera de barco, bicicleta e a pé.</span>,
  image: [utechtSliderOne, utechtSliderTwo, utechtSliderThree],
  services: [
    {
      title: whatIsIncluded,
      description:   [  'Entrada para Museu',
                        'Bicicleta',
                        'Barco',
                        'Aperitivos',
                        'Transporte',
                        'Guia Turístico acompanha o passeio inteiro']
                  
    },
    {
      title: price,
      description: ['1 pessoa €190',
                    '2 pessoas €160 p.p.',
                    '3 pessoas €130 p.p.',
                    '4 pessoas  €90 p.p.']
    },
    {
      title: info,
      description: moreInfo
    }
  ]
   
},
 delft: {
  title: 'T.U. Delft & Fazenda',
  description: <span>Faça um tour na renomada faculdade de tecnologia T.U. Delft e seja surpreendido pelos últimos 
                desenvolvimentos na área. Depois de conhecer o centro de Delft, visite uma fazenda sustentáveis e 
                descubra as novas tendências e inovações da agricultura na Holanda. </span>,
  image: [delftSliderOne, delftSliderTwo, delftSliderThree],
  services: [
    {
      title: whatIsIncluded,
      description:   [  'Entrada para Tour na Faculdade',
                        'Aperitivos',
                        'Entrada Fazenda',
                        'Transporte',
                        'Guia Turístico acompanha o passeio inteiro']
                  
    },
    {
      title: price,
      description: ['1 pessoa €190',
                    '2 pessoas €160 p.p.',
                    '3 pessoas €130 p.p.',
                    '4 pessoas  €90 p.p.']
    },
    {
      title: info,
      description: moreInfo
    }
  ]
   
},
 haag: {
  title: 'Den Haag & Museu Voorlinden',
  description: <span>Faça um tour na renomada faculdade de tecnologia T.U. Delft e seja surpreendido pelos últimos 
                desenvolvimentos na área. Depois de conhecer o centro de Delft, visite uma fazenda sustentáveis e 
                descubra as novas tendências e inovações da agricultura na Holanda. </span>,
  image: [haagSliderOne, haagSliderTwo, haagSliderThree],
  services: [
    {
      title: whatIsIncluded,
      description:   [  'Entrada para Museu',
                        'Entrada para Palácio da paz',
                        'Bicicleta',
                        'Aperitivos',
                        'Transporte',
                        'Guia Turístico acompanha o passeio inteiro']
                  
    },
    {
      title: price,
      description: ['1 pessoa €200',
                    '2 pessoas €170 p.p.',
                    '3 pessoas €140 p.p.',
                    '4 pessoas  €100 p.p.']
    },
    {
      title: info,
      description: moreInfo
    }
  ]  
},
 gouda: {
  title: 'Gouda & Rotterdam',
  description: <span>Visite o mercado de queijo de Gouda pela manhã, um mercado que funciona desde 1395 e que junta os melhores 
               produtores de queijo do país. <br/> Saindo de Gouda, almoço em Rotterdam, e um tour pela cidade mostrando as principais 
               atrações e uma visita ao museu. Vislumbre o estilo arquitetônico da cidade e no final do passeio sera dado tempo para 
               compras, porém se quiser optar por outra atividade te damos um leque de opções para escolher.</span>,
  image: [goudaSliderTwo, goudaSliderThree, goudaSliderOne],
  services: [
    {
      title: whatIsIncluded,
      description:   [  'Entrada para Museu',
                        'Barco',
                        'Aperitivos',
                        'Transporte',
                        'Guia Turístico acompanha o passeio inteiro']
                  
    },
    {
      title: price,
      description: ['1 pessoa €200',
                    '2 pessoas €170 p.p.',
                    '3 pessoas €140 p.p.',
                    '4 pessoas  €100 p.p.']
    },
    {
      title: info,
      description: moreInfo
    }
  ]  
},
 kroller: {
  title: 'Museu Kroller Müller & Amersfoort',
  description: <span>Esse passeio é para os amantes de arte contemporânea, da natureza e de arquitetura. O museu Kroller Müller 
               fica localizado dentro de um belíssimo parque onde faremos um piquenique após admirarmos os maravilhosos quadros 
               e  esculturas do museu.  <br/> Em seguida iremos para Amersfoort onde você vai conhecer a cultura local e provar 
               deliciosos doces holandeses. </span>,
  image: [krollerSliderTwo, krollerSliderThree, krollerSliderOne,],
  services: [
    {
      title: whatIsIncluded,
      description:   [  'Entrada para Museu',
                        'Bicicleta',
                        'Aperitivos',
                        'Transporte',
                        'Guia Turístico acompanha o passeio inteiro']
                  
    },
    {
      title: price,
      description: ['1 pessoa €200',
                    '2 pessoas €170 p.p.',
                    '3 pessoas €140 p.p.',
                    '4 pessoas  €100 p.p.']
    },
    {
      title: info,
      description: moreInfo
    }
  ]  
},
 giethoorn: {
  title: 'Giethoorn & Dolmen',
  description: <span>Sinta-se em um conto de fadas ao passear de barco pelos canais de Giethoorn, a famosa cidade sem ruas. 
               Depois do passeio você vai almoçar em um charmoso restaurante para apreciar mais a cidade. Seguiremos depois 
               para o norte, para conhecermos as misteriosas dolmens, túmulos de pedras mais antigas que as pirâmides do Egito.
               <br/> Você vai se encantar com essa parte pouco visitada da Holanda.</span>,
  image: [giethoornSliderOne, giethoornSliderTwo, giethoornSliderThree],
  services: [
    {
      title: whatIsIncluded,
      description:   [  'Entrada para Museu',
                        'Passeio de barco',
                        'Aperitivos',
                        'Transporte',
                        'Guia Turístico acompanha o passeio inteiro']
                  
    },
    {
      title: price,
      description: ['1 pessoa €200',
                    '2 pessoas €170 p.p.',
                    '3 pessoas €140 p.p.',
                    '4 pessoas  €100 p.p.']
    },
    {
      title: info,
      description: moreInfo
    }
  ]  
},
 zaanse: {
  title: 'Zaanse Schans & Volendam',
  description: <span>Passe o dia admirando a paisagem dos históricos moinhos de vento de Zaanse Schans, descubra sobre 
               a fabricação de queijos, caminhe com tamancos madeira, explore o interior de um moinho e encante-se com a natureza e as casas. 
               <br/> Na parte da tarde experimente os delicioso frutos do mar da vila dos pescadores da Holanda, Volendam, e se apaixone 
               pela arquitetura única desse lugar.</span>,
  image: [zaanseSliderOne, zaanseSliderTwo, zaanseSliderThree],
  services: [
    {
      title: whatIsIncluded,
      description:   [  'Entrada para Museu',
                        'Passeio de barco',
                        'Aperitivos',
                        'Transporte',
                        'Guia Turístico acompanha o passeio inteiro']
                  
    },
    {
      title: price,
      description: ['1 pessoa €200',
                    '2 pessoas €170 p.p.',
                    '3 pessoas €140 p.p.',
                    '4 pessoas  €100 p.p.']
    },
    {
      title: info,
      description: moreInfo
    }
  ]  
},
 delta: {
  title: 'Delta Works & Middelburg',
  description: <span>Se você é fascinado por engenharia não pode deixar de conhecer as maiores barragens do mundo. Iremos descer para o 
               sul do país de carro, e passar por todas as barragens na área. Em um ponto no meio disso tudo tem um museu muito interessante 
               que faremos uma parada para conhecer.
               <br/> Após aproveitar essa passagem hipnotizante, conheça Middelburg, uma cidade medieval pouco conhecida por turistas.
               Para terminar o dia perfeito, curta uma sauna com massagem e jantar incluso, e ao terminar o guia estará te esperando 
               do lado de fora para te levar embora.</span>,
  image: [deltaSliderOne, deltaSliderTwo, deltaSliderThree],
  services: [
    {
      title: whatIsIncluded,
      description:   [  'Entrada para Museu',
                        'Entrada para Sauna',
                        'Massagem 50 minutos',
                        'Jantar',
                        'Transporte',
                        'Guia Turístico acompanha o passeio inteiro']
                  
    },
    {
      title: price,
      description: ['1 pessoa €350',
                    '2 pessoas €320 p.p.',
                    '3 pessoas €290 p.p.',
                    '4 pessoas  €250 p.p.']
    },
    {
      title: info,
      description: ['Duração total: 12 horas',
                    'Horário de encontro: 8:00',
                    'Horário de retorno: 20:00',
                    'Local de encontro: Depende da cidade que você estiver.',
                    'Experiência customizada para suas preferências.',
                    <span>Perguntas? Entre em &nbsp;
                      <Link to='/contact-us'><u>contato</u></Link>
                    </span>]
    }
  ]  
},
 park: {
  title: 'Parque de diversões & Sauna',
  description: <span>Os apaixonados por adrenalina que se segurem! Nessa excursão você será levado da porta da sua acomodação ao fantástico 
               parque de diversões Efteling pelo nosso guia, que pelo caminho ira te mostrar e contar coisas interessantíssimas.  
               <br/> Após um longo dia de muita energia gasta, nosso guia ira te levar a uma das mais bonitas saunas da Holanda, onde você 
               irá tirar todas as tensões construídas ao longo da viagem com uma deliciosa massagem relaxante e um saboroso jantar.
               <br/> Quando estiverem satisfeitos, nosso motorista estará te esperando do lado de fora da Sauna pra te levar de volta ao seu hotel. </span>,
  image: [ parkSliderTwo, parkSliderThree, parkSliderOne],
  services: [
    {
      title: whatIsIncluded,
      description:   [  'Entrada para para o parque',
                        'Entrada para Sauna',
                        'Massagem 50 minutos',
                        'Jantar',
                        'Transporte',
                        'Guia Turístico acompanha o passeio inteiro']
                  
    },
    {
      title: price,
      description: ['1 pessoa €400',
                    '2 pessoas €370 p.p.',
                    '3 pessoas €340 p.p.',
                    '4 pessoas  €300 p.p.']
    },
    {
      title: info,
      description: ['Duração total: 14 horas',
                    'Horário de encontro: 8:00',
                    'Horário de retorno: 20:00',
                    'Local de encontro: Depende da cidade que você estiver.',
                    'Experiência customizada para suas preferências.',
                    <span>Perguntas? Entre em &nbsp;
                     <Link to='/contact-us'><u>contato</u></Link>
                    </span>]
    }
  ]  
},
}


export const serviceHours = [
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

export const numberOfPeople = [
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
    option: '5 pessoas ou mais'
  },
]