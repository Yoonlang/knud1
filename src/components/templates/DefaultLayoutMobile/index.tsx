import React from 'react';

import { DefaultLayoutMobileWrapper } from './styled';
import HeaderMobile from 'components/common/header/HeaderMobile';
import FooterMobile from 'components/common/footer/FooterMobile';
import { AppPathsArray } from 'constants/AppPaths';
import { useRouter } from 'next/router';
import cx from 'classnames';

interface Props {
  identity?: boolean;

  children?: React.ReactElement;
}

const DefaultLayoutMobile: React.FC<Props> = (props) => {
  const { identity = false, children } = props;

  const router = useRouter();

  return (
    <DefaultLayoutMobileWrapper className={cx({ identity: identity })}>
      <HeaderMobile identity={identity} />

      <main>
        <div className="content">
          <p className="title">{AppPathsArray.find((appPaths) => appPaths.href === router.route)?.linkText}</p>

          {children}
        </div>
      </main>
      <FooterMobile />
    </DefaultLayoutMobileWrapper>
  );
};
export default DefaultLayoutMobile;
