import { useEffect } from "react";
import Hero from "../components/Hero";
import Features from "../components/Fetures";
import HowItWorks from "../components/HowItWorks";
import About from "../components/About";
import FeaturedCourses from "../components/FeaturedCourses";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Landing() {

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <About />
      <FeaturedCourses />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}
