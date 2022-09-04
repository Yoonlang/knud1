import { Column } from 'components/common/styled/layout';
import styled from 'styled-components';

export const DefaultLayoutMobileWrapper = styled(Column)`
  display: flex;
  width: 100vw;
  height: 100%;

  overflow-x: hidden;
  overflow-y: auto;

  background-color: black;

  & > main {
    padding: 20px;

    & > div.content {
      & > p.title {
        padding: 0;
        margin: 72px 0 48px;

        font-size: 52px;
        font-weight: bold;

        color: #38d430;
      }
    }
  }

  &.identity {
    background: none;
    & > main {
      background-image: linear-gradient(to bottom, #38d430 100vh, black 100vh);
      & > div.content {
        & > p.title {
          color: black;
        }
      }

      background-color: black;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    & > main {
      padding: 30px;

      & > div.content {
        & > p.title {
          font-size: 60px;
        }
      }
    }
  }

  @media (min-width: 1023px) {
    display: none;
  }
`;
