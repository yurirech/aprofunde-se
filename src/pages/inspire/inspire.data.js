import React from 'react';

import adventure1 from '../../assets/img/inspire/adventure/paraqued.jpg'; 
import adventure2 from '../../assets/img/inspire/adventure/rapel.jpg'; 
import adventure3 from '../../assets/img/inspire/adventure/bungee.jpeg'; 
import adventure4 from '../../assets/img/inspire/adventure/aquatico.jpeg'; 
import adventure5 from '../../assets/img/inspire/adventure/parque.jpg'; 
import adventure6 from '../../assets/img/inspire/adventure/doar.jpg'; 

import innovate1 from '../../assets/img/inspire/innovate/farm.jpg'; 
import innovate2 from '../../assets/img/inspire/innovate/college.jpeg'; 
import innovate3 from '../../assets/img/inspire/innovate/ecovile.jpg'; 
import innovate4 from '../../assets/img/inspire/innovate/barragem.jpeg'; 
import innovate5 from '../../assets/img/inspire/innovate/mini-house.jpg'; 
import innovate6 from '../../assets/img/inspire/innovate/arqui.jpg'; 


import relax1 from '../../assets/img/inspire/relax/sauna.jpeg'; 
import relax2 from '../../assets/img/inspire/relax/museu.jpeg'; 
import relax3 from '../../assets/img/inspire/relax/moinho.jpg'; 
import relax5 from '../../assets/img/inspire/relax/restaurant.jpeg'; 
import relax6 from '../../assets/img/inspire/relax/praia.jpg'; 
import relax7 from '../../assets/img/inspire/relax/compras.jpeg'; 
import relax8 from '../../assets/img/inspire/relax/paisagem.jpeg'; 
import relax9 from '../../assets/img/inspire/relax/castelo.jpg'; 



export const dropdownDisplayContent = [
   {
    title: 'Relaxe-se',
    icon: 'spa',
    items: ['Sauna/Spa',
            'Praias',
            'Parques',
            'Museus',
            'Restaurantes',
            'Paisagens',
            'Moinhos',
            'Compras',
            'Castelos'],
		 route: 'relax'
  }, 
   {
    title: 'Inove-se',
    icon: 'lightbulb',
    items: ['Mini Casas',
            'Barragens',
            'Arquitetura',
            'Universidades',
            'Ecovila',
            <span>Fazendas <br/> Sustentáveis</span>,],
		 route: 'innovate'
  }, 
   {
    title: 'Aventure-se',
    icon: 'map-signs',
    items: ['Rapel',
            'Helicóptero',
            <span>Parque de <br/> diversões</span>,
            <span>Esportes <br/> Aquáticos</span>,
            <span>Parque de <br/> diversões</span>,
            <span>Paraquedismo <br/> em domas</span>,],
		 route: 'adventure'
  } 
];


