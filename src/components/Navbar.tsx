import Link from "next/link"
import { ShoppingBasket } from "lucide-react"

export const Navbar = () => {
  return <div className="flex items-center justify-between w-full pt-5 px-10 mb-10">
    <div>єcσмм cαƒє</div>
    <div>
      <Link href='/cart'>
        <ShoppingBasket size={40} />
      </Link></div>
  </div>
}