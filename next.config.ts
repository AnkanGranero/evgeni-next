import type { NextConfig } from "next";
import path from "path";
const nextConfig: NextConfig = {

  sassOptions: {
    additionalData: `@use "${path.resolve(__dirname, "./styles/colors.scss")}" as *;`,
  },
    images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.ctfassets.net" },
      { protocol: "https", hostname: "assets.ctfassets.net" },
    ],
  },
};

export default nextConfig;
