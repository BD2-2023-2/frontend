import { cartItemsProps } from "../../activeCart";

export const CartItem = (item: cartItemsProps) => {
  return <div className="flex gap-4 w-full px-10">
    <label className="flex w-1/3 justify-start">{item.produto.descricao}</label>
    <span className="flex w-1/3 justify-center">Quantidade: <b>{item.quantidade}</b></span>
    <span className="flex w-1/3 justify-start">Valor Total R$ {item.produto.valor * item.quantidade}</span>
  </div>
}