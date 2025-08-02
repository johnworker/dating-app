import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../api/auth'
import { setToken } from '../../utils/jwt'
import Input from '../Common/Input'
import Button from '../Common/Button'
import { toast } from 'react-toastify'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const nav = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    try {
      const { token } = await login(email, password)
      setToken(token)
      toast.success('登入成功！')
      nav('/dashboard')
    } catch (err) {
      toast.error(err.response?.data?.message || '登入失敗')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="密碼"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Button type="submit" disabled={loading}>
        {loading ? '登入中...' : '登入'}
      </Button>
    </form>
  )
}
