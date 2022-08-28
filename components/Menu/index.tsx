import Image from 'next/future/image';
import { useState } from 'react';
import menuGreen from '../public/menuGreen.png';
import menuWhite from '../public/menuWhite.png';
import cancel from '../public/cancel.png';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { linkList } from '../../others/linkList';
import { MenuButton, MenuImage, SideBar, MenuLink } from './styled';

const Menu: React.FC = () => {
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

export default Menu;
