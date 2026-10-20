export interface Area {
  slug: string;
  t: string;
  d: string;
  seoTitle: string;
  seoDesc: string;
  h1: string;
  intro: string;
  urgencia: string;
  atuacao: string[];
  faq: { q: string; a: string }[];
  msg: string;
}

export const areas: Area[] = [
  {
    slug: 'prisao-em-flagrante-audiencia-de-custodia',
    t: 'Flagrante & Custódia',
    d: 'Atuação imediata no momento mais crítico: do flagrante à audiência de custódia, garantindo seus direitos desde a primeira hora.',
    seoTitle: 'Advogado para Prisão em Flagrante 24h em Curitiba e Piraquara',
    seoDesc: 'Familiar preso em flagrante? Advogado criminalista com plantão 24h para atuar na delegacia e na audiência de custódia em Curitiba, Piraquara e região.',
    h1: 'Prisão em flagrante e <em>audiência de custódia</em>',
    intro: 'Quando alguém é preso em flagrante, a audiência de custódia acontece em poucas horas. É nesse momento que o juiz decide se a pessoa responde em liberdade ou continua presa — e a presença de um advogado preparado faz toda a diferença.',
    urgencia: 'Não espere o dia seguinte. Quanto antes o advogado entra no caso, mais chances de evitar erros no depoimento e de pedir a liberdade já na custódia.',
    atuacao: [
      'Atendimento na delegacia, inclusive de madrugada, fins de semana e feriados',
      'Orientação ao preso antes do interrogatório policial',
      'Análise da legalidade do flagrante e do auto de prisão',
      'Defesa na audiência de custódia com pedido de liberdade provisória',
      'Pedido de relaxamento da prisão quando houver ilegalidade',
      'Comunicação clara e constante com a família',
    ],
    faq: [
      { q: 'Quanto tempo depois da prisão acontece a audiência de custódia?', a: 'A lei determina que o preso seja apresentado ao juiz em até 24 horas após a prisão. Por isso é importante acionar o advogado imediatamente.' },
      { q: 'A família pode contratar o advogado ou só o preso?', a: 'A família pode — e normalmente é quem faz o primeiro contato. Basta me chamar no WhatsApp com o nome da pessoa e o local da prisão.' },
      { q: 'A pessoa precisa falar na delegacia?', a: 'Ninguém é obrigado a produzir prova contra si mesmo. O direito ao silêncio é garantido, e a orientação de um advogado antes de qualquer depoimento é essencial.' },
    ],
    msg: 'Olá, Dr. Gennisis. Uma pessoa foi presa em flagrante e preciso de ajuda urgente.',
  },
  {
    slug: 'habeas-corpus',
    t: 'Habeas Corpus & Liberdade',
    d: 'Pedidos de liberdade, relaxamento de prisão e habeas corpus para reverter prisões ilegais ou abusivas.',
    seoTitle: 'Advogado para Habeas Corpus em Curitiba e Região | Plantão 24h',
    seoDesc: 'Pedido de habeas corpus, revogação de prisão preventiva e liberdade provisória. Advogado criminalista em Curitiba, Piraquara e região metropolitana.',
    h1: 'Habeas corpus e <em>pedidos de liberdade</em>',
    intro: 'O habeas corpus é o instrumento que protege a liberdade contra prisões ilegais ou abusivas. Também é possível pedir a revogação da prisão preventiva ou a substituição por medidas cautelares, como o monitoramento eletrônico.',
    urgencia: 'Cada dia de prisão indevida pesa sobre a pessoa e a família. Uma análise rápida do processo mostra quais caminhos existem para buscar a liberdade.',
    atuacao: [
      'Análise dos fundamentos da prisão preventiva ou temporária',
      'Pedido de revogação da prisão ao juiz do caso',
      'Habeas corpus no Tribunal de Justiça e nos tribunais superiores',
      'Pedido de substituição da prisão por medidas cautelares',
      'Atuação em casos de excesso de prazo',
      'Acompanhamento até a expedição do alvará de soltura',
    ],
    faq: [
      { q: 'Em que casos cabe habeas corpus?', a: 'Sempre que alguém sofre ou está ameaçado de sofrer prisão ou constrangimento ilegal — por exemplo, prisão sem fundamentação adequada ou que se estende além do prazo razoável.' },
      { q: 'Quanto tempo leva para um habeas corpus ser julgado?', a: 'Depende do tribunal e do caso. Quando há pedido de liminar, a decisão inicial pode sair em poucos dias.' },
      { q: 'Prisão preventiva pode ser revogada?', a: 'Sim. Se os motivos que justificaram a prisão deixaram de existir ou não estavam bem fundamentados, é possível pedir a revogação a qualquer momento do processo.' },
    ],
    msg: 'Olá, Dr. Gennisis. Preciso de ajuda com um pedido de liberdade / habeas corpus.',
  },
  {
    slug: 'trafico-de-drogas',
    t: 'Tráfico de Drogas',
    d: 'Defesa técnica em acusações por tráfico, desde o inquérito até o julgamento, com análise criteriosa de cada prova.',
    seoTitle: 'Advogado para Tráfico de Drogas em Curitiba e Piraquara',
    seoDesc: 'Defesa criminal em acusações de tráfico de drogas (Lei 11.343/06): flagrante, inquérito, processo e recursos. Atendimento 24h em Curitiba e região.',
    h1: 'Defesa em acusação de <em>tráfico de drogas</em>',
    intro: 'Acusações de tráfico costumam envolver prisão em flagrante, apreensões e provas que precisam ser analisadas com muito cuidado. A diferença entre uso e tráfico, a forma da abordagem e a legalidade das buscas podem mudar completamente o rumo do processo.',
    urgencia: 'Nos casos de tráfico, as primeiras horas definem muito: o que é dito na delegacia e o que acontece na audiência de custódia acompanham todo o processo.',
    atuacao: [
      'Atuação imediata no flagrante e na audiência de custódia',
      'Análise da legalidade da abordagem, da busca pessoal e domiciliar',
      'Discussão da classificação entre uso e tráfico',
      'Pedido de aplicação do tráfico privilegiado, quando cabível',
      'Defesa em todas as fases do processo e nos recursos',
      'Pedidos de liberdade e de substituição da prisão',
    ],
    faq: [
      { q: 'Qual a diferença entre uso e tráfico?', a: 'A lei considera fatores como quantidade, local, circunstâncias da apreensão e antecedentes. Não existe uma quantidade fixa — por isso a análise técnica de cada caso é decisiva.' },
      { q: 'O que é tráfico privilegiado?', a: 'É uma causa de diminuição de pena prevista na Lei de Drogas para quem é primário, tem bons antecedentes e não se dedica a atividades criminosas nem integra organização criminosa.' },
      { q: 'A polícia pode entrar em casa sem mandado?', a: 'Somente em situações excepcionais e justificadas. Quando a entrada é ilegal, as provas obtidas podem ser anuladas — um ponto que sempre deve ser analisado.' },
    ],
    msg: 'Olá, Dr. Gennisis. Preciso de defesa em um caso de tráfico de drogas.',
  },
  {
    slug: 'tribunal-do-juri',
    t: 'Crimes Contra a Vida',
    d: 'Defesa em homicídio e demais crimes dolosos contra a vida, com atuação perante o Tribunal do Júri.',
    seoTitle: 'Advogado para Tribunal do Júri e Homicídio em Curitiba',
    seoDesc: 'Defesa em homicídio, tentativa de homicídio e crimes dolosos contra a vida perante o Tribunal do Júri. Advogado criminalista em Curitiba e região.',
    h1: 'Crimes contra a vida e <em>Tribunal do Júri</em>',
    intro: 'Homicídio, tentativa de homicídio e outros crimes dolosos contra a vida são julgados pelo Tribunal do Júri, onde a decisão é tomada por jurados. É um processo com fases próprias, que exige preparo técnico e capacidade de comunicação.',
    urgencia: 'A defesa começa muito antes do plenário. O trabalho no inquérito e na primeira fase do processo constrói a base para o julgamento.',
    atuacao: [
      'Acompanhamento desde o inquérito policial',
      'Defesa na primeira fase, buscando impronúncia ou absolvição sumária',
      'Discussão de legítima defesa e outras excludentes',
      'Preparação estratégica para o plenário do Júri',
      'Sustentação oral perante os jurados',
      'Recursos contra a decisão de pronúncia e contra o veredito',
    ],
    faq: [
      { q: 'Como funciona o Tribunal do Júri?', a: 'O processo tem duas fases: na primeira, o juiz decide se o caso vai a Júri; na segunda, sete jurados da sociedade julgam o acusado em plenário.' },
      { q: 'É possível evitar que o caso vá a Júri?', a: 'Sim. Na primeira fase a defesa pode buscar a impronúncia, a absolvição sumária ou a desclassificação para outro crime.' },
      { q: 'Legítima defesa pode levar à absolvição?', a: 'Sim. A legítima defesa exclui o crime, e sua demonstração depende de uma análise cuidadosa das provas e das circunstâncias.' },
    ],
    msg: 'Olá, Dr. Gennisis. Preciso de defesa em um caso de homicídio / Tribunal do Júri.',
  },
  {
    slug: 'violencia-domestica-maria-da-penha',
    t: 'Violência Doméstica',
    d: 'Acompanhamento em medidas protetivas e processos da Lei Maria da Penha, com responsabilidade e discrição.',
    seoTitle: 'Advogado Lei Maria da Penha e Medida Protetiva em Curitiba',
    seoDesc: 'Atuação em medidas protetivas e processos de violência doméstica (Lei Maria da Penha) em Curitiba, Piraquara e região. Atendimento sigiloso e 24h.',
    h1: 'Violência doméstica e <em>Lei Maria da Penha</em>',
    intro: 'Casos de violência doméstica envolvem medidas protetivas, inquéritos e processos que afetam diretamente a vida familiar. Exigem resposta rápida, discrição e atenção a cada detalhe.',
    urgencia: 'Medidas protetivas podem ser concedidas em poucas horas e têm efeito imediato. Entender o que foi determinado e como agir é o primeiro passo.',
    atuacao: [
      'Orientação imediata sobre medidas protetivas de urgência',
      'Atuação em audiências e no processo criminal',
      'Pedidos de revisão ou revogação de medidas protetivas',
      'Defesa em casos de prisão por descumprimento de medida',
      'Atendimento com total sigilo e discrição',
      'Acompanhamento do início ao fim do processo',
    ],
    faq: [
      { q: 'O que acontece se uma medida protetiva for descumprida?', a: 'O descumprimento é crime e pode levar à prisão. Por isso é fundamental entender exatamente o que a decisão determina.' },
      { q: 'É possível revogar uma medida protetiva?', a: 'Sim, dependendo das circunstâncias. O pedido deve ser feito ao juiz com os fundamentos adequados.' },
      { q: 'O atendimento é sigiloso?', a: 'Totalmente. Tudo o que for conversado é protegido pelo sigilo profissional garantido por lei.' },
    ],
    msg: 'Olá, Dr. Gennisis. Preciso de orientação em um caso de violência doméstica / medida protetiva.',
  },
  {
    slug: 'processos-e-recursos-criminais',
    t: 'Processos & Recursos',
    d: 'Acompanhamento completo do processo criminal, da denúncia aos recursos nos tribunais superiores.',
    seoTitle: 'Advogado para Processo Criminal e Recursos em Curitiba',
    seoDesc: 'Defesa em processos criminais e recursos: resposta à acusação, audiências, apelação e tribunais superiores. Advogado criminalista em Curitiba e região.',
    h1: 'Processos criminais e <em>recursos</em>',
    intro: 'Recebeu uma citação, foi denunciado ou já tem audiência marcada? O processo criminal tem prazos curtos e etapas decisivas. Uma defesa bem estruturada desde a resposta à acusação aumenta as chances de um bom resultado.',
    urgencia: 'Os prazos no processo penal são curtos — o de apelação, por exemplo, é de apenas 5 dias. Perder um prazo pode custar uma oportunidade de defesa.',
    atuacao: [
      'Defesa no inquérito policial e acompanhamento de depoimentos',
      'Resposta à acusação e produção de provas',
      'Atuação em audiências de instrução e julgamento',
      'Alegações finais e memoriais',
      'Apelação e recursos no Tribunal de Justiça',
      'Recursos especiais e extraordinários nos tribunais superiores',
    ],
    faq: [
      { q: 'Fui citado em um processo criminal. O que faço?', a: 'Procure um advogado imediatamente. Após a citação há prazo de 10 dias para apresentar a resposta à acusação.' },
      { q: 'Posso trocar de advogado no meio do processo?', a: 'Sim. A qualquer momento você pode constituir um novo advogado, que assume o caso a partir da fase em que ele está.' },
      { q: 'Qual o prazo para recorrer de uma sentença?', a: 'O prazo para apelação no processo penal é de 5 dias, com mais alguns dias para apresentar as razões. Por isso é importante agir rápido.' },
    ],
    msg: 'Olá, Dr. Gennisis. Tenho um processo criminal em andamento e preciso de defesa.',
  },
  {
    slug: 'revisao-criminal',
    t: 'Revisão Criminal',
    d: 'Revisão de sentenças transitadas em julgado para corrigir injustiças e erros de julgamento.',
    seoTitle: 'Advogado para Revisão Criminal em Curitiba e Região',
    seoDesc: 'Revisão criminal para corrigir condenações injustas, mesmo após o trânsito em julgado. Análise de provas novas e erros de julgamento. Curitiba e região.',
    h1: 'Revisão criminal: <em>uma segunda chance</em>',
    intro: 'Mesmo depois que não cabem mais recursos, a lei permite revisar uma condenação em situações específicas — como quando surgem provas novas ou quando a sentença contraria a lei ou as provas do processo.',
    urgencia: 'A revisão criminal pode ser pedida a qualquer tempo, mas quanto antes o caso for analisado, mais cedo se pode buscar a correção da injustiça.',
    atuacao: [
      'Análise completa do processo e da condenação',
      'Identificação de provas novas e de erros de julgamento',
      'Ajuizamento da revisão criminal no tribunal competente',
      'Pedidos de redução de pena quando cabível',
      'Atuação na execução penal e em benefícios',
      'Acompanhamento até a decisão final',
    ],
    faq: [
      { q: 'Quando cabe revisão criminal?', a: 'Quando a condenação contraria a lei ou as provas, se baseou em provas falsas, ou quando surgem provas novas de inocência ou de circunstância que reduza a pena.' },
      { q: 'Existe prazo para pedir revisão criminal?', a: 'Não. A revisão criminal pode ser pedida a qualquer tempo, inclusive após o cumprimento da pena.' },
      { q: 'A revisão pode piorar a situação do condenado?', a: 'Não. A revisão criminal só pode beneficiar quem foi condenado.' },
    ],
    msg: 'Olá, Dr. Gennisis. Quero avaliar uma revisão criminal de uma condenação.',
  },
];
