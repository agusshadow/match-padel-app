import api from '../../config'
import { LoginCredentials, RegisterData, User, AuthResponse } from '../../../types'

// Login
export const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  const response = await api.post('/auth/login', credentials)
  return response.data
}

// Register
export const register = async (userData: RegisterData): Promise<AuthResponse> => {
  const response = await api.post('/auth/register', userData)
  return response.data
}

// Logout (opcional, para invalidar token en el servidor)
export const logout = async (): Promise<void> => {
  try {
    await api.post('/auth/logout')
  } catch (error) {
    // Ignorar errores en logout
    console.log('Logout error:', error)
  }
}

// Verificar token
export const verifyToken = async (): Promise<{ user: User }> => {
  const response = await api.get('/auth/verify')
  return response.data
}
