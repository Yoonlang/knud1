import styled from 'styled-components';
import { Column, Row } from '../../common/styled/layout';

export const DefaultLayoutPCWrapper = styled.div`
  max-width: 1920px;
  height: 100vh;

  padding-left: 140px;

  background-color: black;

  * {
    color: white;
  }

  & > ${Row}.nav {
    padding: 24px 120px 12px 0;

    justify-content: space-between;

    & > ${Row}.nav-items {
      gap: 36px;

      height: 60px;

      align-items: center;

      & > a {
        font-weight: bold;

        color: #38d430;

        &.nav-items-target {
          background-color: #38d430;
        }
      }
    }
  }

  & > div.frame {
    width: 100%;
    height: 100%;

    border: 12px;
    border-top-left-radius: 48px;
    background-image: radial-gradient(ellipse at 0% 0%, #c8c8c8, #474747);

    padding: 12px 0 0 15px;

    & > ${Column}.content {
      height: calc(100% - 105px);

      border-top-left-radius: 48px;

      background-color: black;

      overflow-x: hidden;
      overflow-y: auto;

      & > main {
        width: calc(100% - 110px);

        padding: 0 80px 0 30px;
        & > p.title {
          padding: 0;
          margin: 0;

          margin-bottom: 150px;

          font-size: 60px;
          font-weight: bold;

          color: #38d430;
        }
      }
    }
  }
`;
