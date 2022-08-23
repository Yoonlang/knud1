/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['tsx'],
  trailingSlash: false,
  experimental: {
    styledComponents: true,
    images: {
      allowFutureImage: true
    }
  },
};

module.exports = nextConfig;
