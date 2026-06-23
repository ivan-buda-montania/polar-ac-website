import { useState, useEffect, useRef } from "react";
import { C } from '../tokens';

// ─── Contact Form ─────────────────────────────────────────────────────────────
export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = e => { e.preventDefault(); setSent(true); };

  const inp = {
    width: "100%", padding: "12px 16px", borderRadius: 8,
    border: `1.5px solid ${C.lightGray}`, fontSize: 15,
    color: C.navy, fontFamily: "inherit", outline: "none",
    boxSizing: "border-box", background: C.white, transition: "border 0.2s",
  };
  const focus = e => e.target.style.border = `1.5px solid ${C.skyBlue}`;
  const blur = e => e.target.style.border = `1.5px solid ${C.lightGray}`;

  return (
    <section id="contact" style={{ background: C.sand, padding: "90px 5vw" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
        {/* Left */}
        <div>
          <span style={{ fontSize: 12, fontWeight: 800, color: C.orange, letterSpacing: 3, textTransform: "uppercase" }}>Get In Touch</span>
          <h2 style={{
            fontFamily: "'Trebuchet MS', sans-serif",
            fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
            fontWeight: 900, color: C.navy, margin: "10px 0 16px",
          }}>
            Book Your Service Today
          </h2>
          <p style={{ fontSize: 16, color: C.gray, lineHeight: 1.7, marginBottom: 36 }}>
            Free estimates on all service calls. We'll confirm your appointment within a few hours.
          </p>
          {[
            { icon: "📞", label: "Phone", val: "760-658-3881 / 760-445-2261" },
            { icon: "🏆", label: "License", val: "Lic # 1131567" },
            { icon: "📍", label: "Service Area", val: "San Diego & Surrounding Areas" },
            { icon: "🕐", label: "Hours", val: "Mon–Sat 7AM–7PM · Emergency calls available" },
          ].map(item => (
            <div key={item.label} style={{ display: "flex", gap: 14, marginBottom: 20, alignItems: "flex-start" }}>
              <span style={{ fontSize: 22 }}>{item.icon}</span>
              <div>
                <div style={{ fontSize: 12, fontWeight: 800, color: C.navy, textTransform: "uppercase", letterSpacing: 0.5 }}>{item.label}</div>
                <div style={{ fontSize: 15, color: C.gray, marginTop: 2 }}>{item.val}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div style={{
          background: C.white, borderRadius: 22, padding: "38px 34px",
          boxShadow: "0 10px 40px rgba(13,43,78,0.1)", border: `1px solid ${C.lightGray}`,
        }}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "36px 0" }}>
              <div style={{ fontSize: 60 }}>✅</div>
              <h3 style={{ fontFamily: "'Trebuchet MS', sans-serif", color: C.navy, fontSize: 22, margin: "16px 0 8px" }}>Request Sent!</h3>
              <p style={{ color: C.gray, fontSize: 15, lineHeight: 1.6 }}>We'll call you within a few hours to confirm your appointment.</p>
              <a href="tel:7606583881" style={{ display: "inline-block", marginTop: 20, background: C.orange, color: C.white, padding: "12px 26px", borderRadius: 8, fontWeight: 700, textDecoration: "none" }}>
                Call Us Now
              </a>
            </div>
          ) : (
            <form onSubmit={submit}>
              <h3 style={{ fontFamily: "'Trebuchet MS', sans-serif", color: C.navy, fontSize: 20, margin: "0 0 24px", fontWeight: 800 }}>
                ❄️ Free Service Estimate
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                <input name="name" placeholder="Full Name" value={form.name} onChange={handle} required style={inp} onFocus={focus} onBlur={blur} />
                <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handle} required style={inp} onFocus={focus} onBlur={blur} />
              </div>
              <input name="email" type="email" placeholder="Email Address" value={form.email} onChange={handle} style={{ ...inp, marginBottom: 14 }} onFocus={focus} onBlur={blur} />
              <select name="service" value={form.service} onChange={handle} required style={{ ...inp, marginBottom: 14, cursor: "pointer" }}>
                <option value="">Select Service Type</option>
                <option>AC Tune-Up — $99 Summer Special</option>
                <option>Preventive Maintenance</option>
                <option>Refrigerant Recharge</option>
                <option>Residential Repair</option>
                <option>Commercial Service</option>
                <option>Emergency Repair</option>
              </select>
              <textarea name="message" placeholder="Describe your issue or any questions..." value={form.message} onChange={handle} rows={3} style={{ ...inp, marginBottom: 20, resize: "vertical" }} onFocus={focus} onBlur={blur} />
              <button type="submit" style={{
                width: "100%", background: C.navy, color: C.white,
                padding: "15px", borderRadius: 10, fontWeight: 800, fontSize: 16,
                border: "none", cursor: "pointer", fontFamily: "inherit", transition: "background 0.2s",
              }}
                onMouseOver={e => e.target.style.background = "#1a4070"}
                onMouseOut={e => e.target.style.background = C.navy}>
                Request My Free Estimate →
              </button>
              <p style={{ fontSize: 12, color: C.gray, textAlign: "center", marginTop: 10 }}>No spam. We'll only call to confirm your appointment.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
