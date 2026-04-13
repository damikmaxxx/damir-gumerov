const nextConfig = {
  images: {
    qualities: [75, 100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'w.wallhaven.cc',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
