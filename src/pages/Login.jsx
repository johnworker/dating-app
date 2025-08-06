import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login } from '../api/auth'
import useAuth from '../hooks/useAuth'
import Input from '../components/Common/Input'
import Button from '../components/Common/Button'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { isAuthenticated } = useAuth()

  // 1️⃣ 用 useEffect，在 component render 完之後再做導頁
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard', { replace: true })
    }
  }, [isAuthenticated, navigate])

  const handleSubmit = async e => {
    e.preventDefault()
    if (!email || !password) {
      toast.error('請輸入電子郵件和密碼')
      return
    }
    try {
      await login({ email, password })
      toast.success('登入成功！')
      // 不要在這裡呼叫 navigate，等 useEffect 看到 isAuthenticated 變 true 再自動導頁
    } catch (err) {
      toast.error(`登入失敗：${err.message}`)
    }
  }

  return (
    <div className="flex justify-center mt-20">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-6 rounded-lg shadow animate-fade-in-up"
      >
        <h2 className="text-2xl font-semibold mb-4">使用者登入</h2>

        <label className="block mb-2">電子郵件</label>
        <Input
          type="email"
          placeholder="請輸入電子郵件"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <label className="block mt-4 mb-2">密碼</label>
        <Input
          type="password"
          placeholder="請輸入密碼"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <Button type="submit" className="mt-6 w-full">
          登入
        </Button>
      </form>
    </div>
  )
}