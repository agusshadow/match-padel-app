import api from '../../services/authService'

export interface User {
  id: number
  name: string
  email: string
}

export interface Club {
  id: number
  name: string
  address: string
  city: string
}

export interface Court {
  id: number
  clubId: number
  name: string
  type: string
  surface: string
  isActive: boolean
  createdAt: string
  updatedAt: string
  club?: Club
}

export interface Reservation {
  id: number
  courtId: number
  userId: number
  scheduledDate: string
  startTime: string
  endTime: string
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  totalPrice: string
  createdAt: string
  updatedAt: string
  court?: Court
  user?: User
}

export interface Match {
  id: number
  reservationId: number
  player1Id: number
  player2Id: number
  player3Id: number
  player4Id: number
  status: 'scheduled' | 'in_progress' | 'completed' | 'cancelled'
  score: string | null
  duration: number | null
  notes: string | null
  createdAt: string
  updatedAt: string
  reservation?: Reservation
  player1?: User
  player2?: User
  player3?: User
  player4?: User
}

export const matchService = {
  // Obtener todos los partidos
  getMatches: async (): Promise<Match[]> => {
    const response = await api.get('/matches?status=scheduled')
    console.log('API Response for matches:', response.data) // Debug log
    // Manejar el formato específico de la API: { success: true, data: [...], count: 1 }
    if (response.data && response.data.success && response.data.data && Array.isArray(response.data.data)) {
      return response.data.data
    }
    console.log('No valid array found in response, returning empty array')
    return []
  },

  // Obtener un partido específico
  getMatch: async (matchId: number): Promise<Match> => {
    const response = await api.get(`/matches/${matchId}`)
    return response.data
  },

  // Unirse a un partido
  joinMatch: async (matchId: number): Promise<void> => {
    await api.post(`/matches/${matchId}/join`)
  },

  // Cancelar un partido
  cancelMatch: async (matchId: number): Promise<void> => {
    await api.delete(`/matches/${matchId}`)
  },

  // Actualizar un partido
  updateMatch: async (matchId: number, matchData: Partial<Match>): Promise<Match> => {
    const response = await api.put(`/matches/${matchId}`, matchData)
    return response.data
  }
}
