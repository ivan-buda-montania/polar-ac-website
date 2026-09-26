import { useState, useEffect } from "react";
import PolarBearLogo from './PolarBearLogo';
import { C } from '../tokens';
import beachBg from '../assets/fondo1.png';
import { useIsMobile } from '../hooks/useIsMobile';

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const isMobile = useIsMobile();

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
      padding: isMobile ? "90px 5vw 60px" : "90px 5vw 40px",
    }}>

      <div style={{
        maxWidth: 1200, margin: "0 auto", width: "100%",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        gap: isMobile ? 32 : 40,
        alignItems: "center",
        position: "relative", zIndex: 2,
      }}>
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
            <a href="https://g.page/r/CSiKEwJwFR2KEBM/review" target="_blank" rel="noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: C.orange, color: C.white,
              padding: "6px 16px", borderRadius: 20,
              fontSize: 13, fontWeight: 800, letterSpacing: 1,
              boxShadow: "0 4px 16px rgba(245,130,32,0.4)",
    textDecoration: "none",
              }}>
              <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              LEAVE US A REVIEW
              </a>
          </div>

          <h1 style={{
            fontFamily: "'Trebuchet MS', Impact, sans-serif",
            fontSize: isMobile ? "clamp(2.4rem, 10vw, 3.2rem)" : "clamp(2.8rem, 6vw, 4.4rem)",
            fontWeight: 900, color: C.navy,
            lineHeight: 1.0, margin: "0 0 10px",
            textShadow: "2px 2px 0 rgba(255,255,255,0.6)",
          }}>
            THE HEAT<br />
            <span style={{ color: C.orange, WebkitTextStroke: `1px ${C.orange}` }}>IS COMING!</span>
          </h1>

          <p style={{
            fontSize: isMobile ? "1rem" : "clamp(1rem, 2vw, 1.25rem)",
            color: C.navy, fontWeight: 600, margin: "12px 0 8px", opacity: 0.85,
          }}>
            Prepare your AC before temperatures reach <span style={{ color: C.orange, fontWeight: 800 }}>110°F</span>
          </p>
          <p style={{ fontSize: 15, color: "#4a5f75", lineHeight: 1.65, margin: "0 0 32px", maxWidth: 440 }}>
            Get your air conditioning system inspected, maintained, or repaired — and avoid surprises when you need it most.
          </p>

          {/* CTA buttons */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 28 }}>
            <a href="#contact" style={{
              background: C.orange, color: C.white,
              padding: isMobile ? "14px 22px" : "15px 30px", borderRadius: 10,
              fontWeight: 800, fontSize: isMobile ? 15 : 17, textDecoration: "none",
              boxShadow: "0 8px 28px rgba(245,130,32,0.5)",
              transition: "all 0.2s", border: "none",
            }}
              onMouseOver={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(245,130,32,0.6)"; }}
              onMouseOut={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(245,130,32,0.5)"; }}>
              ❄️ Schedule Tune-Up
            </a>
            <a href="tel:7606583881" style={{
              background: C.navy, color: C.white,
              padding: isMobile ? "14px 20px" : "15px 28px", borderRadius: 10,
              fontWeight: 700, fontSize: isMobile ? 14 : 16, textDecoration: "none",
              boxShadow: "0 4px 16px rgba(13,43,78,0.3)",
              transition: "all 0.2s",
            }}
              onMouseOver={e => e.currentTarget.style.transform = "translateY(-2px)"}
              onMouseOut={e => e.currentTarget.style.transform = "none"}>
              📞 Call Now: 760-658-3881
            </a>
          </div>

          {/* Trust row */}
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {["✅ Licensed #1131567", "✅ Residential & Commercial", "✅ Same-Week Appointments"].map(b => (
              <span key={b} style={{ fontSize: 13, color: C.navy, fontWeight: 600, opacity: 0.75 }}>{b}</span>
            ))}
          </div>
        </div>

        {/* RIGHT — Bear illustration (hidden on mobile to keep hero clean) */}
        {!isMobile && (
          <div style={{ ...anim(0.2), display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
            <div style={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%, -55%)",
              width: 320, height: 320, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(63,182,248,0.15) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />
            <PolarBearLogo size={380} variant="surfing" />

            {/* Floating badge */}
            <a href="sms:+17606583881?body=Hi!%20I%27d%20like%20an%20AC%20service%20estimate." style={{
              position: "absolute", top: "5%", right: "5%",
              background: C.sun, color: C.navy,
              borderRadius: "50%", width: 80, height: 80,
              display: "flex", alignItems: "center", justifyContent: "center",
              flexDirection: "column", fontFamily: "'Trebuchet MS', sans-serif",
              fontWeight: 900, fontSize: 11, textAlign: "center", lineHeight: 1.2,
              boxShadow: "0 6px 20px rgba(255,213,74,0.6)",
              border: `3px solid ${C.orange}`,
              animation: "pulse 2s ease-in-out infinite",
              textDecoration: "none", cursor: "pointer",
            }}>
              CONTACT<br />US
            </a>
          </div>
        )}

        {/* Mobile floating badge (inline instead of absolute) */}
        {isMobile && (
          <div style={{ ...anim(0.15), display: "flex", justifyContent: "center" }}>
            <a href="sms:+17606583881?body=Hi!%20I%27d%20like%20an%20AC%20service%20estimate." style={{
              background: C.sun, color: C.navy,
              borderRadius: 14, padding: "14px 28px",
              display: "inline-flex", alignItems: "center", gap: 10,
              fontFamily: "'Trebuchet MS', sans-serif",
              fontWeight: 900, fontSize: 15, textAlign: "center",
              boxShadow: "0 6px 20px rgba(255,213,74,0.6)",
              border: `3px solid ${C.orange}`,
              textDecoration: "none",
            }}>
              💬 Text Us
            </a>
          </div>
        )}
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
