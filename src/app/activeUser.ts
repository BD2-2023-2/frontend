'use client'

export let activeUser = {
  user: '',
  password: '',
}

export function setActiveUser(user: string, password: string) {
  activeUser.user = user
  activeUser.password = password
}