import React, { useState } from "react";
import { Link } from "react-router-dom"; // Assuming you are using react-router-dom for navigation

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              {/* <GraduationCap className="h-8 w-8 text-blue-600" /> */}
              <span className="text-xl font-bold text-gray-900">EduCARE</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-gray-600 hover:text-gray-900">
              About us
            </Link>
            <Link to="/programs" className="text-gray-600 hover:text-gray-900">
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
  );
}

export default Navigation;
