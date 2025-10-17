import { useCallback } from 'react'
import { login as loginApi, register as registerApi, logout as logoutApi, verifyToken as verifyTokenApi } from '../api'
import { LoginCredentials, RegisterData, AuthResponse, User } from '../../../../types'
import { useToast } from '../../../../shared/hooks/useToast'

export const useAuth = () => {
  const { showError } = useToast()

  const login = useCallback(async (credentials: LoginCredentials): Promise<AuthResponse | null> => {
    try {
      const response = await loginApi(credentials)
      return response
    } catch (error) {
      console.error('Login error:', error)
      showError('Error al iniciar sesión')
      throw error
    }
  }, [showError])

  const register = useCallback(async (userData: RegisterData): Promise<AuthResponse | null> => {
    try {
      const response = await registerApi(userData)
      return response
    } catch (error) {
      console.error('Register error:', error)
      showError('Error al registrarse')
      throw error
    }
  }, [showError])

  const logout = useCallback(async (): Promise<void> => {
    try {
      await logoutApi()
    } catch (error) {
      console.error('Logout error:', error)
      showError('Error al cerrar sesión')
      throw error
    }
  }, [showError])

  const verifyToken = useCallback(async (): Promise<{ user: User } | null> => {
    try {
      const response = await verifyTokenApi()
      return response
    } catch (error) {
      console.error('Token verification error:', error)
      showError('Error al verificar token')
      throw error
    }
  }, [showError])

  return {
    login,
    register,
    logout,
    verifyToken
  }
}
