import React from 'react'
import useFetch from '../../hooks/useFetch'
import { fetchProfiles } from '../../api/profile'
import Spinner from '../Common/Spinner'
import ProfileCard from '../Profile/ProfileCard'

export default function RecommendationSection() {
  const { data, loading, error } = useFetch(fetchProfiles, [])

  // 防禦式轉換
  const profiles = Array.isArray(data)
    ? data
    : Array.isArray(data?.profiles)
      ? data.profiles
      : []

  // 靜態示範資料（示範用 gender 欄位）
  const placeholders = [
    { id: 'p1', name: 'Amy', bio: '熱愛旅行與美食', gender: 'female' },
    { id: 'p2', name: 'Ben', bio: '喜歡電影與音樂', gender: 'male' },
    { id: 'p3', name: 'Cindy', bio: '健身達人，運動狂', gender: 'female' },
    { id: 'p4', name: 'David', bio: '科技新創工程師', gender: 'male' },
    { id: 'p5', name: 'Eva', bio: '喜愛藝術與設計', gender: 'female' },
    { id: 'p6', name: 'Frank', bio: '自由攝影師', gender: 'male' },
  ]

  const list = (profiles.length > 0 ? profiles : placeholders).slice(0, 6)

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <Spinner />
      </section>
    )
  }
  if (error) {
    return (
      <section className="py-20 bg-gray-50">
        <p className="text-center text-red-500">載入失敗：{error.message}</p>
      </section>
    )
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
              onAction={() => console.log('配對', user.name)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
