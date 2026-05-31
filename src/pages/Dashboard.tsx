import { useAuth } from "../context/AuthContext";

import AdminPanel from "../components/dashboard/AdminPanel";
import EditorPanel from "../components/dashboard/EditorPanel";
import ViewerPanel from "../components/dashboard/ViewerPanel";

import DashboardLayout from "../components/layout/DashboardLayout";

import "./Dashboard.css";

const Dashboard = () => {
  const { user } = useAuth();

  const renderContent = () => {
    switch (user?.role) {
      case "Admin":
        return <AdminPanel />;
      case "Editor":
        return <EditorPanel />;
      case "Viewer":
        return <ViewerPanel />;
      default:
        return null;
    }
  };

  return (
    <DashboardLayout>
      <div className="dashboard-header">
        <h1>Welcome, {user?.username}</h1>
        <p>See what is happening on your dashboard</p>
      </div>

      {renderContent()}
    </DashboardLayout>
  );
};

export default Dashboard;