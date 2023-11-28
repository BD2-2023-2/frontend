'use client'

import Link from "next/link";

import { Button } from "@nextui-org/react";
import { NextRequest, NextResponse } from "next/server";
import { getCookie } from "cookies-next";
import { redirect, useRouter } from "next/navigation";

export default function Home() {
  const login = {
    user: getCookie('user'),
    password: getCookie('password')
  }
  console.log(login)

  if (!login) redirect('/auth')
  
  return (
    <main className="flex flex-col justify-center items-center gap-10">
      <h1 className="font-bold">Pagina inicial</h1>
      <div className="flex flex-col gap-2 items-center">
        <Link
          href="/produtos"
          className="w-full"
        >
          <Button
            color="danger"
            className="w-full"
          >
            Cadastro de Produtos
          </Button>
        </Link>
        <Link
          href="/menu"
          className="w-full"
        >
          <Button
            color="danger"
            className="w-full"
          >
            Cardápio
          </Button>
        </Link>
        <Link
          href="/vendas"
          className="w-full"
        >
          <Button
            color="danger"
            className="w-full"
          >
            Listagem de Vendas
          </Button>
        </Link>
      </div>
    </main>
  )
}
