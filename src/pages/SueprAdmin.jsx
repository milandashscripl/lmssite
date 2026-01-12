import { useAuth } from "../context/AuthContext";

export default function SuperAdmin() {
  const { user } = useAuth();

  return (
    <div style={{ padding: 40 }}>
      <h2>Super Admin Dashboard</h2>
      <p>Welcome {user.fullName}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}
