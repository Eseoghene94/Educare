import React from "react";

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Welcome Gloria</h1>
          <p className="text-sm">EducARE</p>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search for Courses, stories & mentors..."
            className="px-4 py-2 rounded-lg text-black"
          />
          <nav className="ml-6">
            <ul className="flex space-x-4">
              <li>
                <a href="/home" className="hover:text-blue-200">
                  Home
                </a>
              </li>
              <li>
                <a href="/courses" className="hover:text-blue-200">
                  Courses
                </a>
              </li>
              <li>
                <a href="/dashboard" className="hover:text-blue-200">
                  Dashboard
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
