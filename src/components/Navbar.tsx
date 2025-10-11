import {
  Box,
  HStack,
  Button,
  Text,
  VStack,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  useBreakpointValue,
  Image
} from '@chakra-ui/react'
import { useAuth } from '../context/AuthContext'
import { Link, useLocation } from 'react-router-dom'

interface MenuItem {
  path: string
  label: string
  icon: string
  color: string
  disabled: boolean
}

const Navbar = (): JSX.Element => {
  const { user, logout } = useAuth()
  const location = useLocation()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const isMobile = useBreakpointValue({ base: true, md: false })

  const menuItems: MenuItem[] = [
    {
      path: '/app',
      label: 'Home',
      icon: '',
      color: 'gray',
      disabled: false
    },
    {
      path: '/app/matches',
      label: 'Matches',
      icon: '',
      color: 'gray',
      disabled: true
    },
    {
      path: '/app/tournaments',
      label: 'Tournaments',
      icon: '',
      color: 'gray',
      disabled: true
    },
    {
      path: '/app/profile',
      label: 'Perfil',
      icon: '',
      color: 'gray',
      disabled: false
    }
  ]

  const isActive = (path: string) => {
    if (path === '/app') {
      return location.pathname === '/app'
    }
    return location.pathname.startsWith(path)
  }

  const MobileMenuContent = () => (
    <VStack spacing={4} align="stretch">
      {/* User Info */}
      <Box p={4} bg="brand.50" borderRadius="md">
        <Text fontSize="sm" fontWeight="semibold" color="brand.700">
          {user?.name}
        </Text>
        <Text fontSize="xs" color="brand.600">
          {user?.email}
        </Text>
      </Box>

      {/* Menu Items */}
      <VStack spacing={2} align="stretch">
        {menuItems.map((item) => (
          <Button
            key={item.path}
            as={item.disabled ? 'button' : Link}
            {...(item.disabled ? {} : { to: item.path })}
            colorScheme={item.color}
            variant={isActive(item.path) ? "solid" : "ghost"}
            size="sm"
            justifyContent="flex-start"
            isDisabled={item.disabled}
            onClick={item.disabled ? undefined : onClose}
            opacity={item.disabled ? 0.5 : 1}
          >
            {item.label}
          </Button>
        ))}
      </VStack>

      {/* Logout Button */}
      <Button
        colorScheme="red"
        variant="outline"
        size="sm"
        onClick={logout}
        mt={4}
      >
        Cerrar Sesión
      </Button>
    </VStack>
  )

  if (isMobile) {
    return (
      <>
        {/* Mobile Navbar */}
        <HStack justify="space-between" w="full" p={4} bg="white" borderRadius="lg" boxShadow="sm">
          {/* App Logo */}
          <HStack spacing={2}>
            <Image src="/src/assets/logo.png" alt="Match Padel" h="32px" />
          </HStack>

          {/* Mobile Menu Button */}
          <IconButton
            aria-label="Open menu"
            icon={<Text>☰</Text>}
            onClick={onOpen}
            variant="outline"
            colorScheme="brand"
          />
        </HStack>

        {/* Mobile Drawer */}
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">
              <HStack spacing={2}>
                <Image src="/src/assets/logo.png" alt="Match Padel" h="24px" />
              </HStack>
            </DrawerHeader>
            <DrawerBody>
              <MobileMenuContent />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  return (
    <HStack justify="space-between" w="full" p={4} bg="white" borderRadius="lg" boxShadow="sm">
      {/* App Logo */}
      <HStack spacing={2}>
        <Image src="/src/assets/logo.png" alt="Match Padel" h="32px" />
      </HStack>

      {/* Desktop Menu Items */}
      <HStack spacing={2}>
        {menuItems.map((item) => (
          <Button
            key={item.path}
            as={item.disabled ? 'button' : Link}
            {...(item.disabled ? {} : { to: item.path })}
            colorScheme={item.color}
            variant={isActive(item.path) ? "solid" : "ghost"}
            size="sm"
            isDisabled={item.disabled}
            opacity={item.disabled ? 0.5 : 1}
          >
            {item.label}
          </Button>
        ))}
      </HStack>

      {/* User Info and Logout */}
      <HStack spacing={3}>
        {/* User Name */}
        <Text fontSize="sm" color="gray.600" fontWeight="medium">
          {user?.name}
        </Text>
        
        {/* Logout Button */}
        <Button
          colorScheme="red"
          variant="outline"
          size="sm"
          onClick={logout}
        >
          Cerrar Sesión
        </Button>
      </HStack>
    </HStack>
  )
}

export default Navbar
