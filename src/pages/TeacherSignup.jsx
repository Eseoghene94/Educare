import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function TeacherSignup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [cvFile, setCvFile] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (
        file.type === "application/pdf" ||
        file.type === "application/msword" ||
        file.type ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {
        if (file.size <= 5 * 1024 * 1024) {
          // 5MB limit
          setCvFile(file);
        } else {
          alert("File size must be less than 5MB.");
          e.target.value = "";
        }
      } else {
        alert("Please upload a valid file type (PDF or DOC).");
        e.target.value = "";
      }
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email || !/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Invalid email address";
    if (!password || password.length < 8)
      newErrors.password = "Password must be at least 8 characters";
    if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Stop form submission if there are errors
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("address", document.getElementById("address").value);
    formData.append("phone", document.getElementById("phone").value);
    formData.append("dob", document.getElementById("dob").value);
    formData.append("gender", document.getElementById("gender").value);
    formData.append("expertise", document.getElementById("expertise").value);
    formData.append("experience", document.getElementById("experience").value);
    formData.append(
      "certifications",
      document.getElementById("certifications").value,
    );
    formData.append("linkedin", document.getElementById("linkedin").value);
    formData.append("twitter", document.getElementById("twitter").value);

    if (cvFile) {
      formData.append("cv", cvFile);
    }

    if (profilePicture) {
      formData.append("profilePicture", profilePicture);
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/admin/teacher/register",
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Add token if required
          },
        },
      );

      if (response.ok) {
        const data = await response.json();
        alert("Teacher registered successfully!");
        console.log("Teacher data:", data);
        // Reset form fields
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setCvFile(null);
        setProfilePicture(null);
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="flex min-h-screen w-full">
      {/* Left Side - Background Section */}
      <div
        className="hidden lg:flex w-1/2 bg-cover bg-center flex-col justify-center items-center text-white p-12 fixed h-screen"
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
      <div className="w-full lg:w-1/2 flex justify-center items-center p-8 ml-auto">
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
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 mb-4"
              required
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}

            {/* ADDRESS */}
            <label htmlFor="address" className="block mb-2 text-sm font-medium">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              className="w-full border border-gray-300 rounded-lg p-2 mb-4"
              rows="3"
              required
            ></textarea>

            {/* PHONE NUMBER */}
            <label htmlFor="phone" className="block mb-2 text-sm font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full border border-gray-300 rounded-lg p-2 mb-4"
              pattern="[0-9]{10}" // Example: 10-digit phone number
              required
            />

            {/* DOB */}
            <label htmlFor="dob" className="block mb-2 text-sm font-medium">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="w-full border border-gray-300 rounded-lg p-2 mb-4"
              required
            />

            {/* GENDER */}
            <label htmlFor="gender" className="block mb-2 text-sm font-medium">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              className="w-full border border-gray-300 rounded-lg p-2 mb-4"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            {/* Email Address */}
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 mb-4"
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}

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
                name="password"
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
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}

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
                name="confirmPassword"
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
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}

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
              name="expertise"
              className="w-full border border-gray-300 rounded-lg p-2 mb-4"
              required
            />

            {/* Teaching Experience */}
            <label
              htmlFor="experience"
              className="block mb-2 text-sm font-medium"
            >
              Teaching Experience (in years)
            </label>
            <input
              type="number"
              id="experience"
              name="experience"
              className="w-full border border-gray-300 rounded-lg p-2 mb-4"
              min="0"
              required
            />

            {/* Certifications */}
            <label
              htmlFor="certifications"
              className="block mb-2 text-sm font-medium"
            >
              Certifications (e.g. BSc, TEFL, TESOL, State License)
            </label>
            <input
              type="text"
              id="certifications"
              name="certifications"
              className="w-full border border-gray-300 rounded-lg p-2 mb-4"
              required
            />

            {/* Profile Pic */}
            <label
              htmlFor="profile-picture"
              className="block mb-2 text-sm font-medium"
            >
              Profile Picture
            </label>
            <input
              type="file"
              id="profile-picture"
              name="profilePicture"
              className="w-full border border-gray-300 rounded-lg p-2 mb-4"
              accept=".jpg,.jpeg,.png"
              onChange={(e) => {
                const file = e.target.files[0];
                if (
                  file &&
                  (file.type === "image/jpeg" || file.type === "image/png")
                ) {
                  setProfilePicture(file);
                } else {
                  alert("Please upload a valid image (JPEG or PNG).");
                  e.target.value = "";
                }
              }}
              required
            />

            {/* CV Upload */}
            <label htmlFor="cv" className="block mb-2 text-sm font-medium">
              Upload CV (PDF or DOC)
            </label>
            <input
              type="file"
              id="cv"
              name="cv"
              className="w-full border border-gray-300 rounded-lg p-2 mb-4"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              required
            />

            {/* Social Links */}
            <label
              htmlFor="linkedin"
              className="block mb-2 text-sm font-medium"
            >
              LinkedIn Profile
            </label>
            <input
              type="url"
              id="linkedin"
              name="linkedin"
              className="w-full border border-gray-300 rounded-lg p-2 mb-4"
              placeholder="https://linkedin.com/in/username"
            />

            <label htmlFor="twitter" className="block mb-2 text-sm font-medium">
              Twitter Profile
            </label>
            <input
              type="url"
              id="twitter"
              name="twitter"
              className="w-full border border-gray-300 rounded-lg p-2 mb-4"
              placeholder="https://twitter.com/username"
            />

            {/* Terms and Conditions */}
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="mr-2"
                required
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the{" "}
                <a href="#" className="text-blue-500">
                  terms and conditions
                </a>
                .
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white text-lg font-semibold py-3 mt-6 rounded-lg hover:bg-blue-700"
            >
              Create Account
            </button>
            <div>
              {/* Sign In Link */}
              <p className="text-center text-sm text-gray-500 mt-4">
                Already have an account?{" "}
                <a href="/signin" className="text-blue-500 font-semibold">
                  Sign in!
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TeacherSignup;
