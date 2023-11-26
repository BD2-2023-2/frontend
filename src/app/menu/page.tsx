'use client'

import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { getCookie } from "cookies-next"
import { ProdutoCard } from "../../components/ProdutoCard"
import { TProduto } from "../../types"

export default function MenuPage() {
  const user = getCookie('user')
  const password = getCookie('password')

  const {data, isLoading, isError} = useQuery({
    queryKey: ['fetchProdutosFromMenu'],
    queryFn: async () => {
      const { data } = await axios.get('http://localhost:3333/api/produtos', {
        headers: {
          "Content-Type": "Application/json",
          user,
          password,
        }
      })

      return data.data as TProduto[]
    }
  })

  return <div className="flex justify-evenly">
    {data?.map((produto) => <ProdutoCard item={produto} key={produto.descricao} />)}
  </div>
}