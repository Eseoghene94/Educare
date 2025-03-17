import React from "react";
import Header from "../components/MainHeader";
import Sidebar from "../components/MainSideBar";
import MainContent from "../components/MainContent";
import Footer from "../components/MainFooter";
// import Notifications from "../components/Notifications";

function Profile() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar (Fixed on the left) */}
      <Sidebar className="w-64 flex-shrink-0" />

      {/* Right Section (Header + Main Content) */}
      <div className="flex flex-col flex-1">
        {/* Header (Full Width at the Top) */}
        <Header />

        {/* Main Content (Takes Remaining Space) */}
        <div className="flex-1 overflow-auto p-4">
          <MainContent />
        </div>

        {/* Footer (Always at the Bottom) */}
        <Footer className="w-full" />
      </div>

      {/* Notifications (Optional) */}
      {/* <Notifications /> */}
    </div>
  );
}

export default Profile;
