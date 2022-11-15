import { AppPathsArray } from 'constants/AppPaths';
import Link from 'next/link';
import { Fragment } from 'react';
import { NavDiv, MenuLink } from './styled';

const Nav: React.FC = () => {
  return (
    <NavDiv>
      {AppPathsArray.map(({ href, linkText }, index) => {
        if (index === 0) return <Fragment key={index}></Fragment>;
        return (
          <Link href={href} passHref key={index}>
            <MenuLink>{linkText}</MenuLink>
          </Link>
        );
      })}
    </NavDiv>
  );
};

export default Nav;
