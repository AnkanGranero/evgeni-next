import type { NextConfig } from "next";
import path from "path";
const nextConfig: NextConfig = {

  sassOptions: {
    additionalData: `@use "${path.resolve(__dirname, "./styles/colors.scss")}" as *;`,
  },
};

export default nextConfig;
