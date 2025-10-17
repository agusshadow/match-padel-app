import {
  Box,
  Card,
  CardBody,
  Text,
  HStack,
  VStack,
  Badge,
  Button
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { 
  FaCalendarAlt, 
  FaClock, 
  FaMapMarkerAlt
} from 'react-icons/fa'
import { Match } from '../../types'

interface UserMatchCardProps {
  match: Match
}

const UserMatchCard = ({ match }: UserMatchCardProps): JSX.Element => {
  const navigate = useNavigate()

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('es-ES', {
      weekday: 'short',
      day: 'numeric',
      month: 'short'
    })
  }

  const formatTime = (timeString: string) => {
    return timeString.substring(0, 5)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled':
        return 'blue'
      case 'in_progress':
        return 'orange'
      case 'completed':
        return 'green'
      case 'cancelled':
        return 'red'
      default:
        return 'gray'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'scheduled':
        return 'Programado'
      case 'in_progress':
        return 'En curso'
      case 'completed':
        return 'Completado'
      case 'cancelled':
        return 'Cancelado'
      default:
        return status
    }
  }

  const parseScore = (scoreString: string) => {
    try {
      const score = JSON.parse(scoreString)
      if (score.sets && Array.isArray(score.sets)) {
        return score.sets.map((set: any) => `${set.team1}-${set.team2}`).join(', ')
      }
      return scoreString
    } catch (error) {
      return scoreString
    }
  }

  return (
    <Card 
      _hover={{ transform: 'translateY(-1px)', boxShadow: 'md' }}
      transition="all 0.2s"
      border="1px solid"
      borderColor="gray.200"
    >
      <CardBody>
        <VStack spacing={3} align="stretch">
          {/* Header con club y estado */}
          <HStack justify="space-between" align="start">
            <VStack align="start" spacing={1}>
              <Text fontSize="sm" fontWeight="semibold" color="gray.700">
                {match.reservation?.court?.club?.name}
              </Text>
              <Text fontSize="xs" color="gray.500">
                {match.reservation?.court?.name}
              </Text>
            </VStack>
            <Badge colorScheme={getStatusColor(match.status)} size="sm">
              {getStatusText(match.status)}
            </Badge>
          </HStack>

          {/* Información del partido */}
          <VStack spacing={2} align="stretch">
            <HStack spacing={3}>
              <HStack spacing={1}>
                <Box color="gray.500" fontSize="xs">
                  <FaCalendarAlt />
                </Box>
                <Text fontSize="xs" color="gray.600">
                  {formatDate(match.reservation?.scheduledDate || '')}
                </Text>
              </HStack>
              <HStack spacing={1}>
                <Box color="gray.500" fontSize="xs">
                  <FaClock />
                </Box>
                <Text fontSize="xs" color="gray.600">
                  {formatTime((match.reservation as any)?.slot?.startTime || '')}
                </Text>
              </HStack>
            </HStack>
            
            <HStack spacing={1}>
              <Box color="gray.500" fontSize="xs">
                <FaMapMarkerAlt />
              </Box>
              <Text fontSize="xs" color="gray.600">
                {match.reservation?.court?.club?.address}
              </Text>
            </HStack>

            {/* Resultado del partido si está completado */}
            {match.status === 'completed' && match.score && (
              <Box>
                <Text fontSize="xs" color="gray.500" fontWeight="semibold" mb={1}>
                  Resultado:
                </Text>
                <Text fontSize="sm" color="green.600" fontWeight="bold">
                  {parseScore(match.score)}
                </Text>
              </Box>
            )}
          </VStack>

          {/* Acción */}
          <Button
            variant="outline"
            colorScheme="brand"
            size="sm"
            onClick={() => navigate(`/app/matches/${match.id}`)}
          >
            Ver Detalle
          </Button>
        </VStack>
      </CardBody>
    </Card>
  )
}

export default UserMatchCard
