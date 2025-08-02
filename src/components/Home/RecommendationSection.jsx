import React, { useEffect, useState } from 'react'
import ProfileCard from '../Profile/ProfileCard'
import { fetchProfiles } from '../../api/profile'
import Spinner from '../Common/Spinner'

export default function RecommendationSection() {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      try {
        const profiles = await fetchProfiles()
        // 簡單示範：取前 6 位作為熱門推薦
        setList(profiles.slice(0, 6))
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  if (loading) return <Spinner />

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in-up">
          熱門推薦
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((u, i) => (
            <ProfileCard
              key={u.id}
              data={u}
              index={i}
              actionLabel="配對"
              onAction={() => {}}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
