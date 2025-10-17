import { useState, useEffect } from 'react'
import { getMatchDetailed } from '../api'
import { Match } from '../../../../types'
import { useToast } from '../../../../shared/hooks/useToast'

export const useMatchDetail = (matchId: number | undefined) => {
  const [match, setMatch] = useState<Match | null>(null)
  const { showError } = useToast()

  const loadMatchDetail = async () => {
    if (!matchId) return

    try {
      const matchData = await getMatchDetailed(matchId)
      setMatch(matchData)
    } catch (error) {
      console.error('Error loading match detail:', error)
      showError('Error al cargar el detalle del partido')
      setMatch(null)
    }
  }

  // Cargar detalle del partido al montar el componente o cuando cambie el ID
  useEffect(() => {
    loadMatchDetail()
  }, [matchId])

  return {
    match,
    loadMatchDetail
  }
}
