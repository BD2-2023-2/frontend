'use client'

import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { getCookie } from "cookies-next"
import { ProdutoCard } from "../../components/ProdutoCard"
import { TProduto } from "@/types"
import { useSnackbar } from "notistack"
import { cartItems, addItemToCart } from "../activeCart"
import { validaLogin } from "../validaLogin"

export default function MenuPage() {
  validaLogin()

  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  
  const user = getCookie('user')
  const password = getCookie('password')

  const {data, isLoading, isError} = useQuery({
    queryKey: ['fetchProdutosFromMenu'],
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

  const handleClick = (produto: TProduto) => {
    console.log(cartItems)
    addItemToCart(produto)

    enqueueSnackbar(`${produto.descricao} adicionado ao carrinho!`, {variant:'success', autoHideDuration: 2500})
  }

  return <div className="mt-10 flex flex-col gap-10 items-center justify-center">
    {data && data?.map((produto) => <ProdutoCard
      item={produto}
      key={produto.descricao}
      handleClick={handleClick}
    />)}
  </div>
}