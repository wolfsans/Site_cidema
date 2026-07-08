export type User = {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'editor';
};

export type News = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  imageUrl?: string;
  categoryId: string;
  status: 'draft' | 'published' | 'archived';
  isHighlighted: boolean;
  publishedAt: string;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
};

export type BiddingStatus = 'Em aberto' | 'Em andamento' | 'Homologado' | 'Encerrado' | 'Suspenso';
export type BiddingModality = 'Pregão Eletrônico' | 'Concorrência' | 'Dispensa de Licitação' | 'Inexigibilidade' | 'Credenciamento' | 'Adesão à Ata';

export type BiddingDocument = {
  id: string;
  name: string;
  type: string;
  url: string;
  dateAdded: string;
};

export type Bidding = {
  id: string;
  processNumber: string;
  biddingNumber: string;
  modality: BiddingModality;
  year: number;
  object: string;
  description: string;
  estimatedValue?: number;
  status: BiddingStatus;
  publicationDate: string;
  openingDate: string;
  openingTime: string;
  platform?: string;
  documents: BiddingDocument[];
};

export type Contract = {
  id: string;
  number: string;
  year: number;
  biddingId?: string;
  companyName: string;
  cnpj: string;
  object: string;
  value: number;
  startDate: string;
  endDate: string;
  status: 'Vigente' | 'Encerrado' | 'Rescindido';
};
