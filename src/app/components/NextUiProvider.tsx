'use client'

import { NextUIProvider } from "@nextui-org/react"
import {ThemeProvider} from 'next-themes'

export const NextUiProvider = ({ children }: { children: React.ReactNode }) => {
  return <NextUIProvider>
    <ThemeProvider attribute="class" defaultTheme="light" themes={['light']}>
      {children}
    </ThemeProvider>
    </NextUIProvider>
}