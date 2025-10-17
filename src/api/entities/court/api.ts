import api from '../../config'
import { Court } from '../../../types'

// Obtener canchas por club
export const getCourtsByClub = async (clubId: number): Promise<Court[]> => {
  const response = await api.get(`/courts/by-club?clubId=${clubId}`)
  return response.data.data || response.data
}
