import { Button } from '@nextui-org/react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href='https://github.com/BD2-2023-2' target='_blank'>
        <Button color='primary' variant='ghost' radius='sm'>
          GitHub Time
        </Button>
      </Link>
    </main>
  )
}
