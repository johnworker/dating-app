import { useState, useEffect } from 'react'

/**
 * useFetch 會自動送出請求，並回傳 { data, loading, error }
 * @param {Function} asyncFn - 一支回傳 Promise 的 async 函式，如 fetchProfiles
 * @param {Array} deps - 當 deps 內的值變動時，重新發送請求
 */
export default function useFetch(asyncFn, deps = []) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    asyncFn()
      .then(res => {
        if (mounted) setData(res)
      })
      .catch(err => {
        if (mounted) setError(err)
      })
      .finally(() => {
        if (mounted) setLoading(false)
      })
    return () => {
      mounted = false
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return { data, loading, error }
}
