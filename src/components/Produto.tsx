import { Button, Card, CardBody, CardFooter } from "@nextui-org/react"
import Image from "next/image"

type ProdutoProps = {
  id: number;
  fotoUrl: string;
  nome: string;
  descricao: string;
}

export const Produto = ({id, fotoUrl, nome, descricao}: ProdutoProps) => {
  return <Card className="w-[20rem]">
    <CardBody>
      <div className="flex w-full">
        <div className="w-1/2 relative">
          <Image src={fotoUrl} alt="url foto" style={{objectFit: 'cover', borderRadius: '10px'}} fill/>
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