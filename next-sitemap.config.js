/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://knud1.com',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: ['https://knud1.com/server-sitemap.xml'],
  },
};
