import { useState, useEffect, useRef } from "react";
import { C } from '../tokens';

// ─── CTA Banner ────────────────────────────────────────────────────────────────
function CTA() {
  return (
    <section style={{ background: `linear-gradient(135deg, ${C.orange} 0%, #e8681a 100%)`, padding: "64px 5vw", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -30, right: -30, fontSize: 160, opacity: 0.06 }}>❄</div>
      <div style={{ position: "absolute", bottom: -20, left: -20, fontSize: 120, opacity: 0.06 }}>❆</div>
      <div style={{ position: "relative", maxWidth: 700, margin: "0 auto" }}>
        <h2 style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, color: C.white, margin: "0 0 14px" }}>
          Don't Wait for the AC to Break Down
        </h2>
        <p style={{ fontSize: 17, color: "rgba(255,255,255,0.85)", margin: "0 0 32px", lineHeight: 1.65 }}>
          A $99 preventive maintenance visit can save you $800+ in emergency repair costs. Book your tune-up before the summer rush.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#contact" style={{ background: C.white, color: C.orange, padding: "14px 30px", borderRadius: 10, fontWeight: 800, fontSize: 16, textDecoration: "none", boxShadow: "0 6px 20px rgba(0,0,0,0.15)" }}>
            Schedule Now
          </a>
          <a href="tel:7606583881" style={{ border: "2px solid rgba(255,255,255,0.5)", color: C.white, padding: "14px 30px", borderRadius: 10, fontWeight: 700, fontSize: 16, textDecoration: "none" }}>
            Call 760-658-3881
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;