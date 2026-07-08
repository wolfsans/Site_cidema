import { Bidding, Category, Contract, News, User } from './types';

export const mockCategories: Category[] = [
  { id: '1', name: 'Institucional', slug: 'institucional' },
  { id: '2', name: 'Licitações', slug: 'licitacoes' },
  { id: '3', name: 'Meio Ambiente', slug: 'meio-ambiente' },
  { id: '4', name: 'Saúde Pública', slug: 'saude-publica' },
];

export const mockNews: News[] = [
  {
    id: '1',
    title: 'CIDEMA aprova novo plano de resíduos sólidos para os municípios consorciados',
    slug: 'cidema-aprova-novo-plano-de-residuos',
    summary: 'O novo plano visa melhorar a coleta e destinação de resíduos em mais de 20 municípios da região.',
    content: 'O Consórcio Intermunicipal de Desenvolvimento Econômico, Social e do Meio Ambiente (CIDEMA) aprovou nesta terça-feira o novo plano...',
    imageUrl: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b1bc?auto=format&fit=crop&q=80&w=1000',
    categoryId: '3',
    status: 'published',
    isHighlighted: true,
    publishedAt: '2026-05-20T10:00:00Z',
  },
  {
    id: '2',
    title: 'Reunião de prefeitos discute ampliação do programa PROASFALTO',
    slug: 'reuniao-de-prefeitos-proasfalto',
    summary: 'A assembleia debateu novas metas para pavimentação de vias intermunicipais no próximo semestre.',
    content: 'Durante a Assembleia Geral realizada hoje, os prefeitos...',
    imageUrl: 'https://images.unsplash.com/photo-1584483778680-eac1ea5a711f?auto=format&fit=crop&q=80&w=1000',
    categoryId: '1',
    status: 'published',
    isHighlighted: true,
    publishedAt: '2026-05-18T14:30:00Z',
  }
];

export const mockBiddings: Bidding[] = [
  {
    id: '1',
    processNumber: '045/2026',
    biddingNumber: '012/2026',
    modality: 'Pregão Eletrônico',
    year: 2026,
    object: 'Aquisição de equipamentos de informática para a sede do consórcio',
    description: 'Aquisição de 50 computadores desktop e 10 notebooks conforme especificações do termo de referência.',
    estimatedValue: 250000.00,
    status: 'Em aberto',
    publicationDate: '2026-05-22',
    openingDate: '2026-06-05',
    openingTime: '09:00',
    platform: 'Portal de Compras Públicas',
    documents: [
      { id: 'd1', name: 'Edital Pregão Eletrônico nº 012/2026.pdf', type: 'Edital', url: '#', dateAdded: '2026-05-22' },
      { id: 'd2', name: 'Termo de Referência.pdf', type: 'TR', url: '#', dateAdded: '2026-05-22' },
    ]
  },
  {
    id: '2',
    processNumber: '032/2026',
    biddingNumber: '005/2026',
    modality: 'Concorrência',
    year: 2026,
    object: 'Contratação de empresa de engenharia para pavimentação asfáltica',
    description: 'Pavimentação de 15km de vias rurais interligando os municípios de Exemplo A e Exemplo B.',
    estimatedValue: 4500000.00,
    status: 'Em andamento',
    publicationDate: '2026-04-10',
    openingDate: '2026-05-15',
    openingTime: '14:00',
    documents: [
      { id: 'd3', name: 'Edital Concorrência 005/2026.pdf', type: 'Edital', url: '#', dateAdded: '2026-04-10' },
    ]
  }
];

export const mockContracts: Contract[] = [
  {
    id: '1',
    number: '023',
    year: 2025,
    biddingId: '2',
    companyName: 'Construtora Caminhos do Sul LTDA',
    cnpj: '12.345.678/0001-90',
    object: 'Pavimentação asfáltica (Lote 1)',
    value: 1250000.00,
    startDate: '2025-08-01',
    endDate: '2026-08-01',
    status: 'Vigente'
  }
];
