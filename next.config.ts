import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.220", "192.168.100.2"],
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 390, 480, 640, 768, 828, 1024, 1200, 1440, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
};

export default nextConfig;
