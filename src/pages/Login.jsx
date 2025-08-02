import LoginForm from '../components/Auth/LoginForm'
export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">使用者登入</h2>
        <LoginForm />
      </div>
    </div>
  )
}
