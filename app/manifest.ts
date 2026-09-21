import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kankoka Hills — Candijay, Bohol",
    short_name: "Kankoka Hills",
    description:
      "Mountaintop viewpoint and sunset sanctuary in Candijay, Bohol, Philippines.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFF8EC",
    theme_color: "#1E2A4A",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
