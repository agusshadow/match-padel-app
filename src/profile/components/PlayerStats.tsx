import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  VStack,
  HStack,
  Text,
  Progress,
  Box
} from '@chakra-ui/react'

const PlayerStats = (): JSX.Element => {
  // Mock data para estadísticas del jugador
  const stats = {
    matches: {
      total: 47,
      won: 32,
      lost: 15,
      winRate: 68
    },
    performance: {
      averageScore: 6.2,
      bestStreak: 8,
      currentStreak: 3
    }
  }

  return (
    <Card>
      <CardHeader pb={{ base: 2, md: 4 }}>
        <Heading size={{ base: 'sm', md: 'md' }} color="secondary.500">
          Estadísticas de Rendimiento
        </Heading>
      </CardHeader>
      <CardBody pt={{ base: 0, md: 0 }}>
        <VStack spacing={{ base: 4, md: 6 }} align="stretch">
          {/* Estadísticas de Partidos */}
          <Box>
            <Text fontSize="sm" color="gray.500" mb={3}>
              Rendimiento en Partidos
            </Text>
            <VStack spacing={3} align="stretch">
              <HStack justify="space-between">
                <Text fontSize="sm">Partidos jugados:</Text>
                <Text fontWeight="bold" color="brand.500">
                  {stats.matches.total}
                </Text>
              </HStack>
              <HStack justify="space-between">
                <Text fontSize="sm">Victorias:</Text>
                <Text fontWeight="bold" color="alternative.500">
                  {stats.matches.won}
                </Text>
              </HStack>
              <HStack justify="space-between">
                <Text fontSize="sm">Derrotas:</Text>
                <Text fontWeight="bold" color="red.500">
                  {stats.matches.lost}
                </Text>
              </HStack>
              <Box>
                <HStack justify="space-between" mb={1}>
                  <Text fontSize="sm">Win Rate:</Text>
                  <Text fontSize="sm" fontWeight="bold" color="brand.500">
                    {stats.matches.winRate}%
                  </Text>
                </HStack>
                <Progress
                  value={stats.matches.winRate}
                  colorScheme="brand"
                  size="sm"
                  borderRadius="full"
                />
              </Box>
            </VStack>
          </Box>

          {/* Estadísticas de Rendimiento */}
          <Box>
            <Text fontSize="sm" color="gray.500" mb={3}>
              Métricas de Juego
            </Text>
            <VStack spacing={3} align="stretch">
              <HStack justify="space-between">
                <Text fontSize="sm">Puntuación promedio:</Text>
                <Text fontWeight="bold" color="secondary.500">
                  {stats.performance.averageScore}
                </Text>
              </HStack>
              <HStack justify="space-between">
                <Text fontSize="sm">Mejor racha:</Text>
                <Text fontWeight="bold" color="alternative.500">
                  {stats.performance.bestStreak} victorias
                </Text>
              </HStack>
              <HStack justify="space-between">
                <Text fontSize="sm">Racha actual:</Text>
                <Text fontWeight="bold" color="brand.500">
                  {stats.performance.currentStreak} victorias
                </Text>
              </HStack>
            </VStack>
          </Box>
        </VStack>
      </CardBody>
    </Card>
  )
}

export default PlayerStats