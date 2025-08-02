import { useState, useEffect } from 'react'
import { getToken } from '../utils/jwt'

export default function useAuth() {
  const [isAuthenticated, setIsAuth] = useState(false)

  useEffect(() => {
    setIsAuth(!!getToken())
  }, [])

  return { isAuthenticated }
}
