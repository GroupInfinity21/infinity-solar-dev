
export type Cidade = 'João Pessoa' | 'São Paulo' | 'Rio de Janeiro' | 'Fortaleza';

export interface Contato {
  nome: string;
  telefone: string;
}

export interface Local {
  coords: {
    lat: number;
    lng: number;
  };
  iframe: string;
}

export interface MapaTranslations {
    titulo: string;
    descricao: string;
    cidades: Record<Cidade, string>;
    contatos: Record<Cidade, Contato[]>;
  }