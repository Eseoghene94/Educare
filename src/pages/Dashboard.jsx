import { MainLayout } from "../components/Layout/MainLayout";
import { SidebarProvider } from "../context/SidebarContext";
import { UserProvider } from "../context/UserContext";
import { DashbordGrid } from "../components/Courses/DashboardGrid";

const ExperienceCard = ({ role, type, years }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold">{role}</h3>
        <p className="text-sm font-bold text-gray-600">{type}</p>
      </div>
      <p className="text-sm font-bold">{years} years</p>
    </div>
  );
};
const ProfileExperience = () => {
  const experiences = [
    { role: "UI/UX Designer", type: "Freelance", years: 2 },
    { role: "Dance Tutor", type: "Contract", years: 1 },
    { role: "Artist", type: "Full-Time", years: 2 },
  ];

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <div className="flex gap-8">
        <img
          src="/profile1.png"
          alt="Profile 1"
          className="w-16 h-16 rounded-xl shadow-lg"
        />
        <img
          src="/profile2.png"
          alt="Profile 2"
          className="w-16 h-16 rounded-xl shadow-lg"
        />
      </div>
      <div className="bg-gray-100 p-6 rounded-xl shadow-lg w-80">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700">
        Connect
      </button>
    </div>
  );
};

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
            <ProfileExperience />
          </div>
        </MainLayout>
      </SidebarProvider>
    </UserProvider>
  );
}

export default Dashboard;
