import { useState, useCallback } from 'react'
import { getClubs } from '../api'
import { Club } from '../../../../types'

export const useClubs = () => {
  const [clubs, setClubs] = useState<Club[]>([])
  const [error, setError] = useState<string | null>(null)

  const loadClubs = useCallback(async () => {
    try {
      setError(null)
      const clubsData = await getClubs()
      setClubs(clubsData)
    } catch (error) {
      console.error('Error loading clubs:', error)
      setError('Error al cargar los clubes')
      throw error
    }
  }, [])

  return {
    clubs,
    error,
    loadClubs
  }
}
