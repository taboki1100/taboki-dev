import type { NextConfig } from "next";

// A static site: `next build` writes plain HTML/CSS/JS to out/.
// GitHub Pages serves a project site under /<repository>/, so the Pages build
// sets PAGES_BASE_PATH=/taboki-dev (empty for a custom domain or local runs).
const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.PAGES_BASE_PATH || undefined,
};

export default nextConfig;
