import React from 'react'
import useFetch from '../hooks/useFetch'
import { fetchMatches } from '../api/match'
import Spinner from '../components/Common/Spinner'
import ProfileCard from '../components/Profile/ProfileCard'

export default function Matches() {
  const { data: matches = [], loading, error } = useFetch(fetchMatches, [])

  if (loading) return <Spinner />
  if (error) return <p className="text-red-500 text-center">載入失敗：{error.message}</p>

  if (matches.length === 0) {
    return <p className="text-center mt-8">目前尚無配對。</p>
  }

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {matches.map((m, i) => (
        <ProfileCard
          key={m.id}
          data={m}
          index={i}
          actionLabel="傳訊息"
          onAction={() => {
            /* TODO: 導向聊天或其他行為 */
          }}
        />
      ))}
    </div>
  )
}