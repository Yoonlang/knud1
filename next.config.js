/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['tsx'],
  trailingSlash: false,
  experimental: {
    images: {
      allowFutureImage: true
    },
    styledComponents: true,
  },
};

module.exports = nextConfig;
