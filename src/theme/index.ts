import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      50: '#E6EDF7',
      100: '#CCDBEF',
      200: '#99B7DF',
      300: '#6693CF',
      400: '#336FBF',
      500: '#2F57A4', // Principal
      600: '#264583',
      700: '#1C3362',
      800: '#132141',
      900: '#090F20',
    },
    secondary: {
      50: '#F0F4FA',
      100: '#E1E9F5',
      200: '#C3D3EB',
      300: '#A5BDE1',
      400: '#87A7D7',
      500: '#6C8CC7', // Secundario
      600: '#5670A0',
      700: '#415479',
      800: '#2B3852',
      900: '#161C2B',
    },
    alternative: {
      50: '#E8F5E8',
      100: '#D1EBD1',
      200: '#A3D7A3',
      300: '#75C375',
      400: '#47AF47',
      500: '#29A34E', // Alternativo
      600: '#21823E',
      700: '#19612E',
      800: '#10401F',
      900: '#081F0F',
    },
    gray: {
      50: '#FFFFFF',
      100: '#F2F2F2', // Gris
      200: '#E5E5E5',
      300: '#D8D8D8',
      400: '#CCCCCC',
      500: '#BFBFBF',
      600: '#999999',
      700: '#737373',
      800: '#4D4D4D',
      900: '#262626',
    },
  },
  fonts: {
    heading: 'Inter, system-ui, sans-serif',
    body: 'Inter, system-ui, sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.800',
      },
    },
  },
  components: {
    Button: {
      variants: {
        solid: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
          },
        },
        secondary: {
          bg: 'secondary.500',
          color: 'white',
          _hover: {
            bg: 'secondary.600',
          },
        },
        alternative: {
          bg: 'alternative.500',
          color: 'white',
          _hover: {
            bg: 'alternative.600',
          },
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          bg: 'white',
          border: '1px solid',
          borderColor: 'gray.200',
          borderRadius: 'lg',
          boxShadow: 'sm',
        },
      },
    },
  },
})

export default theme
