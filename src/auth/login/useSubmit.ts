import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { authService, LoginCredentials } from '../../services/authService'

export const useSubmit = () => {
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (
    values: LoginCredentials,
    { setSubmitting, setStatus }: any
  ) => {
    try {
      setStatus(null)
      const response = await authService.login(values)
      login(response.token, response.user)
      navigate('/home')
    } catch (error: any) {
      setStatus(error.response?.data?.message || 'Error al iniciar sesión')
    } finally {
      setSubmitting(false)
    }
  }

  return { handleSubmit }
}
