import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { authService, RegisterData } from '../../services/authService'

export const useSubmit = () => {
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (
    values: RegisterData,
    { setSubmitting, setStatus }: any
  ) => {
    try {
      setStatus(null)
      const response = await authService.register(values)
      login(response.token, response.user)
      navigate('/home')
    } catch (error: any) {
      setStatus(error.response?.data?.message || 'Error al crear la cuenta')
    } finally {
      setSubmitting(false)
    }
  }

  return { handleSubmit }
}
