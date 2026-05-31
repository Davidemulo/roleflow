import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { user, login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [role, setRole] = useState<"Admin" | "Editor" | "Viewer">("Viewer");

  // If already logged in, redirect away from login page
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username.trim()) return;

    login(username, role);
    navigate("/dashboard");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login to RoleFlow</h2>

      <form onSubmit={handleLogin}>
        {/* Username Input */}
        <div>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* Role Selector */}
        <div style={{ marginTop: "10px" }}>
          <select
            value={role}
            onChange={(e) =>
              setRole(e.target.value as "Admin" | "Editor" | "Viewer")
            }
          >
            <option value="Admin">Admin</option>
            <option value="Editor">Editor</option>
            <option value="Viewer">Viewer</option>
          </select>
        </div>

        {/* Submit Button */}
        <button style={{ marginTop: "10px" }} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}