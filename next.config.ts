import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF first: ~30% smaller than WebP for photographic images.
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
