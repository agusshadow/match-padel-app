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
// import { useAuth } from '../context/AuthContext' // Comentado porque el header de bienvenida está deshabilitado

const Home = (): JSX.Element => {
  // const { user } = useAuth() // Comentado porque el header de bienvenida está deshabilitado

  return (
    <VStack spacing={8} align="stretch">
      {/* Welcome Header */}
      {/* <Box>
        <Heading as="h1" size="2xl" color="brand.500" mb={2}>
          ¡Bienvenido, {user?.name}!
        </Heading>
        <Text color="gray.600">
          Tu dashboard personal para gestionar partidos y conectar con otros jugadores
        </Text>
      </Box> */}

          {/* Call to Actions */}
          <Box>
            <Heading size="lg" color="brand.500" mb={6}>
              ¿Qué quieres hacer hoy?
            </Heading>
            <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6}>
              {/* Crear Partido */}
              <Card 
                cursor="pointer" 
                _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                transition="all 0.2s"
                bg="brand.50"
                border="2px solid"
                borderColor="brand.200"
                h="full"
                display="flex"
                flexDirection="column"
              >
                <CardBody textAlign="center" py={8} display="flex" flexDirection="column" flex="1">
                  <Box fontSize="4xl" mb={4}>🏆</Box>
                  <Heading size="md" color="brand.600" mb={2}>
                    Crear Partido
                  </Heading>
                  <Text fontSize="sm" color="gray.600" mb={4} flex="1">
                    Organiza un nuevo partido y encuentra jugadores
                  </Text>
                  <Button colorScheme="brand" size="lg" w="full" mt="auto">
                    Crear Ahora
                  </Button>
                </CardBody>
              </Card>

              {/* Unirse a Partido */}
              <Card 
                cursor="pointer" 
                _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                transition="all 0.2s"
                bg="secondary.50"
                border="2px solid"
                borderColor="secondary.200"
                h="full"
                display="flex"
                flexDirection="column"
              >
                <CardBody textAlign="center" py={8} display="flex" flexDirection="column" flex="1">
                  <Box fontSize="4xl" mb={4}>👥</Box>
                  <Heading size="md" color="secondary.600" mb={2}>
                    Unirse a Partido
                  </Heading>
                  <Text fontSize="sm" color="gray.600" mb={4} flex="1">
                    Busca partidos disponibles y únete
                  </Text>
                  <Button colorScheme="secondary" size="lg" w="full" mt="auto">
                    Buscar Partidos
                  </Button>
                </CardBody>
              </Card>

              {/* Reservar Cancha */}
              <Card 
                cursor="not-allowed"
                opacity={0.6}
                bg="gray.50"
                border="2px solid"
                borderColor="gray.200"
                h="full"
                display="flex"
                flexDirection="column"
              >
                <CardBody textAlign="center" py={8} display="flex" flexDirection="column" flex="1">
                  <Box fontSize="4xl" mb={4}>🏟️</Box>
                  <Heading size="md" color="gray.500" mb={2}>
                    Reservar Cancha
                  </Heading>
                  <Text fontSize="sm" color="gray.500" mb={4} flex="1">
                    Próximamente disponible
                  </Text>
                  <Button 
                    colorScheme="gray" 
                    size="lg" 
                    w="full"
                    isDisabled
                    variant="outline"
                    mt="auto"
                  >
                    Próximamente
                  </Button>
                </CardBody>
              </Card>

              {/* Unirse a Torneo */}
              <Card 
                cursor="not-allowed"
                opacity={0.6}
                bg="gray.50"
                border="2px solid"
                borderColor="gray.200"
                h="full"
                display="flex"
                flexDirection="column"
              >
                <CardBody textAlign="center" py={8} display="flex" flexDirection="column" flex="1">
                  <Box fontSize="4xl" mb={4}>🏅</Box>
                  <Heading size="md" color="gray.500" mb={2}>
                    Unirse a Torneo
                  </Heading>
                  <Text fontSize="sm" color="gray.500" mb={4} flex="1">
                    Próximamente disponible
                  </Text>
                  <Button 
                    colorScheme="gray" 
                    size="lg" 
                    w="full"
                    isDisabled
                    variant="outline"
                    mt="auto"
                  >
                    Próximamente
                  </Button>
                </CardBody>
              </Card>
            </Grid>
          </Box>

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
