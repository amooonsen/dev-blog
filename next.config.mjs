/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    return config;
  },
};

export default nextConfig;

// import withBundleAnalyzer from '@next/bundle-analyzer';

// withBundleAnalyzer({
//   enabled: process.env.ANALYZE === 'true',
// });

// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default withBundleAnalyzer(nextConfig);
