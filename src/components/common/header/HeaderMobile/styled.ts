import { ButtonBase } from 'components/common/styled/elements';
import { Column, Row } from 'components/common/styled/layout';
import styled from 'styled-components';

export const HeaderMobileWrapper = styled(Row)`
  &.identity {
    background-color: #38d430;
  }

  & > ${Row}.header-wrap {
    padding: 18px;

    width: 100%;
    height: 32px;

    align-items: center;
    justify-content: space-between;

    & > div.logo {
      color: white;
    }

    & > ${ButtonBase}.menu-button {
      img {
        width: 50px;
        height: 50px;
      }
    }
  }

  & > ${Column}.side-bar {
    align-items: flex-end;

    position: absolute;

    bottom: 0;
    right: 0;

    background: white;

    gap: 40px;
    transition: 0.2s;

    z-index: 1;

    & > * {
      margin-right: 20px;

      font-size: 24px;
      font-weight: bold;

      white-space: pre;
    }

    & > ${ButtonBase}.close-button {
      margin-top: 63px;
    }

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
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    & > ${Row}.header-wrap {
      padding: 30px;

      height: 32px;

      & > div.logo {
        color: white;
      }

      & > ${ButtonBase}.menu-button {
        img {
          width: 50px;
          height: 50px;
        }
      }
    }

    & > ${Column}.side-bar {
      gap: 63px;

      & > * {
        margin-right: 30px;

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
    }
  }
`;
