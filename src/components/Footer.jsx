import { useState, useEffect, useRef } from "react";
import PolarBearLogo from './PolarBearLogo';
import { C } from '../tokens';

// ─── Footer ───────────────────────────────────────────────────────────────────
export default function Footer() {
  return (
    <footer style={{
      background: C.navy,
      borderTop: `4px solid ${C.orange}`,
      padding: "56px 5vw 28px",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 52, marginBottom: 44, alignItems: "start" }}>
          {/* Brand + bear */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
              <PolarBearLogo size={56} variant="small" />
              <div>
                <div style={{ fontFamily: "'Trebuchet MS', sans-serif", fontWeight: 900, fontSize: 22, color: C.white, letterSpacing: 1 }}>POLAR AC</div>
                <div style={{ fontSize: 10, color: C.skyBlue, letterSpacing: 3, textTransform: "uppercase" }}>HEATING & COOLING</div>
              </div>
            </div>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, maxWidth: 300, margin: "0 0 16px" }}>
              Reliable HVAC maintenance and repair for the San Diego area. Licensed, insured, always upfront with pricing.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              <span style={{
                background: "rgba(255,213,74,0.15)", border: `1px solid ${C.sun}40`,
                color: C.sun, padding: "4px 12px", borderRadius: 6,
                fontSize: 12, fontWeight: 700,
              }}>Lic # 1131567</span>
              <span style={{
                background: "rgba(63,182,248,0.12)", border: `1px solid ${C.skyBlue}40`,
                color: C.skyBlue, padding: "4px 12px", borderRadius: 6,
                fontSize: 12, fontWeight: 700,
              }}>10+ Years</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: C.white, fontSize: 14, fontWeight: 800, textTransform: "uppercase", letterSpacing: 1, marginBottom: 18 }}>Services</h4>
            {["AC Tune-Up — $99", "Preventive Maintenance", "Refrigerant Recharge", "Residential Repair", "Commercial Service", "Emergency Repair"].map(s => (
              <div key={s} style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 9, cursor: "default" }}>{s}</div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: C.white, fontSize: 14, fontWeight: 800, textTransform: "uppercase", letterSpacing: 1, marginBottom: 18 }}>Contact</h4>
            <a href="tel:7606583881" style={{ display: "block", fontSize: 15, color: "rgba(255,255,255,0.75)", marginBottom: 8, textDecoration: "none", fontWeight: 600 }}>
              📞 760-658-3881
            </a>
            <a href="tel:7604452261" style={{ display: "block", fontSize: 15, color: "rgba(255,255,255,0.75)", marginBottom: 18, textDecoration: "none", fontWeight: 600 }}>
              📞 760-445-2261
            </a>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>
              San Diego & Surrounding Areas<br />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 22, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.3)" }}>
            © {new Date().getFullYear()} Polar AC Heating & Cooling. All rights reserved.
          </div>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.3)" }}>
            Lic # 1131567 · San Diego, CA
          </div>
        </div>
      </div>
    </footer>
  );
}
