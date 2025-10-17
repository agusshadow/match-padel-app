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

export interface Slot {
  id: number
  courtId: number
  dayOfWeek: number
  startTime: string
  endTime: string
  isAvailable: boolean
  price: string
  createdAt: string
  updatedAt: string
}

export interface Reservation {
  id: number
  courtId: number
  userId: number
  scheduledDate: string
  slotId: number
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  createdAt: string
  updatedAt: string
  court?: Court
  user?: User
  slot?: Slot
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
