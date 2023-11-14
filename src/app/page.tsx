import { Button } from '@nextui-org/react'
import Link from 'next/link'
import { Produto } from './components/Produto'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Produto />
    </main>
  )
}
