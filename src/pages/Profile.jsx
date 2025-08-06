import React, { useEffect, useState } from 'react'
import { fetchMyProfile, upsertProfile } from '../api/profile'
import ProfileForm from '../components/Profile/ProfileForm'
import Spinner from '../components/Common/Spinner'
import { toast } from 'react-toastify'

export default function Profile() {
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 讀取現有檔案
    fetchMyProfile()
      .then(data => setProfile(data))
      .catch(err => toast.error(`載入失敗：${err.message}`))
      .finally(() => setLoading(false))
  }, [])

  const handleSave = async updated => {
    try {
      const saved = await upsertProfile(updated)
      setProfile(saved)
      toast.success('個人檔案更新成功！')
    } catch (err) {
      toast.error(`更新失敗：${err.message}`)
    }
  }

  if (loading) return <Spinner />

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h1 className="text-3xl mb-6">編輯個人檔案</h1>
      <ProfileForm initialData={profile} onSave={handleSave} />
    </div>
  )
}
