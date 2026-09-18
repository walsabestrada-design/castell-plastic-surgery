import { ImageResponse } from "next/og";

export const alt = "Dr. Adrián Castell — Cirugía Plástica y Reconstructiva";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #101c2c 0%, #1c2f47 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 36,
          }}
        >
          <svg width="42" height="42" viewBox="0 0 24 24" fill="none" style={{ display: "flex" }}>
            <circle cx="12" cy="12" r="9.5" stroke="#d4af5f" strokeWidth="1.4" />
            <path d="M8 12.5l2.5 2.5L16 9" stroke="#d4af5f" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div
            style={{
              display: "flex",
              fontSize: 40,
              letterSpacing: 10,
              color: "#ffffff",
              fontFamily: "serif",
            }}
          >
            CASTELL
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 60,
            color: "#ffffff",
            textAlign: "center",
            maxWidth: 940,
            lineHeight: 1.15,
            fontFamily: "serif",
          }}
        >
          Cirugía con nombre propio.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#d4af5f",
            marginTop: 30,
            letterSpacing: 5,
          }}
        >
          DR. ADRIÁN CASTELL — CIRUGÍA PLÁSTICA
        </div>
      </div>
    ),
    { ...size }
  );
}
