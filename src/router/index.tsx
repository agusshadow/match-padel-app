import { createBrowserRouter } from 'react-router-dom'
import Landing from '../components/Landing'
import Login from '../auth/login/login'
import Register from '../auth/register/register'
import Home from '../components/Home'
import Profile from '../profile/Profile'
import Matches from '../matches/Matches'
import CreateMatch from '../matches/create/CreateMatch'
import MatchDetail from '../matches/MatchDetail'
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
      },
      {
        path: 'profile',
        element: <Profile />
      },
      {
        path: 'matches',
        element: <Matches />
      },
      {
        path: 'matches/create',
        element: <CreateMatch />
      },
      {
        path: 'matches/:id',
        element: <MatchDetail />
      }
    ]
  },
  {
    path: '/theme-showcase',
    element: <ThemeShowcase />,
  },
])
