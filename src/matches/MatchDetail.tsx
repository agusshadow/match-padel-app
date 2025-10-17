import { useParams, useNavigate } from 'react-router-dom'
import {
  Box,
  Button,
  Text,
  Card,
  CardBody,
  CardHeader,
  VStack,
  HStack,
  Avatar,
  Tooltip,
  Badge,
  Divider,
  Heading,
  Flex,
  Grid,
  GridItem
} from '@chakra-ui/react'
import { 
  FaCalendarAlt, 
  FaClock, 
  FaMapMarkerAlt, 
  FaFileAlt, 
  FaUsers
} from 'react-icons/fa'
import { useMatchDetail, joinMatch } from '../api/entities'
import { useToast } from '../shared/hooks/useToast'
import { useAuth } from '../context/AuthContext'

const MatchDetail = (): JSX.Element => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { showError, showSuccess } = useToast()
  const { user } = useAuth()
  const { match, loadMatchDetail } = useMatchDetail(id ? parseInt(id) : undefined)

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
    return timeString.substring(0, 5)
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

  const getPlayerAvatars = () => {
    if (!match) return []

    const players = [
      match.player1,
      match.player2,
      match.player3,
      match.player4
    ].filter(player => player !== null && player !== undefined)

    return players.map((player) => (
      <Tooltip key={player.id} label={player.name} hasArrow>
        <Avatar
          size="lg"
          name={player.name}
          bg="brand.500"
          color="white"
          border="3px solid"
          borderColor="green.400"
        />
      </Tooltip>
    ))
  }

  const getMissingPlayers = () => {
    if (!match) return 0
    
    const players = [
      match.player1,
      match.player2,
      match.player3,
      match.player4
    ].filter(player => player !== null && player !== undefined)

    return 4 - players.length
  }

  // Verificar si el usuario actual ya está en el partido
  const isUserInMatch = () => {
    if (!user || !match) return false
    
    return (
      match.player1Id === user.id ||
      match.player2Id === user.id ||
      match.player3Id === user.id ||
      match.player4Id === user.id
    )
  }

  const handleJoinMatch = async () => {
    if (!match) return
    
    try {
      await joinMatch(match.id)
      showSuccess('Te has unido al partido exitosamente')
      // Recargar los datos del partido
      loadMatchDetail()
    } catch (error) {
      console.error('Error joining match:', error)
      showError('Error al unirse al partido')
    }
  }

  if (!match) {
    return (
      <VStack spacing={8} align="center" py={20}>
        <Text>Cargando detalle del partido...</Text>
      </VStack>
    )
  }

  return (
    <VStack spacing={8} align="stretch" p={6}>
      {/* Header */}
      <Flex justify="space-between" align="center">
        <VStack align="start" spacing={1}>
          <Heading size="lg" color="brand.500">
            Detalle del Partido
          </Heading>
          <Text color="gray.600">
            {match.reservation?.court?.club?.name} - {match.reservation?.court?.name}
          </Text>
        </VStack>
      </Flex>

      <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={8}>
        {/* Información Principal */}
        <GridItem>
          <VStack spacing={6} align="stretch">
            {/* Información del Partido */}
            <Card>
              <CardHeader>
                <Heading size="md">Información del Partido</Heading>
              </CardHeader>
              <CardBody>
                <VStack spacing={4} align="stretch">
                  {/* Fecha y Hora */}
                  <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                    <Box>
                      <HStack spacing={2} mb={2}>
                        <Box color="brand.500">
                          <FaCalendarAlt />
                        </Box>
                        <Text fontWeight="semibold" color="gray.700">
                          Fecha
                        </Text>
                      </HStack>
                      <Text color="gray.600">
                        {formatDate(match.reservation?.scheduledDate || '')}
                      </Text>
                    </Box>
                    
                    <Box>
                      <HStack spacing={2} mb={2}>
                        <Box color="brand.500">
                          <FaClock />
                        </Box>
                        <Text fontWeight="semibold" color="gray.700">
                          Horario
                        </Text>
                      </HStack>
                      <Text color="gray.600">
                        {formatTime((match.reservation as any)?.slot?.startTime || '')} - {formatTime((match.reservation as any)?.slot?.endTime || '')}
                      </Text>
                    </Box>
                  </Grid>

                  {/* Ubicación */}
                  <Box>
                    <HStack spacing={2} mb={2}>
                      <Box color="brand.500">
                        <FaMapMarkerAlt />
                      </Box>
                      <Text fontWeight="semibold" color="gray.700">
                        Ubicación
                      </Text>
                    </HStack>
                    <Text color="gray.600">
                      {match.reservation?.court?.club?.address}
                    </Text>
                    <Text color="gray.500" fontSize="sm">
                      {match.reservation?.court?.club?.city}
                    </Text>
                  </Box>

                  {/* Descripción */}
                  {match.notes && (
                    <Box>
                      <HStack spacing={2} mb={2}>
                        <Box color="brand.500">
                          <FaFileAlt />
                        </Box>
                        <Text fontWeight="semibold" color="gray.700">
                          Descripción
                        </Text>
                      </HStack>
                      <Text color="gray.600">
                        {match.notes}
                      </Text>
                    </Box>
                  )}

                  {/* Resultado del partido si está completado */}
                  {match.status === 'completed' && match.score && (
                    <Box>
                      <HStack spacing={2} mb={2}>
                        <Box color="green.500">
                          <FaClock />
                        </Box>
                        <Text fontWeight="semibold" color="gray.700">
                          Resultado Final
                        </Text>
                      </HStack>
                      <Text color="green.600" fontSize="lg" fontWeight="bold">
                        {parseScore(match.score)}
                      </Text>
                    </Box>
                  )}
                </VStack>
              </CardBody>
            </Card>

            {/* Información del Club */}
            <Card>
              <CardHeader>
                <Heading size="md">Información del Club</Heading>
              </CardHeader>
              <CardBody>
                <VStack spacing={4} align="stretch">
                  <Box>
                    <Text fontWeight="semibold" color="gray.700" mb={1}>
                      {match.reservation?.court?.club?.name}
                    </Text>
                    <Text color="gray.600" mb={2}>
                      {match.reservation?.court?.club?.address}
                    </Text>
                    <Text color="gray.500" fontSize="sm">
                      {match.reservation?.court?.club?.city}
                    </Text>
                  </Box>
                  
                  <Box>
                    <Text fontWeight="semibold" color="gray.700" mb={2}>
                      Cancha: {match.reservation?.court?.name}
                    </Text>
                    <Text color="gray.600" fontSize="sm">
                      Tipo: {match.reservation?.court?.type || 'Pádel'}
                    </Text>
                  </Box>
                </VStack>
              </CardBody>
            </Card>
          </VStack>
        </GridItem>

        {/* Sidebar - Jugadores */}
        <GridItem>
          <VStack spacing={6} align="stretch">
            {/* Jugadores */}
            <Card>
              <CardHeader>
                <HStack spacing={2}>
                  <Box color="brand.500">
                    <FaUsers />
                  </Box>
                  <Heading size="md">Jugadores</Heading>
                </HStack>
              </CardHeader>
              <CardBody>
                <VStack spacing={4}>
                  {/* Avatars de jugadores */}
                  <HStack spacing={3} wrap="wrap" justify="center">
                    {getPlayerAvatars()}
                  </HStack>
                  
                  {/* Estado de jugadores */}
                  <VStack spacing={2}>
                    <Badge colorScheme="green" size="lg">
                      {4 - getMissingPlayers()} / 4 jugadores
                    </Badge>
                    {getMissingPlayers() > 0 && (
                      <Text color="orange.500" fontSize="sm" textAlign="center">
                        Faltan {getMissingPlayers()} jugador{getMissingPlayers() > 1 ? 'es' : ''}
                      </Text>
                    )}
                  </VStack>

                  <Divider />

                  {/* Lista de jugadores */}
                  <VStack spacing={3} align="stretch" w="full">
                    {[
                      match.player1,
                      match.player2,
                      match.player3,
                      match.player4
                    ].map((player, index) => (
                      <Box key={index}>
                        {player ? (
                          <VStack align="start" spacing={0} flex={1}>
                            <Text fontWeight="semibold" fontSize="sm">
                              {player.name}
                            </Text>
                            <Text color="gray.500" fontSize="xs">
                              Jugador {index + 1}
                            </Text>
                          </VStack>
                        ) : (
                          <VStack align="start" spacing={0} flex={1}>
                            <Text color="gray.500" fontSize="sm">
                              Jugador {index + 1} - Disponible
                            </Text>
                            <Text color="gray.400" fontSize="xs">
                              Buscando jugador...
                            </Text>
                          </VStack>
                        )}
                      </Box>
                    ))}
                  </VStack>
                </VStack>
              </CardBody>
            </Card>

            {/* Acciones */}
            <Card>
              <CardBody>
                <VStack spacing={3}>
                  {isUserInMatch() ? (
                    <Button
                      colorScheme="blue"
                      size="lg"
                      w="full"
                      isDisabled
                    >
                      Ya estás en este partido
                    </Button>
                  ) : getMissingPlayers() > 0 ? (
                    <Button
                      colorScheme="brand"
                      size="lg"
                      w="full"
                      onClick={handleJoinMatch}
                    >
                      Unirse al Partido
                    </Button>
                  ) : (
                    <Badge colorScheme="green" size="lg" p={2}>
                      Partido Completo
                    </Badge>
                  )}
                  
                  <Button
                    variant="outline"
                    colorScheme="brand"
                    size="md"
                    w="full"
                    onClick={() => navigate('/app/matches')}
                  >
                    Volver a Partidos
                  </Button>
                </VStack>
              </CardBody>
            </Card>
          </VStack>
        </GridItem>
      </Grid>
    </VStack>
  )
}

export default MatchDetail
