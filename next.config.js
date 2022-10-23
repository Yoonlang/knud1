// eslint-disable-next-line @typescript-eslint/no-var-requires
const withVideos = require('next-videos');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['tsx'],
  trailingSlash: false,
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    loader: 'akamai',
    path: '/',
  },
};

module.exports = withVideos(nextConfig);
