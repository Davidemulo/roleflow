import { createContext, useContext, useState, ReactNode } from "react";

type Role = "Admin" | "Editor" | "Viewer";

type User = {
  username: string;
  role: Role;
} | null;

type AuthContextType = {
  user: User;
  login: (username: string, role: Role) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(null);

  const login = (username: string, role: Role) => {
    setUser({ username, role });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
};