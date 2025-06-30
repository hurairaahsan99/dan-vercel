export default {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tuaja-api.jigsawtech.co',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.tuaja.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'tuajaprod-api.jigsawtech.co',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '192.168.100.123',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        pathname: '/**',
      },
    ],
  },
};