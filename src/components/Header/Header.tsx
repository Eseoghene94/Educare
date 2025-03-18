import React from "react";

import { Search, Menu } from "lucide-react";
import { UserProfile } from "./UserProfile";
import { useSidebar } from "../../context/SidebarContext";

export function Header() {
  const { isExpanded, toggleSidebar } = useSidebar();

  return (
    <header
      className={`h-16 fixed top-0 right-0 bg-white border-b border-gray-200 z-10 transition-all duration-300 ${isExpanded ? "left-0 md:left-64" : "left-20"}`}
    >
      <div className="h-full flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4 md:gap-8">
          <div className="flex items-center gap-3">
            <button
              onClick={toggleSidebar}
              className="hover:bg-gray-100 p-2 rounded-lg transition-colors"
              aria-label="Toggle sidebar"
            >
              <Menu size={24} />
            </button>
            <h1 className="text-xl md:text-2xl font-bold">EduCARE</h1>
          </div>
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search for Courses, stories & mentors..."
              className="w-[300px] lg:w-[400px] h-10 pl-10 pr-4 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500"
            />
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
        </div>
        <UserProfile />
      </div>
    </header>
  );
}
