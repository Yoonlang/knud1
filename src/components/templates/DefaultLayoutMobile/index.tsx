import React from 'react';

import Image from 'next/future/image';
import ice from '/public/assets/ice.jpeg';

import { DefaultLayoutMobileWrapper } from './styled';
import HeaderMobile from 'components/common/header/HeaderMobile';
import FooterMobile from 'components/common/footer/FooterMobile';

interface Props {
  children?: React.ReactElement;
}

const DefaultLayoutMobile: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <DefaultLayoutMobileWrapper>
      <HeaderMobile />

      <main>
        {/* <p className="title">{AppPathsArray.find((appPaths) => appPaths.href === router.route)?.linkText}</p> */}
        <p className="title">{'Archive'}</p>
        <Image src={ice} alt={'ice'} width={600} />
        <Image src={ice} alt={'ice'} width={600} />
        <Image src={ice} alt={'ice'} width={600} />
        <Image src={ice} alt={'ice'} width={600} />
        {children}
      </main>
      <FooterMobile />
    </DefaultLayoutMobileWrapper>
  );
};
export default DefaultLayoutMobile;
