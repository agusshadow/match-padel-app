import { createBrowserRouter } from 'react-router-dom'
import Landing from '../pages/Landing'
import Login from '../auth/login/login'
import Register from '../auth/register/register'
import Home from '../pages/Home'
import ThemeShowcase from '../components/ThemeShowcase'
import ProtectedRoute from '../components/ProtectedRoute'

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
    path: '/home',
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: '/theme-showcase',
    element: <ThemeShowcase />,
  },
])
