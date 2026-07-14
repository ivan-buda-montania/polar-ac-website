import { useState, useEffect } from "react";
import PolarBearLogo from './PolarBearLogo';
import { C } from '../tokens';
import navbarLogo from '../assets/logopolarac.png';
import { useIsMobile } from '../hooks/useIsMobile';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

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
      background: scrolled || menuOpen ? "rgba(13,43,78,0.97)" : "transparent",
      backdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
      boxShadow: scrolled || menuOpen ? "0 2px 24px rgba(13,43,78,0.35)" : "none",
      transition: "all 0.35s ease",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 5vw", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
        {/* Logo */}
        <a href="#hero" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img
            src={navbarLogo}
            alt="Polar AC logo"
            style={{ height: 60, width: "auto", objectFit: "contain" }}
          />
        </a>

        {/* Desktop nav */}
        {!isMobile && (
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
        )}

        {/* Mobile: phone button + hamburger */}
        {isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <a href="tel:7606583881" style={{
              background: C.orange, color: C.white, padding: "9px 14px", borderRadius: 8,
              fontWeight: 800, fontSize: 13, textDecoration: "none",
              boxShadow: "0 4px 14px rgba(245,130,32,0.45)",
            }}>
              📞 Call
            </a>
            <button
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
              style={{
                background: "none", border: "none", cursor: "pointer",
                display: "flex", flexDirection: "column", justifyContent: "center",
                gap: 5, padding: "8px 6px", width: 40, height: 40,
              }}>
              {[0, 1, 2].map(i => (
                <span key={i} style={{
                  display: "block", width: 24, height: 2.5, borderRadius: 2,
                  background: C.white, transition: "all 0.3s ease",
                  transform: menuOpen
                    ? i === 0 ? "translateY(7.5px) rotate(45deg)"
                      : i === 2 ? "translateY(-7.5px) rotate(-45deg)"
                        : "scaleX(0)"
                    : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }} />
              ))}
            </button>
          </div>
        )}
      </div>

      {/* Mobile dropdown */}
      {isMobile && (
        <div style={{
          maxHeight: menuOpen ? 420 : 0,
          overflow: "hidden",
          transition: "max-height 0.35s ease",
          borderTop: menuOpen ? "1px solid rgba(255,255,255,0.1)" : "none",
        }}>
          <div style={{ padding: "8px 5vw 20px" }}>
            {links.map(l => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  color: l.label === "Summer Special" ? C.sun : C.white,
                  textDecoration: "none", fontSize: 16,
                  fontWeight: l.label === "Summer Special" ? 700 : 500,
                  padding: "13px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                }}>
                {l.label === "Summer Special" ? "☀️ " + l.label : l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
