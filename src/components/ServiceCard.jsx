import { useState, useEffect, useRef } from "react";
import { C } from '../tokens';

// ─── Service Card ─────────────────────────────────────────────────────────────
function ServiceCard({ icon, title, desc }) {
  const [hov, setHov] = useState(false);
  return (
    <div style={{
      background: C.white, borderRadius: 16, padding: "28px 24px",
      border: `1.5px solid ${hov ? C.skyBlue : C.lightGray}`,
      boxShadow: hov ? `0 12px 32px rgba(62,182,232,0.18)` : "0 2px 8px rgba(13,43,78,0.06)",
      transition: "all 0.25s ease", cursor: "default",
      transform: hov ? "translateY(-4px)" : "none",
    }} onMouseOver={() => setHov(true)} onMouseOut={() => setHov(false)}>
      <div style={{ fontSize: 38, marginBottom: 14 }}>{icon}</div>
      <h3 style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: 17, fontWeight: 700, color: C.navy, margin: "0 0 10px" }}>{title}</h3>
      <p style={{ fontSize: 14, color: C.gray, lineHeight: 1.65, margin: 0 }}>{desc}</p>
      <div style={{ marginTop: 16, width: 36, height: 3, background: hov ? C.orange : C.skyBlue, borderRadius: 2, transition: "all 0.25s" }} />
    </div>
  );
}



export default ServiceCard;