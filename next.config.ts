import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "api.nice2strangers.org"], // Add your backend hostname here
  },
};

export default nextConfig;
