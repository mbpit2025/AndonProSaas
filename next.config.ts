import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Explicitly set the root directory to avoid ambiguity
    root: './', // This points to the current directory (where next.config.ts is)
    // Alternative: use absolute path for certainty
    // root: 'C:/Users/user/Desktop/PWI2/AndonPro/andon-pro',
  },
};

export default nextConfig;
