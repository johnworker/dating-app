import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 animate-fade-in-up">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* 關於我們 */}
        <div className="w-9/12">
          <h3 className="text-xl font-semibold mb-4 text-white">關於我們</h3>
          <p className="text-gray-400 leading-relaxed">
            MyDatingApp 致力於打造最真實、最安全的線上配對體驗，讓你輕鬆遇見志同道合的朋友。
          </p>
        </div>

        {/* 快速連結 */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">快速連結</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-white transition-colors">
                首頁
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:text-white transition-colors">
                配對列表
              </Link>
            </li>
            <li>
              <Link to="/profile" className="hover:text-white transition-colors">
                我的檔案
              </Link>
            </li>
            <li>
              <Link to="/matches" className="hover:text-white transition-colors">
                我的配對
              </Link>
            </li>
          </ul>
        </div>

        {/* 社群媒體 */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">關注我們</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-transform hover:scale-110"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-transform hover:scale-110"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-transform hover:scale-110"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* 底部版權 */}
      <div className="mt-12 border-t border-gray-700 pt-6">
        <p className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} MyDatingApp. All rights reserved.
        </p>
      </div>
    </footer>
  )
}