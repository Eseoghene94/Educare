import React, { useState } from "react";

import { Search, Menu } from "lucide-react";
import { UserProfile } from "./UserProfile";
import { useSidebar } from "../../context/SidebarContext";

const data = [
  { type: "Course", title: "Data Analytics" },
  { type: "Course", title: "Animation for Beginners" },
  { type: "Course", title: "Cybersecurity Fundamentals" },
  { type: "Course", title: "Advanced UI/UX Design" },
  { type: "Course", title: "Financial Literacy for Kids" },
  { type: "Course", title: "Photography 101" },
];

export function Header() {
  const { isExpanded, toggleSidebar } = useSidebar();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState(
    [] as Array<{ type: string; title: string }>,
  );

  // Handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      const results = data.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()),
      );
      setFilteredResults(results);
    } else {
      setFilteredResults([]);
    }
  };

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
              placeholder="Search for Courses, Stories & Mentors..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-[300px] lg:w-[400px] h-10 pl-10 pr-4 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500"
            />
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            {/* Search Results Dropdown */}
            {filteredResults.length > 0 && (
              <ul className="absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                {filteredResults.map((item, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {item.title} ({item.type})
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <UserProfile />
      </div>
    </header>
  );
}
