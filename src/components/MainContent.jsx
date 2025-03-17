import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const courses = [
  {
    title: "Data Analytics 2.1",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Animation for Beginners",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Cybersecurity Fundamentals",
    image:
      "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Advanced UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Financial Literacy for Kids",
    image:
      "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Photography 101",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];

function MainContent() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("View All");

  const options = [
    "Architecture",
    "Art",
    "Business",
    "Finance",
    "Marketing",
    "Medicine",
    "Photography",
    "Science & Technology",
    "UI/UX Design",
    "Web Development",
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <main className="flex-1 p-6">
      {/* Dropdown Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Courses</h2>

        {/* Custom Dropdown */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center justify-between w-48 bg-white border p-2 rounded-lg hover:bg-gray-100 transition-all"
          >
            <span>{selectedOption}</span>
            {isDropdownOpen ? (
              <FaEyeSlash className="ml-2" />
            ) : (
              <FaEye className="ml-2" />
            )}
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute mt-2 w-48 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto z-10">
              {options.map((option, index) => (
                <div
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className="p-2 hover:bg-gray-100 cursor-pointer transition-all"
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={course.image}
              alt={course.title}
              className="rounded-lg mb-2 w-full h-40 object-cover"
            />
            <h3 className="text-lg font-bold">{course.title}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}

export default MainContent;
