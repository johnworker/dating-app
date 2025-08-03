import React from 'react'
import defaultAvatar from '../../assets/images/default-avatar.png'
import femaleAvatar  from '../../assets/images/female-avatar.png'

// 範例見證資料，帶上 gender 欄位
const testimonials = [
  {
    name: '小美',
    gender: 'female',
    quote: '透過這個平台，我認識了很多有趣的朋友，體驗非常棒！',
  },
  {
    name: '阿強',
    gender: 'male',
    quote: 'UI 設計乾淨、操作流暢，很快就找到契合的對象。',
  },
  {
    name: 'Claire',
    gender: 'female',
    quote: '推薦系統很準確，已經約出第一場見面！',
  },
]

export default function TestimonialSection() {
  return (
    <section
      className="py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/src/assets/images/testimonial-bg.jpg')" }}
    >
      <div className="bg-black bg-opacity-60 py-16">
        <div className="max-w-4xl mx-auto px-4 text-white">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in-up">
            使用者心聲
          </h2>
          <div className="space-y-12">
            {testimonials.map((t, i) => {
              // 根據 gender 選擇對應頭像
              const avatarSrc = t.gender === 'female'
                ? femaleAvatar
                : defaultAvatar
              return (
                <div
                  key={i}
                  className="flex items-center space-x-6 opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${i * 300}ms` }}
                >
                  <img
                    src={avatarSrc}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-white"
                  />
                  <div>
                    <p className="italic">“{t.quote}”</p>
                    <p className="mt-2 font-semibold">— {t.name}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}