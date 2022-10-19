import styled from 'styled-components';
import { ButtonBase } from '../styled/elements';
import { Column } from '../styled/layout';

export const SideBarOpenButton = styled(ButtonBase)`
  position: absolute;
  top: 17px;
  right: 20px;

  z-index: 1;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    top: 40px;
    right: 30px;

    img {
      width: 40px;
      height: 40px;
    }
  }
`;

export const SideBarWrapper = styled(Column)`
  align-items: flex-end;

  position: absolute;

  top: 0;
  right: 0;

  background: white;

  gap: 40px;
  transition: 0.2s;

  z-index: 1;

  & > * {
    margin-right: 20px;

    font-family: 'Poppins-Bold';
    font-size: 24px;
    font-weight: bold;

    white-space: pre;
  }

  &.open {
    visibility: visible;
    width: 195px;
    height: 100vh;
    opacity: 1;
    padding-top: 63px;
  }
  &.close {
    visibility: hidden;
    width: 245px;
    height: calc(100vh + 100px);
    opacity: 0;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    gap: 63px;

    & > * {
      margin-right: 30px;
    }
    a {
      font-size: 30px;
    }

    & > ${ButtonBase}.close-button {
      margin-top: 80px;
    }

    &.open {
      width: 417px;
    }
    &.close {
      width: 245px;
    }

    .close-button {
      img {
        width: 40px;
        height: 40px;
      }
    }
  }
`;
