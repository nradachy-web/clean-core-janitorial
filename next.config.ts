import type { NextConfig } from "next";

/** Clean Core Janitorial — static export for GitHub Pages. Preview at the project
 *  path; set basePath to "" + add public/CNAME at cutover to cleancorejanitorial.com. */
const repoBase = "/clean-core-janitorial";

const nextConfig: NextConfig = {
  output: "export",
  basePath: repoBase,
  trailingSlash: true,
  images: { loader: "custom", loaderFile: "./lib/imageLoader.ts" },
};

export default nextConfig;
