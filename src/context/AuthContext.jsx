import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("auth");
    if (saved) {
      const parsed = JSON.parse(saved);
      setToken(parsed.token);
      setUser(parsed.user);
    }
    setLoading(false); // 👈 always run AFTER reading localStorage
  }, []); // 👈 empty array prevents infinite loop

  const login = (token, user) => {
    localStorage.setItem("auth", JSON.stringify({ token, user }));
    setToken(token);
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem("auth");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
