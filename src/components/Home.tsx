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
import { 
  FaTrophy, 
  FaUsers, 
  FaBuilding, 
  FaMedal, 
  FaBullseye, 
  FaBolt 
} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
// import { useAuth } from '../context/AuthContext' // Comentado porque el header de bienvenida está deshabilitado

const Home = (): JSX.Element => {
  // const { user } = useAuth() // Comentado porque el header de bienvenida está deshabilitado
  const navigate = useNavigate()

  const handleCreateMatch = () => {
    navigate('/app/matches/create')
  }

  const handleSearchMatches = () => {
    navigate('/app/matches')
  }

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
                  <Box 
                    fontSize="4xl" 
                    mb={4} 
                    color="brand.500"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <FaTrophy />
                  </Box>
                  <Heading size="md" color="brand.600" mb={2}>
                    Crear Partido
                  </Heading>
                  <Text fontSize="sm" color="gray.600" mb={4} flex="1">
                    Organiza un nuevo partido y encuentra jugadores
                  </Text>
                  <Button 
                    colorScheme="brand" 
                    size="lg" 
                    w="full" 
                    mt="auto"
                    onClick={handleCreateMatch}
                  >
                    Crear Ahora
                  </Button>
                </CardBody>
              </Card>

              {/* Unirse a Partido */}
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
                  <Box 
                    fontSize="4xl" 
                    mb={4} 
                    color="brand.500"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <FaUsers />
                  </Box>
                  <Heading size="md" color="brand.600" mb={2}>
                    Unirse a Partido
                  </Heading>
                  <Text fontSize="sm" color="gray.600" mb={4} flex="1">
                    Busca partidos disponibles y únete
                  </Text>
                  <Button 
                    colorScheme="brand" 
                    size="lg" 
                    w="full" 
                    mt="auto"
                    onClick={handleSearchMatches}
                  >
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
                  <Box 
                    fontSize="4xl" 
                    mb={4} 
                    color="gray.500"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <FaBuilding />
                  </Box>
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
                  <Box 
                    fontSize="4xl" 
                    mb={4} 
                    color="gray.500"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <FaMedal />
                  </Box>
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
          <Grid templateColumns="repeat(auto-fit, minmax(280px, 1fr))" gap={6}>
            <GridItem>
              <Card>
                <CardHeader>
                  <HStack justify="space-between" align="center">
                    <Heading size="md" color="yellow.500">Desafíos Diarios</Heading>
                    <Badge colorScheme="yellow" variant="subtle">
                      2/3
                    </Badge>
                  </HStack>
                </CardHeader>
                <CardBody>
                  <VStack spacing={4} align="stretch">
                    {/* Desafío 1 - Completado */}
                    <Box p={3} bg="green.50" borderRadius="md" border="1px solid" borderColor="green.200">
                      <HStack justify="space-between" align="start" mb={2}>
                        <HStack spacing={2}>
                          <Box fontSize="lg" color="green.600">
                            <FaBullseye />
                          </Box>
                          <Box>
                            <Text fontWeight="bold" fontSize="sm" color="green.700">
                              Ganar un partido
                            </Text>
                            <Text fontSize="xs" color="green.600">
                              Completa una victoria
                            </Text>
                          </Box>
                        </HStack>
                        <Badge colorScheme="green" variant="solid" fontSize="xs">
                          ✓ Completado
                        </Badge>
                      </HStack>
                      <HStack justify="space-between">
                        <Text fontSize="xs" color="green.600">
                          +50 XP
                        </Text>
                        <Text fontSize="xs" color="green.600">
                          +100 puntos
                        </Text>
                      </HStack>
                    </Box>

                    {/* Desafío 2 - Completado */}
                    <Box p={3} bg="green.50" borderRadius="md" border="1px solid" borderColor="green.200">
                      <HStack justify="space-between" align="start" mb={2}>
                        <HStack spacing={2}>
                          <Box fontSize="lg" color="green.600">
                            <FaBolt />
                          </Box>
                          <Box>
                            <Text fontWeight="bold" fontSize="sm" color="green.700">
                              Jugar 2 partidos
                            </Text>
                            <Text fontSize="xs" color="green.600">
                              Participa en 2 partidos
                            </Text>
                          </Box>
                        </HStack>
                        <Badge colorScheme="green" variant="solid" fontSize="xs">
                          ✓ Completado
                        </Badge>
                      </HStack>
                      <HStack justify="space-between">
                        <Text fontSize="xs" color="green.600">
                          +75 XP
                        </Text>
                        <Text fontSize="xs" color="green.600">
                          +150 puntos
                        </Text>
                      </HStack>
                    </Box>

                    {/* Desafío 3 - En progreso */}
                    <Box p={3} bg="yellow.50" borderRadius="md" border="1px solid" borderColor="yellow.200">
                      <HStack justify="space-between" align="start" mb={2}>
                        <HStack spacing={2}>
                          <Box fontSize="lg" color="yellow.600">
                            <FaTrophy />
                          </Box>
                          <Box>
                            <Text fontWeight="bold" fontSize="sm" color="yellow.700">
                              Racha de 3 victorias
                            </Text>
                            <Text fontSize="xs" color="yellow.600">
                              2/3 victorias consecutivas
                            </Text>
                          </Box>
                        </HStack>
                        <Badge colorScheme="yellow" variant="outline" fontSize="xs">
                          En progreso
                        </Badge>
                      </HStack>
                      <HStack justify="space-between">
                        <Text fontSize="xs" color="yellow.600">
                          +100 XP
                        </Text>
                        <Text fontSize="xs" color="yellow.600">
                          +200 puntos
                        </Text>
                      </HStack>
                      <Box mt={2}>
                        <HStack justify="space-between" mb={1}>
                          <Text fontSize="xs" color="yellow.600">
                            Progreso
                          </Text>
                          <Text fontSize="xs" color="yellow.600">
                            67%
                          </Text>
                        </HStack>
                        <Box h="4px" bg="yellow.200" borderRadius="full" overflow="hidden">
                          <Box h="100%" w="67%" bg="yellow.500" borderRadius="full" />
                        </Box>
                      </Box>
                    </Box>
                  </VStack>
                </CardBody>
              </Card>
            </GridItem>

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
