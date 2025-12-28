export default function Contact() {
  return (
    <section className="contact reveal">
      <h2>Contact Us</h2>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Email Address" />
        <textarea placeholder="Your Message"></textarea>
        <button>Send Message</button>
      </form>
    </section>
  );
}
