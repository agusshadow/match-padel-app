import { 
  Box, 
  Container, 
  VStack
} from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Shell = (): JSX.Element => {
  return (
    <Box minH="100vh" bg="gray.50">
      {/* Navbar - Full width with border bottom */}
      <Navbar />
      
      {/* Content - Constrained width and padding */}
      <Container maxW="container.xl" py={8}>
        <Outlet />
      </Container>
    </Box>
  )
}

export default Shell
