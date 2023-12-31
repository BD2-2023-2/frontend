import {ChangeEvent, SVGProps} from "react";

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
  funcionario: {
    id: number;
    nome: string;
  };
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
  isSendingRequest: boolean
  onSubmit: (values: T) => void
  onEdit: (event: ChangeEvent, name: string) => void
}