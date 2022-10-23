import ItemFrame from 'components/common/ItemFrame';
import { Column, Row } from 'components/common/styled/layout';
import styled from 'styled-components';

export const ThanksToPageMobileWrapper = styled(Column)`
  & > ${ItemFrame}.professor {
    img.all-prof {
      width: 100%;
      height: auto;
    }

    & > div.professor-list {
      & > ${Row} {
        img {
          margin-right: 16px;
          width: 50%;
          height: auto;
        }

        & > ${Column} {
          justify-content: flex-end;

          p.name {
            font-family: 'NotoSansKR-Bold';
            font-size: 20px;
            font-weight: 600;
          }
          p.email {
            font-family: 'Poppins-Light';
            font-size: 14px;

            margin-top: 12px;
          }
        }
      }

      & > ${Row} + ${Row} {
        margin-top: 20px;
      }
    }
  }

  & > ${ItemFrame}.partners {
    margin-top: 160px;

    & > div {
      display: grid;

      grid-template-columns: repeat(2, 1fr);

      column-gap: 16px;

      & > ${Column} {
        img {
          width: 100%;
          height: auto;
        }

        p.name {
          font-family: 'NotoSansKR-Bold';
          font-size: 20px;
          font-weight: 700;

          margin: 17px 0 7px;
        }

        .link {
          font-family: 'NotoSansKR-Light';
          color: white;
          font-size: 12px;
          font-weight: 300;

          &:last-child {
            text-decoration: underline;
          }
        }
      }
    }
  }

  p {
    margin: 0;

    color: white;

    &.description {
      font-family: 'NotoSansKR-Medium';
      color: #38d430;
      font-size: 16px;

      margin: 20px 0 100px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    & > ${ItemFrame}.professor {
      & > div.professor-list {
        display: grid;

        grid-template-columns: repeat(2, 1fr);

        row-gap: 12px;
        column-gap: 16px;
      }
    }

    & > ${ItemFrame}.partners {
      margin-top: 250px;
    }

    p.description {
      margin: 30px 0 250px;
    }
  }

  @media (min-width: 1023px) {
    display: none;
  }
`;

export const ThanksToPagePCWrapper = styled(Column)`
  img.all-profs {
    width: 90%;
    height: auto;
  }

  & > ${ItemFrame}.professor {
    & > ${Row}.description-wrapper {
      width: 90%;

      justify-content: space-between;
    }

    & > div.professor-list {
      margin-top: 200px;

      width: 95%;

      display: grid;

      grid-template-columns: repeat(2, 1fr);

      row-gap: 30px;
      column-gap: 16px;

      & > ${Row} {
        width: 100%;

        img {
          width: 50%;
          height: auto;

          margin-right: 30px;
        }

        & > ${Column} {
          min-width: 180px;
          justify-content: flex-end;

          p.name {
            font-family: 'NotoSansKR-Bold';
            font-size: 30px;
            font-weight: 700;
          }
          p.email {
            font-family: 'Poppins-Light';
            font-size: 20px;

            margin-top: 10px;
          }
        }
      }
    }
  }

  & > ${ItemFrame}.partners {
    margin-top: 500px;

    & > div {
      width: 70%;

      display: grid;

      grid-template-columns: repeat(2, 1fr);

      column-gap: 162px;

      & > ${Column} {
        img {
          width: 100%;
          height: auto;
        }

        p.name {
          font-family: 'NotoSansKR-Bold';
          font-size: 30px;
          font-weight: 700;

          margin: 30px 0 13px;
        }

        .link {
          font-family: 'NotoSansKR-Light';
          color: white;
          font-size: 20px;
          font-weight: 300;

          &:last-child {
            text-decoration: underline;
          }
        }
      }
    }
  }

  p {
    margin: 0;

    color: white;

    &.description {
      font-family: 'NotoSansKR-Medium';
      color: #38d430;
      font-size: 22px;
      white-space: pre-wrap;
      word-wrap: break-word;
      word-break: break-word;

      width: 48%;

      line-height: 1.7;

      margin-top: 70px;
      margin-bottom: 200px;
    }
  }

  @media (max-width: 1023px) {
    display: none;
  }
`;
