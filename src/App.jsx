import { useState, useEffect } from "react";
import { C } from './tokens';
import { useIsMobile } from './hooks/useIsMobile';

// ─── App (Root) ───────────────────────────────────────────────────────────────
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const isMobile = useIsMobile();
  const [contactInView, setContactInView] = useState(false);

  // On mobile the floating button would sit on top of the contact form's submit
  // button / footer, so hide it while those sections are on screen.
  useEffect(() => {
    const targets = [document.getElementById("contact"), document.querySelector("footer")].filter(Boolean);
    if (!targets.length) return;
    const visible = new Set();
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
      setContactInView(visible.size > 0);
    });
    targets.forEach(t => obs.observe(t));
    return () => obs.disconnect();
  }, []);

  const hideSms = isMobile && contactInView;

  return (
    <div style={{ fontFamily: "'Trebuchet MS', Helvetica, sans-serif", margin: 0, padding: 0 }}>
      <Navbar />
      <Hero />
      <Testimonials />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <Contact />
      <Footer />

      {/* Floating SMS Button */}
      <div style={{
        position: "fixed", bottom: isMobile ? 16 : 24, right: isMobile ? 16 : 24, zIndex: 999,
        opacity: hideSms ? 0 : 1,
        pointerEvents: hideSms ? "none" : "auto",
        transition: "opacity 0.25s",
      }}>
        <a href="sms:+17606583881?body=Hi!%20I%27d%20like%20an%20AC%20service%20estimate." style={{
          width: 56, height: 56, borderRadius: "50%",
          background: C.orange, color: C.white,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 24, textDecoration: "none",
          boxShadow: "0 4px 16px rgba(245,130,32,0.4)",
          transition: "transform 0.2s",
        }}
          title="Send us a text"
          onMouseOver={e => e.currentTarget.style.transform = "scale(1.1)"}
          onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}>
          💬
        </a>
      </div>
    </div>
  );
}
