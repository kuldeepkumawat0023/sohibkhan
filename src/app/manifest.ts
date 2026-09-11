import type { MetadataRoute } from "next";
import { defaultSEO } from "@/utils/seoConfig";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: defaultSEO.title,
    short_name: "Sohib Khan QA",
    description: defaultSEO.description,
    start_url: "/",
    id: "/",
    scope: "/",
    display: "standalone",
    background_color: "#0B0F14",
    theme_color: "#48A293",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "48x48 32x32 16x16",
        type: "image/x-icon",
      },
    ],
    screenshots: [
      {
        src: "/logo.png",
        sizes: "1920x1080",
        type: "image/png",
        form_factor: "wide",
        label: "Sohib Khan — Full Stack QA & Automation Specialist Portfolio",
      },
      {
        src: "/og-image.png",
        sizes: "1920x1080",
        type: "image/png",
        form_factor: "narrow",
        label: "SK Sohib Khan — Software Tester",
      },
    ],
  };
}
