import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Sidebar.css";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar = ({
  isOpen = false,
  onClose,
}: SidebarProps) => {
  const { user } = useAuth();

  return (
    <aside
      className={`sidebar ${
        isOpen ? "sidebar-open" : ""
      }`}
    >
      <h3>Roleflow</h3>

      <Link
        to="/dashboard"
        onClick={onClose}
      >
        Dashboard
      </Link>

      <Link
        to="/profile"
        onClick={onClose}
      >
        Profile
      </Link>

      {user?.role === "Admin" && (
        <Link
          to="/settings"
          onClick={onClose}
        >
          Settings
        </Link>
      )}
    </aside>
  );
};

export default Sidebar;