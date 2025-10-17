import { User, BaseEntity } from '../common'

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

export interface Match extends BaseEntity {
  reservationId: number
  player1Id: number
  player2Id: number
  player3Id: number
  player4Id: number
  status: 'scheduled' | 'in_progress' | 'completed' | 'cancelled'
  score: string | null
  duration: number | null
  notes: string | null
  reservation?: Reservation
  player1?: User
  player2?: User
  player3?: User
  player4?: User
}

export interface CreateMatchData {
  slotId: number
  scheduledDate: string
  notes?: string
}
