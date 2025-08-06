import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register } from '../../api/auth'
import { upsertProfile } from '../../api/profile'
import Input from '../Common/Input'
import Button from '../Common/Button'

export default function RegisterForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    if (!email || !password) {
      toast.error('請輸入電子郵件和密碼')
      return
    }
    try {
      // 註冊會員
      await register({ email, password })
      // 初始建立空白檔案
      await upsertProfile({ name, bio: '', avatar: '', gender: '' })
      toast.success('註冊成功，已自動建立基本檔案！')
      navigate('/dashboard', { replace: true })
    } catch (err) {
      toast.error(`註冊失敗：${err.message}`)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow animate-fade-in-up"
    >
      <h2 className="text-2xl font-semibold mb-4">使用者註冊</h2>

      <label className="block mb-1">電子郵件</label>
      <Input
        type="email"
        placeholder="請輸入電子郵件"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <label className="block mt-4 mb-1">密碼</label>
      <Input
        type="password"
        placeholder="請輸入密碼"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <label className="block mt-4 mb-1">暱稱</label>
      <Input
        type="text"
        placeholder="請輸入暱稱"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <Button type="submit" className="mt-6 w-full">
        註冊並登入
      </Button>
    </form>
  )
}