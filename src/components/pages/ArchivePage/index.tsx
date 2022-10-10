import { Column, Row } from 'components/common/styled/layout';
import React from 'react';
import { ArchivePageMobileWrapper, ArchivePagePCWrapper } from './styled';
import Image from 'next/image';

const ArchivePage: React.FC = () => {
  return (
    <>
      <ArchivePageMobileWrapper>
        {[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].map((_, index) => (
          <div key={index} className={'content'}>
            <Image
              src="/assets/sample.png"
              alt="sample"
              width="100%"
              height="100%"
              layout="responsive"
              placeholder="empty"
              priority
            />
            <p className="title">Jalza</p>
            <p className="name">정다은</p>
          </div>
        ))}
      </ArchivePageMobileWrapper>

      <ArchivePagePCWrapper>
        {[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].map((_, index) => (
          <div key={index} className={'content'}>
            <Image
              src="/assets/sample.png"
              alt="sample"
              width="100%"
              height="100%"
              layout="responsive"
              placeholder="empty"
              priority
            />
            <Row className="text-wrap">
              <p className="name">이예림</p>
              <Column>
                <p className="title">오메가메</p>
                <p className="subtitle">omegame</p>
              </Column>
            </Row>
          </div>
        ))}
      </ArchivePagePCWrapper>
    </>
  );
};

export default ArchivePage;
