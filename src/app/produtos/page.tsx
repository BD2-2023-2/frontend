'use client'

import { getCookie } from "cookies-next"
import { NextRequest, NextResponse } from "next/server"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { TProduto } from "../../types"
import { MainTable } from "../../components/table/Table"

export default function Page({req, res}: {req: NextRequest, res: NextResponse}) {
  const user = getCookie('user', { req, res })
  const password = getCookie('password', {req, res})

  const {data, isLoading, isError} = useQuery({
    queryKey: ['fetchProdutos'],
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

   console.log(data)
  
  if(isError) return <div>Houve um erro ao buscar os produtos, tente novamente</div>
  
  return <div className="h-[20rem]">
    <MainTable
      produtos={data}
      isLoading={isLoading}
      loadingMessage="Carregando produtos..."
    />
    {/* {JSON.stringify(data, null, 2)} */}
  </div>
}
