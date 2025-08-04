import React from 'react'
import registerIcon from '../../assets/images/register.svg'
import profileIcon  from '../../assets/images/profile.svg'
import matchIcon    from '../../assets/images/match.svg'

export default function FlowSection() {
  const steps = [
    { icon: registerIcon, title: '註冊帳號', desc: '填寫基本資訊，快速建立個人檔案。' },
    { icon: profileIcon,  title: '完善資料', desc: '上傳照片，撰寫自我介紹，展示真實的自己。' },
    { icon: matchIcon,    title: '開啟配對', desc: '瀏覽推薦對象，開始聊天與互動。' },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in-up">
          三步驟開始你的配對之旅
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-lg p-6 text-center opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${i * 200}ms` }}
            >
              <img
                src={step.icon}
                alt={step.title}
                className="w-60 h-60 mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}