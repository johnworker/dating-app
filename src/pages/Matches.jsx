import useFetch from '../hooks/useFetch'
import { fetchMatches } from '../api/match'
import Spinner from '../components/Common/Spinner'
import ProfileCard from '../components/Profile/ProfileCard'

export default function Matches() {
  const { data: matches, loading, error } = useFetch(fetchMatches, [])

  if (loading) return <Spinner />
  if (error) return <p className="text-red-500">載入失敗：{error.message}</p>

  if (matches.length === 0) {
    return <p className="text-center mt-8">目前還沒有任何配對喔！</p>
  }

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {matches.map((u, i) => (
          <ProfileCard
            key={u.id}
            data={u}
            index={i}
            actionLabel="傳訊息"
            onAction={() => {/* ... */}}
          />
        ))}
      </div>
    </section>
  )
}