import api from '../../config'
import { Match, CreateMatchData } from '../../../types'

// Obtener todos los partidos
export const getMatches = async (): Promise<Match[]> => {
  const response = await api.get('/matches/detailed')
  console.log('API Response for matches:', response.data) // Debug log
  // Manejar el formato específico de la API: { success: true, data: [...], count: 1 }
  if (response.data && response.data.success && response.data.data && Array.isArray(response.data.data)) {
    return response.data.data
  }
  console.log('No valid array found in response, returning empty array')
  return []
}

// Obtener un partido específico
export const getMatch = async (matchId: number): Promise<Match> => {
  const response = await api.get(`/matches/${matchId}`)
  return response.data
}

// Obtener un partido específico con detalles completos
export const getMatchDetailed = async (matchId: number): Promise<Match> => {
  const response = await api.get(`/matches/${matchId}/detailed`)
  return response.data.data || response.data
}

// Unirse a un partido
export const joinMatch = async (matchId: number): Promise<void> => {
  await api.post(`/matches/${matchId}/join`)
}

// Cancelar un partido
export const cancelMatch = async (matchId: number): Promise<void> => {
  await api.delete(`/matches/${matchId}`)
}

// Actualizar un partido
export const updateMatch = async (matchId: number, matchData: Partial<Match>): Promise<Match> => {
  const response = await api.put(`/matches/${matchId}`, matchData)
  return response.data
}

// Crear partido con reserva
export const createMatchWithReservation = async (matchData: CreateMatchData): Promise<Match> => {
  const response = await api.post('/matches/with-reservation', matchData)
  return response.data.data || response.data
}
