import { createBrowserRouter } from 'react-router-dom'
import Landing from '../pages/Landing'
import Login from '../auth/login/login'
import Register from '../auth/register/register'
import Home from '../pages/Home'
import ThemeShowcase from '../components/ThemeShowcase'
import ProtectedRoute from '../components/ProtectedRoute'
import Shell from '../components/Shell'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/app',
    element: (
      <ProtectedRoute>
        <Shell />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  },
  {
    path: '/theme-showcase',
    element: <ThemeShowcase />,
  },
])
