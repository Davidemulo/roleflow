import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import type { UserRole } from "../types/user";

import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const inputRef = useRef<HTMLInputElement>(null);

  const [username, setUsername] = useState("");
  const [role, setRole] = useState<UserRole>("Viewer");

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleLogin = () => {
    if (!username.trim()) return;

    login({
      username,
      role,
    });

    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <header className="login-navbar">
        <h2>Roleflow</h2>

        <div className="role-display">
          Current Role:
          <span className="role-badge">
            {role}
          </span>
        </div>
      </header>

      <div className="login-container">
        <div className="login-card">
          <div className="login-content">
            <h1>Welcome Back</h1>

            <p className="login-subtitle">
              Sign in to continue
            </p>

            <div className="input-group">
              <label htmlFor="username">
                Username
              </label>

              <input
                id="username"
                ref={inputRef}
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) =>
                  setUsername(e.target.value)
                }
              />
            </div>

            <div className="input-group">
              <label htmlFor="role">
                Select Role
              </label>

              <select
                id="role"
                value={role}
                onChange={(e) =>
                  setRole(
                    e.target.value as UserRole
                  )
                }
              >
                <option value="Admin">
                  Admin
                </option>

                <option value="Editor">
                  Editor
                </option>

                <option value="Viewer">
                  Viewer
                </option>
              </select>
            </div>

            <button
              type="button"
              className="btn btn-primary login-btn"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;