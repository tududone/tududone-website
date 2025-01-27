/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    domains: ['tududone.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tududone.com',
        port: '',
        pathname: '/uploads/**',
      }
    ],
  },
  // Otimizações de produção
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Configurações de cache
  generateEtags: true,
  compress: true,
  poweredByHeader: false,
};

module.exports = nextConfig;
