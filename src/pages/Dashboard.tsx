import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard</h2>

      <p>
        Logged in as: <b>{user.username}</b> ({user.role})
      </p>

      {user.role === "Admin" && (
        <div style={{ marginTop: "20px" }}>
          <h3>Admin Controls</h3>
          <ul>
            <li>Manage Users</li>
            <li>System Settings</li>
            <li>View Analytics</li>
          </ul>
        </div>
      )}

      {user.role === "Editor" && (
        <div style={{ marginTop: "20px" }}>
          <h3>Editor Panel</h3>
          <ul>
            <li>Edit Content</li>
            <li>Manage Posts</li>
            <li>Review Submissions</li>
          </ul>
        </div>
      )}

      {user.role === "Viewer" && (
        <div style={{ marginTop: "20px" }}>
          <h3>Viewer Dashboard</h3>
          <ul>
            <li>Read Reports</li>
            <li>View Analytics</li>
            <li>Browse Content</li>
          </ul>
        </div>
      )}
    </div>
  );
}