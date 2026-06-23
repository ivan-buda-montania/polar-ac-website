import { C } from "../tokens";

export default function SummerSpecial() {
  return (
    <section id="summer-special" style={{
      background: `linear-gradient(135deg, ${C.navy} 0%, #0a3a6e 50%, #0d4f8a 100%)`,
      padding: "80px 5vw", position: "relative", overflow: "hidden",
    }}>
      {/* Background sun decoration */}
      <div style={{
        position: "absolute", top: "-80px", right: "-80px",
        width: 320, height: 320, borderRadius: "50%",
        background: `radial-gradient(circle, rgba(255,213,74,0.18) 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />
      {/* Snowflake decorations */}
      {["❄", "❅", "❆"].map((s, i) => (
        <div key={i} style={{
          position: "absolute",
          color: "rgba(63,182,248,0.1)",
          fontSize: [100, 70, 90][i],
          top: ["10%", "60%", "30%"][i],
          left: ["3%", "88%", "50%"][i],
          pointerEvents: "none",
        }}>{s}</div>
      ))}

      <div style={{ maxWidth: 900, margin: "0 auto", position: "relative" }}>
        {/* Top label */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <span style={{
            background: C.orange, color: C.white,
            padding: "8px 24px", borderRadius: 24,
            fontSize: 14, fontWeight: 900, letterSpacing: 2, textTransform: "uppercase",
            boxShadow: "0 6px 20px rgba(245,130,32,0.5)",
          }}>
            🔥 SUMMER SPECIAL — LIMITED TIME
          </span>
        </div>

        {/* Main card */}
        <div style={{
          background: "rgba(255,255,255,0.06)",
          border: `2px solid rgba(255,213,74,0.3)`,
          borderRadius: 24, padding: "44px 48px",
          display: "grid", gridTemplateColumns: "1fr auto",
          gap: 40, alignItems: "center",
        }}>
          <div>
            <h2 style={{
              fontFamily: "'Trebuchet MS', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 900, color: C.white, margin: "0 0 12px", lineHeight: 1.1,
            }}>
              Preventive Maintenance<br />
              <span style={{ color: C.sun }}>Tune-Up</span>
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, margin: "0 0 24px", maxWidth: 420 }}>
              Full 21-point AC inspection + filter replacement + coil cleaning + refrigerant check. Avoid a $800+ emergency repair this summer.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="#contact" style={{
                background: C.orange, color: C.white,
                padding: "14px 28px", borderRadius: 10,
                fontWeight: 800, fontSize: 16, textDecoration: "none",
                boxShadow: "0 6px 20px rgba(245,130,32,0.5)",
                transition: "transform 0.2s",
              }}
                onMouseOver={e => e.currentTarget.style.transform = "translateY(-2px)"}
                onMouseOut={e => e.currentTarget.style.transform = "none"}>
                Book Now →
              </a>
              <a href="tel:7606583881" style={{
                border: "2px solid rgba(255,255,255,0.3)", color: C.white,
                padding: "14px 24px", borderRadius: 10,
                fontWeight: 700, fontSize: 15, textDecoration: "none",
                transition: "background 0.2s",
              }}
                onMouseOver={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
                onMouseOut={e => e.currentTarget.style.background = "transparent"}>
                📞 +1 (760) 658-3881
              </a>
            </div>
          </div>

          {/* Price badge */}
          <div style={{
            background: C.sun, color: C.navy,
            borderRadius: 20, padding: "28px 36px",
            textAlign: "center", flexShrink: 0,
            boxShadow: "0 12px 36px rgba(255,213,74,0.4)",
            border: `3px solid rgba(255,255,255,0.3)`,
          }}>
            <div style={{ fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>Only</div>
            <div style={{ fontSize: 72, fontWeight: 900, lineHeight: 1, fontFamily: "'Trebuchet MS', sans-serif" }}>$99</div>
            <div style={{ fontSize: 13, fontWeight: 700, marginTop: 6, opacity: 0.75 }}>per unit</div>
          </div>
        </div>

        {/* Checklist */}
        <div style={{ display: "flex", gap: 28, justifyContent: "center", marginTop: 28, flexWrap: "wrap" }}>
          {["✅ Preventive Maintenance", "✅ Repairs", "✅ Residential & Commercial"].map(item => (
            <span key={item} style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", fontWeight: 600 }}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
