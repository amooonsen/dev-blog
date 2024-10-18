/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.externals = config.externals || {};
    config.externals['.next/cache'] = 'commonjs .next/cache';
    return config;
  },
};

export default nextConfig;
