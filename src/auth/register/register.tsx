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
  FormErrorMessage,
  Link as ChakraLink
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, FieldProps } from 'formik'
import { useForm } from './useForm'
import { useSubmit } from './useSubmit'

const Register = (): JSX.Element => {
  const { initialValues, validationSchema } = useForm()
  const { handleSubmit } = useSubmit()

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
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <VStack spacing={6}>

                    <Field name="name">
                      {({ field, form }: FieldProps) => (
                        <FormControl isInvalid={!!(form.errors.name && form.touched.name)}>
                          <FormLabel>Nombre completo</FormLabel>
                          <Input {...field} type="text" placeholder="Tu nombre completo" />
                          <FormErrorMessage>{form.errors.name as string}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    <Field name="email">
                      {({ field, form }: FieldProps) => (
                        <FormControl isInvalid={!!(form.errors.email && form.touched.email)}>
                          <FormLabel>Email</FormLabel>
                          <Input {...field} type="email" placeholder="tu@email.com" />
                          <FormErrorMessage>{form.errors.email as string}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    
                    <Field name="password">
                      {({ field, form }: FieldProps) => (
                        <FormControl isInvalid={!!(form.errors.password && form.touched.password)}>
                          <FormLabel>Contraseña</FormLabel>
                          <Input {...field} type="password" placeholder="••••••••" />
                          <FormErrorMessage>{form.errors.password as string}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    <Field name="confirmPassword">
                      {({ field, form }: FieldProps) => (
                        <FormControl isInvalid={!!(form.errors.confirmPassword && form.touched.confirmPassword)}>
                          <FormLabel>Confirmar contraseña</FormLabel>
                          <Input {...field} type="password" placeholder="••••••••" />
                          <FormErrorMessage>{form.errors.confirmPassword as string}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    <Button 
                      type="submit" 
                      colorScheme="brand" 
                      size="lg" 
                      w="full"
                      isLoading={isSubmitting}
                      loadingText="Creando cuenta..."
                    >
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
                </Form>
              )}
            </Formik>
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
