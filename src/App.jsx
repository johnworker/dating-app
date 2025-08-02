import Layout from './components/Layout/Layout'
import { useLocation } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'

export default function App() {
  const { pathname } = useLocation()
  // 只有根路徑才 showHero
  const showHero = pathname === '/'
  return (
    <Layout showHero={showHero}>
      <AppRoutes />
    </Layout>
  )
}