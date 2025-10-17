import axios from 'axios'

// Configuración base de axios
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'

// Variable para almacenar la referencia al contexto de loading
let loadingContext: {
  showLoading: (message?: string) => void
  hideLoading: () => void
} | null = null

// Función para configurar el contexto de loading
export const setLoadingContext = (context: {
  showLoading: (message?: string) => void
  hideLoading: () => void
}) => {
  loadingContext = context
}

// Contador de requests activas
let activeRequests = 0

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Interceptor para agregar token a las requests y mostrar loading
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    
    // Incrementar contador de requests activas
    activeRequests++
    
    // Mostrar loading solo en la primera request
    if (activeRequests === 1 && loadingContext) {
      loadingContext.showLoading('Cargando...')
    }
    
    return config
  },
  (error) => {
    // Decrementar contador en caso de error en request
    activeRequests = Math.max(0, activeRequests - 1)
    if (activeRequests === 0 && loadingContext) {
      loadingContext.hideLoading()
    }
    return Promise.reject(error)
  }
)

// Interceptor para manejar respuestas y ocultar loading
api.interceptors.response.use(
  (response) => {
    // Decrementar contador de requests activas
    activeRequests = Math.max(0, activeRequests - 1)
    
    // Ocultar loading cuando no hay más requests activas
    if (activeRequests === 0 && loadingContext) {
      loadingContext.hideLoading()
    }
    
    return response
  },
  (error) => {
    // Decrementar contador en caso de error
    activeRequests = Math.max(0, activeRequests - 1)
    
    // Ocultar loading cuando no hay más requests activas
    if (activeRequests === 0 && loadingContext) {
      loadingContext.hideLoading()
    }
    
    if (error.response?.status === 401) {
      // Token expirado o inválido
      localStorage.removeItem('authToken')
      localStorage.removeItem('authUser')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default api
