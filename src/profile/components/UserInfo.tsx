import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  VStack,
  HStack,
  Text,
  Badge,
  Divider,
  Box
} from '@chakra-ui/react'
import { User } from '../../types'

interface UserInfoProps {
  user: User | null
}

const UserInfo = ({ user: _user }: UserInfoProps): JSX.Element => {
  // Mock data adicional del usuario
  const userDetails = {
    joinDate: 'Octubre 2024',
    location: 'Buenos Aires, Argentina',
    favoritePosition: 'Derecha',
    playingStyle: 'Ofensivo',
    totalMatches: 47,
    winRate: 68
  }

  return (
    <Card>
      <CardHeader pb={{ base: 2, md: 4 }}>
        <Heading size={{ base: 'sm', md: 'md' }} color="brand.500">
          Información Personal
        </Heading>
      </CardHeader>
      <CardBody pt={{ base: 0, md: 0 }}>
        <VStack spacing={{ base: 3, md: 4 }} align="stretch">
          <Box>
            <Text fontSize="sm" color="gray.500" mb={1}>
              Miembro desde
            </Text>
            <Text fontWeight="medium">
              {userDetails.joinDate}
            </Text>
          </Box>

          <Divider />

          <Box>
            <Text fontSize="sm" color="gray.500" mb={1}>
              Ubicación
            </Text>
            <Text fontWeight="medium">
              {userDetails.location}
            </Text>
          </Box>

          <Divider />

          <Box>
            <Text fontSize="sm" color="gray.500" mb={2}>
              Preferencias de Juego
            </Text>
            <VStack spacing={2} align="stretch">
              <HStack justify="space-between">
                <Text fontSize="sm">Posición favorita:</Text>
                <Badge colorScheme="brand" variant="subtle">
                  {userDetails.favoritePosition}
                </Badge>
              </HStack>
              <HStack justify="space-between">
                <Text fontSize="sm">Estilo de juego:</Text>
                <Badge colorScheme="alternative" variant="subtle">
                  {userDetails.playingStyle}
                </Badge>
              </HStack>
            </VStack>
          </Box>

          <Divider />

          <Box>
            <Text fontSize="sm" color="gray.500" mb={2}>
              Estadísticas Generales
            </Text>
            <VStack spacing={2} align="stretch">
              <HStack justify="space-between">
                <Text fontSize="sm">Partidos jugados:</Text>
                <Text fontWeight="bold" color="brand.500">
                  {userDetails.totalMatches}
                </Text>
              </HStack>
              <HStack justify="space-between">
                <Text fontSize="sm">Win Rate:</Text>
                <Text fontWeight="bold" color="alternative.500">
                  {userDetails.winRate}%
                </Text>
              </HStack>
            </VStack>
          </Box>
        </VStack>
      </CardBody>
    </Card>
  )
}

export default UserInfo
