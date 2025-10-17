import { BaseEntity } from '../common'
import { Court } from '../court'

export interface CourtSchedule extends BaseEntity {
  courtId: number
  dayOfWeek: number // 0 = Domingo, 1 = Lunes, etc.
  startTime: string
  endTime: string
  price: number
  isAvailable: boolean
  court?: Court
}
