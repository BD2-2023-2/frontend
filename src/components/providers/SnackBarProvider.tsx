'use client'

import { SnackbarProvider as Provider } from "notistack"
import { ReactNode } from "react"

export const SnackBarProvider = ({ children }: { children: ReactNode }) => {
  return <Provider>
    {children}
  </Provider>
}