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

    & > p.title {
      padding: 0;
      margin: 72px 0 48px;

      font-size: 52px;
      font-weight: bold;

      color: #38d430;
    }
  }

  @media (min-width: 1024px) {
    display: none;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    & > main {
      padding: 30px;

      & > p.title {
        font-size: 60px;
      }
    }
  }
`;
