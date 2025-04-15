import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // this enables static export
  images: {
    unoptimized: true, // important for static export
  },
  trailingSlash: true,
};

export default nextConfig;