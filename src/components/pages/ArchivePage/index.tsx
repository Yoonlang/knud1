import { Column, Row } from 'components/common/styled/layout';
import React from 'react';
import { ArchivePageMobileWrapper, ArchivePagePCWrapper } from './styled';
import Image from 'next/future/image';
import { nextImageLoader } from 'utils/imageLoader';
import { ARCHIVE_DATA } from './constants';
import { useRouter } from 'next/router';
import useMobileDetect from 'utils/useMobileDetect';

const ArchivePage: React.FC = () => {
  const isMobile = useMobileDetect();

  const router = useRouter();

  const linkToPortfolio = React.useCallback(
    (producerInitial: string): void => {
      router.push(`/portfolio/${producerInitial}`);
    },
    [router]
  );

  return (
    <>
      {isMobile && (
        <ArchivePageMobileWrapper>
          {ARCHIVE_DATA.map((archive, index) => (
            <div key={archive.title} className={'content'}>
              <Image
                loader={nextImageLoader}
                src={`/assets/archive/mobile/mobile_archive_${index + 1}.webp`}
                alt={archive.title}
                width={478}
                height={611}
                placeholder="empty"
                priority
                sizes="100vw"
                onClick={() => linkToPortfolio(archive.producerInitial)}
              />
              <p className="title">{archive.title}</p>
              <p className="producer">{archive.producer}</p>
            </div>
          ))}
        </ArchivePageMobileWrapper>
      )}

      {!isMobile && (
        <ArchivePagePCWrapper>
          {ARCHIVE_DATA.map((archive, index) => (
            <div key={index} className={'content'} onClick={() => linkToPortfolio(archive.producerInitial)}>
              <Image
                loader={nextImageLoader}
                src={`/assets/archive/pc/pc_archive_${index + 1}.webp`}
                alt={archive.title}
                width={1151}
                height={818}
                placeholder="empty"
                priority
                sizes="100vw"
              />
              <Row className="text-wrap">
                <p className="producer">{archive.producer}</p>
                <Column>
                  <p className="title">{archive.title}</p>
                  {archive.subTitle && <p className="subtitle">{archive.subTitle}</p>}
                </Column>
              </Row>
            </div>
          ))}
        </ArchivePagePCWrapper>
      )}
    </>
  );
};

export default ArchivePage;
