import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) return null;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <span>
        Welcome, <b>{user.username}</b> ({user.role})
      </span>

      <div style={{ marginTop: "10px" }}>
        <Link to="/dashboard" style={{ marginRight: "10px" }}>
          Dashboard
        </Link>

        <Link to="/profile" style={{ marginRight: "10px" }}>
          Profile
        </Link>

        {user.role === "Admin" && (
          <Link to="/settings" style={{ marginRight: "10px" }}>
            Settings
          </Link>
        )}

        <button onClick={handleLogout} style={{ marginLeft: "10px" }}>
          Logout
        </button>
      </div>
    </nav>
  );
}