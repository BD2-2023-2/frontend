import { Produto } from "../../components/ProdutoCard";
import Image from "next/image";
import { TProduto } from "../../types";

type LoginUser = {
  user: string
  password: string
}

export const ProdutosWrapper = async (activeUser: LoginUser) => {
    let produtos: TProduto[]

  try {
    const res = await fetch('http://localhost:3333/api/produtos', {
      headers: { 
        contentType: 'application/json',
        user: activeUser.user,
        password: activeUser.password,
      },
      method: 'GET',
    })
    const body = await res.json()
    
    produtos = body.data
  } catch (err) {
    console.log(err)

    return <div>erro ao buscar produtos</div>
  }
  
  return <>{
    produtos.map((produto) => {
      return <Produto
        key={produto.id}
        item={produto}
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