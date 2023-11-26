'use client'

import { LoginCard } from "../../components/LoginCard"
import { TProduto } from "../../types"


export type CartProps = {
  produtos: TProduto[]
}

export default function AuthPage() {
  return (
      <main className="flex justify-center items-center gap-10">
        <LoginCard />
      </main>
  )
}
