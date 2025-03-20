import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function TeacherSignup() {
  // State management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    phone: "",
    dob: "",
    gender: "",
    expertise: "",
    experience: "",
    certifications: "",
    linkedin: "",
    twitter: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [cvFile, setCvFile] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle CV file upload
  const handleCvChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const validTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (validTypes.includes(file.type)) {
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

  // Handle profile picture upload
  const handleProfilePictureChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const validTypes = ["image/jpeg", "image/png"];
      if (validTypes.includes(file.type)) {
        if (file.size <= 2 * 1024 * 1024) {
          // 2MB limit
          setProfilePicture(file);
        } else {
          alert("Profile picture must be less than 2MB.");
          e.target.value = "";
        }
      } else {
        alert("Please upload a valid image (JPEG or PNG).");
        e.target.value = "";
      }
    }
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.password || formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!formData.phone || !/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Valid 10-digit phone number is required";
    if (!formData.dob) newErrors.dob = "Date of birth is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.expertise) newErrors.expertise = "Expertise is required";
    if (!formData.experience) newErrors.experience = "Experience is required";
    if (!formData.certifications)
      newErrors.certifications = "Certifications are required";
    if (!cvFile) newErrors.cv = "CV is required";
    if (!profilePicture)
      newErrors.profilePicture = "Profile picture is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validateForm()) {
      setIsLoading(false);
      return;
    }

    // Prepare form data for submission
    const submissionData = new FormData();
    Object.keys(formData).forEach((key) => {
      submissionData.append(key, formData[key]);
    });
    if (cvFile) submissionData.append("cv", cvFile);
    if (profilePicture) submissionData.append("profilePicture", profilePicture);

    try {
      const response = await fetch(
        "http://localhost:5000/api/admin/teacher/register",
        {
          method: "POST",
          body: submissionData,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const result = await response.json();

      if (response.ok) {
        alert("Teacher registered successfully!");
        // Reset form
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          address: "",
          phone: "",
          dob: "",
          gender: "",
          expertise: "",
          experience: "",
          certifications: "",
          linkedin: "",
          twitter: "",
        });
        setCvFile(null);
        setProfilePicture(null);
        setErrors({});
        e.target.reset(); // Reset form inputs
      } else {
        throw new Error(result.message || "Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
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

          <form className="mt-6" onSubmit={handleSubmit}>
            {/* Form Fields */}
            {[
              { id: "name", label: "Full Name", type: "text" },
              { id: "address", label: "Address", type: "textarea" },
              { id: "phone", label: "Phone Number", type: "tel" },
              { id: "dob", label: "Date of Birth", type: "date" },
              {
                id: "gender",
                label: "Gender",
                type: "select",
                options: [
                  { value: "", label: "Select Gender" },
                  { value: "male", label: "Male" },
                  { value: "female", label: "Female" },
                  { value: "other", label: "Other" },
                ],
              },
              { id: "email", label: "Email Address", type: "email" },
              {
                id: "password",
                label: "Password",
                type: "password",
                showToggle: true,
                toggleState: showPassword,
                toggleFunc: setShowPassword,
              },
              {
                id: "confirmPassword",
                label: "Confirm Password",
                type: "password",
                showToggle: true,
                toggleState: showConfirmPassword,
                toggleFunc: setShowConfirmPassword,
              },
              {
                id: "expertise",
                label: "Expertise (e.g., Math, Science)",
                type: "text",
              },
              {
                id: "experience",
                label: "Teaching Experience (years)",
                type: "number",
              },
              { id: "certifications", label: "Certifications", type: "text" },
            ].map((field) => (
              <div key={field.id} className="mb-4">
                <label
                  htmlFor={field.id}
                  className="block mb-2 text-sm font-medium"
                >
                  {field.label}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    id={field.id}
                    name={field.id}
                    value={formData[field.id]}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-2"
                    rows="3"
                    required
                  />
                ) : field.type === "select" ? (
                  <select
                    id={field.id}
                    name={field.id}
                    value={formData[field.id]}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg p-2"
                    required
                  >
                    {field.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <div className="relative">
                    <input
                      type={
                        field.showToggle
                          ? field.toggleState
                            ? "text"
                            : "password"
                          : field.type
                      }
                      id={field.id}
                      name={field.id}
                      value={formData[field.id]}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg p-2 pr-10"
                      required
                      {...(field.type === "number" ? { min: "0" } : {})}
                    />
                    {field.showToggle && (
                      <span
                        className="absolute right-3 top-3 cursor-pointer text-gray-600"
                        onClick={() => field.toggleFunc(!field.toggleState)}
                      >
                        {field.toggleState ? (
                          <EyeOff size={20} />
                        ) : (
                          <Eye size={20} />
                        )}
                      </span>
                    )}
                  </div>
                )}
                {errors[field.id] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors[field.id]}
                  </p>
                )}
              </div>
            ))}

            {/* File Uploads */}
            <div className="mb-4">
              <label
                htmlFor="profilePicture"
                className="block mb-2 text-sm font-medium"
              >
                Profile Picture
              </label>
              <input
                type="file"
                id="profilePicture"
                name="profilePicture"
                onChange={handleProfilePictureChange}
                accept=".jpg,.jpeg,.png"
                className="w-full border border-gray-300 rounded-lg p-2"
                required
              />
              {errors.profilePicture && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.profilePicture}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="cv" className="block mb-2 text-sm font-medium">
                Upload CV (PDF or DOC)
              </label>
              <input
                type="file"
                id="cv"
                name="cv"
                onChange={handleCvChange}
                accept=".pdf,.doc,.docx"
                className="w-full border border-gray-300 rounded-lg p-2"
                required
              />
              {errors.cv && (
                <p className="text-red-500 text-sm mt-1">{errors.cv}</p>
              )}
            </div>

            {/* Social Links */}
            {[
              { id: "linkedin", label: "LinkedIn Profile" },
              { id: "twitter", label: "Twitter Profile" },
            ].map((field) => (
              <div key={field.id} className="mb-4">
                <label
                  htmlFor={field.id}
                  className="block mb-2 text-sm font-medium"
                >
                  {field.label}
                </label>
                <input
                  type="url"
                  id={field.id}
                  name={field.id}
                  value={formData[field.id]}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg p-2"
                  placeholder={`https://${field.id}.com/username`}
                />
              </div>
            ))}

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
              disabled={isLoading}
              className={`w-full bg-blue-600 text-white text-lg font-semibold py-3 mt-6 rounded-lg hover:bg-blue-700 ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? "Submitting..." : "Create Account"}
            </button>

            {/* Sign In Link */}
            <p className="text-center text-sm text-gray-500 mt-4">
              Already have an account?{" "}
              <a href="/signin" className="text-blue-500 font-semibold">
                Sign in!
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TeacherSignup;
