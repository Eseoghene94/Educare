import React from "react";
import { Search } from "lucide-react";

function Header() {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-sm font-semibold">G</span>
          </div>
          <div>
            <h1 className="text-lg font-bold">EduCARE</h1>
          </div>
        </div>
        <div className="relative flex items-center w-full max-w-md">
          <Search className="absolute left-3 text-gray-500" size={18} />
          <input
            type="text"
            placeholder="Search for Courses, stories & mentors..."
            className="pl-10 pr-4 py-2 rounded-full border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
