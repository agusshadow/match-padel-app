import { useState, useCallback } from 'react'
import { getAvailableSlotsByCourtAndDay } from '../api'
import { CourtSchedule } from '../../../../types'

export const useSlots = () => {
  const [schedules, setSchedules] = useState<CourtSchedule[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const loadAvailableSlots = useCallback(async (courtId: number, dayOfWeek: number) => {
    try {
      setLoading(true)
      setError(null)
      const slotsData = await getAvailableSlotsByCourtAndDay(courtId, dayOfWeek)
      setSchedules(slotsData)
    } catch (error) {
      console.error('Error loading available slots:', error)
      setError('Error al cargar los horarios disponibles')
      throw error
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    schedules,
    loading,
    error,
    loadAvailableSlots
  }
}
