import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

import "./DashboardLayout.css";

interface LayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] =
    useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="dashboard-layout">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
      />

      <div className="dashboard-main">
        <Navbar onMenuClick={toggleSidebar} />

        <main className="dashboard-content">
          {children}
        </main>
      </div>

      {isSidebarOpen && (
        <div
          className="overlay"
          onClick={closeSidebar}
        />
      )}
    </div>
  );
};

export default DashboardLayout;