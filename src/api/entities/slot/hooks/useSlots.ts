import { useState, useCallback } from 'react'
import { getAvailableSlotsByCourtAndDay } from '../api'
import { CourtSchedule } from '../../../../types'

export const useSlots = () => {
  const [schedules, setSchedules] = useState<CourtSchedule[]>([])
  const [error, setError] = useState<string | null>(null)

  const loadAvailableSlots = useCallback(async (courtId: number, dayOfWeek: number) => {
    try {
      setError(null)
      const slotsData = await getAvailableSlotsByCourtAndDay(courtId, dayOfWeek)
      setSchedules(slotsData)
    } catch (error) {
      console.error('Error loading available slots:', error)
      setError('Error al cargar los horarios disponibles')
      throw error
    }
  }, [])

  return {
    schedules,
    error,
    loadAvailableSlots
  }
}
