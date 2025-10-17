import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { setLoadingContext } from '../api/config'

interface LoadingContextType {
  isLoading: boolean
  loadingMessage: string
  setLoading: (loading: boolean, message?: string) => void
  showLoading: (message?: string) => void
  hideLoading: () => void
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

interface LoadingProviderProps {
  children: ReactNode
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [loadingMessage, setLoadingMessage] = useState('Cargando...')

  const setLoading = (loading: boolean, message: string = 'Cargando...') => {
    setIsLoading(loading)
    setLoadingMessage(message)
  }

  const showLoading = (message: string = 'Cargando...') => {
    setLoading(true, message)
  }

  const hideLoading = () => {
    setLoading(false)
  }

  // Registrar el contexto con el config de axios para loading automático
  useEffect(() => {
    setLoadingContext({
      showLoading,
      hideLoading
    })
  }, [])

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        loadingMessage,
        setLoading,
        showLoading,
        hideLoading
      }}
    >
      {children}
    </LoadingContext.Provider>
  )
}

export const useLoading = (): LoadingContextType => {
  const context = useContext(LoadingContext)
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider')
  }
  return context
}
