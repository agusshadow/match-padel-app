import {
  Box,
  Button,
  Text,
  Card,
  CardBody,
  VStack,
  Heading,
  Grid,
  GridItem
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useMatches } from '../api/entities'
import MatchCard from './components/MatchCard'

const Matches = (): JSX.Element => {
  const navigate = useNavigate()
  const {
    availableMatches
  } = useMatches()

  return (
    <VStack spacing={8} align="stretch" p={6}>
      {/* Header */}
      <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={6}>
          <VStack align="start" spacing={1}>
            <Heading size="lg" color="brand.500">
              Partidos
            </Heading>
            <Text color="gray.600">
              Encuentra partidos disponibles o crea uno
            </Text>
          </VStack>
        </Box>
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
              <Text fontSize="4xl" mb={4}>🔍</Text>
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
          <Grid 
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} 
            gap={4}
          >
            {availableMatches.map((match) => (
              <GridItem key={match.id}>
                <MatchCard
                  match={match}
                  showJoinButton={true}
                />
              </GridItem>
            ))}
          </Grid>
        )}
      </Box>
    </VStack>
  )
}

export default Matches
