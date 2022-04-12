import {
  createContext,
  ReactNode,
  useContext,
} from 'react'
import useAuth from './hooks/useAuth'

interface AuthProviderProps {
  children: ReactNode
}

interface AuthContextProps {
  authenticated: boolean
  loading: boolean
  handleLogin: () => void
  handleLogout: () => void
}

const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {
  const { authenticated, loading, handleLogin, handleLogout } = useAuth()

  return (
    <AuthContext.Provider
      value={{ authenticated, loading, handleLogin, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  const context = useContext(AuthContext)

  return context
}
