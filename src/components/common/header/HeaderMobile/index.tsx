import { AppPaths } from 'constants/AppPaths';
import Link from 'next/link';
import React from 'react';
import { HeaderMobileWrapper } from './styled';
import { Row } from 'components/common/styled/layout';
import cx from 'classnames';
import Image from 'next/future/image';
import SideBar from 'components/common/SideBar';

interface Props {
  identity?: boolean;
}

const HeaderMobile = React.forwardRef<HTMLAnchorElement, Props>((props, ref) => {
  const { identity = false } = props;

  return (
    <HeaderMobileWrapper className={cx({ identity: identity })}>
      <Row className="header-wrap">
        <Link href={AppPaths.home.href} passHref ref={ref}>
          <a>
            <Image
              src="/assets/126_logo.svg"
              alt="126-logo"
              width={51}
              height={26}
              placeholder="empty"
              priority
              sizes="100vw"
            />
          </a>
        </Link>

        <SideBar />
      </Row>
    </HeaderMobileWrapper>
  );
});

HeaderMobile.displayName = 'HeaderMobile';

export default HeaderMobile;
