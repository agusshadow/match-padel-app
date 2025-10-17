import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  Button, 
  VStack, 
  HStack, 
  Image,
  Grid,
  GridItem,
  Card,
  CardBody,
  Badge,
  Icon
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { 
  FaUsers, 
  FaCalendarAlt, 
  FaChartLine, 
  FaTrophy, 
  FaMapMarkerAlt,
  FaClock,
  FaStar,
  FaHeart,
  FaGamepad,
  FaMobileAlt,
  FaShieldAlt,
  FaRocket
} from 'react-icons/fa'

const Landing = (): JSX.Element => {
  return (
    <Box>
      {/* Hero Section */}
      <Box minH="100vh">
        <Container maxW="container.xl" py={20}>
          <VStack spacing={12} align="center" textAlign="center">
            {/* Logo and Title */}
            <VStack spacing={6}>
              <Image src="/src/assets/logo.png" alt="Match Padel" h="150px" />
              <VStack spacing={4}>
                <Text fontSize="2xl" color="gray.700" maxW="800px" lineHeight="1.6">
                  La plataforma definitiva para conectar jugadores de pádel, organizar partidos 
                  y llevar tu juego al siguiente nivel
                </Text>
                <Text fontSize="lg" color="gray.600" maxW="600px">
                  Únete a miles de jugadores que ya están mejorando su juego y conociendo 
                  nuevos compañeros de cancha
                </Text>
              </VStack>
            </VStack>

            {/* CTA Buttons */}
            <VStack spacing={4}>
              <HStack spacing={4} wrap="wrap" justify="center">
                <Button 
                  as={Link} 
                  to="/register" 
                  colorScheme="brand" 
                  size="lg"
                  px={8}
                  py={6}
                  fontSize="lg"
                  leftIcon={<FaRocket />}
                >
                  Comenzar Gratis
                </Button>
                <Button 
                  as={Link} 
                  to="/login" 
                  variant="outline" 
                  colorScheme="brand" 
                  size="lg"
                  px={8}
                  py={6}
                  fontSize="lg"
                >
                  Iniciar Sesión
                </Button>
              </HStack>
              <Text fontSize="sm" color="gray.500">
                ✨ Sin costo de registro • Únete a la comunidad más grande de pádel
              </Text>
            </VStack>

            {/* Stats */}
            <HStack spacing={8} wrap="wrap" justify="center" pt={8}>
              <VStack spacing={1}>
                <Text fontSize="3xl" fontWeight="bold" color="brand.500">10,000+</Text>
                <Text fontSize="sm" color="gray.600">Jugadores activos</Text>
              </VStack>
              <VStack spacing={1}>
                <Text fontSize="3xl" fontWeight="bold" color="secondary.500">500+</Text>
                <Text fontSize="sm" color="gray.600">Partidos diarios</Text>
              </VStack>
              <VStack spacing={1}>
                <Text fontSize="3xl" fontWeight="bold" color="alternative.500">50+</Text>
                <Text fontSize="sm" color="gray.600">Ciudades</Text>
              </VStack>
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* Features Section */}
      <Box py={20} bg="white">
        <Container maxW="container.xl">
          <VStack spacing={16}>
            <VStack spacing={4} textAlign="center">
              <Heading size="2xl" color="brand.600">
                ¿Por qué elegir Match Padel?
              </Heading>
              <Text fontSize="lg" color="gray.600" maxW="600px">
                Descubre todas las herramientas que necesitas para mejorar tu juego y conectar con la comunidad
              </Text>
            </VStack>

            <Grid 
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} 
              gap={8}
              w="full"
            >
              <GridItem>
                <Card h="full">
                  <CardBody textAlign="center" p={8}>
                    <Icon as={FaUsers} w={12} h={12} color="brand.500" mb={4} />
                    <Heading size="md" mb={3} color="brand.600">Encuentra Jugadores</Heading>
                    <Text color="gray.600">
                      Conecta con jugadores de tu nivel y ubicación. Filtra por experiencia, 
                      horarios y preferencias de juego.
                    </Text>
                  </CardBody>
                </Card>
              </GridItem>

              <GridItem>
                <Card h="full">
                  <CardBody textAlign="center" p={8}>
                    <Icon as={FaCalendarAlt} w={12} h={12} color="secondary.500" mb={4} />
                    <Heading size="md" mb={3} color="secondary.600">Organiza Partidos</Heading>
                    <Text color="gray.600">
                      Crea partidos en segundos. Reserva canchas, invita jugadores y 
                      gestiona todo desde la app.
                    </Text>
                  </CardBody>
                </Card>
              </GridItem>

              <GridItem>
                <Card h="full">
                  <CardBody textAlign="center" p={8}>
                    <Icon as={FaChartLine} w={12} h={12} color="alternative.500" mb={4} />
                    <Heading size="md" mb={3} color="alternative.600">Estadísticas</Heading>
                    <Text color="gray.600">
                      Sigue tu progreso con estadísticas detalladas. Analiza tu rendimiento 
                      y mejora tu juego.
                    </Text>
                  </CardBody>
                </Card>
              </GridItem>

              <GridItem>
                <Card h="full">
                  <CardBody textAlign="center" p={8}>
                    <Icon as={FaTrophy} w={12} h={12} color="yellow.500" mb={4} />
                    <Heading size="md" mb={3} color="yellow.600">Torneos</Heading>
                    <Text color="gray.600">
                      Participa en torneos locales y nacionales. Compite con los mejores 
                      y gana premios increíbles.
                    </Text>
                  </CardBody>
                </Card>
              </GridItem>
            </Grid>
          </VStack>
        </Container>
      </Box>

      {/* How it Works Section */}
      <Box py={20} bg="gray.50">
        <Container maxW="container.xl">
          <VStack spacing={16}>
            <VStack spacing={4} textAlign="center">
              <Heading size="2xl" color="brand.600">
                ¿Cómo funciona?
              </Heading>
              <Text fontSize="lg" color="gray.600" maxW="600px">
                En solo 3 pasos estarás jugando y mejorando tu pádel
              </Text>
            </VStack>

            <Grid 
              templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} 
              gap={8}
              w="full"
            >
              <GridItem>
                <VStack spacing={4} textAlign="center">
                  <Box
                    w={16}
                    h={16}
                    bg="brand.500"
                    color="white"
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="2xl"
                    fontWeight="bold"
                  >
                    1
                  </Box>
                  <Heading size="md" color="brand.600">Regístrate</Heading>
                  <Text color="gray.600">
                    Crea tu perfil en segundos. Indica tu nivel, ubicación y 
                    preferencias de juego.
                  </Text>
                </VStack>
              </GridItem>

              <GridItem>
                <VStack spacing={4} textAlign="center">
                  <Box
                    w={16}
                    h={16}
                    bg="secondary.500"
                    color="white"
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="2xl"
                    fontWeight="bold"
                  >
                    2
                  </Box>
                  <Heading size="md" color="secondary.600">Encuentra Partidos</Heading>
                  <Text color="gray.600">
                    Explora partidos disponibles cerca de ti o crea uno nuevo. 
                    Conecta con jugadores de tu nivel.
                  </Text>
                </VStack>
              </GridItem>

              <GridItem>
                <VStack spacing={4} textAlign="center">
                  <Box
                    w={16}
                    h={16}
                    bg="alternative.500"
                    color="white"
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="2xl"
                    fontWeight="bold"
                  >
                    3
                  </Box>
                  <Heading size="md" color="alternative.600">¡Juega y Mejora!</Heading>
                  <Text color="gray.600">
                    Disfruta del juego, conoce nuevos compañeros y sigue tu 
                    progreso con estadísticas detalladas.
                  </Text>
                </VStack>
              </GridItem>
            </Grid>
          </VStack>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Box py={20} bg="white">
        <Container maxW="container.xl">
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={16} alignItems="center">
            <GridItem>
              <VStack spacing={6} align="start">
                <Heading size="2xl" color="brand.600">
                  Más que una app, es tu comunidad de pádel
                </Heading>
                <Text fontSize="lg" color="gray.600">
                  Únete a la plataforma que está revolucionando la forma de jugar pádel. 
                  Conecta, juega y mejora junto a miles de jugadores apasionados.
                </Text>
                
                <VStack spacing={4} align="start" w="full">
                  <HStack spacing={4}>
                    <Icon as={FaMapMarkerAlt} w={6} h={6} color="brand.500" />
                    <Text color="gray.700">Encuentra canchas y jugadores cerca de ti</Text>
                  </HStack>
                  <HStack spacing={4}>
                    <Icon as={FaClock} w={6} h={6} color="brand.500" />
                    <Text color="gray.700">Juega cuando quieras, 24/7</Text>
                  </HStack>
                  <HStack spacing={4}>
                    <Icon as={FaStar} w={6} h={6} color="brand.500" />
                    <Text color="gray.700">Sistema de calificaciones confiable</Text>
                  </HStack>
                  <HStack spacing={4}>
                    <Icon as={FaHeart} w={6} h={6} color="brand.500" />
                    <Text color="gray.700">Comunidad amigable y acogedora</Text>
                  </HStack>
                </VStack>

                <Button 
                  as={Link} 
                  to="/register" 
                  colorScheme="brand" 
                  size="lg"
                  leftIcon={<FaGamepad />}
                >
                  Únete Ahora
                </Button>
              </VStack>
            </GridItem>

            <GridItem>
              <Box
                bg="brand.50"
                p={8}
                borderRadius="xl"
                textAlign="center"
              >
                <VStack spacing={6}>
                  <Icon as={FaMobileAlt} w={20} h={20} color="brand.500" />
                  <VStack spacing={2}>
                    <Heading size="lg" color="brand.600">App Móvil</Heading>
                    <Text color="gray.600">
                      Descarga nuestra app y lleva Match Padel contigo. 
                      Reserva canchas, encuentra partidos y conecta con jugadores 
                      desde cualquier lugar.
                    </Text>
                  </VStack>
                  <Badge colorScheme="brand" size="lg" px={4} py={2}>
                    Disponible en iOS y Android
                  </Badge>
                </VStack>
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box py={20} bg="gray.50">
        <Container maxW="container.xl">
          <VStack spacing={16}>
            <VStack spacing={4} textAlign="center">
              <Heading size="2xl" color="brand.600">
                Lo que dicen nuestros jugadores
              </Heading>
              <Text fontSize="lg" color="gray.600" maxW="600px">
                Miles de jugadores ya están disfrutando de una mejor experiencia de pádel
              </Text>
            </VStack>

            <Grid 
              templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} 
              gap={8}
              w="full"
            >
              <GridItem>
                <Card h="full">
                  <CardBody p={6}>
                    <VStack spacing={4} align="start">
                      <HStack spacing={1}>
                        {[...Array(5)].map((_, i) => (
                          <Icon key={i} as={FaStar} w={4} h={4} color="yellow.400" />
                        ))}
                      </HStack>
                      <Text color="gray.600" fontStyle="italic">
                        "Match Padel cambió completamente mi forma de jugar. Ahora encuentro 
                        partidos todos los días y he mejorado muchísimo mi juego."
                      </Text>
                      <HStack spacing={3}>
                        <Box w={10} h={10} bg="brand.500" borderRadius="full" />
                        <VStack spacing={0} align="start">
                          <Text fontWeight="bold" fontSize="sm">Carlos M.</Text>
                          <Text fontSize="xs" color="gray.500">Jugador Intermedio</Text>
                        </VStack>
                      </HStack>
                    </VStack>
                  </CardBody>
                </Card>
              </GridItem>

              <GridItem>
                <Card h="full">
                  <CardBody p={6}>
                    <VStack spacing={4} align="start">
                      <HStack spacing={1}>
                        {[...Array(5)].map((_, i) => (
                          <Icon key={i} as={FaStar} w={4} h={4} color="yellow.400" />
                        ))}
                      </HStack>
                      <Text color="gray.600" fontStyle="italic">
                        "La comunidad es increíble. He conocido jugadores de todos los niveles 
                        y siempre hay alguien disponible para jugar."
                      </Text>
                      <HStack spacing={3}>
                        <Box w={10} h={10} bg="secondary.500" borderRadius="full" />
                        <VStack spacing={0} align="start">
                          <Text fontWeight="bold" fontSize="sm">Ana L.</Text>
                          <Text fontSize="xs" color="gray.500">Jugadora Avanzada</Text>
                        </VStack>
                      </HStack>
                    </VStack>
                  </CardBody>
                </Card>
              </GridItem>

              <GridItem>
                <Card h="full">
                  <CardBody p={6}>
                    <VStack spacing={4} align="start">
                      <HStack spacing={1}>
                        {[...Array(5)].map((_, i) => (
                          <Icon key={i} as={FaStar} w={4} h={4} color="yellow.400" />
                        ))}
                      </HStack>
                      <Text color="gray.600" fontStyle="italic">
                        "Las estadísticas me ayudan a entender mis fortalezas y debilidades. 
                        Es como tener un entrenador personal en mi bolsillo."
                      </Text>
                      <HStack spacing={3}>
                        <Box w={10} h={10} bg="alternative.500" borderRadius="full" />
                        <VStack spacing={0} align="start">
                          <Text fontWeight="bold" fontSize="sm">Miguel R.</Text>
                          <Text fontSize="xs" color="gray.500">Jugador Principiante</Text>
                        </VStack>
                      </HStack>
                    </VStack>
                  </CardBody>
                </Card>
              </GridItem>
            </Grid>
          </VStack>
        </Container>
      </Box>

      {/* Security & Trust Section */}
      <Box py={20} bg="white">
        <Container maxW="container.xl">
          <VStack spacing={12}>
            <VStack spacing={4} textAlign="center">
              <Heading size="2xl" color="brand.600">
                Seguro, confiable y fácil de usar
              </Heading>
              <Text fontSize="lg" color="gray.600" maxW="600px">
                Tu seguridad y privacidad son nuestra prioridad
              </Text>
            </VStack>

            <Grid 
              templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} 
              gap={8}
              w="full"
            >
              <GridItem>
                <VStack spacing={4} textAlign="center">
                  <Icon as={FaShieldAlt} w={12} h={12} color="green.500" />
                  <Heading size="md" color="green.600">100% Seguro</Heading>
                  <Text color="gray.600">
                    Tus datos están protegidos con encriptación de nivel bancario. 
                    Tu privacidad es sagrada para nosotros.
                  </Text>
                </VStack>
              </GridItem>

              <GridItem>
                <VStack spacing={4} textAlign="center">
                  <Icon as={FaUsers} w={12} h={12} color="blue.500" />
                  <Heading size="md" color="blue.600">Comunidad Verificada</Heading>
                  <Text color="gray.600">
                    Todos los jugadores son verificados. Sistema de calificaciones 
                    para garantizar experiencias positivas.
                  </Text>
                </VStack>
              </GridItem>

              <GridItem>
                <VStack spacing={4} textAlign="center">
                  <Icon as={FaRocket} w={12} h={12} color="purple.500" />
                  <Heading size="md" color="purple.600">Fácil de Usar</Heading>
                  <Text color="gray.600">
                    Interfaz intuitiva diseñada para que puedas enfocarte en lo que 
                    importa: jugar pádel.
                  </Text>
                </VStack>
              </GridItem>
            </Grid>
          </VStack>
        </Container>
      </Box>

      {/* Final CTA Section */}
      <Box py={20} bg="brand.500" color="white">
        <Container maxW="container.xl">
          <VStack spacing={8} textAlign="center">
            <VStack spacing={4}>
              <Heading size="2xl">
                ¿Listo para mejorar tu juego?
              </Heading>
              <Text fontSize="xl" maxW="600px" opacity="0.9">
                Únete a miles de jugadores que ya están disfrutando de una mejor 
                experiencia de pádel. ¡Es gratis!
              </Text>
            </VStack>

            <VStack spacing={4}>
              <HStack spacing={4} wrap="wrap" justify="center">
                <Button 
                  as={Link} 
                  to="/register" 
                  colorScheme="white"
                  variant="solid"
                  size="lg"
                  px={8}
                  py={6}
                  fontSize="lg"
                  leftIcon={<FaRocket />}
                  _hover={{ transform: 'translateY(-2px)', boxShadow: 'xl' }}
                  transition="all 0.3s"
                >
                  Comenzar Gratis
                </Button>
                <Button 
                  as={Link} 
                  to="/login" 
                  variant="outline"
                  colorScheme="white"
                  size="lg"
                  px={8}
                  py={6}
                  fontSize="lg"
                  _hover={{ transform: 'translateY(-2px)', boxShadow: 'xl' }}
                  transition="all 0.3s"
                >
                  Iniciar Sesión
                </Button>
              </HStack>
              <Text fontSize="sm" opacity="0.8">
                ✨ Sin costo de registro • Sin compromisos • Únete cuando quieras
              </Text>
            </VStack>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
}

export default Landing
