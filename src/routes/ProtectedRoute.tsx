import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

type Props = {
  children: React.ReactNode;
  allowedRoles?: string[];
};

export default function ProtectedRoute({ children, allowedRoles }: Props) {
  const { user } = useAuth();

  // Not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Role restriction (if provided)
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}