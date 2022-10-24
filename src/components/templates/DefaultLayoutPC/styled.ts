import styled from 'styled-components';
import { Column, Row } from '../../common/styled/layout';

export const DefaultLayoutPCWrapper = styled.div`
  height: 100vh;

  padding-left: 140px;

  background-color: black;

  * {
    color: white;
  }

  & > ${Row}.nav {
    padding: 24px 120px 12px 0;

    justify-content: space-between;

    & > span {
      cursor: pointer;
    }

    & > ${Row}.nav-items {
      gap: 18px;

      height: 60px;

      align-items: center;

      & > a {
        font-family: 'Poppins-Bold';
        font-weight: bold;
        width: 90px;

        text-align: center;

        color: #38d430;
      }
    }

    & > span.current-nav-wrapper {
      width: 90px;
      background-color: #38d430;
      position: absolute;
      height: 22px;
      top: 44px;

      &.identity {
        right: 444px;
      }
      &.archive {
        right: 336px;
      }
      &.teams {
        right: 228px;
      }
      &.thanksto {
        right: 120px;
      }

      transition: right 0.5s;
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
      height: calc(100% - 88px);

      border-top-left-radius: 36px;

      background-color: black;

      overflow-x: hidden;
      overflow-y: auto;

      & > main {
        width: 100%;

        padding: 0 80px 736px 30px;
        & > p.title {
          padding: 0;
          margin: 0;

          margin-bottom: 150px;

          font-family: 'Poppins-Bold';
          font-size: 60px;
          font-weight: bold;

          color: #38d430;
        }
      }
    }
  }

  @media (max-width: 1023px) {
    display: none;
  }
`;

export const CurrentNav = styled.span<{ rightPosition: number }>`
  width: 90px;
  background-color: #38d430;
  position: absolute;
  height: 22px;
  top: 44px;
  transition: right 0.5s;
  right: ${(props) => props.rightPosition}px;
`;
