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

module.exports = nextConfig;
