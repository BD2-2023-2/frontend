import { Produto } from "../../../components/Produto";
import Image from "next/image";

export const Produtos = async () => {
  const res = await fetch('http://localhost:3333/api/produtos1')
  const body = await res.json()

  const produtos = body.data;

  return <>{
    produtos.map((produto) => {
      return <Produto key={produto.id} id={produto.id} nome={produto.descricao} descricao={produto.descricao} fotoUrl={produto.fotoUrl} >
        <Image src={produto.fotoUrl} alt="url foto" style={{objectFit: 'cover', borderRadius: '10px'}} fill/>
      </Produto>
  })}</>
}