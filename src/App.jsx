import { useLocation } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import AppRoutes from './routes/AppRoutes'

import { supabase } from './utils/supabaseClient'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

supabase.auth.onAuthStateChange((_event, session) => {
  // session 存在表示已登入，可儲存到 context / zustand
})

export default function App() {
  const { pathname } = useLocation()
  const showHero = pathname === '/'  // 只有根路徑顯示 Hero
  return (
    <Layout showHero={showHero}>
      <AppRoutes />
    </Layout>
  )
}