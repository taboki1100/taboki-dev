import type { NextConfig } from "next";

// A static site: `next build` writes plain HTML/CSS/JS to out/, served as is by Vercel.
const nextConfig: NextConfig = {
  output: "export",
};

export default nextConfig;
