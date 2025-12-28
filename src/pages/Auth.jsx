import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";
import { loginUser, registerUser } from "../api/authApi";
import { saveAuth } from "../utils/authStorage";

export default function Auth() {
  const [mode, setMode] = useState("login");
  const navigate = useNavigate();

  // common
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // register only
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // REGISTER
  const handleRegister = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("mobile", mobile);
    formData.append("password", password);
    formData.append("confirmPassword", confirmPassword);
    if (imageFile) formData.append("profilePic", imageFile);

    try {
      const res = await registerUser(formData);
      alert(res.data.message);
      setMode("login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  // LOGIN
const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const res = await loginUser({ email, password });
    saveAuth(res.data.token, res.data.user);
    setToken(res.data.token); // 🔥 triggers rerender
    navigate("/home");
  } catch (err) {
    alert(err.response?.data?.message || "Login failed");
  }
};


  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-tabs">
          <button
            className={mode === "login" ? "active" : ""}
            onClick={() => setMode("login")}
          >
            Login
          </button>
          <button
            className={mode === "register" ? "active" : ""}
            onClick={() => setMode("register")}
          >
            Register
          </button>
        </div>

        <AnimatePresence mode="wait">
          {mode === "login" && (
            <motion.form
              key="login"
              onSubmit={handleLogin}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              className="auth-form"
            >
              <h2>Welcome Back 👋</h2>

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="username"
                required
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />

              <button type="submit">Login</button>
            </motion.form>
          )}

          {mode === "register" && (
            <motion.form
              key="register"
              onSubmit={handleRegister}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              className="auth-form"
            >
              <h2>Create Account 🚀</h2>

              <label className="profile-upload">
                <input type="file" accept="image/*" onChange={handleImage} />
                {preview ? <img src={preview} alt="preview" /> : <span>Upload Photo</span>}
              </label>

              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="username"
                required
              />

              <input
                type="tel"
                placeholder="Contact Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
                required  
              />

              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                autoComplete="new-password"
                required
              />

              <button type="submit">Register</button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
