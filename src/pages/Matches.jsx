import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import useFetch from '../hooks/useFetch'
import { fetchMatches } from '../api/match'
import Spinner from '../components/Common/Spinner'
import ProfileCard from '../components/Profile/ProfileCard'

export default function Matches() {
  const { isAuthenticated } = useAuth()
  const { data: matches = [], loading, error } = useFetch(fetchMatches, [])

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  if (loading) return <Spinner />
  if (error) return <p className="text-red-500 text-center">{error.message}</p>
  if (matches.length === 0) return <p className="text-center mt-8">目前尚無配對。</p>

  return (
    <div className="grid ...">
      {matches.map((m, i) => (
        <ProfileCard key={m.id} data={m.target} index={i} actionLabel="傳訊息" />
      ))}
    </div>
  )
}