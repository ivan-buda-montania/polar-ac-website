import { useState, useEffect, useRef } from "react";


// ─── App (Root) ───────────────────────────────────────────────────────────────
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import SummerSpecial from './components/SummerSpecial';
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
      <Services />
      <SummerSpecial />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
