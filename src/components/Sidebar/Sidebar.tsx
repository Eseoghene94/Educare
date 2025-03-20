import React from "react";
import {
  Home,
  LayoutDashboard,
  GraduationCap,
  Users,
  ListTodo,
  TrendingUp,
  Download,
  CreditCard,
  School,
  FileText,
  Bell,
  LogOut,
} from "lucide-react";
import { Link } from "./SidebarLink";
import { useSidebar } from "../../context/SidebarContext";
import { useAuth } from "../../context/AuthContext"; // Import AuthContext (Assuming you're using context for auth)
import { useNavigate } from "react-router-dom"; // Import Next.js router

export function Sidebar() {
  const { isExpanded } = useSidebar();
  const { logout } = useAuth(); // Get the logout function from AuthContext
  const navigate = useNavigate(); // Use Next.js router for redirection

  const handleLogout = async () => {
    try {
      await logout(); // Call the logout function
      navigate("/signin"); // Redirect to the login page after logout
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const menuItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: GraduationCap, label: "My courses", href: "/my-courses" },
    { icon: Users, label: "Community", href: "/community" },
    { icon: ListTodo, label: "Task", href: "/task" },
    { icon: TrendingUp, label: "Progress", href: "/progress" },
    { icon: Download, label: "Downloads", href: "/downloads" },
    { icon: CreditCard, label: "Subscription", href: "/subscription" },
    { icon: School, label: "Scholarship", href: "/scholarship" },
    { icon: FileText, label: "Policy", href: "/policy" },
    { icon: Bell, label: "Notifications", href: "/notifications" },
  ];

  return (
    <aside
      className={`bg-white border-r border-gray-200 h-screen fixed left-0 ${isExpanded ? "top-[4rem] md:top-0" : "top-0"} flex flex-col justify-between items-center scrollbar-hidden transition-all duration-300 w-20 ${isExpanded && "w-14 md:w-64"}`}
    >
      <div className="p-4 overflow-y-auto scrollbar-hidden">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            Icon={item.icon}
            label={item.label}
            href={item.href}
            isExpanded={isExpanded}
          />
        ))}
      </div>
      <div className=" p-4 border-t border-gray-200">
        <button
          onClick={handleLogout}
          className="hidden  w-full md:flex items-center gap-2 text-white bg-clr-primary p-2 rounded-md"
        >
          <LogOut size={20} />
          {isExpanded && <span>Logout</span>}
        </button>
        <button
          onClick={handleLogout}
          className="md:hidden -mt-[7.5rem] w-full flex items-center gap-2 text-white bg-clr-primary p-2 rounded-md"
        >
          <LogOut size={20} />
        </button>
      </div>
    </aside>
  );
}
