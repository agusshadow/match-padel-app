import { useState, useEffect } from 'react'
import { getMatches } from '../api'
import { Match } from '../../../../types'

export const useMatches = () => {
  const [matches, setMatches] = useState<Match[]>([])
  const [error, setError] = useState<string | null>(null)

  // Mostrar todos los partidos sin filtros
  const availableMatches = matches

  const loadMatches = async () => {
    try {
      setError(null)
      const matchesData = await getMatches()
      setMatches(Array.isArray(matchesData) ? matchesData : [])
    } catch (error) {
      console.error('Error loading matches:', error)
      setError('Error al cargar los partidos')
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
    
    // Loading states
    error,
    
    // Actions
    loadMatches
  }
}
