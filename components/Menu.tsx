import Image from 'next/future/image';
import styled from 'styled-components';
import { useState } from 'react';
import menuGreen from '../public/menuGreen.png';
import menuWhite from '../public/menuWhite.png';
import cancel from '../public/cancel.png';
import Link from 'next/link';
import { useRouter } from 'next/router';

const linkList = [
  { linkText: 'Home', href: '/' },
  { linkText: 'Identity', href: '/test' },
  { linkText: 'Archive', href: '/test1' },
  { linkText: 'Teams', href: '/test' },
  { linkText: 'Thanks to', href: '/test' },
];

const Menu = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <MenuButton onClick={handleOpenMenu}>
        <MenuImage
          isOpen={isMenuOpen}
          src={router.asPath === '/' ? menuGreen : menuWhite}
          alt="menu icon for open sidebar"
          width={50}
          height={50}
        />
      </MenuButton>
      <SideBar isOpen={isMenuOpen}>
        {linkList.map(({ linkText, href }, index) => {
          return (
            <Link href={href} passHref key={index}>
              <MenuLink isOpen={isMenuOpen} main={href === router.asPath ? true : false}>
                {linkText}
              </MenuLink>
            </Link>
          );
        })}
        <MenuButton onClick={handleCloseMenu}>
          <Image src={cancel} alt="cancel icon for close sidebar" width={25} height={25} />
        </MenuButton>
      </SideBar>
    </>
  );
};

const MenuButton = styled.button`
  display: flex;
  position: absolute;
  top: 63px;
  right: 20px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: none;
  background: none;
  cursor: pointer;
  width: 30px;
  height: 30px;
`;

interface MenuImageProps {
  isOpen: boolean;
}

const MenuImage = styled(Image)<MenuImageProps>`
  display: ${(props) => (props.isOpen ? 'none' : 'flex')};
  min-width: 50px !important;
  min-height: 50px !important;
`;

interface SideBarProps {
  isOpen: boolean;
}

const SideBar = styled.div<SideBarProps>`
  display: flex;
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: calc(100vw - 195px);
  width: ${(props) => (props.isOpen ? '195px' : '245px')};
  height: ${(props) => (props.isOpen ? '100vh' : 'calc(100vh + 100px)')};
  background: #fff;
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  gap: 40px;
  transition: 0.5s;
`;

interface MenuLinkProps {
  main?: boolean;
  isOpen: boolean;
}

const MenuLink = styled.a<MenuLinkProps>`
  width: 131px;
  height: 36px;
  text-align: right;
  color: ${(props) => (props.main ? '#38d430' : 'rgba(56, 212, 48, 0.3)')};
  font-size: 24px;
  letter-spacing: 0;
  line-height: 1.8;
`;

export default Menu;
