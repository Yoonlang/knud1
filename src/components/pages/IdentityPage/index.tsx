import ItemFrame from 'components/common/ItemFrame';
import { Row } from 'components/common/styled/layout';
import DefaultLayoutMobile from 'components/templates/DefaultLayoutMobile';
import DefaultLayoutPC from 'components/templates/DefaultLayoutPC';
import React from 'react';
import { IdentityPageMobileWrapper, IdentityPagePCWrapper } from './styled';
import ice from '/public/assets/ice.jpeg';
import Image from 'next/image';

const IdentityPage: React.FC = () => {
  return (
    <>
      <DefaultLayoutMobile identity>
        <IdentityPageMobileWrapper>
          <div className="content">
            <div className="mock-img"></div>
            <p>
              모두가 1에 가지는 의미가 다르지만 경북대학교 디자인학과 졸업생들이day 하루가 될 수 있고, 1step 한 단계가
              될 수도 있으며, 1st 한 분야의 최고가 될 수도 있습니다. 모두가 1에 가지는 의미가 다르지만 경북대학교
              디자인학과 졸업생들이 하나를 추구하며 만든 ‘우리의 1’은그 뜻을 함께 하기에 하나가 될 수 있었습니다.
            </p>
            <p>
              1의 26제곱이 1이라는 것은 당연하기에 매력적이며, 이중적이기에 그 의미가 있습니다. 이러한 각자의 1들이 모여
              우리 디자인학과 4학년 26명의 1이 만들어집니다. 우리는 이것을 1의 26제곱이라고 합니다.
            </p>
            <p>1의 26제곱은 여전히 1이듯이.</p>
          </div>

          <ItemFrame title="Poster">
            <Image src={ice} alt={'mock'} />
          </ItemFrame>
          <ItemFrame title="Font">
            <Image src={ice} alt={'mock'} />
          </ItemFrame>
          <ItemFrame title="Dorok">
            <Image src={ice} alt={'mock'} />
          </ItemFrame>
          <ItemFrame title="Goods">
            <Image src={ice} alt={'mock'} />
          </ItemFrame>
        </IdentityPageMobileWrapper>
      </DefaultLayoutMobile>
      <DefaultLayoutPC>
        <IdentityPagePCWrapper>
          <div className="mock-img"></div>
          <Row className="description-wrapper">
            <p className="description">
              모두가 1에 가지는 의미가 다르지만 경북대학교 디자인학과 졸업생들이day 하루가 될 수 있고, 1step 한 단계가
              될 수도 있으며, 1st 한 분야의 최고가 될 수도 있습니다.
              <br />
              모두가 1에 가지는 의미가 다르지만 경북대학교 디자인학과 졸업생들이 하나를 추구하며 만든 ‘우리의 1’은 그
              뜻을 함께 하기에 하나가 될 수 있었습니다.
            </p>
            <p className="description">
              1의 26제곱이 1이라는 것은 당연하기에 매력적이며, 이중적이기에 그 의미가 있습니다.
              <br />
              이러한 각자의 1들이 모여 우리 디자인학과 4학년 26명의 1이 만들어집니다. 우리는 이것을 1의 26제곱이라고
              합니다. 1의 26제곱은 여전히 1이듯이.
            </p>
          </Row>

          <ItemFrame title="Poster">
            <Image src={ice} alt={'mock'} />
          </ItemFrame>
          <ItemFrame title="Font">
            <Image src={ice} alt={'mock'} />
          </ItemFrame>
          <ItemFrame title="Dorok">
            <Image src={ice} alt={'mock'} />
          </ItemFrame>
          <ItemFrame title="Goods">
            <Image src={ice} alt={'mock'} />
          </ItemFrame>
        </IdentityPagePCWrapper>
      </DefaultLayoutPC>
    </>
  );
};

export default IdentityPage;
