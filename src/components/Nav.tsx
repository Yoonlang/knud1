import { AppPathsArray } from 'constants/AppPaths';
import Link from 'next/link';
import { Fragment } from 'react';
import styled from 'styled-components';

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

const NavDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  gap: 40px;
  margin-bottom: 30px;
  @media (max-width: 1599px) {
    padding-left: 5%;
  }
  @media (min-width: 1600px) {
    padding-left: 22%;
  }
`;

const MenuLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 121px;
  height: 36px;
  color: #38d430;
  font-size: 30px;
  letter-spacing: 0px;
  line-height: 1.2;
  white-space: nowrap;
  transition: 0.3s;
  &:hover {
    transform: scale(1.2);
  }
`;

export default Nav;
