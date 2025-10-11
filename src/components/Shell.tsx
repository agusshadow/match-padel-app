import { 
  Box, 
  Container, 
  VStack
} from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

const Shell = (): JSX.Element => {
  return (
    <Box minH="100vh" bg="gray.50">
      <Container maxW="container.xl" py={8}>
        <VStack spacing={8} align="stretch">
          {/* Menu - To be implemented */}
          
          {/* Content */}
          <Outlet />
        </VStack>
      </Container>
    </Box>
  )
}

export default Shell
