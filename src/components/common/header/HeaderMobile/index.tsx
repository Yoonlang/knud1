import { MenuLink } from 'components/Menu/styled';
import { AppPaths, AppPathsArray } from 'constants/AppPaths';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { HeaderMobileWrapper } from './styled';

import { ButtonBase } from 'components/common/styled/elements';
import { Column, Row } from 'components/common/styled/layout';
import cx from 'classnames';
import Image from 'next/future/image';

interface Props {
  identity?: boolean;
}

const HeaderMobile = React.forwardRef<HTMLAnchorElement, Props>((props, ref) => {
  const { identity = false } = props;

  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleMenuOpen = () => setIsMenuOpen(!isMenuOpen);

  return (
    <HeaderMobileWrapper className={cx({ identity: identity })}>
      <Row className="header-wrap">
        <Link href={AppPaths.home.href} passHref ref={ref}>
          <a>
            <Image src="/assets/126_logo.svg" alt="126-logo" width={51} height={25.5} placeholder="empty" priority />
          </a>
        </Link>

        {!isMenuOpen && (
          <ButtonBase onClick={toggleMenuOpen} className={'menu-button'}>
            <Image src="/assets/menu.svg" alt="menu" width={32} height={32} placeholder="empty" priority />
          </ButtonBase>
        )}
      </Row>

      <Column className={cx('side-bar', { open: isMenuOpen, close: !isMenuOpen })}>
        <ButtonBase onClick={toggleMenuOpen} className={'close-button'}>
          <Image src="/assets/close.svg" alt="close" width={32} height={32} placeholder="empty" priority />
        </ButtonBase>
        {AppPathsArray.map(({ linkText, href }) => {
          return (
            <Link href={href} passHref key={href}>
              <MenuLink isOpen={isMenuOpen} main={href === router.asPath} onClick={toggleMenuOpen}>
                {linkText}
              </MenuLink>
            </Link>
          );
        })}
      </Column>
    </HeaderMobileWrapper>
  );
});

HeaderMobile.displayName = 'HeaderMobile';

export default HeaderMobile;
