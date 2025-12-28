import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { initHeroCanvas } from "../utils/heroCanvas";

export default function Hero() {
  const navigate = useNavigate();

  useEffect(() => {
    initHeroCanvas();
  }, []);

  return (
    <section className="hero">
      <canvas id="bubbleCanvas"></canvas>

      <div className="hero-content">
        <h1>
          Learn Skills <span>That Matter</span>
        </h1>
        <p>Modern LMS platform to learn, grow and succeed.</p>

        <div className="hero-buttons">
          <button className="primary" onClick={() => navigate("/auth")}>
            Get Started
          </button>
          <button className="secondary" onClick={() => navigate("/auth")}>
            Explore Courses
          </button>
        </div>
      </div>
    </section>
  );
}
