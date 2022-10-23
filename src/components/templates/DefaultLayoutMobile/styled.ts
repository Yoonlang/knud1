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
    padding: 20px 20px 0 20px;

    & > div.content {
      padding-bottom: 160px;
      & > p.title {
        padding: 0;

        margin: 72px 0 48px;

        font-family: 'Poppins-Bold';
        font-size: 52px;
        font-weight: bold;

        color: #38d430;
      }
    }
  }

  &.identity {
    background: none;
    & > main {
      padding: 0;

      background-image: linear-gradient(to bottom, #38d430 10%, black 10%);
      & > div.content {
        & > p.title {
          margin-left: 20px;
          color: black;
        }
      }

      background-color: black;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    & > main {
      padding: 30px 30px 0 30px;

      & > div.content {
        padding-bottom: 250px;
        & > p.title {
          font-size: 60px;
        }
      }
    }

    &.identity {
      & > main {
        padding: 0;
        & > div.content {
          & > p.title {
            margin-left: 30px;
            color: black;
          }
        }

        background-color: black;
      }
    }
  }

  @media (min-width: 1023px) {
    display: none;
  }
`;
