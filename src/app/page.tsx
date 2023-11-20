'use client'

import { Button } from '@nextui-org/react'
import { Produto } from '../components/Produto'

export default function Home() {
  
  const fetchProdutos = async () => {
    const res = await fetch('http://localhost:3333/api/produtos')
    const body = await res.json()

    console.log(body.data)

    return body.data;
  }

  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24">
      <Button onClick={() => fetchProdutos()}>
        Buscar Produtos
      </Button>
      
    </main>
  )
}
