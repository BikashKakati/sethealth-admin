import { useState } from "react"
import brainImage from "@/assets/img/brain-img.png";
import { ArrowRight, AtSign, Lock } from "lucide-react";
const SignIn: React.FC = () => {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login attempted with:', email, password)
  }
  return (
    <div className="h-screen flex items-center">
      {/* Login Form Column */}
      <div className="lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-blue-900 mb-8">Welcome Back</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <AtSign className="absolute top-3 left-3 text-blue-500" size={20} />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
            </div>
            <div className="relative">
              <Lock className="absolute top-3 left-3 text-blue-500" size={20} />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
            >
              Login
              <ArrowRight className="ml-2" size={20} />
            </button>
          </form>
          <p className="mt-6 text-center text-blue-800">
            Don't have an account?{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>

      <div className="hidden lg:flex w-1/2 relative bg-gradient-to-br from-blue-400 to-blue-600 h-full items-center justify-center">
        <div className="w-[28rem] absolute -left-[7rem] top-[1rem]">
          <img
            src={brainImage}
            alt="Brain visualization"
            className="img-contain"
          />
        </div>
        <div className="text-white text-center">
          <h2 className="text-4xl font-bold mb-4">HealthTech AI</h2>
          <p className="text-xl line-clam-2">Revolutionizing healthcare with cutting-edge technology</p>
        </div>
      </div>
    </div>
  )
}

export default SignIn