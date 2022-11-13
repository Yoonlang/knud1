import styled from 'styled-components';

export const NavDiv = styled.div`
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

export const MenuLink = styled.a`
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
  font-family: 'Poppins-Bold';
  &:hover {
    transform: scale(1.2);
  }
`;
