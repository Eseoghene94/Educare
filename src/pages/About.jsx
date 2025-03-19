import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Assuming you are using react-router-dom for navigation
import { LiaTimesSolid } from "react-icons/lia"; // Importing the close icon
import { IoMenuOutline } from "react-icons/io5"; // Importing the menu icon
import {
  BookOpen,
  Users,
  Trophy,
  Target,
  Heart,
  GraduationCap,
} from "lucide-react";
import Footer from "../components/Footer";

// Floating Icons Component
function FloatingIcons() {
  const icons = [BookOpen, Users, Trophy, Target, Heart, GraduationCap];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {icons.map((Icon, index) => (
        <div
          key={index}
          className="absolute text-blue-200 opacity-50 animate-float"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          <Icon className="w-12 h-12" />
        </div>
      ))}
    </div>
  );
}

// ValueCard Component
function ValueCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

// Main App Component
function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Floating Icons */}
      <FloatingIcons />

      {/* Header Section */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <GraduationCap className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-bold text-gray-900">EduCARE</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/about" className="text-gray-600 hover:text-gray-900">
                About us
              </Link>
              <Link
                to="/programs"
                className="text-gray-600 hover:text-gray-900"
              >
                Programs
              </Link>
              <Link to="/profile" className="text-gray-600 hover:text-gray-900">
                Profile
              </Link>
              <Link
                to="/teacher-signup"
                className="text-gray-600 hover:text-gray-900"
              >
                Become a Teacher
              </Link>
              <Link
                to="/login"
                className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors"
              >
                Login
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              {menuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {menuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="/about"
                  className="block px-3 py-2 text-gray-600 hover:text-gray-900"
                >
                  About us
                </Link>
                <Link
                  to="/programs"
                  className="block px-3 py-2 text-gray-600 hover:text-gray-900"
                >
                  Programs
                </Link>
                <Link
                  to="/profile"
                  className="block px-3 py-2 text-gray-600 hover:text-gray-900"
                >
                  Profile
                </Link>
                <Link
                  to="/teacher-signup"
                  className="block px-3 py-2 text-gray-600 hover:text-gray-900"
                >
                  Become a Teacher
                </Link>
                <Link
                  to="/login"
                  className="block px-3 py-2 bg-blue-600 text-white rounded-full text-center font-medium hover:bg-blue-700 transition-colors"
                >
                  Login
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-blue-900/70"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About EduCARE
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Empowering minds, shaping futures, and fostering excellence in
            education since 2020
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            At EduCARE, we believe in the transformative power of education. Our
            mission is to provide accessible, high-quality education that
            empowers individuals to reach their full potential and make
            meaningful contributions to society.
          </p>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueCard
              icon={BookOpen}
              title="Excellence in Learning"
              description="We strive for academic excellence and continuous improvement in all our educational programs."
            />
            <ValueCard
              icon={Users}
              title="Inclusive Community"
              description="We foster a diverse and inclusive learning environment where every voice matters."
            />
            <ValueCard
              icon={Trophy}
              title="Achievement Focused"
              description="We celebrate and support the achievements of our students and educators."
            />
            <ValueCard
              icon={Target}
              title="Innovation"
              description="We embrace innovative teaching methods and modern educational technologies."
            />
            <ValueCard
              icon={Heart}
              title="Compassionate Care"
              description="We provide supportive care and guidance to help students thrive."
            />
            <ValueCard
              icon={GraduationCap}
              title="Lifelong Learning"
              description="We inspire a passion for continuous learning and personal growth."
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">5000+</div>
              <div className="text-gray-600">Students Enrolled</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-600">Expert Educators</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Student Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
