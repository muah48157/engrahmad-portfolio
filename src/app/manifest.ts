import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Muhammad Ahmad",
    short_name: "Muhammad Ahmad",
    description:
      "Production-focused Flutter Developer and Mobile Software Engineer building cross-platform mobile applications with Flutter, Dart, BLoC/Cubit, REST APIs, Firebase, Supabase, and dual app-store deployment.",
    start_url: "/",
    display: "standalone",
    background_color: "#070b12",
    theme_color: "#0f766e",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
