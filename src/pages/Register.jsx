import RegisterForm from '../components/Auth/RegisterForm'
export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">註冊新帳號</h2>
        <RegisterForm />
      </div>
    </div>
  )
}
