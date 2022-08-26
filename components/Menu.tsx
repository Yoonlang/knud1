import Image from 'next/future/image';
import styled from 'styled-components';
import { useState } from 'react';
import menuGreen from '../public/menuGreen.png';
import menuWhite from '../public/menuWhite.png';
import cancel from '../public/cancel.png';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { linkList } from '../others/linkList';

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
      <SideBar className={isMenuOpen ? 'open' : 'close'}>
        {linkList.map(({ linkText, href }, index) => {
          return (
            <Link href={href} passHref key={index}>
              <MenuLink isOpen={isMenuOpen} main={href === router.asPath}>
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
  z-index: 1;
  @media (min-width: 1024px) {
    display: none;
  } ;
`;

interface MenuImageProps {
  isOpen: boolean;
}

const MenuImage = styled(Image)<MenuImageProps>`
  display: ${(props) => (props.isOpen ? 'none' : 'flex')};
  min-width: 50px;
  min-height: 50px;
`;

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: calc(100vw - 195px);
  background: #fff;
  gap: 40px;
  transition: 0.5s;
  z-index: 1;
  &.open {
    visibility: visible;
    width: 195px;
    height: 100vh;
    opacity: 1;
  }
  &.close {
    visibility: hidden;
    width: 245px;
    height: calc(100vh + 100px);
    opacity: 0;
  }
  @media (min-width: 1024px) {
    display: none;
  } ;
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
  transform: ${(props) => (props.isOpen ? 'scale(1)' : 'scale(1.2)')};
  transition: 0.5s;
`;

export default Menu;
