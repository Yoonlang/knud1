import { MenuLink } from 'components/Menu/styled';
import { AppPathsArray } from 'constants/AppPaths';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import useOutAreaClick from 'utils/useOutAreaClick';
import { ButtonBase } from '../styled/elements';
import Image from 'next/future/image';
import cx from 'classnames';
import { SideBarOpenButton, SideBarWrapper } from './styled';

interface Props {
  home?: boolean;
}

const SideBar: React.FC<Props> = ({ home = false }) => {
  const sideBarRef = React.useRef<HTMLDivElement>(null);

  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const handleOpenMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    if (!isMenuOpen) {
      return;
    }

    setIsMenuOpen(false);
  };

  useOutAreaClick(sideBarRef, handleCloseMenu);
  return (
    <>
      <SideBarOpenButton onClick={handleOpenMenu}>
        <Image
          src={home ? '/assets/menuGreen.svg' : '/assets/menu.svg'}
          alt="menu"
          width={32}
          height={32}
          placeholder="empty"
          priority
        />
      </SideBarOpenButton>

      <SideBarWrapper ref={sideBarRef} className={cx({ open: isMenuOpen, close: !isMenuOpen })}>
        <ButtonBase onClick={handleCloseMenu} className={'close-button'}>
          <Image src="/assets/close.svg" alt="close" width={32} height={32} placeholder="empty" priority />
        </ButtonBase>
        {AppPathsArray.map(({ linkText, href }) => {
          return (
            <Link href={href} passHref key={href}>
              <MenuLink isOpen={isMenuOpen} main={href === router.asPath} onClick={handleCloseMenu}>
                {linkText}
              </MenuLink>
            </Link>
          );
        })}
      </SideBarWrapper>
    </>
  );
};

export default SideBar;
