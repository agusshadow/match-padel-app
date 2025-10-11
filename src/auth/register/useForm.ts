import * as Yup from 'yup'
import { RegisterData } from '../../services/authService'

export const useForm = () => {
  const initialValues: RegisterData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'El nombre debe tener al menos 2 caracteres')
      .required('El nombre es requerido'),
    email: Yup.string()
      .email('Email inválido')
      .required('El email es requerido'),
    password: Yup.string()
      .min(6, 'La contraseña debe tener al menos 6 caracteres')
      .required('La contraseña es requerida'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Las contraseñas no coinciden')
      .required('Confirma tu contraseña'),
  })

  return {
    initialValues,
    validationSchema,
  }
}
