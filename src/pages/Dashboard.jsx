import { MainLayout } from "../components/Layout/MainLayout";
import { SidebarProvider } from "../context/SidebarContext";
import { UserProvider } from "../context/UserContext";
import { DashbordGrid } from "../components/Courses/DashboardGrid";

function Dashboard() {
  return (
    <UserProvider>
      <SidebarProvider>
        <MainLayout>
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center justify-between relative">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900">
                Courses
              </h2>
            </div>

            <DashbordGrid />
          </div>
        </MainLayout>
      </SidebarProvider>
    </UserProvider>
  );
}

export default Dashboard;
