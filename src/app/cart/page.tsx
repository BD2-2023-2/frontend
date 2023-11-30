'use client'

import axios from "axios";
import { cartItems, cartItemsProps, clearCart } from "../activeCart";
import { getCookie } from "cookies-next";
import { CartContainer } from "./components/CartContainer";
import { TApiResponse, TVendaProdutoPostRequest } from "@/types";
import { useState } from "react";
import { useSnackbar } from "notistack";
import { validaLogin } from "../validaLogin";

export default function CartPage() {
  validaLogin()
  
  const [cart, setCart] = useState(cartItems)
  const { enqueueSnackbar } = useSnackbar()
  const [isLoading, setIsLoading] = useState(false)

  const handleSell = async () => {
    try {
      setIsLoading(!isLoading)

      const {data} = await axios.post('http://localhost:3333/api/vendas', {
        idFuncionario: Number(getCookie('idFuncionario')),
        produtos: toPostRequest(cartItems),
      },
        {
          headers: {
            user: getCookie('user') as string,
            password: getCookie('password') as string
          }
        }
      )

      enqueueSnackbar(data.message, {
        variant: 'success',
        autoHideDuration: 1500
      })

      clearCart(); setCart(cartItems)
    } catch (err) {
      enqueueSnackbar(err as string, {
        variant: 'error',
        autoHideDuration: 1500
      })
    } finally {
      setIsLoading(!isLoading)
    }
  }

  return <div className="mt-10 flex flex-col w-full h-[30rem] justify-center items-center">
    <CartContainer
      items={cart}
      handleSubmit={handleSell}
      isLoading={isLoading}
    />
  </div>
}

function toPostRequest(cartItems: cartItemsProps[]): TVendaProdutoPostRequest[] {
  return cartItems.map((item) => {
    return {
      id: item.produto.id,
      descricao: item.produto.descricao,
      valor: item.produto.valor,
      quantidade: item.quantidade,
    }
  })
}