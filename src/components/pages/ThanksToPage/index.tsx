import ItemFrame from 'components/common/ItemFrame';
import { Column, Row } from 'components/common/styled/layout';
import Link from 'next/link';
import React from 'react';
import { PARTNERS_DATA, PROFESSOR_DATA } from './constants';
import { ThanksToPageMobileWrapper, ThanksToPagePCWrapper } from './styled';

const ThanksToPage: React.FC = () => {
  return (
    <>
      <ThanksToPageMobileWrapper>
        <ItemFrame title={'professor'} className="professor">
          <div className="mock-img"></div>
          <p className="description">
            촌의 표면적인 이미지만 보고 귀촌,귀농을 했다가 다시 도시로 돌아가는 경우가 10명 중 1명 꼴로 빈번히 일어난다.
          </p>

          <div className={'professor-list'}>
            {PROFESSOR_DATA.map((professor) => (
              <Row key={professor.name}>
                <img src={professor.imgSrc} alt={professor.name} />
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
                <img src={partner.imgSrc} alt={partner.name} />
                <p className="name">{partner.name}</p>
                <p className="link">{partner.instagram}</p>
                <Link href={'https://' + partner.site} passHref>
                  <a target="_blank" rel="noopener noreferrer" className="link">
                    {partner.site}
                  </a>
                </Link>
              </Column>
            ))}
          </div>
        </ItemFrame>
      </ThanksToPageMobileWrapper>

      <ThanksToPagePCWrapper>
        <ItemFrame title={'professor'} className="professor">
          <Row>
            <div className="mock-img"></div>
            <p className="description">
              안녕하세요 가을의 끝자락, 겨울에 초입에 서서 인사드립니다. 수많은 계절들 속에서 유독 마음이 설레는 계절이
              있다면 언제나 졸업 전시회가 있는 이맘때를 떠올립니다.
              <br /> 경북대학교 디자인학과는 어느덧 39번째 졸업생들을 마주하고 있습니다. 예로부터 졸업 전시회는 그간의
              배움으로 스스로를 다듬어 내보이는 자리였습니다.
              <br /> ‘자신은 보여주는 것’은 두려우면서도 타인과 연결될 수 있는 최초의 행보라고 할 수 있습니다. 이러한
              걸음을 졸업생 곁에서, 앞에서, 혹은 뒤에서 함께 해 주신 모든 분들께 감사를 드립니다.
            </p>
          </Row>

          <div className={'professor-list'}>
            {PROFESSOR_DATA.map((professor) => (
              <Row key={professor.name}>
                <img src={professor.imgSrc} alt={professor.name} />
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
                <img src={partner.imgSrc} alt={partner.name} />
                <p className="name">{partner.name}</p>
                <p className="link">{partner.instagram}</p>
                <Link href={'https://' + partner.site} passHref>
                  <a target="_blank" rel="noopener noreferrer" className="link">
                    {partner.site}
                  </a>
                </Link>
              </Column>
            ))}
          </div>
        </ItemFrame>
      </ThanksToPagePCWrapper>
    </>
  );
};

export default ThanksToPage;
