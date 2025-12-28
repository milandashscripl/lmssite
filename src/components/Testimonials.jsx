export default function Testimonials() {
  return (
    <section className="testimonials reveal">
      <h2>What Our Students Say</h2>

      <div className="testimonial-grid">
        <div className="testimonial-card">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Rahul"
          />
          <p>
            “This platform completely changed my learning style and confidence.”
          </p>
          <h4>Rahul Sharma</h4>
          <span>Web Development Student</span>
        </div>

        <div className="testimonial-card">
          <img
            src="https://randomuser.me/api/portraits/women/45.jpg"
            alt="Priya"
          />
          <p>
            “Very clean UI and excellent course structure. Highly recommended.”
          </p>
          <h4>Priya Verma</h4>
          <span>UI/UX Learner</span>
        </div>

        <div className="testimonial-card">
          <img
            src="https://randomuser.me/api/portraits/men/76.jpg"
            alt="Aman"
          />
          <p>
            “Best LMS I’ve used so far. Simple, powerful, and effective.”
          </p>
          <h4>Aman Singh</h4>
          <span>Full Stack Trainee</span>
        </div>
      </div>
    </section>
  );
}
