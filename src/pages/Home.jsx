import { useState } from "react";
import { getAuth, logout } from "../utils/authStorage";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
  const { user } = getAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="lms-layout">
      {/* Backdrop */}
      {open && <div className="sidebar-backdrop" onClick={() => setOpen(false)} />}

      {/* Sidebar */}
      <aside className={`lms-sidebar ${open ? "open" : ""}`}>
        <div className="sidebar-header">
          <img
            className="lms-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM86vdfERVj7-WjwowZYI8XSEvNJYNvm5ypw&s"
            alt="logo"
          />
          <button className="sidebar-close" onClick={() => setOpen(false)}>✕</button>
        </div>

        <nav className="sidebar-nav">
          <a className="active">📊 Dashboard</a>
          <a>📚 My Courses</a>
          <a>📝 Assignments</a>
          <a>👤 Profile</a>
        </nav>
      </aside>

      {/* Main */}
      <main className="lms-main">
        {/* Topbar */}
        <header className="lms-topbar">
          <button
            className={`hamburger ${open ? "active" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>

          <h3>Welcome, {user.fullName} 👋</h3>

          <div className="profile">
            {user.profilePic && <img src={user.profilePic} />}
            <button onClick={handleLogout}>Logout</button>
          </div>
        </header>

        {/* Content */}
        <section className="lms-content">
          <div className="stat-card">
            <h4>Enrolled Courses</h4>
            <p>6</p>
          </div>

          <div className="stat-card">
            <h4>Completed</h4>
            <p>2</p>
          </div>

          <div className="stat-card">
            <h4>In Progress</h4>
            <p>4</p>
          </div>
        </section>
      </main>
    </div>
  );
}
