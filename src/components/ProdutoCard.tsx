import { Button, Card, CardBody, CardFooter } from "@nextui-org/react"
import Image from "next/image"
import { ReactNode } from "react";
import { TProduto } from "../types";

type ProdutoCardProps = {
  item: TProduto
  children: ReactNode;
}

export const Produto = ({item, children}: ProdutoCardProps) => {
  return <Card className="w-[20rem]">
    <CardBody>
      <div className="flex w-full">
        <div className="w-1/2 relative">
          {children}
        </div>
        <div className="flex flex-col justify-center items-center w-full h-full">
          <label>{item.id}</label>
          <span>{item.descricao}</span>
          <Button variant='shadow' color="primary" radius="none" size="sm" className="text-black mt-3">
            Adicionar ao carrinho
          </Button>
        </div>
      </div>
    </CardBody>
  </Card>
}