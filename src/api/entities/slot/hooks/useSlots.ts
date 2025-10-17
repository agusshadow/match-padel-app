import { useState, useCallback } from 'react'
import { getAvailableSlotsByCourtAndDay } from '../api'
import { CourtSchedule } from '../../../../types'
import { useToast } from '../../../../shared/hooks/useToast'

export const useSlots = () => {
  const [schedules, setSchedules] = useState<CourtSchedule[]>([])
  const { showError } = useToast()

  const loadAvailableSlots = useCallback(async (courtId: number, dayOfWeek: number) => {
    try {
      const slotsData = await getAvailableSlotsByCourtAndDay(courtId, dayOfWeek)
      setSchedules(slotsData)
    } catch (error) {
      console.error('Error loading available slots:', error)
      showError('Error al cargar los horarios disponibles')
      throw error
    }
  }, [showError])

  return {
    schedules,
    loadAvailableSlots
  }
}
