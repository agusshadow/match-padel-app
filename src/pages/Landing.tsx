import { Box, Container, Heading, Text, Button, VStack, HStack, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Landing = (): JSX.Element => {
  return (
    <Box minH="100vh" bg="white">
      <Container maxW="container.xl" py={8}>
        <VStack spacing={8} align="center" minH="80vh" justify="center">
          {/* Hero Section */}
          <VStack spacing={6} textAlign="center">
            <VStack spacing={4}>
              <Image src="/src/assets/logo.png" alt="Match Padel" h="80px" />
              <Heading as="h1" size="4xl" color="brand.500">
                Match Padel
              </Heading>
            </VStack>
            <Text fontSize="xl" color="gray.600" maxW="600px">
              Conecta con jugadores de pádel, organiza partidos y mejora tu juego. 
              La plataforma definitiva para amantes del pádel.
            </Text>
          </VStack>

          {/* CTA Buttons */}
          <HStack spacing={4}>
            <Button as={Link} to="/login" colorScheme="brand" size="lg">
              Iniciar Sesión
            </Button>
            <Button as={Link} to="/register" variant="outline" colorScheme="brand" size="lg">
              Registrarse
            </Button>
          </HStack>

          {/* Features Preview */}
          <VStack spacing={4} mt={12}>
            <Heading size="lg" color="secondary.500">
              ¿Por qué elegir Match Padel?
            </Heading>
            <HStack spacing={8} wrap="wrap" justify="center">
              <VStack spacing={2}>
                <Text fontWeight="bold" color="brand.500">🎾</Text>
                <Text fontSize="sm" textAlign="center">Encuentra jugadores</Text>
              </VStack>
              <VStack spacing={2}>
                <Text fontWeight="bold" color="brand.500">📅</Text>
                <Text fontSize="sm" textAlign="center">Organiza partidos</Text>
              </VStack>
              <VStack spacing={2}>
                <Text fontWeight="bold" color="brand.500">📊</Text>
                <Text fontSize="sm" textAlign="center">Seguimiento de estadísticas</Text>
              </VStack>
              <VStack spacing={2}>
                <Text fontWeight="bold" color="brand.500">🏆</Text>
                <Text fontSize="sm" textAlign="center">Torneos y competencias</Text>
              </VStack>
            </HStack>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}

export default Landing
