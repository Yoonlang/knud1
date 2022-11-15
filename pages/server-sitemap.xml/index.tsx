// pages/server-sitemap.xml/index.tsx
import { getServerSideSitemap } from 'next-sitemap';
import { GetServerSideProps } from 'next';
import { PRODUCER } from 'constants/producer';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const fields = [
    {
      loc: 'https://knud1.com',
      lastmod: new Date().toISOString(),
    },
    {
      loc: 'https://knud1.com/identity',
      lastmod: new Date().toISOString(),
    },
    {
      loc: 'https://knud1.com/archive',
      lastmod: new Date().toISOString(),
    },
    {
      loc: 'https://knud1.com/teams',
      lastmod: new Date().toISOString(),
    },
    {
      loc: 'https://knud1.com/thanksto',
      lastmod: new Date().toISOString(),
    },
    ...Object.values(PRODUCER).map((producer) => {
      return {
        loc: `https://knud1.com/portfolio/${producer}`,
        lastmod: new Date().toISOString(),
      };
    }),
  ];

  return getServerSideSitemap(ctx, fields);
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
export default function Sitemap() {}
