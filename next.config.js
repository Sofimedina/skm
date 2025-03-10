const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/skm/' : '',
  basePath: isProd ? '/skm' : '',
  output: 'export'
};
  
module.exports = nextConfig;