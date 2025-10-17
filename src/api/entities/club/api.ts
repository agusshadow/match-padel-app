import api from '../../config'
import { Club } from '../../../types'

// Obtener todos los clubes
export const getClubs = async (): Promise<Club[]> => {
  const response = await api.get('/clubs')
  return response.data.data || response.data
}
