import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { authService, LoginCredentials } from '../../services/authService'
import { FormikHelpers } from 'formik'
import { useToast } from '../../shared/hooks/useToast'

export const useSubmit = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const { showSuccess, showError } = useToast()

  const handleSubmit = async (
    values: LoginCredentials,
    { setSubmitting }: FormikHelpers<LoginCredentials>
  ) => {
    try {
      const response = await authService.login(values)
      login(response.token, response.user)
      showSuccess('¡Bienvenido!', 'Has iniciado sesión correctamente')
      navigate('/home')
    } catch (error: any) {
      showError('Error al iniciar sesión', error.response?.data?.message || 'Credenciales inválidas')
    } finally {
      setSubmitting(false)
    }
  }

  return { handleSubmit }
}
