import { useState, useEffect, useRef } from "react";
import PolarBearLogo from './PolarBearLogo';
import { C } from '../tokens';
import beachBg from '../assets/fondo1.png';


// ─── Hero ─────────────────────────────────────────────────────────────────────
export default function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 120); }, []);

  const anim = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(32px)",
    transition: `all 0.75s ease ${delay}s`,
  });

  return (
    <section id="hero" style={{
      minHeight: "100vh",
      background: `url(${beachBg}) center center / cover no-repeat`,
      position: "relative", overflow: "hidden",
      display: "flex", alignItems: "center",
      padding: "90px 5vw 40px",
    }}>
      

      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center", position: "relative", zIndex: 2 }}>
        {/* LEFT — copy */}
        <div style={anim(0)}>
          {/* Heat badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: C.orange, color: C.white,
            padding: "6px 16px", borderRadius: 20, marginBottom: 22,
            fontSize: 13, fontWeight: 800, letterSpacing: 1,
            boxShadow: "0 4px 16px rgba(245,130,32,0.4)",
          }}>
            🌡️ SUMMER 2025 · San Diego CA
          </div>

          <h1 style={{
            fontFamily: "'Trebuchet MS', Impact, sans-serif",
            fontSize: "clamp(2.8rem, 6vw, 4.4rem)",
            fontWeight: 900, color: C.navy,
            lineHeight: 1.0, margin: "0 0 10px",
            textShadow: "2px 2px 0 rgba(255,255,255,0.6)",
          }}>
            THE HEAT<br />
            <span style={{ color: C.orange, WebkitTextStroke: `1px ${C.orange}` }}>IS COMING!</span>
          </h1>

          <p style={{
            fontSize: "clamp(1rem, 2vw, 1.25rem)", color: C.navy,
            fontWeight: 600, margin: "12px 0 8px", opacity: 0.85,
          }}>
            Prepare your AC before temperatures reach <span style={{ color: C.orange, fontWeight: 800 }}>110°F</span>
          </p>
          <p style={{ fontSize: 15, color: "#4a5f75", lineHeight: 1.65, margin: "0 0 32px", maxWidth: 440 }}>
            Get your air conditioning system inspected, maintained, or repaired — and avoid surprises when you need it most.
          </p>

          {/* CTA buttons */}
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 28 }}>
            <a href="#contact" style={{
              background: C.orange, color: C.white,
              padding: "15px 30px", borderRadius: 10,
              fontWeight: 800, fontSize: 17, textDecoration: "none",
              boxShadow: "0 8px 28px rgba(245,130,32,0.5)",
              transition: "all 0.2s", border: "none",
            }}
              onMouseOver={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(245,130,32,0.6)"; }}
              onMouseOut={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(245,130,32,0.5)"; }}>
              ❄️ Schedule Tune-Up — $99
            </a>
            <a href="tel:7606583881" style={{
              background: C.navy, color: C.white,
              padding: "15px 28px", borderRadius: 10,
              fontWeight: 700, fontSize: 16, textDecoration: "none",
              boxShadow: "0 4px 16px rgba(13,43,78,0.3)",
              transition: "all 0.2s",
            }}
              onMouseOver={e => e.currentTarget.style.transform = "translateY(-2px)"}
              onMouseOut={e => e.currentTarget.style.transform = "none"}>
              📞 Call Now: 760-658-3881
            </a>
          </div>

          {/* Trust row */}
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            {["✅ Licensed #1131567", "✅ Residential & Commercial", "✅ Same-Week Appointments"].map(b => (
              <span key={b} style={{ fontSize: 13, color: C.navy, fontWeight: 600, opacity: 0.75 }}>{b}</span>
            ))}
          </div>
        </div>

        {/* RIGHT — Bear illustration */}
        <div style={{ ...anim(0.2), display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
          {/* Glow behind bear */}
          <div style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%, -55%)",
            width: 320, height: 320, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(63,182,248,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <PolarBearLogo size={380} variant="surfing" />

          {/* Floating badge */}
          <div style={{
            position: "absolute", top: "5%", right: "5%",
            background: C.sun, color: C.navy,
            borderRadius: "50%", width: 80, height: 80,
            display: "flex", alignItems: "center", justifyContent: "center",
            flexDirection: "column", fontFamily: "'Trebuchet MS', sans-serif",
            fontWeight: 900, fontSize: 11, textAlign: "center", lineHeight: 1.2,
            boxShadow: "0 6px 20px rgba(255,213,74,0.6)",
            border: `3px solid ${C.orange}`,
            animation: "pulse 2s ease-in-out infinite",
          }}>
            FREE<br />ESTIMATE
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <svg style={{ position: "absolute", bottom: 0, left: 0, width: "100%" }} viewBox="0 0 1440 70" preserveAspectRatio="none">
        <path d="M0,35 C240,70 480,0 720,35 C960,70 1200,0 1440,35 L1440,70 L0,70 Z" fill="white" />
      </svg>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1) rotate(-5deg); }
          50% { transform: scale(1.07) rotate(-5deg); }
        }
      `}</style>
    </section>
  );
}


