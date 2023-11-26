'use client'

import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { TVenda } from "@/types"
import { getCookie } from "cookies-next"

export default function VendasPage() {
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
  
  return <div>{JSON.stringify(data)}</div>
}