import React from "react";
import Header from "../components/MainHeader";
import Sidebar from "../components/MainSideBar";
import MainContent from "../components/MainContent";
import Footer from "../components/MainFooter";

function Profile() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar (Fixed) */}
      <Sidebar />

      {/* Main Content Area (Beside Sidebar) */}
      <div className="flex flex-col flex-1 ml-64">
        {/* Header (Appears at the top) */}
        <Header />

        {/* Main Content (Takes up remaining space) */}
        <div className="flex-1 p-4">
          <MainContent />
        </div>

        {/* Footer (Fixed at bottom) */}
        <Footer />
      </div>
    </div>
  );
}

export default Profile;
