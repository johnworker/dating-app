export default function ProfileCard({
  data,
  actionLabel = '配對',
  onAction,
  index = 0,          // 傳入卡片順序，用以延遲
}) {
  return (
    <div
      className="bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition p-4 flex flex-col
                 opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <img
        src={data.avatar || '/src/assets/images/default-avatar.png'}
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