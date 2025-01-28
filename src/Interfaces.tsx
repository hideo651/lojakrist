export interface IDataCartProduct {
  quantidade: number;
  cor: string;
  tamanho: string;
  nome: string;
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
