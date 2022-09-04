import { MenuLink } from 'components/Menu/styled';
import { AppPathsArray } from 'constants/AppPaths';
import Image from 'next/future/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { HeaderMobileWrapper } from './styled';

import { ButtonBase } from 'components/common/styled/elements';
import { Column, Row } from 'components/common/styled/layout';
import cancel from '/public/assets/cancel.png';
import menu from '/public/assets/menuWhite.png';
import cx from 'classnames';

interface Props {
  identity?: boolean;
}

const HeaderMobile: React.FC<Props> = (props) => {
  const { identity = false } = props;

  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <HeaderMobileWrapper className={cx({ identity: identity })}>
      <Row className="header-wrap">
        <div className="logo">126</div>

        {!isMenuOpen && (
          <ButtonBase onClick={() => setIsMenuOpen(true)} className={'menu-button'}>
            {/* <IC_MENU /> */}
            <Image src={menu} alt="menu icon for open sidebar" width={32} height={32} />
          </ButtonBase>
        )}
      </Row>

      <Column className={cx('side-bar', { open: isMenuOpen, close: !isMenuOpen })}>
        <ButtonBase onClick={() => setIsMenuOpen(false)} className={'close-button'}>
          <Image src={cancel} alt="cancel icon for close sidebar" width={25} height={25} />
        </ButtonBase>
        {AppPathsArray.map(({ linkText, href }) => {
          return (
            <Link href={href} passHref key={href}>
              <MenuLink isOpen={isMenuOpen} main={href === router.asPath}>
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
