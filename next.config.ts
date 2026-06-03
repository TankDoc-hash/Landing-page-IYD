import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.train.aksharyogaonline.com",
      },
    ],
  },
};

export default nextConfig;
