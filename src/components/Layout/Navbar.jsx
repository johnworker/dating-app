import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { logout } from '../../api/auth'
import Button from '../Common/Button'
import logo from '../../assets/images/logo.png'  // ← 匯入 Logo 圖片

export default function Navbar() {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate('/login', { replace: true })
  }

  return (
    <nav className="...">
{/* Logo 圖片，滑入放大 */}
        <Link to="/" className="transform transition-transform duration-200 hover:scale-110">
          <img src={logo} alt="MyDatingApp Logo" className="h-8" />
        </Link>
              <div className="space-x-4">
        {isAuthenticated ? (
          <>
            <Link to="/dashboard">配對列表</Link>
            <Link to="/profile">我的檔案</Link>      {/* ← 指向 /profile */}
            <Link to="/matches">我的配對</Link>
            <Button onClick={handleLogout}>登出</Button>
          </>
        ) : (
          <>
            <Link to="/login">登入</Link>
            <Link to="/register">註冊</Link>
          </>
        )}
      </div>
    </nav>
  )
}