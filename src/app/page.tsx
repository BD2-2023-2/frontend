'use client'

import { TProduto } from '../types'
import { LoginCard } from '../components/LoginCard'

export type CartProps = {
  produtos: TProduto[]
}

export default function Home() {
  return (
    <main className="flex justify-center gap-10">
      <LoginCard />
    </main>
  )
}
