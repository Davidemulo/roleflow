import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h2>404 - Page Not Found</h2>

      <button onClick={() => navigate("/login")}>
        Go to Login
      </button>
    </div>
  );
}