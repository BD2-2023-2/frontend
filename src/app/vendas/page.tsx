'use client'

import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { TVenda } from "@/types"
import { getCookie } from "cookies-next"
import { TabelaVendas } from "./components/TabelaVendas"
import { useRouter } from "next/navigation"

export default function VendasPage() {
  const router = useRouter()

  const handleRouting = (id: number) => {
    router.push(`/vendas/${id}`)
  }

  const {data, isLoading, isError} = useQuery({
    queryKey: ['fetchProdutosFromMenu'],
    queryFn: async () => {
      const { data } = await axios.get('http://localhost:3333/api/vendas', {
        headers: {
          "Content-Type": "Application/json",
          user: getCookie('user') as string,
          password: getCookie('password') as string,
        }
      })

      return data.data as TVenda[]
    }
  })
  
  return <div>
    <TabelaVendas
      vendas={data}
      handleRouting={handleRouting}
      loadingMessage="Carregando Vendas..."
      isLoading={isLoading}
      errorMessage={isError ? 'Erro ao buscar vendas!' : ''} />
  </div>
}