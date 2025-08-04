import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'  // ← 匯入 Logo 圖片

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-colors ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo 圖片，滑入放大 */}
        <Link to="/" className="transform transition-transform duration-200 hover:cursor-pointer hover:scale-105">
          <img src={logo} alt="MyDatingApp Logo" className="h-16" />
        </Link>

        <div className="space-x-6 flex items-center">
          {[
            { to: '/dashboard', label: '配對列表' },
            { to: '/profile',   label: '我的檔案' },
            { to: '/matches',   label: '我的配對' },
            { to: '/login',     label: '登入',      button: true },
          ].map((item, idx) =>
            item.button ? (
              <Link
                key={idx}
                to={item.to}
                className="px-4 py-1 bg-blue-500 text-white rounded 
                           transform transition-transform duration-200
                           hover:scale-105"
              >
                {item.label}
              </Link>
            ) : (
              <Link
                key={idx}
                to={item.to}
                className="text-gray-800 transform transition-transform duration-200
                           hover:scale-110"
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  )
}