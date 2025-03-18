import { MainLayout } from "../components/Layout/MainLayout";
import { CourseGrid } from "../components/Courses/CourseGrid";
import { SidebarProvider } from "../context/SidebarContext";
import { UserProvider } from "../context/UserContext";

function App() {
  return (
    <UserProvider>
      <SidebarProvider>
        <MainLayout>
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900">
                Courses
              </h2>
              <button className="text-gray-600 hover:text-gray-900">
                View All
              </button>
            </div>
            <CourseGrid />
          </div>
        </MainLayout>
      </SidebarProvider>
    </UserProvider>
  );
}

export default App;
