import DashboardLayout from "../components/layout/DashboardLayout";

import "./Settings.css";

const Settings = () => {
  return (
    <DashboardLayout>
      <div className="settings-header">
        <h1>Settings</h1>
        <p>
          Manage system preferences and administrative controls.
        </p>
      </div>

      <div className="settings-card">
        <h2>System Preferences</h2>

        <div className="setting-item">
          <span>Application Mode</span>

          <select>
            <option>Production</option>
            <option>Development</option>
          </select>
        </div>

        <div className="setting-item">
          <span>Notifications</span>

          <input type="checkbox" defaultChecked />
        </div>
      </div>

      <div className="settings-card">
        <h2>Admin Controls</h2>

        <button className="btn btn-secondary action-btn">
          Manage Users
        </button>

        <button className="btn btn-primary action-btn">
          View Audit Logs
        </button>
      </div>
    </DashboardLayout>
  );
};

export default Settings;