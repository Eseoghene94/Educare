import React, { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { GoogleLogin } from "@react-oauth/google";

function Signin() {
  const { login, handleGoogleLogin } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Typing animation state
  const [text, setText] = useState("");
  const fullText = "Empowering learners, transforming futures.";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      // Attempt login and log the attempt
      await login(email, password);
      // If login succeeds, you might redirect or update state in AuthContext
    } catch (err) {
      setError(err.message || "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full">
      {/* Left Side */}
      <div
        className="hidden lg:flex w-1/2 bg-cover bg-center flex-col justify-center items-center text-white p-12"
        style={{ backgroundImage: "url('/home-background.jpg')" }}
      >
        <h2 className="text-5xl font-bold">Welcome to EduCare</h2>
        <p className="mt-4 text-lg">Feels good to have you back.</p>
        <div className="mt-6 w-3/4 text-center">
          <p className="text-xl font-semibold">
            {text}
            <span className="animate-blink">|</span>
          </p>
        </div>
      </div>

      {/* Right Side - Signin Form */}
      <div className="w-full lg:w-1/2 flex justify-center items-center p-8">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
          <h3 className="text-2xl font-semibold text-center">Welcome Back</h3>
          <p className="text-gray-500 text-sm text-center">
            We are happy to have you back...
          </p>

          <form className="mt-6" onSubmit={handleSubmit}>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Enter email address
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-lg p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
            />

            <label
              htmlFor="password"
              className="block mt-4 mb-2 text-sm font-medium"
            >
              Enter password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full border border-gray-300 rounded-lg p-2 pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
              />
              <span
                className="absolute right-3 top-3 cursor-pointer text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            <button
              type="submit"
              className={`w-full bg-blue-600 text-white text-lg font-semibold py-3 mt-6 rounded-lg hover:bg-blue-700 ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          {/* OR Separator */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-3 text-gray-500">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Google Login */}
          <div className="flex flex-col items-center space-y-2">
            <GoogleLogin
              onSuccess={handleGoogleLogin}
              onError={() => {
                console.error("Google Login Error");
                setError("Google login failed. Please try again.");
              }}
            />
          </div>

          {/* Signup Link */}
          <p className="text-center text-sm text-gray-500 mt-4">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-500 font-semibold">
              Create account!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signin;
