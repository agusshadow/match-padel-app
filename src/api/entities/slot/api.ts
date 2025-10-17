import api from '../../config'
import { CourtSchedule } from '../../../types'

// Obtener horarios disponibles por cancha y día
export const getAvailableSlotsByCourtAndDay = async (courtId: number, dayOfWeek: number): Promise<CourtSchedule[]> => {
  const response = await api.get(`/court-slots/available?courtId=${courtId}&dayOfWeek=${dayOfWeek}`)
  return response.data.data || response.data
}
