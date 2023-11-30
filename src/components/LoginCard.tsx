import { Button, Card, CardBody, CardHeader, Input, user } from "@nextui-org/react"
import { ChangeEvent, FormEvent, useState } from "react"
import { EyeSlashFilledIcon } from "./EyeSlashedFilledIcon"
import { EyeFilledIcon } from "./EyeFilledIcon"
import {getCookie, setCookie} from 'cookies-next'

import { useRouter } from "next/navigation"
import { useSnackbar } from "notistack"
import axios from "axios"

export const LoginCard = () => {
  const router = useRouter()

  const {enqueueSnackbar} = useSnackbar()

  const [isLoading, setIsLoading] = useState(false)

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
    
    try {
      setIsLoading(true)
      const {data} = await axios.get('http://localhost:3333/api/auth', {
        headers: { 
          contentType: 'application/json',
          user: getCookie('user') as string,
          password: getCookie('password') as string,
        },
        method: 'GET',
      })
      
      enqueueSnackbar(data.message, {variant: 'success', autoHideDuration: 2000})

      setCookie('idFuncionario', data.data.idFuncionario)

      router.push('/')
    } catch (err) {
      enqueueSnackbar('Usuário ou senha inválidos!', {variant: 'error', autoHideDuration: 2000})
    } finally {
      setIsLoading(false)
    }
  }

  return <Card className="px-5 flex flex-col gap-5 w-1/3 h-[20rem]">
    <CardHeader className="font-bold">Fazer Login</CardHeader>
    <CardBody className="flex flex-col gap-3">
      <Input
        size="sm"
        label="Usuário"
        variant="faded"
        color="primary"
        required
        value={formData.user}
        onChange={(e) => handleFormEdit(e, 'user')}
      />
      <Input 
        size="sm"
        label="Senha"
        variant="faded"
        color="primary"
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
      <Button color="primary" radius="none" onClick={(e) => handleForm(e)} isLoading={isLoading} >
        Entrar
      </Button>
    </CardBody>
  </Card>
}