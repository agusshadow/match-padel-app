import { BaseEntity } from '../common'
import { Club } from '../club'

export interface Court extends BaseEntity {
  clubId: number
  name: string
  type: string
  surface: string
  isActive: boolean
  club?: Club
}
