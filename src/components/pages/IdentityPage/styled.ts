import ItemFrame from 'components/common/ItemFrame';
import { Column, Row } from 'components/common/styled/layout';
import styled from 'styled-components';

export const IdentityPageMobileWrapper = styled(Column)`
  & > div.content {
    height: 100vh;

    & > div.mock-img {
      width: 100%;
      background-color: white;
      height: 230px;
    }

    p {
      color: black;
      font-family: 'NotoSansKR-Medium';
      font-size: 16px;
      line-height: 1.7;
      white-space: pre-wrap;
      word-wrap: break-word;
      word-break: break-word;
    }
  }

  & > ${ItemFrame} {
    margin-bottom: 160px;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    & > div.content {
      & > div.mock-img {
        height: 507px;
      }
    }

    & > ${ItemFrame} {
      margin-bottom: 250px;
    }
  }
`;

export const IdentityPagePCWrapper = styled(Column)`
  padding-bottom: 200px;

  & > div.mock-img {
    width: 100%;
    height: 800px;

    background-color: white;
  }

  & > ${Row}.description-wrapper {
    width: 100%;

    justify-content: space-between;
  }

  & > ${ItemFrame} + ${ItemFrame} {
    margin-top: 500px;
  }

  p {
    margin: 0;

    font-size: 22px;

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
  }
`;
