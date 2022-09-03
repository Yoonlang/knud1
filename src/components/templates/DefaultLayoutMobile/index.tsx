import React from 'react';

import { DefaultLayoutMobileWrapper } from './styled';
import HeaderMobile from 'components/common/header/HeaderMobile';
import FooterMobile from 'components/common/footer/FooterMobile';
import { AppPathsArray } from 'constants/AppPaths';
import { useRouter } from 'next/router';

interface Props {
  children?: React.ReactElement;
}

const DefaultLayoutMobile: React.FC<Props> = (props) => {
  const { children } = props;

  const router = useRouter();

  return (
    <DefaultLayoutMobileWrapper>
      <HeaderMobile />

      <main>
        <p className="title">{AppPathsArray.find((appPaths) => appPaths.href === router.route)?.linkText}</p>

        {children}
      </main>
      <FooterMobile />
    </DefaultLayoutMobileWrapper>
  );
};
export default DefaultLayoutMobile;
