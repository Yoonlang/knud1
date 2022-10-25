/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://knud1.com',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: ['https://knud1.com/server-sitemap.xml'],
  },
};
