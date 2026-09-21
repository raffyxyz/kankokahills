import { ImageResponse } from "next/og";

export const alt = "Kankoka Hills — Candijay, Bohol, Philippines";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        backgroundColor: "#1E2A4A",
        padding: "60px 80px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "rgba(242, 166, 90, 0.2)",
          border: "1px solid rgba(242, 166, 90, 0.4)",
          borderRadius: "9999px",
          padding: "8px 20px",
          color: "#FBD98D",
          fontSize: "18px",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "2px",
          marginBottom: "24px",
        }}
      >
        Candijay, Bohol, Philippines
      </div>
      <div
        style={{
          display: "flex",
          fontSize: "64px",
          fontWeight: 800,
          color: "#FFF8EC",
          lineHeight: 1.1,
          letterSpacing: "-1px",
          marginBottom: "16px",
        }}
      >
        Kankoka Hills
      </div>
      <div
        style={{
          display: "flex",
          fontSize: "26px",
          color: "rgba(255, 248, 236, 0.8)",
          maxWidth: "900px",
          lineHeight: 1.4,
        }}
      >
        Sweeping 360° panoramas, rolling green ridges, and legendary sunsets
        above Candijay.
      </div>
    </div>,
    {
      ...size,
    }
  );
}
