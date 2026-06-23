import { useState, useEffect, useRef } from "react";
import { C } from '../tokens';
import bearImg from '../assets/polar-ac-logo.png';

// ─── Polar Bear SVG Logo ──────────────────────────────────────────────────────
export default function PolarBearLogo({ size = 120, variant = "surfing" }) {
  if (variant === "small") {
    return (
      <img
        src={bearImg}
        alt="Polar AC logo"
        style={{
          width: size,
          height: size,
          objectFit: "contain",
        }}
      />
    );
  }
  return (
    <img
      src={bearImg}
      alt="Polar AC surfing bear"
      style={{
        width: size,
        height: "auto",
        objectFit: "contain",
      }}
    />
  );
}