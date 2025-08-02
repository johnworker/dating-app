import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-screen bg-hero bg-cover bg-center flex items-center justify-center">
      {/* 半透明遮罩 */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* 文字區塊淡入動畫 */}
      <div className="relative text-center text-white px-4 animate-fade-in-up">
        <h1 className="text-5xl font-bold mb-4">遇見真實的你</h1>
        <p className="mb-6 text-lg">打造專屬的交友配對體驗</p>

        {/* 呼叫按鈕加上脈動動畫 */}
        <Link
          to="/register"
          className="px-8 py-3 bg-pink-500 rounded-full text-white font-semibold 
                     hover:bg-pink-600 transition animate-pulse hover:animate-none"
        >
          立即註冊
        </Link>
      </div>
    </section>
  )
}