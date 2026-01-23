import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // this enables static export
  images: {
    unoptimized: true, // important for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'as2.ftcdn.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
  trailingSlash: true,
  transpilePackages: ['@splinetool/runtime'],
};

export default nextConfig;
