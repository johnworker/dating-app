import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import useFetch from '../../hooks/useFetch'
import useAuth from '../../hooks/useAuth'
import { fetchProfiles } from '../../api/profile'
import { postMatch } from '../../api/match'
import Spinner from '../Common/Spinner'
import ProfileCard from '../Profile/ProfileCard'

// 將 avatar 欄位直接指向 assets 內的真實照片
import male1 from '../../assets/images/avatars/male1.jpg'
import male2 from '../../assets/images/avatars/male2.jpg'
import male3 from '../../assets/images/avatars/male3.jpg'
import female1 from '../../assets/images/avatars/female1.jpg'
import female2 from '../../assets/images/avatars/female2.jpg'
import female3 from '../../assets/images/avatars/female3.jpg'

export default function RecommendationSection() {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuth()
  const { data, loading, error } = useFetch(fetchProfiles, [])

  // 確保 data 轉成陣列
  const profiles = Array.isArray(data)
    ? data
    : Array.isArray(data?.profiles)
      ? data.profiles
      : []

  // 示範資料：3 男 + 3 女，並帶上 avatar 欄位
  const placeholders = [
    { id: 'p1', name: 'Alex',  bio: '旅遊愛好者',       avatar: male1 },
    { id: 'p2', name: 'Brian', bio: '電影狂熱分子',   avatar: male2 },
    { id: 'p3', name: 'Chris', bio: '自由街頭藝術家', avatar: male3 },
    { id: 'p4', name: 'Diana', bio: '健身教練',       avatar: female1 },
    { id: 'p5', name: 'Eva',   bio: '美食烘焙師',     avatar: female2 },
    { id: 'p6', name: 'Fiona', bio: '攝影師',         avatar: female3 },
  ]

  // 若後端有資料就用後端，否則顯示 placeholders
  const list = (profiles.length > 0 ? profiles : placeholders).slice(0, 6)

  if (loading) return <Spinner />
  if (error) return (
    <p className="text-center text-red-500">載入失敗：{error.message}</p>
  )

  const handleMatch = async user => {
    if (!isAuthenticated) {
      toast.info('請先登入才能配對')
      return navigate('/login')
    }
    try {
      await postMatch(user.id)
      toast.success(`${user.name} 已成功配對！`)
    } catch (err) {
      console.error(err)
      toast.error(err.response?.data?.message || '配對失敗')
    }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in-up">
          🔥 熱門推薦
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((user, i) => (
            <ProfileCard
              key={user.id}
              data={user}
              index={i}
              actionLabel="配對"
              onAction={() => handleMatch(user)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}