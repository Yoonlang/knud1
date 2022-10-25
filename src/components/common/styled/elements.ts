import Image from 'next/future/image';
import styled from 'styled-components';

export const ButtonBase = styled.button`
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
  overflow: visible;
  cursor: pointer;
`;

export const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

interface MenuLinkProps {
  main?: boolean;
  isOpen: boolean;
}

export const MenuLink = styled.a<MenuLinkProps>`
  height: 36px;
  text-align: right;
  color: ${(props) => (props.main ? '#38d430' : 'rgba(56, 212, 48, 0.3)')};
  font-size: 24px;
  letter-spacing: 0;
  line-height: 1.8;
  transform: ${(props) => (props.isOpen ? 'scale(1)' : 'scale(1.2)')};
  transition: 0.5s;
`;
