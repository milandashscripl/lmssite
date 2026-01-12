import { useAuth } from "../context/AuthContext";

export default function InstituteAdmin() {
  const { user } = useAuth();

  return (
    <div style={{ padding: 40 }}>
      <h2>Institute Dashboard</h2>
      <p>{user.fullName}</p>
      <p>Institute ID: {user.instituteId}</p>
    </div>
  );
}
