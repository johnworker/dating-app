import React, { useState } from 'react'
import Input from '../Common/Input'
import Button from '../Common/Button'

export default function ProfileForm({ initialData, onSave }) {
  const [form, setForm] = useState({
    name: initialData?.name || '',
    bio: initialData?.bio || '',
    avatar: initialData?.avatar || '',
    gender: initialData?.gender || '',
  })

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    onSave(form)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1">暱稱</label>
        <Input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="請輸入暱稱"
        />
      </div>

      <div>
        <label className="block mb-1">性別</label>
        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          className="w-full border rounded p-2"
        >
          <option value="">選擇性別</option>
          <option value="male">男</option>
          <option value="female">女</option>
        </select>
      </div>

      <div>
        <label className="block mb-1">個人介紹</label>
        <textarea
          name="bio"
          value={form.bio}
          onChange={handleChange}
          className="w-full border rounded p-2 h-24"
          placeholder="寫點自我介紹吧"
        />
      </div>

      <div>
        <label className="block mb-1">頭像 URL</label>
        <Input
          name="avatar"
          value={form.avatar}
          onChange={handleChange}
          placeholder="請輸入圖片網址"
        />
      </div>

      <Button type="submit" className="mt-4">
        儲存檔案
      </Button>
    </form>
  )
}