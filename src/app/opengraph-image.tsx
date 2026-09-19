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
          <svg width="38" height="38" viewBox="0 0 24 24" fill="none" style={{ display: "flex" }}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#d4af5f"
              d="M4 19V6h3.2v3.5h3.2V6h3.2v3.5h3.2V6H20v13H4Zm8-4.8-1.1 1.4V19h2.2v-3.4L12 14.2Z"
            />
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
