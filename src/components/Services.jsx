import { useState } from "react";
import { Thermometer, Wrench, Settings, Home, Building2, AlertCircle } from "lucide-react";
import { C } from "../tokens";
import { SERVICES } from "../data/index";

// ─── Services Section ─────────────────────────────────────────────────────────
const ICON_MAP = { Thermometer, Wrench, Settings, Home, Building2, AlertCircle };

function ServiceCard({ title, badge, desc, icon }) {
  const [hov, setHov] = useState(false);
  const Icon = ICON_MAP[icon] || Wrench;

  return (
    <div style={{
      background: hov ? C.navy : C.white,
      borderRadius: 18, padding: "28px 24px",
      border: `2px solid ${hov ? C.skyBlue : C.lightGray}`,
      boxShadow: hov ? `0 16px 40px rgba(13,43,78,0.22)` : "0 2px 12px rgba(13,43,78,0.07)",
      transition: "all 0.28s ease",
      transform: hov ? "translateY(-6px)" : "none",
      cursor: "default", position: "relative",
    }}
      onMouseOver={() => setHov(true)}
      onMouseOut={() => setHov(false)}>

      {badge && (
        <div style={{
          position: "absolute", top: -12, right: 20,
          background: C.sun, color: C.navy,
          padding: "4px 14px", borderRadius: 20,
          fontSize: 12, fontWeight: 800, letterSpacing: 0.5,
          boxShadow: "0 4px 10px rgba(255,213,74,0.5)",
        }}>
          🔥 {badge}
        </div>
      )}

      <div style={{
        width: 52, height: 52, borderRadius: 14,
        background: hov ? "rgba(63,182,248,0.15)" : C.ice,
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: 16, transition: "all 0.28s",
      }}>
        <Icon size={26} color={hov ? C.skyBlue : C.navy} strokeWidth={1.8} />
      </div>

      <h3 style={{
        fontFamily: "'Trebuchet MS', sans-serif",
        fontSize: 17, fontWeight: 700,
        color: hov ? C.white : C.navy,
        margin: "0 0 10px",
        transition: "color 0.28s",
      }}>{title}</h3>

      <p style={{
        fontSize: 14, lineHeight: 1.65, margin: 0,
        color: hov ? "rgba(255,255,255,0.7)" : C.gray,
        transition: "color 0.28s",
      }}>{desc}</p>

      <div style={{
        marginTop: 18, height: 3, borderRadius: 2,
        background: hov ? C.orange : C.skyBlue,
        width: hov ? "60%" : "36px",
        transition: "all 0.3s ease",
      }} />
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" style={{ background: C.white, padding: "90px 5vw" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <span style={{ fontSize: 12, fontWeight: 800, color: C.orange, letterSpacing: 3, textTransform: "uppercase" }}>
            What We Do
          </span>
          <h2 style={{
            fontFamily: "'Trebuchet MS', sans-serif",
            fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
            fontWeight: 900, color: C.navy, margin: "10px 0 14px",
          }}>
            Complete HVAC Services
          </h2>
          <p style={{ fontSize: 16, color: C.gray, maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
            From seasonal tune-ups to emergency repairs — keeping your system ice-cold when the valley hits 110°F.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 28 }}>
          {SERVICES.map(s => <ServiceCard key={s.id} {...s} />)}
        </div>
      </div>
    </section>
  );
}
