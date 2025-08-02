import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { register } from '../../api/auth'
import Input from '../Common/Input'
import Button from '../Common/Button'
import { toast } from 'react-toastify'

export default function RegisterForm() {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const nav = useNavigate()

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    try {
      await register(form)
      toast.success('註冊成功，請登入！')
      nav('/login')
    } catch (err) {
      toast.error(err.response?.data?.message || '註冊失敗')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        name="name"
        placeholder="姓名"
        value={form.name}
        onChange={handleChange}
      />
      <Input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <Input
        name="password"
        type="password"
        placeholder="密碼"
        value={form.password}
        onChange={handleChange}
      />
      <Button type="submit" disabled={loading}>
        {loading ? '註冊中...' : '註冊'}
      </Button>
    </form>
  )
}
