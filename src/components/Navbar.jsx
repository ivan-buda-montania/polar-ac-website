import { useState, useEffect, useRef } from "react";
import PolarBearLogo from './PolarBearLogo';
import { C } from '../tokens';



// ─── Navbar ───────────────────────────────────────────────────────────────────
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Summer Special", href: "#summer-special" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
      background: scrolled ? "rgba(13,43,78,0.97)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      boxShadow: scrolled ? "0 2px 24px rgba(13,43,78,0.35)" : "none",
      transition: "all 0.35s ease",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 5vw", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
        {/* Logo */}
        <a href="#hero" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <PolarBearLogo size={100} variant="small" />
          <div>
            <div style={{ fontFamily: "'Trebuchet MS', sans-serif", fontWeight: 900, fontSize: 20, color: C.white, lineHeight: 1, letterSpacing: 1 }}>POLAR AC</div>
            <div style={{ fontSize: 9, color: C.skyBlue, letterSpacing: 3, textTransform: "uppercase", fontWeight: 600 }}>Heating & Cooling</div>
          </div>
        </a>

        {/* Desktop nav */}
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          {links.map(l => (
            <a key={l.label} href={l.href} style={{
              color: l.label === "Summer Special" ? C.sun : C.white,
              textDecoration: "none", fontSize: 14, fontWeight: l.label === "Summer Special" ? 700 : 500,
              opacity: 0.9, transition: "opacity 0.2s",
            }}
              onMouseOver={e => e.target.style.opacity = 1}
              onMouseOut={e => e.target.style.opacity = 0.9}>
              {l.label === "Summer Special" ? "☀️ " + l.label : l.label}
            </a>
          ))}
          <a href="tel:7606583881" style={{
            background: C.orange, color: C.white, padding: "10px 20px", borderRadius: 8,
            fontWeight: 800, fontSize: 14, textDecoration: "none",
            boxShadow: "0 4px 14px rgba(245,130,32,0.45)", transition: "transform 0.15s",
          }}
            onMouseOver={e => e.currentTarget.style.transform = "scale(1.04)"}
            onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}>
            📞 760-658-3881
          </a>
        </div>
      </div>
    </nav>
  );
}
