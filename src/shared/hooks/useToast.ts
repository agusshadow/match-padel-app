import { useToast as useChakraToast } from '@chakra-ui/react'
import { useCallback } from 'react'

export const useToast = () => {
  const toast = useChakraToast()

  const showSuccess = useCallback((title: string, description?: string) => {
    toast({
      title,
      description,
      status: 'success',
      duration: 4000,
      isClosable: true,
      position: 'top-right',
    })
  }, [toast])

  const showError = useCallback((title: string, description?: string) => {
    toast({
      title,
      description,
      status: 'error',
      duration: 5000,
      isClosable: true,
      position: 'top-right',
    })
  }, [toast])

  const showWarning = useCallback((title: string, description?: string) => {
    toast({
      title,
      description,
      status: 'warning',
      duration: 4000,
      isClosable: true,
      position: 'top-right',
    })
  }, [toast])

  const showInfo = useCallback((title: string, description?: string) => {
    toast({
      title,
      description,
      status: 'info',
      duration: 4000,
      isClosable: true,
      position: 'top-right',
    })
  }, [toast])

  return {
    showSuccess,
    showError,
    showWarning,
    showInfo,
  }
}
