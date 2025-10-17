import { useCallback } from 'react'
import { useLoading } from '../context/LoadingContext'

export const useAsyncOperation = () => {
  const { showLoading, hideLoading } = useLoading()

  const executeAsync = useCallback(async <T>(
    operation: () => Promise<T>,
    loadingMessage: string = 'Cargando...'
  ): Promise<T> => {
    try {
      showLoading(loadingMessage)
      const result = await operation()
      return result
    } finally {
      hideLoading()
    }
  }, [showLoading, hideLoading])

  return {
    executeAsync,
    showLoading,
    hideLoading
  }
}
