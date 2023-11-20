import { Produto } from "../../components/ProdutoCard";
import Image from "next/image";
import { TProduto } from "../../types";

export type ProdutoWrapperProps = {
  handleClick: (produto: TProduto) => void
}

export const Produtos = async ({handleClick}: ProdutoWrapperProps) => {
  const res = await fetch('http://localhost:3333/api/produtos1')
  const body = await res.json()

  const produtos: TProduto[] = body.data;

  return <>{
    produtos.map((produto) => {
      return <Produto
        key={produto.id}
        item={produto}
        handleClick={handleClick}
      >
        <Image
          src={produto.fotoUrl}
          alt="url foto"
          style={{ objectFit: 'cover', borderRadius: '10px' }}
          fill
        />
      </Produto>
    })}
  </>
}