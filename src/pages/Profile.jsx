import { useState } from "react";
import { MainLayout } from "../components/Layout/MainLayout";
import { CourseGrid } from "../components/Courses/CourseGrid";
import { SidebarProvider } from "../context/SidebarContext";
import { UserProvider } from "../context/UserContext";
import { Eye, EyeOff } from "lucide-react";

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <UserProvider>
      <SidebarProvider>
        <MainLayout>
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center justify-between relative">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900">
                Courses
              </h2>

              {/* Dropdown Button */}
              <button
                className="flex justify-between items-center gap-1 text-gray-600 hover:text-gray-900 border-clr-primary border-2 w-48 h-10 rounded-sm p-2 "
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                View All{" "}
                {isDropdownOpen ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <ul className="absolute right-0 mt-2 top-10 w-48 bg-white border border-gray-200 rounded-lg shadow-md z-10">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    View All
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Architecture
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Photography
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Art
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Cybersecurity
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Content Writing
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Auto-Mechanic
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    UI/UX Design
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Finance
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Dance
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Baker
                  </li>
                </ul>
              )}
            </div>

            <CourseGrid />
          </div>
        </MainLayout>
      </SidebarProvider>
    </UserProvider>
  );
}

export default App;
