import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  Card,
  CardBody,
  Grid,
  GridItem,
  Spinner,
  Alert,
  AlertIcon,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Badge
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import MatchCard from './components/MatchCard'

// Datos por defecto para la vista de matches
const defaultMatches = [
  {
    id: 1,
    clubId: 1,
    courtId: 1,
    date: '2025-01-20',
    time: '18:00',
    description: 'Partido de nivel intermedio',
    status: 'pending' as const,
    createdAt: '2025-01-15T10:00:00.000Z',
    updatedAt: '2025-01-15T10:00:00.000Z',
    club: {
      id: 1,
      name: 'Club Padel Central',
      address: 'Av. Principal 123',
      city: 'Buenos Aires',
      phone: '1234567890',
      description: 'Club principal de la ciudad',
      latitude: null,
      longitude: null,
      isActive: true,
      createdAt: '2025-01-01T00:00:00.000Z',
      updatedAt: '2025-01-01T00:00:00.000Z'
    },
    court: {
      id: 1,
      name: 'Cancha 1',
      clubId: 1,
      type: 'outdoor',
      surface: 'synthetic',
      isActive: true,
      createdAt: '2025-01-01T00:00:00.000Z',
      updatedAt: '2025-01-01T00:00:00.000Z'
    }
  },
  {
    id: 2,
    clubId: 2,
    courtId: 2,
    date: '2025-01-21',
    time: '20:00',
    description: 'Partido de nivel avanzado',
    status: 'confirmed' as const,
    createdAt: '2025-01-16T10:00:00.000Z',
    updatedAt: '2025-01-16T10:00:00.000Z',
    club: {
      id: 2,
      name: 'Padel Sports',
      address: 'Calle Deportiva 456',
      city: 'Buenos Aires',
      phone: '0987654321',
      description: 'Club deportivo moderno',
      latitude: null,
      longitude: null,
      isActive: true,
      createdAt: '2025-01-01T00:00:00.000Z',
      updatedAt: '2025-01-01T00:00:00.000Z'
    },
    court: {
      id: 2,
      name: 'Cancha 2',
      clubId: 2,
      type: 'indoor',
      surface: 'synthetic',
      isActive: true,
      createdAt: '2025-01-01T00:00:00.000Z',
      updatedAt: '2025-01-01T00:00:00.000Z'
    }
  },
  {
    id: 3,
    clubId: 1,
    courtId: 1,
    date: '2025-01-18',
    time: '16:00',
    description: 'Partido completado',
    status: 'completed' as const,
    createdAt: '2025-01-14T10:00:00.000Z',
    updatedAt: '2025-01-18T18:00:00.000Z',
    club: {
      id: 1,
      name: 'Club Padel Central',
      address: 'Av. Principal 123',
      city: 'Buenos Aires',
      phone: '1234567890',
      description: 'Club principal de la ciudad',
      latitude: null,
      longitude: null,
      isActive: true,
      createdAt: '2025-01-01T00:00:00.000Z',
      updatedAt: '2025-01-01T00:00:00.000Z'
    },
    court: {
      id: 1,
      name: 'Cancha 1',
      clubId: 1,
      type: 'outdoor',
      surface: 'synthetic',
      isActive: true,
      createdAt: '2025-01-01T00:00:00.000Z',
      updatedAt: '2025-01-01T00:00:00.000Z'
    }
  }
]

