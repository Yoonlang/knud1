import ItemFrame from 'components/common/ItemFrame';
import { Column, Row } from 'components/common/styled/layout';
import styled from 'styled-components';

export const ThanksToPageMobileWrapper = styled(Column)`
  & > ${ItemFrame}.professor {
    div.mock-img {
      width: 100%;
      height: 230px;

      background-color: white;
    }

    & > div.professor-list {
      & > ${Row} {
        & > div.img-frame {
          width: 50%;

          margin-right: 16px;
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
    margin: 160px 0;

    & > div {
      display: grid;

      grid-template-columns: repeat(2, 1fr);

      column-gap: 16px;

      & > ${Column} {
        img {
          width: 100%;
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
      margin: 250px 0;
    }
  }

  @media (min-width: 1023px) {
    display: none;
  }
`;

export const ThanksToPagePCWrapper = styled(Column)`
  & > ${ItemFrame}.professor {
    & > ${Row} {
      div.mock-img {
        width: 100%;
        height: 670px;

        background-color: white;

        margin-right: 50px;
      }
    }

    & > div.professor-list {
      margin-top: 200px;

      width: 80%;

      display: grid;

      grid-template-columns: repeat(2, 1fr);

      row-gap: 30px;
      column-gap: 16px;

      & > ${Row} {
        width: 100%;

        & > div.img-frame {
          width: 50%;

          margin-right: 30px;
        }

        & > ${Column} {
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
    margin: 500px 0;

    & > div {
      width: 70%;

      display: grid;

      grid-template-columns: repeat(2, 1fr);

      column-gap: 162px;

      & > ${Column} {
        & > div.img-frame {
          width: 100%;
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

      width: 360px;

      line-height: 1.7;
    }
  }

  @media (max-width: 1023px) {
    display: none;
  }
`;
