import { TProduto } from "../src/types"

export default async function getAllProdutos({user, password}: {user: string, password: string}): Promise<TProduto[]> {
  const res = await fetch('http://localhost:3333/api/produtos', {
    headers: {
      contentType: 'Application/json',
      user,
      password,
    }
  })
  const body = await res.json()

  if (!res.ok) throw new Error(body.message)
  
  return body.data
}