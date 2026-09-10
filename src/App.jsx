import { useState, useEffect, useRef } from "react";
import { C } from './tokens';

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
        position: "fixed", bottom: 24, right: 24, zIndex: 999,
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
