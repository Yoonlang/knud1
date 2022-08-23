import Image from 'next/image';
import styled from 'styled-components';
import { useState } from 'react';
import menuGreen from '../public/menuGreen.png';
import menuWhite from '../public/menuWhite.png';
import cancel from '../public/cancel.png';
import Link from 'next/link';

const linkList = ['Home', 'Identity', 'Archive', 'Teams', 'Thanks to'];

const Menu = () => {
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
        <Image src={menuGreen} alt="menu icon for open sidebar" width={50} height={50} />
      </MenuButton>
      <SideBar>
        {linkList.map((pageName, index) => {
          return (
            <Link href={`/`} passHref key={index}>
              <MenuLink main>{pageName}</MenuLink>
            </Link>
          );
        })}
        <MenuButton onClick={handleCloseMenu}>
          <Image src={cancel} alt="cancel icon for close sidebar" width={50} height={50} />
        </MenuButton>
      </SideBar>
    </>
  );
};

const MenuButton = styled.button`
  display: flex;
  width: auto;
  height: auto;
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background: none;
  cursor: pointer;
`;

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  width: 195px;
  height: 100vh;
  background: #fff;
  gap: 40px;
  padding-top: 140px;
`;

interface MenuLinkProps {
  main?: boolean;
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
