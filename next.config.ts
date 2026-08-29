import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Inline the (small, atomic Tailwind) stylesheet into the HTML —
    // removes a render-blocking round trip, which matters on slow mobile.
    inlineCss: true,
  },
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
