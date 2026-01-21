import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // ⚠️ CHANGE THIS: It must match your repository name exactly.
  // Based on your screenshot, your folder is 'uni-hub'.
  // If your GitHub repository is also named 'uni-hub', keep it like this:
  basePath: "/uni-hub",
};

export default nextConfig;