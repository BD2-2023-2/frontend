import Link from "next/link"
import { ShoppingBasket } from "lucide-react"
import { Button } from "@nextui-org/react"

export const Navbar = () => {
  return <div className="my-5 mx-5 p-5 flex items-center justify-between bg-primary text-zinc-300 rounded-full">
    <div className="flex">єcσмм cαƒє</div>
    <div className="flex items-center justify-center gap-5 font-bold">
      <Link href='/produtos' className="hover:text-zinc-700 hover:opacity-80">
        Produtos
      </Link>
      <Link href='/menu' className="hover:text-zinc-700 hover:opacity-80">
        Cardápio
      </Link>
      <Link href='/vendas' className="hover:text-zinc-700 hover:opacity-80">
        Vendas
      </Link>
    </div>
    <div className="flex justify-end items-center gap-10">
      <Link href='/cart'>
        <ShoppingBasket size={30} className="hover:text-zinc-700 hover:opacity-80" />
      </Link>
    </div>
  </div>
}