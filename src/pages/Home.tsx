import { 
  Box,
  Button,
  Heading, 
  Text, 
  VStack, 
  HStack,
  Card,
  CardBody,
  CardHeader,
  Badge,
  Grid,
  GridItem
} from '@chakra-ui/react'
import { useAuth } from '../context/AuthContext'

const Home = (): JSX.Element => {
  const { user } = useAuth()

  return (
    <VStack spacing={8} align="stretch">
      {/* Welcome Header */}
      <Box>
        <Heading as="h1" size="2xl" color="brand.500" mb={2}>
          ¡Bienvenido, {user?.name}!
        </Heading>
        <Text color="gray.600">
          Tu dashboard personal para gestionar partidos y conectar con otros jugadores
        </Text>
      </Box>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <Heading size="md">Acciones Rápidas</Heading>
            </CardHeader>
            <CardBody>
              <HStack spacing={4} wrap="wrap">
                <Button colorScheme="brand">Crear Partido</Button>
                <Button variant="secondary">Buscar Jugadores</Button>
                <Button variant="alternative">Ver Torneos</Button>
                <Button variant="outline" colorScheme="brand">Mis Estadísticas</Button>
              </HStack>
            </CardBody>
          </Card>

          {/* Dashboard Grid */}
          <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
            <GridItem>
              <Card>
                <CardHeader>
                  <Heading size="md" color="brand.500">Próximos Partidos</Heading>
                </CardHeader>
                <CardBody>
                  <VStack spacing={3} align="stretch">
                    <Box p={3} bg="gray.50" borderRadius="md">
                      <HStack justify="space-between">
                        <Text fontWeight="bold">vs. Carlos M.</Text>
                        <Badge colorScheme="brand">Mañana 18:00</Badge>
                      </HStack>
                      <Text fontSize="sm" color="gray.600">Club Padel Central</Text>
                    </Box>
                    <Box p={3} bg="gray.50" borderRadius="md">
                      <HStack justify="space-between">
                        <Text fontWeight="bold">vs. Ana L.</Text>
                        <Badge colorScheme="secondary">Viernes 20:00</Badge>
                      </HStack>
                      <Text fontSize="sm" color="gray.600">Padel Sports</Text>
                    </Box>
                  </VStack>
                </CardBody>
              </Card>
            </GridItem>

            <GridItem>
              <Card>
                <CardHeader>
                  <Heading size="md" color="secondary.500">Estadísticas</Heading>
                </CardHeader>
                <CardBody>
                  <VStack spacing={4}>
                    <HStack justify="space-between" w="full">
                      <Text>Partidos jugados:</Text>
                      <Text fontWeight="bold" color="brand.500">24</Text>
                    </HStack>
                    <HStack justify="space-between" w="full">
                      <Text>Victorias:</Text>
                      <Text fontWeight="bold" color="alternative.500">18</Text>
                    </HStack>
                    <HStack justify="space-between" w="full">
                      <Text>Derrotas:</Text>
                      <Text fontWeight="bold" color="red.500">6</Text>
                    </HStack>
                    <HStack justify="space-between" w="full">
                      <Text>Win Rate:</Text>
                      <Text fontWeight="bold" color="brand.500">75%</Text>
                    </HStack>
                  </VStack>
                </CardBody>
              </Card>
            </GridItem>

            <GridItem>
              <Card>
                <CardHeader>
                  <Heading size="md" color="alternative.500">Actividad Reciente</Heading>
                </CardHeader>
                <CardBody>
                  <VStack spacing={3} align="stretch">
                    <Box>
                      <Text fontSize="sm" color="gray.600">Hace 2 horas</Text>
                      <Text>Ganaste vs. Miguel R. (6-4, 6-2)</Text>
                    </Box>
                    <Box>
                      <Text fontSize="sm" color="gray.600">Ayer</Text>
                      <Text>Perdiste vs. Laura S. (4-6, 6-4, 3-6)</Text>
                    </Box>
                    <Box>
                      <Text fontSize="sm" color="gray.600">Hace 3 días</Text>
                      <Text>Ganaste vs. Pedro M. (6-1, 6-3)</Text>
                    </Box>
                  </VStack>
                </CardBody>
              </Card>
            </GridItem>
          </Grid>
    </VStack>
  )
}

export default Home
