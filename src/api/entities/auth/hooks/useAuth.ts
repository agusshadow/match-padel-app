import { useState, useCallback } from 'react'
import { login as loginApi, register as registerApi, logout as logoutApi, verifyToken as verifyTokenApi } from '../api'
import { LoginCredentials, RegisterData, AuthResponse, User } from '../../../../types'

export const useAuth = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const login = useCallback(async (credentials: LoginCredentials): Promise<AuthResponse | null> => {
    try {
      setLoading(true)
      setError(null)
      const response = await loginApi(credentials)
      return response
    } catch (error) {
      console.error('Login error:', error)
      setError('Error al iniciar sesión')
      throw error
    } finally {
      setLoading(false)
    }
  }, [])

  const register = useCallback(async (userData: RegisterData): Promise<AuthResponse | null> => {
    try {
      setLoading(true)
      setError(null)
      const response = await registerApi(userData)
      return response
    } catch (error) {
      console.error('Register error:', error)
      setError('Error al registrarse')
      throw error
    } finally {
      setLoading(false)
    }
  }, [])

  const logout = useCallback(async (): Promise<void> => {
    try {
      setLoading(true)
      setError(null)
      await logoutApi()
    } catch (error) {
      console.error('Logout error:', error)
      setError('Error al cerrar sesión')
      throw error
    } finally {
      setLoading(false)
    }
  }, [])

  const verifyToken = useCallback(async (): Promise<{ user: User } | null> => {
    try {
      setLoading(true)
      setError(null)
      const response = await verifyTokenApi()
      return response
    } catch (error) {
      console.error('Token verification error:', error)
      setError('Error al verificar token')
      throw error
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    loading,
    error,
    login,
    register,
    logout,
    verifyToken
  }
}
