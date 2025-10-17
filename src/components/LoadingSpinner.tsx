import { 
  Box, 
  Spinner, 
  Text, 
  VStack,
  useColorModeValue
} from '@chakra-ui/react'
import { useLoading } from '../context/LoadingContext'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  message?: string
  fullScreen?: boolean
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'xl', 
  message,
  fullScreen = false 
}) => {
  const { isLoading, loadingMessage } = useLoading()
  const bgColor = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.600', 'gray.300')

  // Si no está cargando, no mostrar nada
  if (!isLoading) return null

  const displayMessage = message || loadingMessage

  const spinnerContent = (
    <VStack spacing={4} align="center">
      <Spinner size={size} color="brand.500" thickness="4px" />
      <Text color={textColor} fontSize="md">
        {displayMessage}
      </Text>
    </VStack>
  )

  if (fullScreen) {
    return (
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg={bgColor}
        zIndex={9999}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {spinnerContent}
      </Box>
    )
  }

  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      bg={bgColor}
      zIndex={1000}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {spinnerContent}
    </Box>
  )
}

export default LoadingSpinner
