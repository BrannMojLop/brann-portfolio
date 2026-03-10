import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function EngineeringOpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "linear-gradient(145deg, #08111d 0%, #0d1b2a 50%, #12324d 100%)",
          color: "#f8fafc",
          padding: "64px",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: "0.28em", textTransform: "uppercase", color: "#7dd3fc" }}>
          Engineering Notes
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", width: "78%" }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1 }}>
            Architecture decisions from ERP and financial platforms.
          </div>
          <div style={{ fontSize: 30, lineHeight: 1.35, color: "#cbd5e1" }}>
            Backend patterns, domain boundaries, FastAPI service layers, and operational reliability in production systems.
          </div>
        </div>
        <div style={{ display: "flex", gap: "18px", fontSize: 24, color: "#94a3b8" }}>
          <span>ERP architecture</span>
          <span>FastAPI services</span>
          <span>Financial systems</span>
        </div>
      </div>
    ),
    size,
  );
}
