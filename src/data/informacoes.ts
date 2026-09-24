export interface InformacaoTopico {
  id: string;
  title: string;
  summary: string;
  paragraphs: string[];
}

/** Tópicos do hub de "Informações". Conteúdo geral e informativo. */
export const informacoes: InformacaoTopico[] = [
  {
    id: "agua-cristalina",
    title: "Água sempre cristalina",
    summary: "O segredo está no equilíbrio e na constância do tratamento.",
    paragraphs: [
      "Uma água cristalina é resultado de filtragem em dia e de um tratamento químico equilibrado. Não é só “parecer limpa”: é estar saudável para o banho.",
      "Acompanhamos os parâmetros da água e ajustamos o que for preciso, mantendo tudo em equilíbrio ao longo do tempo.",
    ],
  },
  {
    id: "piscina-verde",
    title: "Piscina verde: o que fazer",
    summary: "Água esverdeada é sinal de algas — e tem solução.",
    paragraphs: [
      "Quando a água fica verde, normalmente é sinal de que as algas se multiplicaram. Isso acontece com falta de tratamento, filtragem insuficiente ou excesso de matéria orgânica.",
      "O caminho é fazer um tratamento de recuperação e, muitas vezes, uma limpeza completa. Avaliamos o caso e indicamos o melhor procedimento.",
    ],
  },
  {
    id: "troca-areia",
    title: "Quando trocar a areia do filtro",
    summary: "A areia perde eficiência com o tempo e precisa ser trocada.",
    paragraphs: [
      "Com o uso, a areia do filtro vai ficando saturada e perde a capacidade de reter impurezas. A água pode até parecer tratada, mas não fica realmente limpa.",
      "A troca devolve a eficiência da filtragem. Se a água não segura o resultado por muito tempo, pode ser hora de avaliar a troca.",
    ],
  },
  {
    id: "bomba-filtro",
    title: "Cuidados com bomba e filtro",
    summary: "Equipamentos em ordem são o coração da piscina.",
    paragraphs: [
      "Bomba e filtro trabalham juntos para manter a água em movimento e limpa. Verificações periódicas evitam paradas e prejuízos maiores.",
      "Quando o serviço exige reparos mais complexos, contamos com uma rede de parceiros especializados de confiança.",
    ],
  },
  {
    id: "frequencia",
    title: "Com que frequência fazer manutenção",
    summary: "A rotina ideal depende do uso e do ambiente da piscina.",
    paragraphs: [
      "A frequência de manutenção varia conforme o uso, a exposição ao sol e a quantidade de folhas e resíduos. Piscinas mais usadas pedem cuidados mais frequentes.",
      "Dá para montar uma rotina periódica ou fazer sob demanda — o importante é não deixar a água sair de controle.",
    ],
  },
  {
    id: "produtos",
    title: "Produtos para tratamento",
    summary: "O produto certo, na medida certa, para cada água.",
    paragraphs: [
      "Cada piscina tem uma necessidade: há produtos para desinfecção, correção de pH, algicidas e limpeza. Usar o produto adequado faz toda a diferença.",
      "Trabalhamos com produtos especializados e orientamos o uso correto. A disponibilidade pode ser consultada pelo WhatsApp.",
    ],
  },
  {
    id: "consertos-bombas",
    title: "Consertos de bombas (parceria)",
    summary: "Para reparos mais complexos, temos parceiros de confiança.",
    paragraphs: [
      "Alguns consertos exigem ferramentas e conhecimento específicos. Para esses casos, contamos com uma rede de parceiros especializados de confiança.",
      "Assim você resolve tudo em um só lugar, com a tranquilidade de estar em boas mãos.",
    ],
  },
];
