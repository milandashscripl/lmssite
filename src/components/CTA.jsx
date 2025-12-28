import { useNavigate } from "react-router-dom";

export default function CTA() {
  const navigate = useNavigate();

  return (
    <section className="cta reveal">
      <h2>Start Your Learning Journey Today</h2>
      <p>Join thousands of learners growing with us.</p>
      <button onClick={() => navigate("/auth")}>
        Get Started Now
      </button>
    </section>
  );
}
