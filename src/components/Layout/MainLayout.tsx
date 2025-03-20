import React, { ReactNode } from "react";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import { useSidebar } from "../../context/SidebarContext";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const { isExpanded } = useSidebar();

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <Header />
      <main
        className={`pt-16 pl-20 transition-all duration-300 ${
          isExpanded && " pl-20 md:pl-64"
        }`}
      >
        <div className="p-4 md:p-6">{children}</div>
      </main>
    </div>
  );
}
