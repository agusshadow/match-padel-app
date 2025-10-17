import * as Yup from 'yup'
import { LoginCredentials } from '../../types'

export const useForm = () => {
  const initialValues: LoginCredentials = {
    email: '',
    password: '',
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email inválido')
      .required('El email es requerido'),
    password: Yup.string()
      .min(6, 'La contraseña debe tener al menos 6 caracteres')
      .required('La contraseña es requerida'),
  })

  return {
    initialValues,
    validationSchema,
  }
}
