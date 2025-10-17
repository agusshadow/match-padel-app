import { BaseEntity } from '../common'

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterData {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export interface User extends BaseEntity {
  name: string
  email: string
  role: string
}

export interface AuthResponse {
  success: boolean
  message: string
  data: {
    user: User
    token: string
  }
}
