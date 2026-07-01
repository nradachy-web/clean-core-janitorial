import type { NextConfig } from "next";

/** Clean Core Janitorial — static export for GitHub Pages. Live at the root domain
 *  cleancorejanitorial.com (public/CNAME set), so basePath is empty. */
const repoBase = "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: repoBase,
  trailingSlash: true,
  images: { loader: "custom", loaderFile: "./lib/imageLoader.ts" },
};

export default nextConfig;
