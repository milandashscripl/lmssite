import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Loader from "./components/Loader";

import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import SuperAdmin from "./pages/SueprAdmin";
import InstituteAdmin from "./pages/InstituteAdmin";
import Teacher from "./pages/Teacher";

export default function App() {
  const { token, user, loading } = useAuth();

  if (loading) return <Loader />;

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={!token ? <Auth /> : <Navigate to="/home" />} />
      <Route path="/home" element={token && user?.role === "student" ? <Home /> : <Navigate to="/auth" />} />
      <Route path="/super-admin" element={token && user?.role === "super_admin" ? <SuperAdmin /> : <Navigate to="/auth" />} />
      <Route path="/institute" element={token && user?.role === "institute_admin" ? <InstituteAdmin /> : <Navigate to="/auth" />} />
      <Route path="/teacher" element={token && user?.role === "teacher" ? <Teacher /> : <Navigate to="/auth" />} />
    </Routes>
  );
}
