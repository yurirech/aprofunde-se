import React from 'react';

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
            'Castelos']
  }, 
   {
    title: 'Inove-se',
    icon: 'lightbulb',
    items: ['Mini Casas',
            'Barragens',
            'Arquitetura',
            'Universidades',
            'Ecovila',
            <span>Fazendas <br/> Sustentáveis</span>,]
  }, 
   {
    title: 'Aventure-se',
    icon: 'map-signs',
    items: ['Rapel',
            'Helicóptero',
            <span>Parque de <br/> diversões</span>,
            <span>Esportes <br/> Aquáticos</span>,
            <span>Parque de <br/> diversões</span>,
            <span>Paraquedismo <br/> em domas</span>,]
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
			},
			{
				cardTitle: 'Universidades',
				cardDescription: <span>
						Já pensou em fazer faculdade ou pós na Holanda?
						É muito fácil, você precisa apenas de um diploma de proficiência em inglês ou holandês e o seu diploma de ensino médio traduzido oficialmente. 
						Quer saber mais e quem sabe conhecer alguns campus enquanto estiver viajando por aqui?
						entre neste site para ver os cursos disponíveis e nos avise se tiver interesse em visitar alguma universidades que incluímos no seu roteiro!
						<br/> <a>https://www.studyfinder.nl/</a> 
				</span>,
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
			},
			{
				cardTitle: 'Barragens',
				cardDescription: 	`Você sabia que quase um terço do país está abaixo do nível do mar? Grandes obras de engenharia hidráulica, 
				como a Delta Works e a Afsluitdijk, são exemplos de como a Holanda se protege do mar. A Afsluitdijk, 
				uma das barragens, com 32km de extensão, é mais que proteção contra enchentes. Você pode dirigir, 
				andar de bicicleta ou caminhar de um lado para o outro e ainda oferece vistas inesquecíveis.`,
			},
			{
				cardTitle: 'Mini Casas',
				cardDescription: `Tiny Houses é um movimento que vem tomando conta do mundo, são casas minúsculas e muito funcionais, 
				vem com rodas para fácil locomoção, econômicas e flexíveis. Que tal conhecer algumas localidades para 
				se inspirar?`,
			},
			{
				cardTitle: 'Arquitetura pós guerra',
				cardDescription: 	`Todo mundo conhece e se apaixona pela famosa arquitetura de Amsterdam, com as casinhas coladas umas nas 
				outras, muitos canais, mas nem todo mundo conhece as outras facetas da Holanda. O sul foi destruido na 2a 
				guerra mundial, e quando foram reconstruir decidiram faze-lo modernamente. Vale a pena ver o contraste.`,
			},

		]
	}
}