'use client'

import { getCookie } from "cookies-next"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { TProduto } from "@/types"
import { TabelaProdutos } from "@/app/produtos/components/TabelaProdutos"
import { Button } from "@nextui-org/react"
import { PlusIcon } from "@/components/icons/PlusIcon"
import { useRouter } from "next/navigation"
import { useSnackbar } from "notistack"
import { validaLogin } from "../validaLogin"

export default function Page() {
  validaLogin()

  const router = useRouter()
  const {enqueueSnackbar} = useSnackbar()

  const user = getCookie('user')
  const password = getCookie('password')

  const handleRouting = (id?: number) => {
    router.push(`produtos/form/${id ?? ''}`)
  }

  const {data, isLoading, isError, refetch} = useQuery({
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

  const handleDelete = async (id: number) => {
    try {
      const { data } = await axios.delete(`http://localhost:3333/api/produtos/${id}`,{
        headers: {
          user,
          password,
        }
      })

      enqueueSnackbar(data.message as string, { variant: 'success', autoHideDuration: 2000 })
      refetch()
    } catch (err) {
      console.log('erro aqui')
      enqueueSnackbar(err as string, {variant: 'error', autoHideDuration: 2000})
    }
  }
  
  return <div className="w-full gap-3 mt-10">
    <div className="flex justify-end mb-3 mr-3">
      <Button
        radius="md"
        color="primary"
        endContent={<PlusIcon />}
        onClick={() => handleRouting()}
      >
        Adicionar
      </Button>
    </div>
    <TabelaProdutos
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
