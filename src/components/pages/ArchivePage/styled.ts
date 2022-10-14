import { Column } from 'components/common/styled/layout';
import styled from 'styled-components';

export const ArchivePageMobileWrapper = styled.div`
  display: grid;

  grid-template-columns: repeat(2, 1fr);

  row-gap: 90px;
  column-gap: 16px;

  & > div.content {
    cursor: pointer;
  }

  img {
    width: 100%;
    height: auto;
    min-width: 167px;
  }

  p {
    color: white;

    &.title {
      font-family: 'NotoSansKR-Bold';
      font-size: 20px;
      font-weight: 700;

      margin-top: 8px;
    }

    &.name {
      font-family: 'NotoSansKR-Light';
      font-size: 16px;

      margin-top: 8px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: repeat(3, 1fr);

    row-gap: 70px;
    column-gap: 40px;

    p {
      &.title {
        font-size: 24px;

        margin-top: 20px;
      }

      &.name {
        font-size: 20px;

        margin-top: 10px;
      }
    }
  }

  @media (min-width: 1023px) {
    display: none;
  }
`;

export const ArchivePagePCWrapper = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  row-gap: 20px;
  column-gap: 23px;

  & > div.content {
    position: relative;

    cursor: pointer;

    img {
      width: 100%;
      height: auto;
    }

    & > div.text-wrap {
      visibility: hidden;

      position: absolute;
      top: 40px;
      left: 40px;

      height: 100px;

      p {
        color: white;
        font-size: 30px;

        margin: 0;

        &.name {
          font-family: 'GmarketSansBold';
          font-weight: 700;

          margin-right: 24px;
        }

        &.title {
          font-family: 'GmarketSansBold';
          font-weight: 700;
        }

        &.subtitle {
          font-family: 'GmarketSansLight';
        }
      }

      & > ${Column} {
        padding-left: 24px;

        border-left: 1px solid white;
      }
    }

    &:hover {
      & > img {
        opacity: 0.3;
      }

      & > div.text-wrap {
        visibility: visible;
      }
    }
  }

  padding-bottom: 700px;

  @media (max-width: 1023px) {
    display: none;
  }
`;
