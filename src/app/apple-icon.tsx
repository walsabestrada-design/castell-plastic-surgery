import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#101c2c",
        }}
      >
        <svg width="112" height="112" viewBox="0 0 24 24" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#d4af5f"
            d="M4 19V6h3.2v3.5h3.2V6h3.2v3.5h3.2V6H20v13H4Zm8-4.8-1.1 1.4V19h2.2v-3.4L12 14.2Z"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
