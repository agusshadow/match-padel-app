import { useState, useCallback } from 'react'
import { getClubs } from '../api'
import { Club } from '../../../../types'

export const useClubs = () => {
  const [clubs, setClubs] = useState<Club[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const loadClubs = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const clubsData = await getClubs()
      setClubs(clubsData)
    } catch (error) {
      console.error('Error loading clubs:', error)
      setError('Error al cargar los clubes')
      throw error
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    clubs,
    loading,
    error,
    loadClubs
  }
}
