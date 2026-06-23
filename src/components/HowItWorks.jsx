import { useState, useEffect, useRef } from "react";
import { C } from '../tokens';
import { PROCESS } from '../data/process';

// ─── How It Works ─────────────────────────────────────────────────────────────
export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ background: C.white, padding: "90px 5vw" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ fontSize: 12, fontWeight: 800, color: C.skyBlue, letterSpacing: 3, textTransform: "uppercase" }}>Simple Process</span>
          <h2 style={{
            fontFamily: "'Trebuchet MS', sans-serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            fontWeight: 900, color: C.navy, margin: "10px 0",
          }}>How It Works</h2>
          <p style={{ fontSize: 16, color: C.gray, maxWidth: 440, margin: "0 auto" }}>
            From booking to a fully serviced AC — we make it easy.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, position: "relative" }}>
          {/* Connector line */}
          <div style={{
            position: "absolute", top: 36, left: "12.5%", right: "12.5%", height: 2,
            background: `linear-gradient(90deg, ${C.skyBlue}, ${C.orange})`,
            zIndex: 0,
          }} />

          {PROCESS.map((p, i) => (
            <div key={p.step} style={{ textAlign: "center", padding: "0 16px", position: "relative", zIndex: 1 }}>
              <div style={{
                width: 72, height: 72, borderRadius: "50%", margin: "0 auto 20px",
                background: i === 0 ? C.orange : i === 3 ? C.skyBlue : C.white,
                border: `3px solid ${i === 0 ? C.orange : i === 3 ? C.skyBlue : C.lightGray}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'Trebuchet MS', sans-serif",
                fontWeight: 900, fontSize: 22,
                color: (i === 0 || i === 3) ? C.white : C.navy,
                boxShadow: i === 0 ? "0 8px 24px rgba(245,130,32,0.4)" : i === 3 ? "0 8px 24px rgba(63,182,248,0.4)" : "0 4px 12px rgba(13,43,78,0.1)",
              }}>
                {p.step}
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: C.navy, margin: "0 0 8px", fontFamily: "'Trebuchet MS', sans-serif" }}>{p.title}</h3>
              <p style={{ fontSize: 13, color: C.gray, lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
