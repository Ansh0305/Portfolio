import type { MetadataRoute } from "next";
import { profile } from "@/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name} — ${profile.role}`,
    short_name: profile.name,
    description: profile.heroSubtitleLines.join(" "),
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0A",
    theme_color: "#FFD600",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}