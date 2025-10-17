import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Text,
  HStack,
  VStack,
  Button,
  Divider,
  Avatar,
  Tooltip
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { 
  FaCalendarAlt, 
  FaClock, 
  FaMapMarkerAlt, 
  FaFileAlt, 
  FaUsers 
} from 'react-icons/fa'
import { Match } from '../../types'

interface MatchCardProps {
  match: Match
  onJoin?: (matchId: number) => void
  showJoinButton?: boolean
}

const MatchCard = ({ match, onJoin, showJoinButton = true }: MatchCardProps): JSX.Element => {
  const navigate = useNavigate()

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
    return timeString.substring(0, 5) // Convertir "18:00:00" a "18:00"
  }


  // Generar avatars de jugadores
  const getPlayerAvatars = () => {
    const players = [
      match.player1,
      match.player2,
      match.player3,
      match.player4
    ].filter(player => player !== null && player !== undefined)

    const avatars = []
    
    // Agregar jugadores presentes
    players.forEach((player) => {
      if (player) {
        avatars.push(
          <Tooltip key={player.id} label={player.name} hasArrow>
            <Avatar
              size="md"
              name={player.name}
              bg="brand.500"
              color="white"
              border="2px solid"
              borderColor="green.400"
            />
          </Tooltip>
        )
      }
    })

    // Agregar avatars faltantes
    const missingPlayers = 4 - players.length
    for (let i = 0; i < missingPlayers; i++) {
      avatars.push(
        <Tooltip key={`missing-${i}`} label="Jugador faltante" hasArrow>
          <Avatar
            size="md"
            bg="gray.200"
            color="gray.500"
            border="2px solid"
            borderColor="gray.300"
            borderStyle="dashed"
          />
        </Tooltip>
      )
    }

    return avatars
  }


  return (
    <Card 
      _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
      transition="all 0.2s"
      border="1px solid"
      borderColor="gray.200"
    >
          <CardHeader pb={2}>
            <Text fontSize="sm" color="gray.600">
              {match.reservation?.court?.club?.name} - {match.reservation?.court?.name}
            </Text>
          </CardHeader>
      
      <CardBody pt={0}>
        <VStack spacing={4} align="stretch">
          {/* Contenido principal - Responsive */}
          <VStack spacing={4} align="stretch" display={{ base: 'flex', md: 'none' }}>
            {/* Información del partido - Móvil */}
            <VStack spacing={3} align="stretch">
              {/* Fecha y Hora */}
              <HStack spacing={4}>
                <VStack align="start" spacing={1}>
                  <HStack spacing={2}>
                    <Box color="gray.500" fontSize="sm">
                      <FaCalendarAlt />
                    </Box>
                    <Text fontSize="sm" color="gray.500" fontWeight="semibold">
                      Fecha
                    </Text>
                  </HStack>
                  <Text fontSize="sm" color="gray.700">
                    {formatDate(match.reservation?.scheduledDate || '')}
                  </Text>
                </VStack>
                <VStack align="start" spacing={1}>
                  <HStack spacing={2}>
                    <Box color="gray.500" fontSize="sm">
                      <FaClock />
                    </Box>
                    <Text fontSize="sm" color="gray.500" fontWeight="semibold">
                      Hora
                    </Text>
                  </HStack>
                  <Text fontSize="sm" color="gray.700">
                    {formatTime(match.reservation?.startTime || '')}
                  </Text>
                </VStack>
              </HStack>

              {/* Ubicación */}
              <Box>
                <HStack spacing={2} mb={1}>
                  <Box color="gray.500" fontSize="sm">
                    <FaMapMarkerAlt />
                  </Box>
                  <Text fontSize="sm" color="gray.500" fontWeight="semibold">
                    Ubicación
                  </Text>
                </HStack>
                <Text fontSize="sm" color="gray.700">
                  {match.reservation?.court?.club?.address} {match.reservation?.court?.club?.city && `(${match.reservation.court.club.city})`}
                </Text>
              </Box>

              {/* Descripción */}
              {match.notes && (
                <Box>
                  <HStack spacing={2} mb={1}>
                    <Box color="gray.500" fontSize="sm">
                      <FaFileAlt />
                    </Box>
                    <Text fontSize="sm" color="gray.500" fontWeight="semibold">
                      Descripción
                    </Text>
                  </HStack>
                  <Text fontSize="sm" color="gray.700">
                    {match.notes}
                  </Text>
                </Box>
              )}
            </VStack>

            {/* Jugadores - Móvil (debajo) */}
            <VStack spacing={2} align="center">
              <HStack spacing={2}>
                <Box color="gray.500" fontSize="sm">
                  <FaUsers />
                </Box>
                <Text fontSize="sm" color="gray.500" fontWeight="semibold">
                  Jugadores
                </Text>
              </HStack>
              <HStack spacing={2}>
                {getPlayerAvatars()}
              </HStack>
            </VStack>
          </VStack>

          {/* Contenido principal - Desktop */}
          <HStack spacing={6} align="start" display={{ base: 'none', md: 'flex' }}>
            {/* Columna izquierda - Información del partido */}
            <VStack spacing={3} align="stretch" flex={1}>
              {/* Fecha y Hora */}
              <HStack spacing={4}>
                <VStack align="start" spacing={1}>
                  <HStack spacing={2}>
                    <Box color="gray.500" fontSize="sm">
                      <FaCalendarAlt />
                    </Box>
                    <Text fontSize="sm" color="gray.500" fontWeight="semibold">
                      Fecha
                    </Text>
                  </HStack>
                  <Text fontSize="sm" color="gray.700">
                    {formatDate(match.reservation?.scheduledDate || '')}
                  </Text>
                </VStack>
                <VStack align="start" spacing={1}>
                  <HStack spacing={2}>
                    <Box color="gray.500" fontSize="sm">
                      <FaClock />
                    </Box>
                    <Text fontSize="sm" color="gray.500" fontWeight="semibold">
                      Hora
                    </Text>
                  </HStack>
                  <Text fontSize="sm" color="gray.700">
                    {formatTime(match.reservation?.startTime || '')}
                  </Text>
                </VStack>
              </HStack>

              {/* Ubicación */}
              <Box>
                <HStack spacing={2} mb={1}>
                  <Box color="gray.500" fontSize="sm">
                    <FaMapMarkerAlt />
                  </Box>
                  <Text fontSize="sm" color="gray.500" fontWeight="semibold">
                    Ubicación
                  </Text>
                </HStack>
                <Text fontSize="sm" color="gray.700">
                  {match.reservation?.court?.club?.address} {match.reservation?.court?.club?.city && `(${match.reservation.court.club.city})`}
                </Text>
              </Box>

              {/* Descripción */}
              {match.notes && (
                <Box>
                  <HStack spacing={2} mb={1}>
                    <Box color="gray.500" fontSize="sm">
                      <FaFileAlt />
                    </Box>
                    <Text fontSize="sm" color="gray.500" fontWeight="semibold">
                      Descripción
                    </Text>
                  </HStack>
                  <Text fontSize="sm" color="gray.700">
                    {match.notes}
                  </Text>
                </Box>
              )}
            </VStack>

            {/* Columna derecha - Jugadores */}
            <VStack spacing={2} align="center" minW="120px">
              <HStack spacing={2}>
                <Box color="gray.500" fontSize="sm">
                  <FaUsers />
                </Box>
                <Text fontSize="sm" color="gray.500" fontWeight="semibold">
                  Jugadores
                </Text>
              </HStack>
              <HStack spacing={2}>
                {getPlayerAvatars()}
              </HStack>
            </VStack>
          </HStack>

          <Divider />

          {/* Acciones */}
          <HStack spacing={3}>
            <Button
              variant="outline"
              colorScheme="brand"
              size="md"
              flex={1}
              onClick={() => navigate(`/app/matches/${match.id}`)}
            >
              Ver Detalle
            </Button>
            {showJoinButton && (
              <Button
                colorScheme="brand"
                size="md"
                flex={1}
                onClick={() => onJoin?.(match.id)}
              >
                Unirse al Partido
              </Button>
            )}
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  )
}

export default MatchCard
