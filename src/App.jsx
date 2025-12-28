import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import { useAuth } from "./context/AuthContext";

export default function App() {
  const { token } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={!token ? <Auth /> : <Navigate to="/home" />} />
      <Route path="/home" element={token ? <Home /> : <Navigate to="/auth" />} />
    </Routes>
  );
}
