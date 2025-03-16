import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function TeacherSignup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [cvFile, setCvFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      // Validate file type
      if (
        file.type === "application/pdf" ||
        file.type === "application/msword" ||
        file.type ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {
        setCvFile(file); // Set the file if it's valid
      } else {
        alert("Please upload a valid file type (PDF or DOC).");
        e.target.value = ""; // Clear the input if the file type is invalid
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create FormData object to collect all form inputs
    const formData = new FormData(e.currentTarget);

    // Append the CV file to the form data if it exists
    if (cvFile) {
      formData.append("cv", cvFile);
    }

    // Log form data for debugging
    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }

    console.log("Form submitted!");
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
            Empowering learners, transforming futures.
          </p>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="w-full lg:w-1/2 flex justify-center items-center p-8">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
          <h3 className="text-2xl font-semibold text-center">Teacher Signup</h3>
          <p className="text-gray-500 text-sm text-center">
            Fill in your details to get started with EduCare.
          </p>

          {/* Signup Form */}
          <form className="mt-6" onSubmit={handleSubmit}>
            {/* Full Name */}
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name" // Add name attribute for FormData
              className="w-full border border-gray-300 rounded-lg p-2 mb-4"
              required
            />

            {/* Email Address */}
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email" // Add name attribute for FormData
              className="w-full border border-gray-300 rounded-lg p-2 mb-4"
              required
            />

            {/* Password */}
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium"
            >
              Password
            </label>
            <div className="relative mb-4">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password" // Add name attribute for FormData
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

            {/* Confirm Password */}
            <label
              htmlFor="confirm-password"
              className="block mb-2 text-sm font-medium"
            >
              Confirm Password
            </label>
            <div className="relative mb-4">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirm-password"
                name="confirmPassword" // Add name attribute for FormData
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

            {/* Expertise */}
            <label
              htmlFor="expertise"
              className="block mb-2 text-sm font-medium"
            >
              Expertise (e.g., Math, Science, English)
            </label>
            <input
              type="text"
              id="expertise"
              name="expertise" // Add name attribute for FormData
              className="w-full border border-gray-300 rounded-lg p-2 mb-4"
              required
            />

            {/* Certifications */}
            <label
              htmlFor="certifications"
              className="block mb-2 text-sm font-medium"
            >
              Certifications (e.g., TEFL, TESOL, State License)
            </label>
            <input
              type="text"
              id="certifications"
              name="certifications" // Add name attribute for FormData
              className="w-full border border-gray-300 rounded-lg p-2 mb-4"
              required
            />

            {/* CV Upload */}
            <label htmlFor="cv" className="block mb-2 text-sm font-medium">
              Upload CV (PDF or DOC)
            </label>
            <input
              type="file"
              id="cv"
              name="cv" // Add name attribute for FormData
              className="w-full border border-gray-300 rounded-lg p-2 mb-4"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              required
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white text-lg font-semibold py-3 mt-6 rounded-lg hover:bg-blue-700"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TeacherSignup;
