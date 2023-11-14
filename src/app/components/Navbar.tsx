import { Input } from "@nextui-org/react"
import Link from "next/link"
import {  Search, ShoppingBasket } from "lucide-react"

export const Navbar = () => {
  return <div className="flex items-center justify-between w-full pt-5 px-10">
    <div>єcσмм cαƒє</div>
    <div className="flex h-10">
      <Input
        startContent={
          <Search />
        }
        radius="md"
        variant="faded"
        placeholder="Pesquise seu produto"
        color="primary"
        size="sm"
        classNames={{inputWrapper: ['bg-transparent', 'border-black/50']}}
      />
    </div>
    <div>
      <Link href='/cart'>
        <ShoppingBasket size={40} />
      </Link></div>
  </div>
}