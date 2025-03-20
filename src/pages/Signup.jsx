import React, { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
// Assuming GoogleLogin is imported from a library like react-google-login
import { GoogleLogin } from "@react-oauth/google";

function Signup() {
  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  // UI state
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Typing animation state
  const [text, setText] = useState("");
  const fullText = "Empowering learners, transforming futures.";
  const [index, setIndex] = useState(0);

  // Typing animation effect
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Replace with your actual signup API call
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, password }),
      });

      if (!response.ok) {
        throw new Error("Signup failed");
      }
      // Handle successful signup (e.g., redirect to login)
    } catch (err) {
      setError(err.message);
    }
  };

  // Google login handler
  const handleGoogleLogin = (response) => {
    // Handle Google login success
    console.log("Google login success:", response);
  };

  return (
    <div className="flex min-h-screen w-full">
      {/* Left Side - Background Section */}
      <div
        className="hidden lg:flex w-1/2 bg-cover bg-center flex-col justify-center items-center text-white p-12"
        style={{ backgroundImage: "url('/home-background.jpg')" }}
      >
        <h2 className="text-5xl font-bold">Welcome to EduCare</h2>
        <p className="mt-4 text-lg">
          Start your journey by creating an account.
        </p>
        <div className="mt-6 w-3/4 text-center">
          <p className="text-xl font-semibold">
            {text}
            <span className="animate-blink">|</span>
          </p>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="w-full lg:w-1/2 flex justify-center items-center p-8">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
          <h3 className="text-2xl font-semibold text-center">
            Create your Account
          </h3>
          <p className="text-gray-500 text-sm text-center">
            Fill in your details to get started with EduCare.
          </p>

          {error && (
            <p className="text-red-500 text-sm text-center mt-4">{error}</p>
          )}

          {/* Signup Form */}
          <form className="mt-6" onSubmit={handleSubmit}>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Enter name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />

            <label
              htmlFor="email"
              className="block mt-4 mb-2 text-sm font-medium"
            >
              Enter email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />

            <label
              htmlFor="phone"
              className="block mt-4 mb-2 text-sm font-medium"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />

            {/* Password Input */}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 pr-10"
                required
              />
              <span
                className="absolute right-3 top-3 cursor-pointer text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>

            {/* Confirm Password Input */}
            <label
              htmlFor="confirm-password"
              className="block mt-4 mb-2 text-sm font-medium"
            >
              Confirm password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 pr-10"
                required
              />
              <span
                className="absolute right-3 top-3 cursor-pointer text-gray-600"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white text-lg font-semibold py-3 mt-6 rounded-lg hover:bg-blue-700"
            >
              Create Account
            </button>
          </form>

          {/* OR Separator */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-3 text-gray-500">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Social Login Buttons */}
          <div className="flex flex-col items-center space-y-2">
            <button className="w-full max-w-xs border border-gray-300 p-3 rounded-lg flex items-center justify-center space-x-2">
              <img src="/google-icon.png" alt="Google" className="w-5 h-5" />
              <span>Login with Google</span>
            </button>
            <button className="w-full max-w-xs border border-gray-300 p-3 rounded-lg flex items-center justify-center space-x-2">
              <img
                src="/facebook-icon.png"
                alt="Facebook"
                className="w-5 h-5"
              />
              <span>Login with Facebook</span>
            </button>
          </div>

          {/* Sign In Link */}
          <p className="text-center text-sm text-gray-500 mt-4">
            Already have an account?{" "}
            <a href="/signin" className="text-blue-500 font-semibold">
              Sign in!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
