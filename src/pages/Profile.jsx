import ProfileForm from '../components/Profile/ProfileForm'
import useFetch from '../hooks/useFetch'
import { fetchProfiles } from '../api/profile'
import Spinner from '../components/Common/Spinner'

export default function Profile() {
  const { data: profiles, loading, error } = useFetch(fetchProfiles, [])

  if (loading) return <Spinner />
  if (error) return <p className="text-red-500">載入失敗：{error.message}</p>

  const myProfile = profiles.find(p => p.isMine) || profiles[0]

  return (
    <section className="bg-section bg-cover bg-center py-12">
      <div className="max-w-lg mx-auto bg-white bg-opacity-90 backdrop-blur-md 
                      rounded-lg p-8 animate-fade-in-up">
        <h1 className="text-2xl font-bold mb-4">我的個人檔案</h1>
        <ProfileForm initialData={myProfile} onSaved={() => {}} />
      </div>
    </section>
  )
}
