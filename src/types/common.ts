// Tipos comunes compartidos entre entidades

export interface User {
  id: number
  name: string
  email: string
}

export interface BaseEntity {
  id: number
  createdAt: string
  updatedAt: string
}