const Matches = (): JSX.Element => {
  const navigate = useNavigate()
  
  // Usar datos por defecto
  const matches = defaultMatches
  const pendingMatches = matches.filter(match => match.status === 'pending')
  const confirmedMatches = matches.filter(match => match.status === 'confirmed')
  const completedMatches = matches.filter(match => match.status === 'completed')
  const loading = false
  const error = null
  
  // Función mock para unirse a partido
  const joinMatch = (matchId: number) => {
    console.log(`Unirse al partido ${matchId}`)
    // Aquí podrías agregar lógica para actualizar el estado local
  }

  if (loading) {
    return (
      <VStack spacing={8} align="center" py={20}>
        <Spinner size="xl" color="brand.500" />
        <Text color="gray.600">Cargando partidos...</Text>
      </VStack>
    )
  }

  if (error) {
    return (
      <VStack spacing={8} align="center" py={20}>
        <Alert status="error" maxW="md">
          <AlertIcon />
          {error}
        </Alert>
        <Button colorScheme="brand" onClick={() => window.location.reload()}>
          Reintentar
        </Button>
      </VStack>
    )
  }

  return (
    <VStack spacing={8} align="stretch">
      {/* Header */}
      <Box>
        <Heading size="lg" color="brand.500" mb={2}>
          Partidos
        </Heading>
        <Text color="gray.600" mb={6}>
          Encuentra partidos disponibles o revisa tu historial
        </Text>
        
        {/* Card de Crear Partido */}
        <Card bg="blue.50" border="2px solid" borderColor="blue.200" mx="auto">
          <CardBody textAlign="center" py={8}>
            <VStack spacing={4}>
              <Heading size="md" color="brand.500">
                Crear Partido
              </Heading>
              <Text color="gray.600" fontSize="sm">
                Organiza un nuevo partido y encuentra jugadores
              </Text>
              <Button
                colorScheme="brand"
                size="lg"
                w="full"
                onClick={() => navigate('/app/matches/create')}
              >
                Crear Ahora
              </Button>
            </VStack>
          </CardBody>
        </Card>
      </Box>


      {/* Estadísticas rápidas */}
      <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={4}>
        <GridItem>
          <Card>
            <CardBody textAlign="center" py={4}>
              <Text fontSize="2xl" color="yellow.500">⏳</Text>
              <Text fontWeight="bold" color="yellow.600">
                {pendingMatches.length}
              </Text>
              <Text fontSize="sm" color="gray.600">
                Partidos Pendientes
              </Text>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem>
          <Card>
            <CardBody textAlign="center" py={4}>
              <Text fontSize="2xl" color="green.500">✅</Text>
              <Text fontWeight="bold" color="green.600">
                {confirmedMatches.length}
              </Text>
              <Text fontSize="sm" color="gray.600">
                Partidos Confirmados
              </Text>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem>
          <Card>
            <CardBody textAlign="center" py={4}>
              <Text fontSize="2xl" color="blue.500">🏆</Text>
              <Text fontWeight="bold" color="blue.600">
                {completedMatches.length}
              </Text>
              <Text fontSize="sm" color="gray.600">
                Partidos Completados
              </Text>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem>
          <Card>
            <CardBody textAlign="center" py={4}>
              <Text fontSize="2xl" color="brand.500">📊</Text>
              <Text fontWeight="bold" color="brand.600">
                {matches.length}
              </Text>
              <Text fontSize="sm" color="gray.600">
                Total de Partidos
              </Text>
            </CardBody>
          </Card>
        </GridItem>
      </Grid>

      {/* Lista de partidos */}
      {matches.length === 0 ? (
        <Card>
          <CardBody textAlign="center" py={12}>
            <Box fontSize="4xl" mb={4}>🏟️</Box>
            <Heading size="md" color="gray.500" mb={2}>
              No hay partidos disponibles
            </Heading>
            <Text color="gray.600" mb={6}>
              Sé el primero en crear un partido y encontrar jugadores
            </Text>
            <Text color="gray.500" fontSize="sm">
              Los partidos aparecerán aquí cuando estén disponibles
            </Text>
          </CardBody>
        </Card>
      ) : (
        <Tabs variant="enclosed" colorScheme="brand">
          <TabList>
            <Tab>
              Disponibles
              {pendingMatches.length > 0 && (
                <Badge ml={2} colorScheme="yellow" variant="solid">
                  {pendingMatches.length}
                </Badge>
              )}
            </Tab>
            <Tab>
              Confirmados
              {confirmedMatches.length > 0 && (
                <Badge ml={2} colorScheme="green" variant="solid">
                  {confirmedMatches.length}
                </Badge>
              )}
            </Tab>
            <Tab>
              Historial
              {completedMatches.length > 0 && (
                <Badge ml={2} colorScheme="blue" variant="solid">
                  {completedMatches.length}
                </Badge>
              )}
            </Tab>
          </TabList>

          <TabPanels>
            {/* Partidos Disponibles */}
            <TabPanel px={0}>
              {pendingMatches.length === 0 ? (
                <Card>
                  <CardBody textAlign="center" py={8}>
                    <Box fontSize="3xl" mb={3}>🔍</Box>
                    <Text color="gray.600">
                      No hay partidos disponibles en este momento
                    </Text>
                  </CardBody>
                </Card>
              ) : (
                <VStack spacing={4} align="stretch">
                  {pendingMatches.map((match) => (
                    <MatchCard
                      key={match.id}
                      match={match}
                      onJoin={joinMatch}
                      showJoinButton={true}
                    />
                  ))}
                </VStack>
              )}
            </TabPanel>

            {/* Partidos Confirmados */}
            <TabPanel px={0}>
              {confirmedMatches.length === 0 ? (
                <Card>
                  <CardBody textAlign="center" py={8}>
                    <Box fontSize="3xl" mb={3}>📅</Box>
                    <Text color="gray.600">
                      No tienes partidos confirmados
                    </Text>
                  </CardBody>
                </Card>
              ) : (
                <VStack spacing={4} align="stretch">
                  {confirmedMatches.map((match) => (
                    <MatchCard
                      key={match.id}
                      match={match}
                      showJoinButton={false}
                    />
                  ))}
                </VStack>
              )}
            </TabPanel>

            {/* Historial */}
            <TabPanel px={0}>
              {completedMatches.length === 0 ? (
                <Card>
                  <CardBody textAlign="center" py={8}>
                    <Box fontSize="3xl" mb={3}>📊</Box>
                    <Text color="gray.600">
                      No tienes partidos completados aún
                    </Text>
                  </CardBody>
                </Card>
              ) : (
                <VStack spacing={4} align="stretch">
                  {completedMatches.map((match) => (
                    <MatchCard
                      key={match.id}
                      match={match}
                      showJoinButton={false}
                    />
                  ))}
                </VStack>
              )}
            </TabPanel>
          </TabPanels>
        </Tabs>
      )}
    </VStack>
  )
}

export default Matches
