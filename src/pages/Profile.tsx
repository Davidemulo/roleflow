import { useRef } from "react";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  if (!user) return null;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Profile Page</h2>

      <p>
        Username: <b>{user.username}</b>
      </p>

      <p>
        Role: <b>{user.role}</b>
      </p>

      <input
        ref={inputRef}
        placeholder="Update profile info (demo)"
        style={{ display: "block", marginTop: "10px" }}
      />

      <button onClick={focusInput} style={{ marginTop: "10px" }}>
        Focus Input (useRef demo)
      </button>
    </div>
  );
}