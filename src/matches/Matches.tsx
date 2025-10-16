import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  HStack,
  Card,
  CardBody,
  Spinner,
  Alert,
  AlertIcon
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useMatches } from './hooks/useMatches'
import MatchCard from './components/MatchCard'

const Matches = (): JSX.Element => {
  const navigate = useNavigate()
  const {
    availableMatches,
    loading,
    error
  } = useMatches()

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
        <HStack justify="space-between" align="center" mb={6}>
          <VStack align="start" spacing={1}>
            <Heading size="lg" color="brand.500">
              Partidos
            </Heading>
            <Text color="gray.600">
              Encuentra partidos disponibles o crea uno
            </Text>
          </VStack>
        </HStack>
        {/* Botón de Crear Partido */}
        <Button
            colorScheme="brand"
            size="lg"
            onClick={() => navigate('/app/matches/create')}
          >
            Crear Partido
          </Button>
      </Box>


 

      {/* Lista de partidos disponibles */}
      <Box>
        
        {availableMatches.length === 0 ? (
          <Card>
            <CardBody textAlign="center" py={12}>
              <Box fontSize="4xl" mb={4}>🔍</Box>
              <Heading size="md" color="gray.600" mb={2}>
                No hay partidos disponibles
              </Heading>
              <Text color="gray.600" mb={6}>
                No hay partidos disponibles para unirse en este momento
              </Text>
              <Text color="gray.500" fontSize="sm">
                Los partidos aparecerán aquí cuando estén disponibles
              </Text>
            </CardBody>
          </Card>
        ) : (
          <VStack spacing={4} align="stretch">
            {availableMatches.map((match) => (
              <MatchCard
                key={match.id}
                match={match}
                showJoinButton={true}
              />
            ))}
          </VStack>
        )}
      </Box>
    </VStack>
  )
}

export default Matches
