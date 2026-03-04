import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kilolend.xyz',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
