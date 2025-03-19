export interface IDataCartProduct {
  quantidade: number;
  cor: string;
  tamanho: string;
  nome: string;
  img: string;
  preco: number;
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

export interface IAddresEditFrom {
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

export interface ProfileAddressProps {
  setEditModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ICepInfo {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  service: string;
}
