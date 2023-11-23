'use client'

import { Button } from "@nextui-org/react"
import { getCookie } from "cookies-next"
import { NextRequest, NextResponse } from "next/server"

export default function Page({req, res}: {req: NextRequest, res: NextResponse}) {
  const user = getCookie('user', { req, res })
  const password = getCookie('password', {req, res})


  console.log(user, password)
  
  const getProdutos = async (event) => {
    event.preventDefault()

    try {
      const res = await fetch('http://localhost:3333/api/produtos', {
        headers: {
          contentType: 'application/json',
          user,
          password,
        }
      })
      const body = await res.json()

      console.log(body.data)
    }catch(err){}
  }
  
  return <div>
    <Button onClick={(e) => getProdutos(e)} >Buscar Produtos</Button>
  </div>
}
