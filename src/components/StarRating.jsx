import { C } from '../tokens';

// ─── Star Rating ──────────────────────────────────────────────────────────────
function Stars({ count = 5 }) {
  return (
    <span style={{ color: C.amber, fontSize: 14, letterSpacing: 1 }}>
      {"★".repeat(count)}{"☆".repeat(5 - count)}
    </span>
  );
}

export default Stars;