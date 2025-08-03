import React from 'react'
import defaultAvatar from '../../assets/images/default-avatar.png'

export default function ProfileCard({
  data,
  actionLabel = '配對',
  onAction,
  index = 0,
}) {
  // data.avatar 一定最優先，示範資料裡會有 avatar 欄位
  const avatarSrc = data.avatar || defaultAvatar

  return (
    <div
      className="bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105
                 transition p-4 flex flex-col opacity-0 animate-fade-in-up"
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