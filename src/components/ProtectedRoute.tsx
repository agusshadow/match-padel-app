import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { Box, Spinner, VStack, Text } from '@chakra-ui/react'

interface ProtectedRouteProps {
  children: React.ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth()

  // Mostrar spinner mientras se verifica la autenticación
  if (isLoading) {
    return (
      <Box minH="100vh" display="flex" alignItems="center" justifyContent="center">
        <VStack spacing={4}>
          <Spinner size="xl" color="brand.500" />
          <Text color="gray.600">Verificando autenticación...</Text>
        </VStack>
      </Box>
    )
  }

  // Si no está autenticado, redirigir al login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  // Si está autenticado, mostrar el contenido
  return <>{children}</>
}

export default ProtectedRoute
