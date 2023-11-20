'use client'

import { useState } from 'react'
import { Produtos } from './components/ProdutoWrapper'
import { TProduto } from '../types'

export type CartProps = {
  produtos: TProduto[]
}

export default function Home() {
  const [cart, setCart] = useState([]) 

  const handleClick = (produto: TProduto) => {
    setCart([...cart, produto])

    console.log(cart)
  }

  return (
    <main className="flex justify-center gap-10">
      <Produtos
        handleClick={handleClick}
      />
    </main>
  )
}
