import { useAuth } from "../context/AuthContext";
import DashboardLayout from "../components/layout/DashboardLayout";

import "./Profile.css";

const Profile = () => {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <div className="profile-header">
        <h1>Profile</h1>
        <p>Manage your account information</p>
      </div>

      <div className="profile-card">
        <h2>General Information</h2>

        <div className="profile-row">
          <span>Username</span>
          <strong>{user?.username}</strong>
        </div>

        <div className="profile-row">
          <span>Role</span>
          <strong>{user?.role}</strong>
        </div>
      </div>

      <div className="profile-card">
        <h2>Account Information</h2>

        <div className="profile-row">
          <span>Access Level</span>
          <strong>{user?.role}</strong>
        </div>

        <div className="profile-row">
          <span>Status</span>
          <strong>Active</strong>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;