import React from 'react'
import useFetch from '../hooks/useFetch'
import { fetchProfiles } from '../api/profile'
import Spinner from '../components/Common/Spinner'
import ProfileCard from '../components/Profile/ProfileCard'

export default function Dashboard() {
  // 這裡把 useFetch 回傳的 data 重新命名成 profiles，並幫它加一個預設空陣列
  const { data: profiles = [], loading, error } = useFetch(fetchProfiles, [])

  if (loading) return <Spinner />
  if (error) return <p className="text-red-500">載入失敗：{error.message}</p>

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {profiles.map((p, i) => (
        <ProfileCard
          key={p.id}
          data={p}
          index={i}
          onAction={() => { /* 你的按鈕行為 */ }}
        />
      ))}
    </div>
  )
}
