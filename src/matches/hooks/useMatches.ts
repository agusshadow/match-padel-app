import { useState, useEffect } from 'react'
import { matchService, Match } from '../services/matchService'

export const useMatches = () => {
  const [matches, setMatches] = useState<Match[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Mostrar todos los partidos sin filtros
  const availableMatches = matches

  const loadMatches = async () => {
    try {
      setLoading(true)
      setError(null)
      const matchesData = await matchService.getMatches()
      setMatches(Array.isArray(matchesData) ? matchesData : [])
    } catch (error) {
      console.error('Error loading matches:', error)
      setError('Error al cargar los partidos')
      setMatches([])
    } finally {
      setLoading(false)
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
    loading,
    error,
    
    // Actions
    loadMatches
  }
}
