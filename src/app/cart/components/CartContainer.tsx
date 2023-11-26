import { CartItem } from "./CartItem"
import { cartItemsProps } from "../../activeCart"
import { Button, Divider } from "@nextui-org/react"
import { sumArray } from "../../../helpers/sumArray"

export type CartContainerProps = {
  items: cartItemsProps[]
  handleSubmit: () => void
}

export const CartContainer = ({ items, handleSubmit }: CartContainerProps) => {
  return <div
    className="flex flex-col items-center justify-center py-5 h-full w-1/2 bg-white border-2 border-zinc-900"
  >
    {items.map((item) => <CartItem
      produto={item.produto}
      quantidade={item.quantidade}
      key={`${item.produto.descricao}-${item.quantidade}`}
    />
    )}
    
    <div className="flex flex-col h-full w-full justify-end items-center gap-5">
      <span className="flex flex-col w-full items-center justify-center">
        <Divider className="w-full bg-black" />
        Valor Total do Pedido: R$ {sumArray(items.map((item) => item.produto.valor * item.quantidade))}
      </span>
      <Button
        color="danger"
      onClick={() => handleSubmit()}
    >
      Finalizar venda
    </Button>
    </div>
    
  </div>
}