import { Button, Card, CardBody, CardFooter } from "@nextui-org/react"

export const Produto = () => {
  return <Card className="w-1/3">
    <CardBody>
      <div className="flex w-full">
        <div className="w-1/3">Foto do produto</div>
        <div className="flex flex-col justify-center items-center w-full h-full">
          <label>nome</label>
          <span>descricao</span>
        </div>
      </div>
    </CardBody>
    <CardFooter className="flex justify-center">
      <Button variant='bordered' color="primary" radius="none" size="sm" className="text-black">Adicionar ao carrinho</Button>
    </CardFooter>
  </Card>
}