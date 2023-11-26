'use client'

import { TProduto } from "../types";

export type cartItemsProps = {
  produto: TProduto
  quantidade: number
}

export let cartItems: cartItemsProps[] = []

export const addItemToCart = (produto: TProduto, quantidade?: number): void => {
  const item = cartItems.find((itemInCart) => itemInCart.produto.id === produto.id)
  if (item) item.quantidade += quantidade ?? 1
  
  else cartItems.push({produto, quantidade: quantidade ?? 1})
}

export const clearCart = (): void => {
  cartItems = []
}