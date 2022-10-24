import ItemFrame from 'components/common/ItemFrame';
import { Row } from 'components/common/styled/layout';
import Image from 'next/future/image';
import React from 'react';
import { nextImageLoader } from 'utils/imageLoader';
import { IdentityPageMobileWrapper, IdentityPagePCWrapper } from './styled';
import posterImg from '/public/assets/identity/poster.gif';
import fontImg from '/public/assets/identity/font.png';
import dorokImg from '/public/assets/identity/dorok.png';
import goodsImg from '/public/assets/identity/goods.png';
import Video from 'components/common/Video';
import useMobileDetect from 'utils/useMobileDetect';

const IdentityPage: React.FC = () => {
  const isMobile = useMobileDetect();

  return (
    <>
      {isMobile && (
        <IdentityPageMobileWrapper>
          <div className="content">
            <Video src={require('/public/assets/identity/identity_vedio.mp4')} />
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
          <div className="item-list">
            <ItemFrame title="Poster">
              <Row>
                <Image loader={nextImageLoader} src={posterImg} alt={'Poster'} priority className="poster" />
                <Image loader={nextImageLoader} src={posterImg} alt={'Poster'} priority className="poster" />
              </Row>
            </ItemFrame>
            <ItemFrame title="Font">
              <Image loader={nextImageLoader} src={fontImg} alt={'Font'} placeholder="empty" priority />
            </ItemFrame>
            <ItemFrame title="Dorok">
              <Image loader={nextImageLoader} src={dorokImg} alt={'Dorok'} placeholder="empty" priority />
            </ItemFrame>
            <ItemFrame title="Goods">
              <Image loader={nextImageLoader} src={goodsImg} alt={'Goods'} placeholder="empty" priority />
            </ItemFrame>
          </div>
        </IdentityPageMobileWrapper>
      )}

      {!isMobile && (
        <IdentityPagePCWrapper>
          <Video src={require('/public/assets/identity/identity_vedio.mp4')} />
          <Row className="description-wrapper">
            <p className="description">
              모두가 1에 가지는 의미가 다르지만 경북대학교 디자인학과 졸업생들이 day 하루가 될 수 있고, 1step 한 단계가
              될 수도 있으며, 1st 한 분야의 최고가 될 수도 있습니다.
            </p>
            <p className="description">
              1의 26제곱이 1이라는 것은 당연하기에 매력적이며, 이중적이기에 그 의미가 있습니다. 이러한 각자의 1들이 모여
              우리 디자인학과 4학년 26명의 1이 만들어집니다.
              <br />
              우리는 이것을 1의 26제곱이라고 합니다. 1의 26제곱은 여전히 1이듯이.
            </p>
          </Row>

          <ItemFrame title="Poster">
            <Row>
              <Image loader={nextImageLoader} src={posterImg} alt={'Poster'} priority className="poster" />
              <Image loader={nextImageLoader} src={posterImg} alt={'Poster'} priority className="poster" />
              <Image loader={nextImageLoader} src={posterImg} alt={'Poster'} priority className="poster" />
            </Row>
          </ItemFrame>
          <ItemFrame title="Font">
            <Image loader={nextImageLoader} src={fontImg} alt={'Font'} priority />
          </ItemFrame>
          <ItemFrame title="Dorok">
            <Image loader={nextImageLoader} src={dorokImg} alt={'Dorok'} priority />
          </ItemFrame>
          <ItemFrame title="Goods">
            <Image loader={nextImageLoader} src={goodsImg} alt={'Goods'} priority />
          </ItemFrame>
        </IdentityPagePCWrapper>
      )}
    </>
  );
};

export default IdentityPage;
