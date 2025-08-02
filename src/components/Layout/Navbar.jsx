import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
return (
    <nav className={`fixed w-full top-0 z-50 transition-colors 
                     ${scrolled?'bg-white shadow':'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:underline">MyDatingApp</Link>
        <div className="space-x-6">
          <Link to="/dashboard" className="hover:underline underline-offset-4">配對列表</Link>
          <Link to="/profile" className="hover:underline underline-offset-4">我的檔案</Link>
          <Link to="/login" className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            登入
          </Link>
        </div>
      </div>
    </nav>
  )
}
