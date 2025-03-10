/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // This enables static HTML export
  basePath: "/skm", // Replace with your repository name
  assetPrefix: "/skm/",
  images: {
    unoptimized: true, // GitHub Pages does not support Next.js Image Optimization
  },
};

module.exports = nextConfig;
