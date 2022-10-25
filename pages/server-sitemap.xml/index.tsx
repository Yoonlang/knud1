// pages/server-sitemap.xml/index.tsx
import { getServerSideSitemap } from 'next-sitemap';
import { GetServerSideProps } from 'next';
import { ARCHIVE_DATA } from 'components/pages/ArchivePage/constants';

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
    ...ARCHIVE_DATA.map((data) => {
      return {
        loc: `https://knud1.com/portfolio/${data.producerInitial}`,
        lastmod: new Date().toISOString(),
      };
    }),
  ];

  return getServerSideSitemap(ctx, fields);
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
export default function Sitemap() {}
