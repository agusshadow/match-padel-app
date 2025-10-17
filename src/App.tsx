import { RouterProvider } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { LoadingProvider } from './context/LoadingContext'
import LoadingSpinner from './components/LoadingSpinner'
import { router } from './router'

function App(): JSX.Element {
  return (
    <AuthProvider>
      <LoadingProvider>
        <RouterProvider router={router} />
        <LoadingSpinner fullScreen />
      </LoadingProvider>
    </AuthProvider>
  )
}

export default App
