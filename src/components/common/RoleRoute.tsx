import { Navigate } from "react-router-dom";
import type { ReactNode } from "react"
import { useAuth } from "../../context/AuthContext";
import type { UserRole } from "../../types/user";

interface RoleRouteProps {
  children: ReactNode;
  allowedRole: UserRole;
}

const RoleRoute = ({
  children,
  allowedRole,
}: RoleRouteProps) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role !== allowedRole) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};

export default RoleRoute;