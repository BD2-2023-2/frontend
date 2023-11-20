import { Button, Card, CardBody, CardFooter } from "@nextui-org/react"
import Image from "next/image"
import { ReactNode } from "react";

type ProdutoProps = {
  id: number;
  fotoUrl?: string;
  nome: string;
  descricao: string;
  children: ReactNode;
}

export const Produto = ({id, fotoUrl, nome, descricao, children}: ProdutoProps) => {
  return <Card className="w-[20rem]">
    <CardBody>
      <div className="flex w-full">
        <div className="w-1/2 relative">
          {children}
        </div>
        <div className="flex flex-col justify-center items-center w-full h-full">
          <label>{nome}</label>
          <span>{descricao}</span>
          <Button variant='shadow' color="primary" radius="none" size="sm" className="text-black mt-3">
            Adicionar ao carrinho
          </Button>
        </div>
      </div>
    </CardBody>
  </Card>
}