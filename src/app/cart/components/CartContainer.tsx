import { CartItem } from "./CartItem"
import { cartItemsProps } from "../../activeCart"
import { Button, Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react"
import { sumArray } from "../../../helpers/sumArray"

export type CartContainerProps = {
  items: cartItemsProps[]
  isLoading: boolean
  handleSubmit: () => void
}

export const CartContainer = ({ items, isLoading, handleSubmit }: CartContainerProps) => {
  return <Card
    className="flex flex-col items-center justify-center py-5 h-full w-5/12"
  >
    <CardBody className="h-full">
      {items.map((item) => <CartItem
        produto={item.produto}
        quantidade={item.quantidade}
        key={`${item.produto.descricao}-${item.quantidade}`}
      />
      )}
    </CardBody>
    
    
    <CardFooter className="flex flex-col h-full w-full justify-end items-center gap-5">
      <span className="flex flex-col w-full items-center justify-center">
        <Divider className="w-full bg-black" />
        Valor Total do Pedido: R$ {sumArray(items.map((item) => item.produto.valor * item.quantidade))}
      </span>
      <Button
        color="danger"
        onClick={() => handleSubmit()}
        isLoading={isLoading}
      >
        Finalizar venda
      </Button>
    </CardFooter>
    
  </Card>
}