export const inspireViews = {
	innovate: {
		title: 'Inove-se',
		mainText: `Se sua ideia de férias perfeitas inclui novas experiências e oportunidades de aprendizado, 
			da uma olhada nessas dicas de lugares futurísticos. Nós vamos cuidar de todos os detalhes pra 
			você ter a viagem dos seus sonhos!`,
		cards: [
			{
				cardTitle: 'Fazendas Sustentáveis',
				cardDescription: `Há 20 anos a Holanda assumiu um compromisso nacional para a agricultura sustentável, 
				com o objetivo de produzir o dobro da comida usando metade dos recursos. Desde então, 
				os agricultores conseguiram reduzir a dependência de água em até 90%, eliminar praticamente 
				o uso de pesticidas químicos nas plantas cultivadas em estufas e os produtores de aves e fazendeiros 
				de gado reduziram em 60% o uso de antibióticos nos animais. Apesar de não contar com os recursos 
				naturais necessários para a agricultura em larga escala, conseguiu se tornar o segundo maior 
				exportador, em valor, de alimentos – atrás apenas dos Estados Unidos, que tem 270 vezes o tamanho 
				do seu território.`,
				cardImage: innovate1
			},
			{
				cardTitle: 'Universidades',
				cardDescription: <span>
						Já pensou em fazer faculdade ou pós na Holanda?
						É muito fácil, você precisa apenas de um diploma de proficiência em inglês ou holandês e o seu diploma de ensino médio traduzido oficialmente. 
						Quer saber mais e quem sabe conhecer alguns campus enquanto estiver viajando por aqui?
						entre neste site para ver os cursos disponíveis e nos avise se tiver interesse em visitar alguma universidades que incluímos no seu roteiro!
						<br/> <a target='_blank' rel="noopener noreferrer"  href='https://www.studyfinder.nl/'>https://www.studyfinder.nl/</a> 
				</span>,
				cardImage: innovate2
			},
			{
				cardTitle: 'Ecovila',
				cardDescription: `A Regen Villages é a primeira “vila ecológica de alta tecnologia” do mundo, um empreendimento 
				imobiliário residencial regenerado e integrado em tecnologia, cuja proposta é uma vizinhança auto 
				sustentável compostas por casas com energia positiva e renovável, gerenciamento de água e sistemas 
				de transformação de resíduos em recursos, para famílias desenvolvidas e assim reduzindo o encargo 
				para o governo. A ReGen Villages responde a quase todos os 17 Objetivos de Desenvolvimento Sustentável 
				da ONU e estão trabalhando com universidades de todo o mundo. As primeiras casas podem estar prontas 
				para morar este ano e fica na cidade de Almere, pertinho de Amsterdam.`,
				cardImage: innovate3
			},
			{
				cardTitle: 'Barragens',
				cardDescription: 	`Você sabia que quase um terço do país está abaixo do nível do mar? Grandes obras de engenharia hidráulica, 
				como a Delta Works e a Afsluitdijk, são exemplos de como a Holanda se protege do mar. A Afsluitdijk, 
				uma das barragens, com 32km de extensão, é mais que proteção contra enchentes. Você pode dirigir, 
				andar de bicicleta ou caminhar de um lado para o outro e ainda oferece vistas inesquecíveis.`,
				cardImage: innovate4
			},
			{
				cardTitle: 'Mini Casas',
				cardDescription: `Tiny Houses é um movimento que vem tomando conta do mundo, são casas minúsculas e muito funcionais, 
				vem com rodas para fácil locomoção, econômicas e flexíveis. Que tal conhecer algumas localidades para 
				se inspirar?`,
				cardImage: innovate5
			},
			{
				cardTitle: 'Arquitetura pós guerra',
				cardDescription: 	`Todo mundo conhece e se apaixona pela famosa arquitetura de Amsterdam, com as casinhas coladas umas nas 
				outras, muitos canais, mas nem todo mundo conhece as outras facetas da Holanda. O sul foi destruido na 2a 
				guerra mundial, e quando foram reconstruir decidiram faze-lo modernamente. Vale a pena ver o contraste.`,
				cardImage: innovate6
			},

		]
	},
	relax: {
		title: 'Relaxe-se',
		mainText: `Dicas especiais pra você que adora um conforto. Para sabermos pelo que você se interessa, basta clicar no coraçãozinho 
							ao lado da foto e depois preencher o formulário de contato. Inspire-se!`,
		cards: [
			{
				cardTitle: 'Saunas/Spas',
				cardDescription: `Visitar uma das 200 saunas na Holanda pode ser uma experiência libertadora e muito divertida. 
				As saunas são não sexuais e todo mundo entra nu. Pode ficar tranquilo que é tudo muito respeitoso! Nas áreas comuns 
				como o restaurante e os quartos de descansos todo mundo usa o roupão. Além disso, você também pode fazer tratamentos 
				de pele e massagem.`,
				cardImage: relax1
			},
			{
				cardTitle: 'Museus',
				cardDescription: `Uma seleção dos nossos museus preferidos por região:Amsterdam e região: Van Gogh, Rijksmuseum, Stadelijk, 
				Moco, Foam, Tropenmuseum, Eye Film, Casa da Anne Frank, Casa do Rembrandt, Vrolik, Frans Hals.Leiden/Den Haag/Rotterdam: 
				LOUWMAN, Voorlinden, Escher, Gemeentemuseum, Kunsthall, Boijmans Van Beuningen, Volkenkunde, Rijksmuseum van Oudheden.Utrecht 
				e Região: Museu de trem, Nijntje, Kroller Müller, Museus Militar Nacional , Museu Central Utrecht, Speelklok`,
				cardImage: relax2
			},
			{
				cardTitle: 'Moinhos',
				cardDescription: `Você verá moinhos em todo lugar, mas tem alguns mais especiais como Kinderdijk, que é um Patrimônio Mundial 
				da UNESCO em que 19 moinhos de vento são mantidos em boa condição de operação e alguns funcionam como casas.
				Já Zaanse Schans é um bairro histórico que se assemelha a um museu ao ar livre devido a suas casas, padarias e moinhos de vento 
				surpreendentemente bem preservados`,
				cardImage: relax3
			},
			{
				cardTitle: 'Parques',
				cardDescription: 	`Para os raros dias ensolarados, nada melhor que passar o dia em um dos maravilhosos parques da Holanda. 
				Nossa seleção: Amsterdam e região: Westerpark, Vondelpark, Beatrixpark, Het Amsterdamse Bos Hoge Veluwe National Park`,
				cardImage: relax3
			},
			{
				cardTitle: 'Restaurantes',
				cardDescription: `Na Holanda você pode encontrar todos os tipos de comida do mundo, por que não experimentar novos sabores 
				e novas experiências? Entra em contato com a gente que te passamos varias dicas de restaurantes incríveis pra você se deliciar 
				na sua viagem.`,
				cardImage: relax5
			},
			{
				cardTitle: 'Praias',
				cardDescription: 	`A Holanda tem praias bastante famosas (para os europeus), pra todo tipo de público e fique preparado pra 
				ver bastante gente fazendo brincadeiras por lá!`,
				cardImage: relax6
			},
			{
				cardTitle: 'Compras',
				cardDescription: 	`É sempre bom separar um tempinho pra compras né? Dar uma pesquisada antes também pra saber se tem algo 
				especial que você quer achar no país. Independente do que for, te ajudamos!`,
				cardImage: relax7
			},
			{
				cardTitle: 'Paisagens',
				cardDescription: 	`E por que não, sair sem rumo de bicicleta, sem hora pra voltar, sem destino? Sair da cidade em que você 
				estiver e ir para a cidade vizinha de bike pode ser uma experiência curta de 15 minutos que vai deixar seu queixo lá embaixo, 
				imagine 2 horas?`,
				cardImage: relax8
			},
			{
				cardTitle: 'Castelos',
				cardDescription: 	`A Holanda possui muitos castelos então independente de onde você estiver no país vale a pena dar uma olhada 
				nesses marcos históricos. Alguns nomes para pesquisar: Castelo De Haar, Muiderslot, Nederhorst, Duurstede.`,
				cardImage: relax9
			}
		]
	},
	adventure: {
		title: 'Aventure-se',
		mainText: `Você está procurando adrenalina? Ou um presente espetacular para uma pessoa especial? Ou quer ter a experiência mais 
		radical da sua vida? Dá uma olhada nas nossas escolha. Nós cuidaremos de todos os detalhes, incluindo logística e reservas. 
		Entre em contato para mais informações e para reservar o seu lugar.`,
		cards: [
			{
				cardTitle: 'Paraquedismo em doma',
				cardDescription: `Você pode voar! O Skydive indoor oferece a você a experiência inesquecível de "queda livre", sem precisar 
				pular de um avião. Você flutua em um túnel de vento como se estivesse fazendo uma queda livre real. Quer saber como é pular 
				de um avião sobre um destino mundial? Experimente com realidade virtual!`,
				cardImage: adventure1
			},
			{
				cardTitle: 'Rapel',
				cardDescription: `Suba na maior torre da Holanda (185m) e desça em uma corda a 100 metros acima do solo da única atração de 
				rapel da Europa! Entre em contato pra reservar com a gente!`,
				cardImage: adventure2
			},
			{
				cardTitle: 'Bungee jumping',
				cardDescription: `Desfrute da bela vista de Den Haag e Scheveningen da Bungy Tower (60 metros de altura) e enquanto estiver 
				lá experimente a melhor maneira de "get high" na Holanda, pulando de Bungee jump!`,
				cardImage: adventure3
			},
			{
				cardTitle: 'Esportes Aquáticos',
				cardDescription: 	`Desfrute de esportes aquáticos em um dos muitos lagos e espere ser surpreendido pelos diferentes cenários 
				sobre a água na Holanda. Algumas opções: Flyboard, Wakeboard, Wakesurf, Windsurf, Canoa, Stand up, Banana boat ou navegue um 
				barco a vela.`,
				cardImage: adventure4
			},
			{
				cardTitle: 'Parque de Diversōes',
				cardDescription: `O Efteling é um parque de diversões em que as atrações refletem elementos de mitos e lendas antigas, contos 
				de fadas, fábulas e folclore. É o maior parque temático da Holanda e um dos mais antigos do mundo. É duas vezes maior que o 
				parque original da Disneyland, na Califórnia, e é anterior a três anos.`,
				cardImage: adventure5
			},
			{
				cardTitle: 'Holanda do ar',
				cardDescription: 	`Se você gosta de experiências únicas e emocionantes, que tal conhecer a Holanda de um balão ou helicóptero? 
				Os passeios são incríveis!`,
				cardImage: adventure6
			}
		]
	}
}
