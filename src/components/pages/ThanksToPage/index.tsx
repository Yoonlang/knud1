import ItemFrame from 'components/common/ItemFrame';
import { Column, Row } from 'components/common/styled/layout';
import Link from 'next/link';
import React from 'react';
import { PARTNERS_DATA, PROFESSOR_DATA } from './constants';
import { ThanksToPageMobileWrapper, ThanksToPagePCWrapper } from './styled';
import Image from 'next/future/image';
import { nextImageLoader } from 'utils/imageLoader';
import allProf from '../../../../public/assets/partners/all-prof_img.png';
import useMobileDetect from 'utils/useMobileDetect';

const ThanksToPage: React.FC = () => {
  const isMobile = useMobileDetect();

  return (
    <>
      {isMobile && (
        <ThanksToPageMobileWrapper>
          <ItemFrame title={'professor'} className="professor">
            <Image
              className="all-prof"
              loader={nextImageLoader}
              src={allProf}
              alt={'all-prof_img'}
              width={1190}
              height={670}
              placeholder="empty"
              priority
            />
            <p className="description">
              지난 4년간, 우리 디자인학과 학생들은 각자의 고정된 시각에서 벗어나 세상을 새롭고 다르게 보는 법을
              배웠으며, 논리와 감성을 조화롭게 사용함으로써 문제를 파악하고 해결 방법을 제시하는 역량을 함양했습니다.
              <br /> 디자인이 세상을 만들어간다는 말이 있듯이 디자인학과의 제각기 다른 가치를 가지는 26명이 4년 동안
              갈고 닦은 교육실습과 창작 활동의 결과물로 앞으로 이 세상에 의미 있는 변화를 가져다주기를 기대하며
              디자인학과 졸업전시회 &apos;일의 이십육 제곱은 일&apos;을 각기 다른 모습으로 채워 준 4학년 여러분 모두에게
              감사와 축하의 인사를 전합니다.
            </p>

            <div className={'professor-list'}>
              {PROFESSOR_DATA.map((professor) => (
                <Row key={professor.name}>
                  <Image
                    loader={nextImageLoader}
                    src={professor.imgSrc}
                    width={300}
                    height={400}
                    alt={professor.name}
                    placeholder="empty"
                    priority
                  />
                  <Column>
                    <p className="name">
                      {professor.position}. {professor.name}
                    </p>
                    <p className="email">{professor.email}</p>
                  </Column>
                </Row>
              ))}
            </div>
          </ItemFrame>
          <ItemFrame title={'partners'} className="partners">
            <div>
              {PARTNERS_DATA.map((partner) => (
                <Column key={partner.name}>
                  <Image
                    loader={nextImageLoader}
                    src={partner.imgSrc}
                    alt={partner.name}
                    width={1200}
                    height={800}
                    placeholder="empty"
                    priority
                  />

                  <p className="name">{partner.name}</p>
                  <p className="link">{partner.contact}</p>
                  {partner.site && (
                    <Link href={'https://' + partner.site} passHref>
                      <a target="_blank" rel="noopener noreferrer" className="link">
                        {partner.site}
                      </a>
                    </Link>
                  )}
                  {partner.email && (
                    <a href={`mailto:${partner.email}`} className="link">
                      {partner.email}
                    </a>
                  )}
                </Column>
              ))}
            </div>
          </ItemFrame>
        </ThanksToPageMobileWrapper>
      )}

      {!isMobile && (
        <ThanksToPagePCWrapper>
          <ItemFrame title={'professor'} className="professor">
            <Row>
              <Image
                loader={nextImageLoader}
                src={allProf}
                alt={'all-prof_img'}
                width={1190}
                height={670}
                placeholder="empty"
                priority
              />
              <p className="description">
                지난 4년간, 우리 디자인학과 학생들은 각자의 고정된 시각에서 벗어나 세상을 새롭고 다르게 보는 법을
                배웠으며, 논리와 감성을 조화롭게 사용함으로써 문제를 파악하고 해결 방법을 제시하는 역량을 함양했습니다.
                디자인이 세상을 만들어간다는 말이 있듯이 디자인학과의 제각기 다른 가치를 가지는 26명이 4년 동안 갈고
                닦은 교육실습과 창작 활동의 결과물로 앞으로 이 세상에 의미 있는 변화를 가져다주기를 기대하며 디자인학과
                졸업전시회 &apos;일의 이십육 제곱은 일&apos;을 각기 다른 모습으로 채워 준 4학년 여러분 모두에게 감사와
                축하의 인사를 전합니다.
              </p>
            </Row>

            <div className={'professor-list'}>
              {PROFESSOR_DATA.map((professor) => (
                <Row key={professor.name}>
                  <Image
                    loader={nextImageLoader}
                    src={professor.imgSrc}
                    alt={professor.name}
                    width={300}
                    height={400}
                    placeholder="empty"
                    priority
                  />

                  <Column>
                    <p className="name">
                      {professor.position}. {professor.name}
                    </p>
                    <p className="email">{professor.email}</p>
                  </Column>
                </Row>
              ))}
            </div>
          </ItemFrame>
          <ItemFrame title={'partners'} className="partners">
            <div>
              {PARTNERS_DATA.map((partner) => (
                <Column key={partner.name}>
                  <Image
                    loader={nextImageLoader}
                    src={partner.imgSrc}
                    alt={partner.name}
                    width={1200}
                    height={800}
                    placeholder="empty"
                    priority
                  />

                  <p className="name">{partner.name}</p>
                  <p className="link">{partner.contact}</p>
                  {partner.site && (
                    <Link href={'https://' + partner.site} passHref>
                      <a target="_blank" rel="noopener noreferrer" className="link">
                        {partner.site}
                      </a>
                    </Link>
                  )}
                  {partner.email && (
                    <a href={`mailto:${partner.email}`} className="link">
                      {partner.email}
                    </a>
                  )}
                </Column>
              ))}
            </div>
          </ItemFrame>
        </ThanksToPagePCWrapper>
      )}
    </>
  );
};

export default ThanksToPage;
