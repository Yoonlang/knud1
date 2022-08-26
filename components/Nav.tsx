import Link from 'next/link';
import { Fragment } from 'react';
import styled from 'styled-components';
import { linkList } from '../others/linkList';

const Nav = () => {
  return (
    <NavDiv>
      {linkList.map(({ href, linkText }, index) => {
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
  gap: 50px;
  margin-bottom: 30px;
  padding-left: 20%;
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
