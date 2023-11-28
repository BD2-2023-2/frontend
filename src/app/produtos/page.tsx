'use client'

import { getCookie } from "cookies-next"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { TApiResponse, TProduto } from "@/types"
import { MainTable } from "@/app/produtos/components/Table"
import { Button } from "@nextui-org/react"
import { PlusIcon } from "@/components/icons/PlusIcon"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Page() {
  const [produtos, setProdutos] = useState<TProduto[]>()
  const router = useRouter()

  const user = getCookie('user')
  const password = getCookie('password')

  const handleRouting = (id?: number) => {
    router.push(`produtos/form/${id ?? ''}`)
  }

  const {data, isLoading, isError} = useQuery({
    queryKey: ['fetchProdutos'],
    retry: 0,
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

  const handleDelete = (id: number) => {
    console.log(data)
    const items = data?.filter((produto) => produto.id === id)

    console.log(items)
  }
  
  return <div className="w-full gap-3">
    <div className="flex justify-end mb-3 mr-3">
      <Button
        radius="md"
        color="danger"
        endContent={<PlusIcon />}
        onClick={() => handleRouting()}
      >
        Adicionar
      </Button>
    </div>
    <MainTable
      produtos={data}
      isLoading={isLoading}
      errorMessage={isError ? 'Acesso negado!' : ''}
      handleRouting={handleRouting}
      onDelete={handleDelete}
      loadingMessage="Carregando produtos..."
    />
    {/* {JSON.stringify(data, null, 2)} */}
  </div>
}
