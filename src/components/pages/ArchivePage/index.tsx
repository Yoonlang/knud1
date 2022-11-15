import { Column, Row } from 'components/common/styled/layout';
import React from 'react';
import { ArchivePageMobileWrapper, ArchivePagePCWrapper } from './styled';
import Image from 'next/future/image';
import { nextImageLoader } from 'utils/imageLoader';
import { useRouter } from 'next/router';
import useMobileDetect from 'utils/useMobileDetect';
import { Producer, PRODUCER, PRODUCER_NAME, PRODUCER_SUBTITLE, PRODUCER_TITLE } from 'constants/producer';

const ArchivePage: React.FC = () => {
  const isMobile = useMobileDetect();

  const router = useRouter();

  const linkToPortfolio = React.useCallback(
    (producer: Producer): void => {
      router.push(`/portfolio/${producer}`);
    },
    [router]
  );

  return (
    <>
      {isMobile && (
        <ArchivePageMobileWrapper>
          {Object.values(PRODUCER).map((producer, index) => (
            <div key={producer} className={'content'}>
              <Image
                loader={nextImageLoader}
                src={`/assets/archive/mobile/mobile_archive_${index + 1}.png`}
                alt={PRODUCER_TITLE[producer]}
                width={478}
                height={611}
                placeholder="empty"
                priority
                onClick={() => linkToPortfolio(producer)}
              />
              <p className="title">{PRODUCER_TITLE[producer]}</p>
              <p className="producer">{PRODUCER_NAME[producer]}</p>
            </div>
          ))}
        </ArchivePageMobileWrapper>
      )}

      {!isMobile && (
        <ArchivePagePCWrapper>
          {Object.values(PRODUCER).map((producer, index) => (
            <div key={index} className={'content'} onClick={() => linkToPortfolio(producer)}>
              <Image
                loader={nextImageLoader}
                src={`/assets/archive/pc/pc_archive_${index + 1}.png`}
                alt={PRODUCER_TITLE[producer]}
                width={1151}
                height={818}
                placeholder="empty"
                priority
              />
              <Row className="text-wrap">
                <p className="producer">{PRODUCER_NAME[producer]}</p>
                <Column>
                  <p className="title">{PRODUCER_TITLE[producer]}</p>
                  {producer === (PRODUCER['gny'] || PRODUCER['ojh'] || PRODUCER['lyr'] || PRODUCER['lwj']) && (
                    <p className="subtitle">{PRODUCER_SUBTITLE[producer]}</p>
                  )}
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
