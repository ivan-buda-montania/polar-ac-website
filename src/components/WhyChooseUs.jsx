import { C } from "../tokens";
import PolarBearLogo from "./PolarBearLogo";

const REASONS = [
  { icon: "🧊", title: "Beat the Heat Before It Starts", desc: "Don't wait until your AC breaks down on a 110°F day. Preventive service saves you hundreds." },
  { icon: "⚡", title: "Fast, Same-Week Service", desc: "We know summer doesn't wait. Most appointments confirmed within 24–48 hours." },
  { icon: "💰", title: "Upfront, Honest Pricing", desc: "You see the full quote before we touch anything. No hidden fees, no surprise invoices." },
  { icon: "🏆", title: "Licensed & Insured", desc: "Lic #1131567. Certified HVAC technicians serving the Coachella Valley for over 10 years." },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" style={{
      background: `linear-gradient(180deg, ${C.ice} 0%, ${C.sand} 100%)`,
      padding: "90px 5vw", overflow: "hidden",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
        {/* Left: Bear + quote bubble */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
          {/* Quote bubble */}
          <div style={{
            background: C.white, borderRadius: 20,
            padding: "18px 24px", marginBottom: 24,
            boxShadow: "0 8px 28px rgba(13,43,78,0.12)",
            border: `2px solid ${C.skyBlue}`,
            position: "relative", maxWidth: 300,
            fontFamily: "'Trebuchet MS', sans-serif",
          }}>
            <div style={{ fontSize: 22, fontWeight: 900, color: C.navy, lineHeight: 1.1 }}>
              "Stay cool.<br />I've got you covered."
            </div>
            <div style={{ fontSize: 13, color: C.gray, marginTop: 6 }}>— Polar Bear, Polar AC Mascot</div>
            {/* Bubble tail */}
            <div style={{
              position: "absolute", bottom: -16, left: "50%", transform: "translateX(-50%)",
              width: 0, height: 0,
              borderLeft: "14px solid transparent",
              borderRight: "14px solid transparent",
              borderTop: `16px solid ${C.skyBlue}`,
            }} />
          </div>

          {/* Bear */}
          <div style={{ position: "relative" }}>
            <div style={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%, -60%)",
              width: 280, height: 280, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(63,182,248,0.18) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />
            <PolarBearLogo size={240} variant="surfing" />
          </div>

          {/* Mini ac unit */}
          <div style={{
            background: C.white, borderRadius: 12, padding: "10px 20px",
            border: `1.5px solid ${C.lightGray}`,
            display: "flex", alignItems: "center", gap: 10,
            boxShadow: "0 4px 14px rgba(13,43,78,0.08)", marginTop: 16,
          }}>
            <span style={{ fontSize: 24 }}>🌡️</span>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: C.navy }}>Outside: 108°F</div>
              <div style={{ fontSize: 13, color: C.skyBlue, fontWeight: 700 }}>Inside: ❄️ 72°F</div>
            </div>
          </div>
        </div>

        {/* Right: reasons grid */}
        <div>
          <span style={{ fontSize: 12, fontWeight: 800, color: C.orange, letterSpacing: 3, textTransform: "uppercase" }}>Why Polar AC?</span>
          <h2 style={{
            fontFamily: "'Trebuchet MS', sans-serif",
            fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
            fontWeight: 900, color: C.navy, margin: "10px 0 32px", lineHeight: 1.15,
          }}>
            San Diego & Surrounding Areas<br />
            <span style={{ color: C.skyBlue }}>Most Trusted</span> HVAC Team
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {REASONS.map((r, i) => (
              <div key={i} style={{
                background: C.white, borderRadius: 16, padding: "22px 20px",
                border: `1.5px solid ${C.lightGray}`,
                boxShadow: "0 2px 10px rgba(13,43,78,0.06)",
              }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{r.icon}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: C.navy, margin: "0 0 8px", fontFamily: "'Trebuchet MS', sans-serif" }}>{r.title}</h3>
                <p style={{ fontSize: 13, color: C.gray, lineHeight: 1.6, margin: 0 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
