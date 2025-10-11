import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { authService, RegisterData } from '../../services/authService'
import { FormikHelpers } from 'formik'
import { useToast } from '../../shared/hooks/useToast'

export const useSubmit = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const { showSuccess, showError } = useToast()

  const handleSubmit = async (
    values: RegisterData,
    { setSubmitting }: FormikHelpers<RegisterData>
  ) => {
    try {
      const response = await authService.register(values)
      login(response.data.token, response.data.user)
      showSuccess('¡Cuenta creada!', 'Te has registrado correctamente')
      navigate('/app')
    } catch (error: any) {
      showError('Error al crear la cuenta', error.response?.data?.message || 'No se pudo crear la cuenta')
    } finally {
      setSubmitting(false)
    }
  }

  return { handleSubmit }
}
