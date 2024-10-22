/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    if (config.cache && !dev) {
      config.cache = {
        type: 'filesystem', // 파일 시스템 캐시 설정으로 수정
        maxMemoryGenerations: 0,
      };
    }
    // 중요: 수정된 구성을 반환해야 합니다.
    return config;
  },
};

export default nextConfig;
