import { Column } from 'components/common/styled/layout';
import styled from 'styled-components';

export const ArchivePageMobileWrapper = styled.div`
  display: grid;

  grid-template-columns: repeat(2, 1fr);

  row-gap: 90px;
  column-gap: 16px;

  img {
    width: 100%;
    height: auto;
    min-width: 167px;

    cursor: pointer;
  }

  p {
    color: white;

    &.title {
      font-family: 'NotoSansKR-Bold';
      font-size: 20px;
      font-weight: 700;

      margin-top: 8px;
    }

    &.producer {
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

      &.producer {
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

      align-items: baseline;

      position: absolute;
      top: 40px;
      left: 40px;

      height: 100px;

      p {
        color: white;
        font-size: 30px;

        margin: 0;

        word-break: keep-all;

        &.producer {
          font-family: 'GmarketSansBold';
          font-weight: 700;

          min-width: 100px;
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
        align-self: baseline;

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

  @media (min-width: 1500px) and (max-width: 1800px) {
    & > div.content {
      & > div.text-wrap {
        top: 30px;
        left: 30px;
        p {
          font-size: 24px;

          &.producer {
            min-width: 60px;
            margin-right: 12px;
          }
        }
        & > ${Column} {
          padding-left: 12px;
        }
      }
    }
  }

  @media (min-width: 1024px) and (max-width: 1500px) {
    & > div.content {
      & > div.text-wrap {
        top: 20px;
        left: 20px;
        p {
          font-size: 18px;

          &.producer {
            min-width: 60px;
            margin-right: 6px;
          }
        }
        & > ${Column} {
          padding-left: 6px;
        }
      }
    }
  }

  @media (max-width: 1023px) {
    display: none;
  }
`;
