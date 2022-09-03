import { Column, Row } from 'components/common/styled/layout';
import DefaultLayoutMobile from 'components/templates/DefaultLayoutMobile';
import DefaultLayoutPC from 'components/templates/DefaultLayoutPC';
import React from 'react';
import { ArchivePageMobileWrapper, ArchivePagePCWrapper } from './styled';

const ArchivePage: React.FC = () => {
  return (
    <>
      <DefaultLayoutMobile>
        <ArchivePageMobileWrapper>
          {[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].map((_, index) => (
            <div key={index} className={'content'}>
              <img src={'/assets/sample.png'} alt={'sample'} />
              <p className="title">Jalza</p>
              <p className="name">정다은</p>
            </div>
          ))}
        </ArchivePageMobileWrapper>
      </DefaultLayoutMobile>
      <DefaultLayoutPC>
        <ArchivePagePCWrapper>
          {[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].map((_, index) => (
            <div key={index} className={'content'}>
              <img src={'/assets/ice.jpeg'} alt={'sample'} />
              <Row className="text-wrap">
                <p className="name">이예림</p>
                <Column>
                  <p className="title">오메가메</p>
                  <p>omegame</p>
                </Column>
              </Row>
            </div>
          ))}
        </ArchivePagePCWrapper>
      </DefaultLayoutPC>
    </>
  );
};

export default ArchivePage;
