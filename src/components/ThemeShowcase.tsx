import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Card,
  CardBody,
  CardHeader,
  Badge,
  Divider,
  Grid,
  GridItem,
  useColorModeValue,
} from '@chakra-ui/react'

const ThemeShowcase = (): JSX.Element => {
  const bgColor = useColorModeValue('white', 'gray.800')

  return (
    <Box minH="100vh" bg={bgColor}>
      <Container maxW="container.xl" py={8}>
        <VStack spacing={8} align="stretch">
          {/* Header */}
          <Box textAlign="center">
            <Heading as="h1" size="2xl" color="brand.500" mb={4}>
              Match Padel
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Demostración del tema personalizado de Chakra UI
            </Text>
          </Box>

          {/* Color Palette */}
          <Card>
            <CardHeader>
              <Heading size="md">Paleta de Colores</Heading>
            </CardHeader>
            <CardBody>
              <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={4}>
                <GridItem>
                  <VStack align="start" spacing={2}>
                    <Text fontWeight="bold">Principal</Text>
                    <Box w="100%" h="60px" bg="brand.500" borderRadius="md" />
                    <Text fontSize="sm" color="gray.600">#2F57A4</Text>
                  </VStack>
                </GridItem>
                <GridItem>
                  <VStack align="start" spacing={2}>
                    <Text fontWeight="bold">Secundario</Text>
                    <Box w="100%" h="60px" bg="secondary.500" borderRadius="md" />
                    <Text fontSize="sm" color="gray.600">#6C8CC7</Text>
                  </VStack>
                </GridItem>
                <GridItem>
                  <VStack align="start" spacing={2}>
                    <Text fontWeight="bold">Alternativo</Text>
                    <Box w="100%" h="60px" bg="alternative.500" borderRadius="md" />
                    <Text fontSize="sm" color="gray.600">#29A34E</Text>
                  </VStack>
                </GridItem>
                <GridItem>
                  <VStack align="start" spacing={2}>
                    <Text fontWeight="bold">Gris</Text>
                    <Box w="100%" h="60px" bg="gray.100" borderRadius="md" border="1px solid" borderColor="gray.300" />
                    <Text fontSize="sm" color="gray.600">#F2F2F2</Text>
                  </VStack>
                </GridItem>
              </Grid>
            </CardBody>
          </Card>

          {/* Buttons */}
          <Card>
            <CardHeader>
              <Heading size="md">Botones</Heading>
            </CardHeader>
            <CardBody>
              <HStack spacing={4} wrap="wrap">
                <Button colorScheme="brand">Botón Principal</Button>
                <Button variant="secondary">Botón Secundario</Button>
                <Button variant="alternative">Botón Alternativo</Button>
                <Button variant="outline" colorScheme="brand">Botón Outline</Button>
                <Button variant="ghost" colorScheme="brand">Botón Ghost</Button>
              </HStack>
            </CardBody>
          </Card>

          {/* Badges */}
          <Card>
            <CardHeader>
              <Heading size="md">Badges</Heading>
            </CardHeader>
            <CardBody>
              <HStack spacing={4} wrap="wrap">
                <Badge colorScheme="brand" variant="solid">Principal</Badge>
                <Badge colorScheme="secondary" variant="solid">Secundario</Badge>
                <Badge colorScheme="alternative" variant="solid">Alternativo</Badge>
                <Badge colorScheme="brand" variant="outline">Outline</Badge>
                <Badge colorScheme="brand" variant="subtle">Subtle</Badge>
              </HStack>
            </CardBody>
          </Card>

          {/* Typography */}
          <Card>
            <CardHeader>
              <Heading size="md">Tipografía</Heading>
            </CardHeader>
            <CardBody>
              <VStack align="start" spacing={4}>
                <Heading size="4xl" color="brand.500">Heading 4xl</Heading>
                <Heading size="3xl" color="secondary.500">Heading 3xl</Heading>
                <Heading size="2xl" color="alternative.500">Heading 2xl</Heading>
                <Heading size="xl">Heading xl</Heading>
                <Heading size="lg">Heading lg</Heading>
                <Heading size="md">Heading md</Heading>
                <Text fontSize="lg">Texto grande</Text>
                <Text fontSize="md">Texto mediano</Text>
                <Text fontSize="sm" color="gray.600">Texto pequeño</Text>
              </VStack>
            </CardBody>
          </Card>

          {/* Cards Example */}
          <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
            <GridItem>
              <Card>
                <CardHeader>
                  <Heading size="md" color="brand.500">Card Principal</Heading>
                </CardHeader>
                <CardBody>
                  <Text>
                    Este es un ejemplo de card con el color principal del tema.
                    Muestra cómo se ve el diseño con los colores personalizados.
                  </Text>
                  <Button mt={4} colorScheme="brand" size="sm">
                    Acción
                  </Button>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem>
              <Card>
                <CardHeader>
                  <Heading size="md" color="secondary.500">Card Secundario</Heading>
                </CardHeader>
                <CardBody>
                  <Text>
                    Este card usa el color secundario para demostrar
                    la consistencia del tema en diferentes componentes.
                  </Text>
                  <Button mt={4} variant="secondary" size="sm">
                    Acción
                  </Button>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem>
              <Card>
                <CardHeader>
                  <Heading size="md" color="alternative.500">Card Alternativo</Heading>
                </CardHeader>
                <CardBody>
                  <Text>
                    El color alternativo se usa para destacar
                    elementos importantes o de éxito en la interfaz.
                  </Text>
                  <Button mt={4} variant="alternative" size="sm">
                    Acción
                  </Button>
                </CardBody>
              </Card>
            </GridItem>
          </Grid>

          <Divider />

          {/* Footer */}
          <Box textAlign="center" py={4}>
            <Text color="gray.500">
              Proyecto creado con Vite + React + TypeScript + Chakra UI
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default ThemeShowcase
