'use client'

import axios from "axios";
import { cartItems, cartItemsProps, clearCart } from "../activeCart";
import { getCookie } from "cookies-next";
import { CartContainer } from "./components/CartContainer";
import { TVendaProdutoPostRequest } from "@/types";
import { useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState(cartItems)

  const handleSell = async () => {
    await axios.post('http://localhost:3333/api/vendas', {
      idFuncionario: Number(getCookie('idFuncionario')),
      produtos: toPostRequest(cartItems),
    },
      {
        headers: {
          user: getCookie('user') as string,
          password: getCookie('password') as string
        }
      }
    ).then(() => { clearCart(); setCart(cartItems) }).catch((err) => console.log(err))
  }

  console.log(getCookie('idFuncionario'))

  return <div className="flex flex-col w-full h-[30rem] justify-center items-center">
    <CartContainer
      items={cart}
      handleSubmit={handleSell}
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