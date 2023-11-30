'use client'

import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { TApiResponse, TVenda } from "@/types"
import { getCookie } from "cookies-next"
import { TabelaVendas } from "./components/TabelaVendas"
import { useRouter } from "next/navigation"
import { validaLogin } from "../validaLogin"

export default function VendasPage() {
  validaLogin()
  const router = useRouter()

  const handleRouting = (id: number) => {
    router.push(`/vendas/${id}`)
  }

  const {data, isLoading, isError} = useQuery({
    queryKey: ['fetchProdutosFromMenu'],
    retry: 0,
    queryFn: async () => {
      const { data } = await axios.get('http://localhost:3333/api/vendas', {
        headers: {
          "Content-Type": "Application/json",
          user: getCookie('user') as string,
          password: getCookie('password') as string,
        }
      })

      return data as TApiResponse<TVenda[]>
    }
  })

  console.log(data)
  
  return <div>
    <TabelaVendas
      vendas={data?.data}
      handleRouting={handleRouting}
      loadingMessage="Carregando Vendas..."
      isLoading={isLoading}
      errorMessage={isError ? data?.message ?? 'Erro ao buscar vendas!' : ''} />
  </div>
}