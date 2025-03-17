import React, { useState } from "react";
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
  LogOut,
  Menu,
  X,
} from "lucide-react";

function Sidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(true); // Sidebar starts open

  return (
    <aside
      className={`h-screen flex flex-col justify-between bg-white shadow-lg p-2 transition-all duration-300 ${
        isSidebarOpen ? "w-64" : "w-16"
      }`}
    >
      {/* Toggle Button (Now Inside Sidebar) */}
      <button
        className="flex items-center justify-center p-3 rounded-md bg-gray-800 text-white mx-auto mb-4"
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X size={14} /> : <Menu size={14} />}
      </button>

      {/* Navigation Links */}
      <nav className="flex-1 overflow-hidden">
        <ul className="space-y-3 text-gray-700 font-medium">
          {[
            { name: "Home", icon: <Home size={22} />, link: "/" },
            {
              name: "Dashboard",
              icon: <LayoutDashboard size={22} />,
              link: "/dashboard",
            },
            {
              name: "My Courses",
              icon: <BookOpen size={22} />,
              link: "/my-courses",
            },
            {
              name: "Community",
              icon: <Users size={22} />,
              link: "/community",
            },
            { name: "Task", icon: <ClipboardList size={22} />, link: "/task" },
            {
              name: "Progress",
              icon: <BarChart3 size={22} />,
              link: "/progress",
            },
            {
              name: "Downloads",
              icon: <Download size={22} />,
              link: "/downloads",
            },
            {
              name: "Subscription",
              icon: <BadgeDollarSign size={22} />,
              link: "/subscription",
            },
            {
              name: "Scholarship",
              icon: <ScrollText size={22} />,
              link: "/scholarship",
            },
            {
              name: "Notifications",
              icon: <Bell size={22} />,
              link: "/notifications",
            },
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer"
            >
              {item.icon}
              {isSidebarOpen && <a href={item.link}>{item.name}</a>}
            </li>
          ))}
        </ul>
      </nav>
      {/* Logout Button (Fixed at Bottom) */}
      <button className="flex rounded-full mb-10 items-center space-x-3 p-2 bg-clr-primary text-white w-full">
        <LogOut size={22} />
        {isSidebarOpen && <span>Logout</span>}
      </button>
    </aside>
  );
}

export default Sidebar;
