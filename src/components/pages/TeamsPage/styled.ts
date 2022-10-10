import ItemFrame from 'components/common/ItemFrame';
import { Column, Row } from 'components/common/styled/layout';
import styled from 'styled-components';

export const TeamsPageMobileWrapper = styled(Column)`
  padding-bottom: 200px;

  & > div.mock-img {
    width: 100%;
    height: 230px;

    background-color: white;
  }

  & > ${ItemFrame} {
    & > ${Row}:last-child {
      margin-top: 16px;
    }

    & > div.img-frame {
      width: 100%;

      margin-bottom: 20px;
    }
  }

  & > ${ItemFrame} + ${ItemFrame} {
    margin-top: 160px;
  }

  p {
    margin: 0;

    font-size: 15px;

    color: white;

    &.description {
      color: #38d430;
      line-height: 1.7;
      white-space: pre-wrap;
      word-wrap: break-word;
      word-break: break-word;

      margin-bottom: 100px;

      font-family: 'NotoSansKR-Medium';
    }

    &.data-title {
      font-family: 'NotoSansKR-Light';
      font-weight: 300;
    }
    &.data {
      font-family: 'NotoSansKR-Bold';
      font-weight: 600;

      margin-left: 6px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    & > div.mock-img {
      height: 507px;

      margin-bottom: 30px;
    }

    & > ${ItemFrame} {
      img {
        width: 100%;

        margin: 30px 0 20px;
      }
    }

    & > ${ItemFrame} + ${ItemFrame} {
      margin-top: 250px;
    }

    p {
      &.description {
        margin-bottom: 250px;
      }

      &.team-name {
        font-size: 36px;
      }
    }
  }

  @media (min-width: 1023px) {
    display: none;
  }
`;

export const TeamsPagePCWrapper = styled(Column)`
  padding-bottom: 200px;

  & > div.mock-img {
    width: 100%;
    height: 230px;

    background-color: white;
  }

  & > ${Row}.description-wrapper {
    width: 100%;

    justify-content: space-between;
  }

  & > ${ItemFrame} {
    & > ${Row} {
      align-items: center;

      & > div.img-frame {
        width: 60%;
      }

      & > ${Column} {
        margin-left: 90px;
      }
    }
  }

  & > ${ItemFrame} + ${ItemFrame} {
    margin-top: 500px;
  }

  p {
    margin: 0;

    font-size: 22px;

    color: white;

    &.description {
      width: 48%;

      font-family: 'NotoSansKR-Medium';
      color: #38d430;
      line-height: 1.7;
      white-space: pre-wrap;
      word-wrap: break-word;
      word-break: break-word;

      margin-top: 70px;
      margin-bottom: 200px;
    }

    &.data-title {
      font-family: 'NotoSansKR-Light';
      font-size: 30px;
      font-weight: 300;
    }
    &.data {
      font-family: 'NotoSansKR-Bold';
      font-size: 30px;
      font-weight: 600;

      margin-left: 6px;
    }
  }

  @media (max-width: 1023px) {
    display: none;
  }
`;
