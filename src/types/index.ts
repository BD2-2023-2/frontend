import {SVGProps} from "react";

export type TApiResponse<T> = {
  data: T 
  message?: string
}

export type TProduto = {
  id: number;
  fotoUrl: string;
  descricao: string;
  valor: number;
  quantidade: number;
  idFornecedor: number
}

export type TVenda = {
  id: number;
  valorTotal: number;
  venHorario: Date;
  idFuncionario: number;
}

export type TProdutoPostRequest = {
  fotoUrl: string;
  descricao: string;
  valor: number;
  quantidade: number;
  idFornecedor: number;
}

export type TVendaProdutoPostRequest = {
  id: number;
  valor: number;
  quantidade: number;
  descricao: string;
}

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type TProdutosForm = {
  params: {id: number[]}
}

export type TForm<T> = {
  id: number | null
  data?: T
  isFetching: boolean 
  isPending: boolean 
  onSubmit: (values: T) => void
  onEdit: (event, name: string) => void
}