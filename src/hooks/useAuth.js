import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'

export default function useAuth() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 1) 首次從 localStorage 載入 session
    supabase.auth
      .getSession()
      .then(({ data: { session } }) => {
        setUser(session?.user || null)
      })
      .finally(() => setLoading(false))

    // 2) 監聽登入/登出
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null)
      setLoading(false)
    })
    return () => sub.subscription.unsubscribe()
  }, [])

  return { user, isAuthenticated: Boolean(user), isLoading: loading }
}
