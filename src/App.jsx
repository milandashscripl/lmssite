import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import { getAuth } from "./utils/authStorage";

export default function App() {
  const { token } = getAuth();

  return (
    <Routes>
      {/* Landing Page */}
      <Route path="/" element={<Landing />} />

      {/* Auth Page */}
      <Route
        path="/auth"
        element={!token ? <Auth /> : <Navigate to="/home" />}
      />

      {/* Home Page */}
      <Route
        path="/home"
        element={token ? <Home /> : <Navigate to="/auth" />}
      />
    </Routes>
  );
}
