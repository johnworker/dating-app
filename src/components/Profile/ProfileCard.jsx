import React from 'react'
import defaultAvatar from '../../assets/images/default-avatar.png'
import male1 from '../../assets/images/avatars/male1.jpg'
import male2 from '../../assets/images/avatars/male2.jpg'
import female1 from '../../assets/images/avatars/female1.jpg'
import female2 from '../../assets/images/avatars/female2.jpg'

/**
 * 根據 data.gender 決定要顯示哪一張預設頭像
 *   - male 隨機 male1/male2
 *   - female 隨機 female1/female2
 *   - 無 gender 或其他：顯示 defaultAvatar
 */
function getFallbackAvatar(gender) {
  if (gender === 'male') {
    return Math.random() < 0.5 ? male1 : male2
  }
  if (gender === 'female') {
    return Math.random() < 0.5 ? female1 : female2
  }
  return defaultAvatar
}

export default function ProfileCard({
  data,
  actionLabel = '配對',
  onAction,
  index = 0,
}) {
  const avatarSrc = data.avatar || getFallbackAvatar(data.gender)

  return (
    <div
      className="bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition p-4 flex flex-col
                 opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <img
        src={avatarSrc}
        alt={data.name}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="mt-2 text-xl font-semibold">{data.name}</h3>
      <p className="text-gray-600 flex-1">{data.bio}</p>
      <button
        onClick={onAction}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        {actionLabel}
      </button>
    </div>
  )
}