/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [], // Add domains if you use external images
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpe?g|webp)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'assets/[name].[hash][ext]', // Output to 'assets' folder
      },
    });
    return config;
  },
};

module.exports = {
  env: {
    API_URL: process.env.API_URL,
  },
  nextConfig,
};
