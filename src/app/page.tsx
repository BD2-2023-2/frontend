import { Button } from '@nextui-org/react'
import Link from 'next/link'
import { Produto } from './components/Produto'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24">
      <div className='flex flex-col md:flex-row gap-5'>
        <Produto
          id={1}
          nome="Teste"
          descricao='capsula de cafe'
          fotoUrl='https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRqPnxhzG50sOFqBgyKvZtmOHiB3mwkR2YtId5jZG5nApAoiSDkXMK4Rxxqpkfg0ZW9'
        />
        <Produto
          id={1}
          nome="Teste"
          descricao='capsula de cafe'
          fotoUrl='https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRqPnxhzG50sOFqBgyKvZtmOHiB3mwkR2YtId5jZG5nApAoiSDkXMK4Rxxqpkfg0ZW9'
        />
        <Produto
          id={1}
          nome="Teste"
          descricao='capsula de cafe'
          fotoUrl='https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRqPnxhzG50sOFqBgyKvZtmOHiB3mwkR2YtId5jZG5nApAoiSDkXMK4Rxxqpkfg0ZW9'
        />
      </div>
      <div className='flex flex-col md:flex-row gap-5'>
        <Produto
          id={1}
          nome="Teste"
          descricao='capsula de cafe'
          fotoUrl='https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRqPnxhzG50sOFqBgyKvZtmOHiB3mwkR2YtId5jZG5nApAoiSDkXMK4Rxxqpkfg0ZW9'
        />
        <Produto
          id={1}
          nome="Teste"
          descricao='capsula de cafe'
          fotoUrl='https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRqPnxhzG50sOFqBgyKvZtmOHiB3mwkR2YtId5jZG5nApAoiSDkXMK4Rxxqpkfg0ZW9'
        />
        <Produto
          id={1}
          nome="Teste"
          descricao='capsula de cafe'
          fotoUrl='https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRqPnxhzG50sOFqBgyKvZtmOHiB3mwkR2YtId5jZG5nApAoiSDkXMK4Rxxqpkfg0ZW9'
        />
      </div>
      
    </main>
  )
}
