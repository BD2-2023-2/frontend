'use client'

import { redirect } from "next/navigation"
import { activeUser } from "./activeUser"

export const validaLogin = () => {
  const user = activeUser

  console.log(user)

  if(!user) redirect('/auth')
}