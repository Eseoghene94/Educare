import React from "react";
import Header from "../components/MainHeader";
import Sidebar from "../components/MainSideBar";
import MainContent from "../components/MainContent";
import Footer from "../components/MainFooter";

function Profile() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar (Fixed and Always Visible) */}
      <div className="fixed inset-y-0 left-0 w-16 lg:w-64 bg-white shadow-lg z-50">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 ml-16 lg:ml-64 overflow-hidden">
        {/* Header */}
        <Header />

        {/* Main Content (Scrollable if needed) */}
        <div className="flex-1 overflow-auto p-4">
          <MainContent />
        </div>

        {/* Footer (Fixed at Bottom) */}
        <Footer />
      </div>
    </div>
  );
}

export default Profile;
