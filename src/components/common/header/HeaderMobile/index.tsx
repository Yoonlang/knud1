import { MenuLink } from 'components/Menu/styled';
import { AppPaths, AppPathsArray } from 'constants/AppPaths';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { HeaderMobileWrapper } from './styled';

import { ButtonBase } from 'components/common/styled/elements';
import { Column, Row } from 'components/common/styled/layout';
import cx from 'classnames';

interface Props {
  identity?: boolean;
}

const HeaderMobile: React.FC<Props> = (props) => {
  const { identity = false } = props;

  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleMenuOpen = () => setIsMenuOpen(!isMenuOpen);

  return (
    <HeaderMobileWrapper className={cx({ identity: identity })}>
      <Row className="header-wrap">
        <Link href={AppPaths.home.href} passHref>
          <img src="/assets/126_logo.svg" alt="logo" />
        </Link>

        {!isMenuOpen && (
          <ButtonBase onClick={toggleMenuOpen} className={'menu-button'}>
            <img src="/assets/menu.svg" alt="menu" />
          </ButtonBase>
        )}
      </Row>

      <Column className={cx('side-bar', { open: isMenuOpen, close: !isMenuOpen })}>
        <ButtonBase onClick={toggleMenuOpen} className={'close-button'}>
          <img src="/assets/close.svg" alt="close" />
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
};

export default HeaderMobile;
