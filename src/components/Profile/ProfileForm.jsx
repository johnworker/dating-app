// 完整版 src/components/Profile/ProfileForm.jsx

import { useState, useEffect } from 'react'
import Input from '../Common/Input'
import Button from '../Common/Button'
import { createProfile, editProfile, fetchProfiles } from '../../api/profile'
import { toast } from 'react-toastify'

export default function ProfileForm({ initialData = {}, onSaved }) {
  const [form, setForm] = useState({
    name: '',
    bio: '',
    avatar: '',
    ...initialData,
  })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // 如果想要載入現有資料
    if (initialData.id) {
      setForm(initialData)
    }
  }, [initialData])

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    try {
      let saved
      if (form.id) {
        saved = await editProfile(form.id, form)
      } else {
        saved = await createProfile(form)
      }
      toast.success('儲存成功！')
      onSaved && onSaved(saved)
    } catch (err) {
      toast.error(err.response?.data?.message || '儲存失敗')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded shadow">
      <Input
        name="name"
        placeholder="姓名"
        value={form.name}
        onChange={handleChange}
      />
      <Input
        name="bio"
        placeholder="自我介紹"
        value={form.bio}
        onChange={handleChange}
      />
      <Input
        name="avatar"
        placeholder="頭像 URL"
        value={form.avatar}
        onChange={handleChange}
      />
      <Button type="submit" disabled={loading}>
        {loading ? '儲存中…' : '儲存檔案'}
      </Button>
    </form>
  )
}
