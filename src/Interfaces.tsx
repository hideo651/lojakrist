export interface IDataCartProduct {
  quantidade: number;
  cor: string;
  tamanho: string;
  nome: string;
  img: string;
}

export interface IDataProducts {
  id: number;
  nome: string;
  preco: number;
  categoria: string;
  intro: string;
  descricao: string;
  img: string;
}

export interface IDataComments {
  nome: string;
  titulo: string;
  comentario: string;
  data: string;
  img: string;
}

export interface IProfileForm {
  error: string;
  nome: string;
  sobrenome: string;
  email: string;
  telefone: string;
}

export interface IDataAddres {
  id: number;
  nome: string;
  rua: string;
  telefone: string;
  bairro: string;
  numero: number;
  cidade: string;
  estado: string;
  cep: string;
}
