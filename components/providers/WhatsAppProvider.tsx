"use client"

import { createContext, useContext } from "react"
import { useWhatsApp } from "@/hooks/business/useActions"

interface WhatsAppContextType {
  openWhatsApp: (action: string) => void
}

const WhatsAppContext = createContext<WhatsAppContextType | null>(null)

export function useWhatsAppContext() {
  const context = useContext(WhatsAppContext)
  if (!context) {
    throw new Error("useWhatsAppContext must be used within a WhatsAppProvider")
  }
  return context
}

export function WhatsAppProvider({ children }: { children: React.ReactNode }) {
  const { openWhatsApp } = useWhatsApp()
  
  return (
    <WhatsAppContext.Provider value={{ openWhatsApp }}>
      {children}
    </WhatsAppContext.Provider>
  )
}