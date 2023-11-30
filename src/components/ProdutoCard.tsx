import { Button, Card, CardBody, CardFooter } from "@nextui-org/react"
import Image from "next/image"
import { TProduto } from "../types";
import { addItemToCart, cartItems } from "../app/activeCart";

type ProdutoCardProps = {
  item: TProduto
  handleClick: (produto: TProduto) => void
}

export const ProdutoCard = ({ item, handleClick }: ProdutoCardProps) => {
  return <Card className="w-[20rem]">
    <CardBody>
      <div className="flex w-full">
        <div className="w-1/2 relative">
          <Image
            src={item.fotoUrl ?? ''}
            alt={`Imagem de ${item.descricao}`}
            fill
            style={{ objectFit: 'cover', borderRadius: '10px' }}
          />
        </div>
        <div className="flex flex-col justify-center items-center w-full h-full">
          <label>{item.descricao}</label>
          <span className="text-sm">R${item.valor}/un</span>
          <Button
            variant='shadow'
            color="primary"
            radius="sm"
            size="sm"
            className="text-black mt-3"
            onClick={() => handleClick(item)}>
            Adicionar ao carrinho
          </Button>
        </div>
      </div>
    </CardBody>
  </Card>
}