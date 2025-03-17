// Profile.jsx
import React from "react";
import Header from "../components/MainHeader";
import Sidebar from "../components/MainSideBar";
import MainContent from "../components/MainContent";
import Footer from "../components/MainFooter";
// import Notifications from "../components/Notifications";

function Profile() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <MainContent />
      </div>

      {/* Footer */}
      <Footer />

      {/* Notifications (Optional) */}
      {/* <Notifications /> */}
    </div>
  );
}

export default Profile;
