import React from "react";
import {
  Home,
  LayoutDashboard,
  BookOpen,
  Users,
  ClipboardList,
  BarChart3,
  Download,
  Bell,
  BadgeDollarSign,
  ScrollText,
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-lg p-4 min-h-screen">
      <nav>
        <ul className="space-y-3 text-gray-700 font-medium">
          <li className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
            <Home size={20} /> <a href="/home">Home</a>
          </li>
          <li className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
            <LayoutDashboard size={20} /> <a href="/dashboard">Dashboard</a>
          </li>
          <li className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
            <BookOpen size={20} /> <a href="/my-courses">My Courses</a>
          </li>
          <li className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
            <Users size={20} /> <a href="/community">Community</a>
          </li>
          <li className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
            <ClipboardList size={20} /> <a href="/task">Task</a>
          </li>
          <li className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
            <BarChart3 size={20} /> <a href="/progress">Progress</a>
          </li>
          <li className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
            <Download size={20} /> <a href="/downloads">Downloads</a>
          </li>
          <li className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
            <BadgeDollarSign size={20} />{" "}
            <a href="/subscription">Subscription</a>
          </li>
          <li className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
            <ScrollText size={20} /> <a href="/scholarship">Scholarship</a>
          </li>
          <li className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
            <Bell size={20} /> <a href="/notifications">Notifications</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
