'use client'

import { TProduto, TProdutoPostRequest, TProdutosForm } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getCookie } from "cookies-next";
import { ProdutosForm } from "./components/ProdutosForm";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { useSnackbar } from "notistack";

export default function ProdutoFormPage({ params: { id } }: TProdutosForm) {
  const router = useRouter()
  
  const [produto, setProduto] = useState<TProduto>()
  const [isFetching, setIsFetching] = useState(false)

  const {enqueueSnackbar} = useSnackbar()

  const hasId = id && id[0] ? true : false
  
  const handleFormEdit = (event: ChangeEvent<HTMLInputElement>, name: string) => {
    setProduto({
      ...produto as TProduto,
      [name]: event.target.value,
    })
  }

  const {data, isLoading} = useQuery({
    queryKey: ['fetchProdutos'],
    enabled: hasId,
    queryFn: async () => {
      const { data } = await axios.get(`http://localhost:3333/api/produtos/${id}`, {
        headers: {
          "Content-Type": "Application/json",
          user: getCookie('user'),
          password: getCookie('password'),
        },
      })

      setProduto(data.data)
    }
  })

  const handleSubmit = async (values: TProduto) => {
    if (!hasId) {
      try {
        setIsFetching(!isFetching)
        const {data} = await axios.post(`http://localhost:3333/api/produtos`, {
          descricao: values.descricao,
          valor: Number(values.valor),
          idFornecedor: Number(values.idFornecedor),
          quantidade: Number(values.quantidade)
        },
        {
          headers: {
            "Content-Type": "Application/json",
            user: getCookie('user'),
            password: getCookie('password'),
          },
        })
        console.log(data)

        router.push(`/produtos/form/${data.data.id}`)

        enqueueSnackbar(data.message, {variant: 'success'})
      } catch (error) {
        enqueueSnackbar('Erro ao cadastrar prato', {variant: 'error'})
      } finally {
        setIsFetching(!isFetching)
      }
      
    }
  }

  return <ProdutosForm
    data={produto}
    onSubmit={handleSubmit}
    onEdit={handleFormEdit}
    id={hasId ? id[0] : null}
    isFetching={isFetching}
    isPending={isLoading}
  />
}