export default function FeaturedCourses() {
  return (
    <section className="featured reveal">
      <div className="section-head">
        <h2>Popular Learning Tracks</h2>
        <p>
          Industry-focused courses designed to make you job-ready
        </p>
      </div>

      <div className="course-grid">
        <div className="course-card">
          <span>💻</span>
          <h4>Full Stack Web Development</h4>
          <p>HTML, CSS, JavaScript, React, Node.js</p>
        </div>

        <div className="course-card">
          <span>📱</span>
          <h4>Flutter App Development</h4>
          <p>Build Android & iOS apps from one codebase</p>
        </div>

        <div className="course-card">
          <span>🛠</span>
          <h4>Backend with Node & MongoDB</h4>
          <p>APIs, Authentication, Deployment</p>
        </div>
      </div>
    </section>
  );
}
