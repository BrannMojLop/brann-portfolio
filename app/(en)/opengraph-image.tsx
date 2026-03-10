import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #07111f 0%, #0f172a 52%, #102f42 100%)",
          color: "#f8fafc",
          padding: "64px",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "74%" }}>
          <div style={{ fontSize: 22, letterSpacing: "0.3em", textTransform: "uppercase", color: "#5eead4" }}>
            Software Engineer Portfolio
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <div style={{ fontSize: 74, fontWeight: 700, lineHeight: 1 }}>
              Brandon Mojica Lopez
            </div>
            <div style={{ fontSize: 34, lineHeight: 1.3, color: "#cbd5e1" }}>
              ERP Systems Engineer, Python FastAPI Backend Engineer, and Systems Architect focused on enterprise software.
            </div>
          </div>
          <div style={{ display: "flex", gap: "16px", fontSize: 24, color: "#94a3b8" }}>
            <span>Businext ERP</span>
            <span>TR0V1 Credit Platform</span>
          </div>
        </div>
        <div
          style={{
            width: "220px",
            height: "220px",
            borderRadius: "36px",
            border: "1px solid rgba(148, 163, 184, 0.35)",
            background: "rgba(15, 23, 42, 0.42)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 28,
            color: "#5eead4",
          }}
        >
          Architecture
        </div>
      </div>
    ),
    size,
  );
}
