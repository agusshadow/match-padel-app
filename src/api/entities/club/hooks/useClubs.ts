import { useState, useCallback } from 'react'
import { getClubs } from '../api'
import { Club } from '../../../../types'
import { useToast } from '../../../../shared/hooks/useToast'

export const useClubs = () => {
  const [clubs, setClubs] = useState<Club[]>([])
  const { showError } = useToast()

  const loadClubs = useCallback(async () => {
    try {
      const clubsData = await getClubs()
      setClubs(clubsData)
    } catch (error) {
      console.error('Error loading clubs:', error)
      showError('Error al cargar los clubes')
      throw error
    }
  }, [showError])

  return {
    clubs,
    loadClubs
  }
}
