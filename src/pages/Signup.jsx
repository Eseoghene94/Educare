import React, { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Typing animation state
  const [text, setText] = useState("");
  const fullText = "Empowering learners, transforming futures.";
  const [index, setIndex] = useState(0);

  // Typing animation logic
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 50); // Adjust typing speed here (milliseconds per character)

      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

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
            <span className="animate-blink">|</span>{" "}
            {/* Blinking cursor effect */}
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

          {/* Signup Form */}
          <form className="mt-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Enter name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-lg p-2"
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
              className="w-full border border-gray-300 rounded-lg p-2"
            />
            <label
              htmlFor="Phone Number"
              className="block mt-4 mb-2 text-sm font-medium"
            >
              Phone
            </label>
            <input
              type="numeric"
              id="number"
              className="w-full border border-gray-300 rounded-lg p-2"
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
                className="w-full border border-gray-300 rounded-lg p-2 pr-10"
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
                className="w-full border border-gray-300 rounded-lg p-2 pr-10"
              />
              <span
                className="absolute right-3 top-3 cursor-pointer text-gray-600"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>

            <button className="w-full bg-blue-600 text-white text-lg font-semibold py-3 mt-6 rounded-lg hover:bg-blue-700">
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
            <a href="/Signin" className="text-blue-500 font-semibold">
              Sign in!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
