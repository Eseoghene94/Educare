import React from "react";

function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4">
      <nav>
        <ul className="space-y-2">
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
            <a href="/view-all" className="hover:text-blue-200">
              View All
            </a>
          </li>
          <li>
            <a href="/dashboard" className="hover:text-blue-200">
              Dashboard
            </a>
          </li>
          <li>
            <a href="/my-courses" className="hover:text-blue-200">
              My courses
            </a>
          </li>
          <li>
            <a href="/community" className="hover:text-blue-200">
              Community
            </a>
          </li>
          <li>
            <a href="/task" className="hover:text-blue-200">
              Task
            </a>
          </li>
          <li>
            <a href="/progress" className="hover:text-blue-200">
              Progress
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
