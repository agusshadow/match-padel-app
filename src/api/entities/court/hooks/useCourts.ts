import { useState, useCallback } from 'react'
import { getCourtsByClub } from '../api'
import { Court } from '../../../../types'
import { useToast } from '../../../../shared/hooks/useToast'

export const useCourts = () => {
  const [courts, setCourts] = useState<Court[]>([])
  const { showError } = useToast()

  const loadCourts = useCallback(async (clubId: number) => {
    try {
      const courtsData = await getCourtsByClub(clubId)
      setCourts(courtsData)
    } catch (error) {
      console.error('Error loading courts:', error)
      showError('Error al cargar las canchas')
      throw error
    }
  }, [showError])

  return {
    courts,
    loadCourts
  }
}
