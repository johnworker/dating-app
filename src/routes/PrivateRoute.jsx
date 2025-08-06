import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Spinner from '../components/Common/Spinner'

export default function PrivateRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    // 還在確認登入狀態，先顯示 spinner 或空白
    return <div className="flex justify-center mt-20"><Spinner /></div>
  }

  if (!isAuthenticated) {
    // 確認過後，若未登入，才導到 /login
    return <Navigate to="/login" replace />
  }

  // 已登入，呈現受保護內容
  return children
}