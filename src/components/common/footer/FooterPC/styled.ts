import { Row, Column } from 'components/common/styled/layout';
import styled from 'styled-components';

export const FooterPCWrapper = styled.footer`
  width: 100%;
  min-height: 80px;
  height: 80px;

  padding: 4px 0 4px;

  background-color: #333333;

  display: flex;

  align-items: center;

  & > ${Row} {
    padding-left: 54px;

    & > img {
      width: 100%;
      max-width: 123px;
    }

    & > ${Column}.contact {
      margin-left: 48px;

      & > p {
        padding: 0px;
        margin: 0px;

        color: rgba(255, 255, 255, 0.3);

        font-size: 8px;
        letter-spacing: 0px;
        line-height: 1.7;
      }

      & > p + p {
        margin-top: 1px;
      }
    }
  }
`;
