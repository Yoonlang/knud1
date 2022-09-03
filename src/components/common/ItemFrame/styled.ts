import styled from 'styled-components';
import { Column } from '../styled/layout';

export const ItemFrameWrapper = styled(Column)`
  width: 100%;

  p.title {
    margin: 0;

    font-size: 24px;
    font-weight: bold;
    color: white;

    margin-bottom: 20px;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    p.title {
      font-size: 36px;

      margin-bottom: 30px;
    }
  }

  @media screen and (min-width: 1024px) {
    p.title {
      font-size: 60px;

      margin-bottom: 70px;
    }
  }
`;
