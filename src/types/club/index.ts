import { BaseEntity } from '../common'

export interface Club extends BaseEntity {
  name: string
  address: string
  city: string
  phone?: string
  email?: string
  isActive: boolean
}
