import { Button, Input, user } from "@nextui-org/react"
import { ChangeEvent, FormEvent, useState } from "react"
import { EyeSlashFilledIcon } from "./EyeSlashedFilledIcon"
import { EyeFilledIcon } from "./EyeFilledIcon"
import {getCookie, setCookie} from 'cookies-next'

import {activeUser, setActiveUser} from '@/app/activeUser'
import { useRouter } from "next/navigation"

export const LoginCard = () => {
  const router = useRouter()

  const [error, setError] = useState('')

  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => setIsVisible(!isVisible)

  const [formData, setFormData] = useState({
    user: '',
    password: '',
  })

  const handleFormEdit = (event: ChangeEvent<HTMLInputElement>, name: string) => {
    setFormData({
      ...formData,
      [name]: event.target.value,
    })
  }

  const handleForm = async (event: FormEvent): Promise<void> => {
    event.preventDefault()

    setCookie('user', formData.user)
    setCookie('password', formData.password)

    let produtos
    
    try {
      const res = await fetch('http://localhost:3333/api/produtos', {
        headers: { 
          contentType: 'application/json',
          user: getCookie('user'),
          password: getCookie('password'),
        },
        method: 'GET',
      })
      const body = await res.json()

      produtos = body.data
    } catch (err) {
      console.log(err)
    }

    console.log(produtos)

    router.push('produtos')
  }

  return <div className="p-10 flex flex-col gap-5 bg-zinc-100 w-5/12 rounded-lg shadow-md shadow-zinc-400">
    <h3>Fazer Login</h3>
    <div className="flex flex-col gap-2">
      <Input
        size="sm"
        label="Usuário"
        variant="faded"
        color="danger"
        required
        value={formData.user}
        onChange={(e) => handleFormEdit(e, 'user')}
      />
      <Input 
        size="sm"
        label="Senha"
        variant="faded"
        color="danger"
        required
        endContent={
          <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
            {isVisible ? (
              <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
        value={formData.password}
        onChange={(e) => handleFormEdit(e, 'password')}
        type={isVisible ? "text" : "password"}
      />
    </div>
    
    <Button color="danger" radius="none" onClick={(e) => handleForm(e)} >Entrar</Button>
  </div>
}