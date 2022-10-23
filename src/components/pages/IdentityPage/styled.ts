import ItemFrame from 'components/common/ItemFrame';
import { Column, Row } from 'components/common/styled/layout';
import styled from 'styled-components';

export const IdentityPageMobileWrapper = styled(Column)`
  & > div {
    padding: 0 20px;
  }

  & > div.content {
    background-color: #38d430;

    video {
      width: 100%;
      object-fit: contain;
    }

    p {
      color: black;
      font-family: 'NotoSansKR-Medium';
      font-size: 16px;
      line-height: 1.7;
      white-space: pre-wrap;
      word-wrap: break-word;
      word-break: break-word;

      &:first-of-type {
        margin-top: 20px;
      }

      &:last-child {
        margin-bottom: 30px;
      }
    }
  }

  & > div.item-list {
    & > ${ItemFrame} {
      margin-top: 160px;

      img {
        width: 100%;
        height: auto;

        &.poster {
          width: 45%;
          &:last-child {
            margin-left: 30px;
          }
        }
      }

      &:first-of-type {
        margin-top: 100px;
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    & > div {
      padding: 0 30px;

      &.content {
        P {
          &:first-of-type {
            margin-top: 30px;
          }
          &:last-child {
            margin-bottom: 250px;
          }
        }
      }
    }

    & > div.item-list {
      & > ${ItemFrame} {
        margin-top: 250px;

        img.poster:last-child {
          margin-left: 46px;
        }

        &:first-of-type {
          margin-top: 120px;
        }
      }
    }
  }

  @media (min-width: 1023px) {
    display: none;
  }
`;

export const IdentityPagePCWrapper = styled(Column)`
  video {
    width: 100%;
    object-fit: contain;
  }

  & > ${Row}.description-wrapper {
    width: 80%;

    justify-content: space-between;
    align-self: center;
  }

  & > ${ItemFrame} {
    & > img {
      align-self: center;
    }

    img {
      width: 80%;
      height: auto;

      &.poster {
        width: 35%;
        height: auto;

        &:not(:first-of-type) {
          margin-left: 10px;
        }
      }
    }
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

  @media (max-width: 1023px) {
    display: none;
  }
`;
