import {
  Box,
  Container,
  VStack,
  HStack,
  Heading,
  Text,
  Card,
  CardBody,
  Avatar,
  Badge,
  Progress,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import { useAuth } from '../context/AuthContext'
import UserInfo from './components/UserInfo'
import PlayerStats from './components/PlayerStats'
import UserMatchCard from './components/UserMatchCard'
import { useMatches } from '../api/entities'

const Profile = (): JSX.Element => {
  const { user } = useAuth()
  const { matches: userMatches } = useMatches(true)

  // Mock data para el nivel del jugador
  const playerLevel = {
    current: 12,
    max: 20,
    experience: 2450,
    nextLevelExp: 3000,
    progress: (2450 / 3000) * 100
  }

  return (
    <Container maxW="container.xl" py={{ base: 4, md: 8 }} px={{ base: 4, md: 6 }}>
      <VStack spacing={{ base: 6, md: 8 }} align="stretch">
        {/* Header del Perfil */}
        <Card>
          <CardBody p={{ base: 4, md: 6 }}>
            {/* Layout responsive: vertical en móvil, horizontal en desktop */}
            <VStack spacing={4} display={{ base: 'flex', md: 'none' }}>
              {/* Avatar centrado en móvil */}
              <Avatar
                size="xl"
                name={user?.name}
                bg="brand.500"
                color="white"
                fontSize="xl"
              />
              
              {/* Información del usuario centrada */}
              <VStack spacing={2} textAlign="center">
                <Heading as="h1" size="lg" color="brand.500">
                  {user?.name}
                </Heading>
                <Text color="gray.600" fontSize="md">
                  {user?.email}
                </Text>
                <Badge colorScheme="brand" size="lg">
                  Nivel {playerLevel.current}
                </Badge>
              </VStack>

              {/* Experiencia centrada */}
              <VStack spacing={1} textAlign="center">
                <Text fontSize="sm" color="gray.500">
                  Experiencia
                </Text>
                <Text fontSize="md" fontWeight="bold" color="brand.500">
                  {playerLevel.experience} / {playerLevel.nextLevelExp} XP
                </Text>
              </VStack>
              
              {/* Barra de Progreso del Nivel */}
              <Box w="full">
                <HStack justify="space-between" mb={2}>
                  <Text fontSize="sm" color="gray.600">
                    Progreso al Nivel {playerLevel.current + 1}
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    {Math.round(playerLevel.progress)}%
                  </Text>
                </HStack>
                <Progress
                  value={playerLevel.progress}
                  colorScheme="brand"
                  size="md"
                  borderRadius="full"
                  bg="gray.100"
                />
              </Box>
            </VStack>

            {/* Layout desktop: horizontal */}
            <HStack spacing={6} align="start" display={{ base: 'none', md: 'flex' }}>
              <Avatar
                size="2xl"
                name={user?.name}
                bg="brand.500"
                color="white"
                fontSize="2xl"
              />
              <Box flex={1}>
                <HStack justify="space-between" align="start" mb={4}>
                  <Box>
                    <Heading as="h1" size="xl" color="brand.500" mb={2}>
                      {user?.name}
                    </Heading>
                    <Text color="gray.600" fontSize="lg">
                      {user?.email}
                    </Text>
                    <Badge colorScheme="brand" mt={2}>
                      Nivel {playerLevel.current}
                    </Badge>
                  </Box>
                  <Box textAlign="right">
                    <Text fontSize="sm" color="gray.500">
                      Experiencia
                    </Text>
                    <Text fontSize="lg" fontWeight="bold" color="brand.500">
                      {playerLevel.experience} / {playerLevel.nextLevelExp} XP
                    </Text>
                  </Box>
                </HStack>
                
                {/* Barra de Progreso del Nivel */}
                <Box>
                  <HStack justify="space-between" mb={2}>
                    <Text fontSize="sm" color="gray.600">
                      Progreso al Nivel {playerLevel.current + 1}
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                      {Math.round(playerLevel.progress)}%
                    </Text>
                  </HStack>
                  <Progress
                    value={playerLevel.progress}
                    colorScheme="brand"
                    size="lg"
                    borderRadius="full"
                    bg="gray.100"
                  />
                </Box>
              </Box>
            </HStack>
          </CardBody>
        </Card>

        {/* Módulos del Perfil - Ancho completo */}
        <VStack spacing={{ base: 6, md: 8 }} align="stretch">
          <UserInfo user={user} />
          <PlayerStats />
          
          {/* Mis Partidos */}
          <Card>
            <CardBody p={{ base: 4, md: 6 }}>
              <VStack spacing={4} align="stretch">
                <VStack align="start" spacing={1}>
                  <Heading size="md" color="brand.500">
                    Mis Partidos
                  </Heading>
                  <Text color="gray.600" fontSize="sm">
                    Partidos en los que participas
                  </Text>
                </VStack>
                
                {userMatches.length === 0 ? (
                  <Box textAlign="center" py={8}>
                    <Text fontSize="3xl" mb={3}>🏓</Text>
                    <Text color="gray.600" mb={2}>
                      No tienes partidos programados
                    </Text>
                    <Text color="gray.500" fontSize="sm">
                      Únete a un partido disponible o crea uno nuevo
                    </Text>
                  </Box>
                ) : (
                  <Grid
                    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
                    gap={4}
                  >
                    {userMatches.map((match) => (
                      <GridItem key={match.id}>
                        <UserMatchCard match={match} />
                      </GridItem>
                    ))}
                  </Grid>
                )}
              </VStack>
            </CardBody>
          </Card>
        </VStack>
      </VStack>
    </Container>
  )
}

export default Profile
