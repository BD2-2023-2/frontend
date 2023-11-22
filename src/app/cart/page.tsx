'use client'

import { ProdutosWrapper } from "../components/ProdutosWrapper";
import { activeUser } from "../activeUser";

export default function CartPage() {
  return <div>
    <ProdutosWrapper user={activeUser.user} password={activeUser.password} />
  </div>
}