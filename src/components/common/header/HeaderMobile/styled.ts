import { Row } from 'components/common/styled/layout';
import styled from 'styled-components';

export const HeaderMobileWrapper = styled(Row)`
  &.identity {
    background-color: #38d430;
  }

  & > ${Row}.header-wrap {
    padding: 20px;

    width: 100%;
    position: relative;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    & > ${Row}.header-wrap {
      padding: 45px 30px 0;

      & > a {
        img {
          width: 60px;
          height: 30px;
        }
      }
    }
  }
`;
