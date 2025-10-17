import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { createMatchWithReservation } from '../../api/entities'
import { useToast } from '../../shared/hooks/useToast'

export interface CreateMatchForm {
  clubId: number | null
  courtId: number | null
  selectedDate: string
  selectedTime: string
  slotId: number | null
  notes: string
}

export const useSubmit = () => {
  const navigate = useNavigate()
  const { showSuccess, showError } = useToast()

  const submitMatch = useCallback(async (formData: CreateMatchForm) => {
    if (!formData.slotId || !formData.selectedDate) {
      const errorMessage = 'Por favor completa todos los campos obligatorios'
      showError(errorMessage)
      throw new Error(errorMessage)
    }

    try {
      const matchData = {
        slotId: formData.slotId,
        scheduledDate: formData.selectedDate,
        notes: formData.notes
      }

      const result = await createMatchWithReservation(matchData)
      showSuccess('Partido creado exitosamente')
      navigate('/app/matches')
      return result
    } catch (error) {
      console.error('Error creating match:', error)
      const errorMessage = 'Error al crear el partido'
      showError(errorMessage)
      throw error
    }
  }, [navigate, showSuccess, showError])

  return {
    submitMatch
  }
}
