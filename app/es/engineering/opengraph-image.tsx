import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function SpanishEngineeringOpenGraphImage() {
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
          Notas de Ingenieria
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", width: "78%" }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1 }}>
            Decisiones de arquitectura construidas en plataformas ERP y financieras.
          </div>
          <div style={{ fontSize: 30, lineHeight: 1.35, color: "#cbd5e1" }}>
            Patrones backend, limites de dominio, capas de servicio con FastAPI y confiabilidad operativa en produccion.
          </div>
        </div>
        <div style={{ display: "flex", gap: "18px", fontSize: 24, color: "#94a3b8" }}>
          <span>Arquitectura ERP</span>
          <span>FastAPI</span>
          <span>Sistemas financieros</span>
        </div>
      </div>
    ),
    size,
  );
}
