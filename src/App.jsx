import { useLocation } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import AppRoutes from './routes/AppRoutes'

export default function App() {
  const { pathname } = useLocation()
  const showHero = pathname === '/'  // 只有根路徑顯示 Hero
  return (
    <Layout showHero={showHero}>
      <AppRoutes />
    </Layout>
  )
}