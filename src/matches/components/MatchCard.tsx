import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  HStack,
  VStack,
  Badge,
  Button,
  Divider
} from '@chakra-ui/react'
import { Match } from '../services/matchService'

interface MatchCardProps {
  match: Match
  onJoin?: (matchId: number) => void
  onView?: (matchId: number) => void
  showJoinButton?: boolean
}

const MatchCard = ({ match, onJoin, onView, showJoinButton = true }: MatchCardProps): JSX.Element => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const formatTime = (timeString: string) => {
    return timeString
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'yellow'
      case 'confirmed':
        return 'green'
      case 'cancelled':
        return 'red'
      case 'completed':
        return 'blue'
      default:
        return 'gray'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending':
        return 'Pendiente'
      case 'confirmed':
        return 'Confirmado'
      case 'cancelled':
        return 'Cancelado'
      case 'completed':
        return 'Completado'
      default:
        return status
    }
  }

  return (
    <Card 
      _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
      transition="all 0.2s"
      border="1px solid"
      borderColor="gray.200"
    >
      <CardHeader pb={2}>
        <HStack justify="space-between" align="start">
          <VStack align="start" spacing={1}>
            <Heading size="md" color="brand.600">
              🏆 Partido #{match.id}
            </Heading>
            <Text fontSize="sm" color="gray.600">
              {match.club?.name} - {match.court?.name}
            </Text>
          </VStack>
          <Badge colorScheme={getStatusColor(match.status)} variant="solid">
            {getStatusText(match.status)}
          </Badge>
        </HStack>
      </CardHeader>
      
      <CardBody pt={0}>
        <VStack spacing={3} align="stretch">
          {/* Información del partido */}
          <Box>
            <HStack spacing={4}>
              <VStack align="start" spacing={1}>
                <Text fontSize="sm" color="gray.500" fontWeight="semibold">
                  📅 Fecha
                </Text>
                <Text fontSize="sm" color="gray.700">
                  {formatDate(match.date)}
                </Text>
              </VStack>
              <VStack align="start" spacing={1}>
                <Text fontSize="sm" color="gray.500" fontWeight="semibold">
                  ⏰ Hora
                </Text>
                <Text fontSize="sm" color="gray.700">
                  {formatTime(match.time)}
                </Text>
              </VStack>
            </HStack>
          </Box>

          {/* Ubicación */}
          <Box>
            <Text fontSize="sm" color="gray.500" fontWeight="semibold" mb={1}>
              📍 Ubicación
            </Text>
            <Text fontSize="sm" color="gray.700">
              {match.club?.address} {match.club?.city && `(${match.club.city})`}
            </Text>
          </Box>

          {/* Descripción */}
          {match.description && (
            <Box>
              <Text fontSize="sm" color="gray.500" fontWeight="semibold" mb={1}>
                📝 Descripción
              </Text>
              <Text fontSize="sm" color="gray.700">
                {match.description}
              </Text>
            </Box>
          )}

          <Divider />

          {/* Acciones */}
          <HStack spacing={2}>
            {showJoinButton && match.status === 'pending' && (
              <Button
                colorScheme="brand"
                size="sm"
                flex={1}
                onClick={() => onJoin?.(match.id)}
              >
                Unirse al Partido
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              flex={1}
              onClick={() => onView?.(match.id)}
            >
              Ver Detalles
            </Button>
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  )
}

export default MatchCard
