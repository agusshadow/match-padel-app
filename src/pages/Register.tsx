import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  Button, 
  VStack, 
  HStack,
  FormControl,
  FormLabel,
  Input,
  Link as ChakraLink
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Register = (): JSX.Element => {
  return (
    <Box minH="100vh" bg="gray.50">
      <Container maxW="md" py={8}>
        <VStack spacing={8} minH="80vh" justify="center">
          {/* Header */}
          <VStack spacing={4} textAlign="center">
            <Heading as="h1" size="2xl" color="brand.500">
              Crear Cuenta
            </Heading>
            <Text color="gray.600">
              Únete a la comunidad de Match Padel
            </Text>
          </VStack>

          {/* Register Form */}
          <Box w="full" bg="white" p={8} borderRadius="lg" boxShadow="sm">
            <VStack spacing={6}>
              <FormControl>
                <FormLabel>Nombre completo</FormLabel>
                <Input type="text" placeholder="Tu nombre completo" />
              </FormControl>

              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="tu@email.com" />
              </FormControl>
              
              <FormControl>
                <FormLabel>Contraseña</FormLabel>
                <Input type="password" placeholder="••••••••" />
              </FormControl>

              <FormControl>
                <FormLabel>Confirmar contraseña</FormLabel>
                <Input type="password" placeholder="••••••••" />
              </FormControl>

              <Button colorScheme="brand" size="lg" w="full">
                Crear Cuenta
              </Button>

              <HStack spacing={2}>
                <Text fontSize="sm" color="gray.600">
                  ¿Ya tienes cuenta?
                </Text>
                <ChakraLink as={Link} to="/login" color="brand.500" fontSize="sm">
                  Inicia sesión aquí
                </ChakraLink>
              </HStack>
            </VStack>
          </Box>

          {/* Back to Landing */}
          <ChakraLink as={Link} to="/" color="gray.500" fontSize="sm">
            ← Volver al inicio
          </ChakraLink>
        </VStack>
      </Container>
    </Box>
  )
}

export default Register
