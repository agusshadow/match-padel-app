import { useState, useEffect } from 'react'
import { getMatches } from '../api'
import { Match } from '../../../../types'
import { useToast } from '../../../../shared/hooks/useToast'

export const useMatches = () => {
  const [matches, setMatches] = useState<Match[]>([])
  const { showError } = useToast()

  // Mostrar todos los partidos sin filtros
  const availableMatches = matches

  const loadMatches = async () => {
    try {
      const matchesData = await getMatches()
      setMatches(Array.isArray(matchesData) ? matchesData : [])
    } catch (error) {
      console.error('Error loading matches:', error)
      showError('Error al cargar los partidos')
      setMatches([])
    }
  }

  // Cargar partidos al montar el componente
  useEffect(() => {
    loadMatches()
  }, [])

  return {
    // Data
    matches,
    availableMatches,
    
    // Actions
    loadMatches
  }
}
