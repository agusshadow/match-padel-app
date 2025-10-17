import { useState, useCallback } from 'react'
import { login as loginApi, register as registerApi, logout as logoutApi, verifyToken as verifyTokenApi } from '../api'
import { LoginCredentials, RegisterData, AuthResponse, User } from '../../../../types'

export const useAuth = () => {
  const [error, setError] = useState<string | null>(null)

  const login = useCallback(async (credentials: LoginCredentials): Promise<AuthResponse | null> => {
    try {
      setError(null)
      const response = await loginApi(credentials)
      return response
    } catch (error) {
      console.error('Login error:', error)
      setError('Error al iniciar sesión')
      throw error
    }
  }, [])

  const register = useCallback(async (userData: RegisterData): Promise<AuthResponse | null> => {
    try {
      setError(null)
      const response = await registerApi(userData)
      return response
    } catch (error) {
      console.error('Register error:', error)
      setError('Error al registrarse')
      throw error
    }
  }, [])

  const logout = useCallback(async (): Promise<void> => {
    try {
      setError(null)
      await logoutApi()
    } catch (error) {
      console.error('Logout error:', error)
      setError('Error al cerrar sesión')
      throw error
    }
  }, [])

  const verifyToken = useCallback(async (): Promise<{ user: User } | null> => {
    try {
      setError(null)
      const response = await verifyTokenApi()
      return response
    } catch (error) {
      console.error('Token verification error:', error)
      setError('Error al verificar token')
      throw error
    }
  }, [])

  return {
    error,
    login,
    register,
    logout,
    verifyToken
  }
}
