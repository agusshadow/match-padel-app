import { useState, useCallback } from 'react'
import { getCourtsByClub } from '../api'
import { Court } from '../../../../types'

export const useCourts = () => {
  const [courts, setCourts] = useState<Court[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const loadCourts = useCallback(async (clubId: number) => {
    try {
      setLoading(true)
      setError(null)
      const courtsData = await getCourtsByClub(clubId)
      setCourts(courtsData)
    } catch (error) {
      console.error('Error loading courts:', error)
      setError('Error al cargar las canchas')
      throw error
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    courts,
    loading,
    error,
    loadCourts
  }
}
