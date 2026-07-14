import { C } from '../tokens';
import { TESTIMONIALS } from '../data/testimonials';
import { useIsMobile } from '../hooks/useIsMobile';

function Stars({ count = 5 }) {
  return <span style={{ color: C.sun, fontSize: 16, letterSpacing: 2 }}>{"★".repeat(count)}</span>;
}

export default function Testimonials() {
  const isMobile = useIsMobile();

  return (
    <section id="testimonials" style={{
      background: `linear-gradient(180deg, ${C.sand} 0%, ${C.ice} 100%)`,
      padding: isMobile ? "60px 5vw" : "90px 5vw",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ fontSize: 12, fontWeight: 800, color: C.orange, letterSpacing: 3, textTransform: "uppercase" }}>Happy Customers</span>
          <h2 style={{
            fontFamily: "'Trebuchet MS', sans-serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            fontWeight: 900, color: C.navy, margin: "10px 0",
          }}>What the Valley Is Saying</h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
        }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={t.name} style={{
              background: i === 1 ? C.navy : C.white,
              borderRadius: 20, padding: "32px 28px",
              boxShadow: i === 1 ? "0 16px 48px rgba(13,43,78,0.28)" : "0 4px 16px rgba(13,43,78,0.07)",
              border: `1.5px solid ${i === 1 ? C.skyBlue + "50" : C.lightGray}`,
              transform: i === 1 && !isMobile ? "scale(1.04)" : "none",
            }}>
              {/* Work photo */}
              <div style={{
                width: "100%", height: 180,
                borderRadius: 12, marginBottom: 18,
                background: i === 1 ? "rgba(63,182,248,0.1)" : C.ice,
                border: `2px dashed ${i === 1 ? C.skyBlue : C.lightGray}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                overflow: "hidden", cursor: "pointer",
              }}>
                {t.photo ? (
                  <img src={t.photo} alt="Work completed" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 10 }} />
                ) : (
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 32, marginBottom: 6 }}>📷</div>
                    <div style={{ fontSize: 12, color: i === 1 ? "rgba(255,255,255,0.4)" : C.gray }}>
                      Add work photo
                    </div>
                  </div>
                )}
              </div>

              <Stars count={t.rating} />
              <p style={{
                fontSize: 15, lineHeight: 1.75, margin: "14px 0 22px",
                color: i === 1 ? "rgba(255,255,255,0.85)" : C.gray,
                fontStyle: "italic",
              }}>"{t.text}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: i === 1 ? "rgba(63,182,248,0.2)" : C.ice,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 18, fontWeight: 800, color: i === 1 ? C.skyBlue : C.navy,
                }}>
                  {t.name[0]}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: i === 1 ? C.white : C.navy }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: i === 1 ? "rgba(255,255,255,0.5)" : C.gray }}>{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
