import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The Ventures section used to live at /businesses.
      { source: "/businesses", destination: "/ventures", permanent: true },
      { source: "/businesses/:path*", destination: "/ventures/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
