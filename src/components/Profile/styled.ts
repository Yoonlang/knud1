import styled from 'styled-components';

interface StyledProfileProps {
  main: boolean;
}

export const StyledProfile = styled.div<StyledProfileProps>`
  display: flex;
  flex-direction: column;
  width: 350px;
  & .profileImg {
    width: 270px;
    height: 360px;
    margin-bottom: 20px;
  }

  & h3 {
    font-size: 30px;
    font-family: 'GmarketSansBold';
    margin: 0;
    margin-bottom: 13px;
  }

  & .contact {
    display: flex;
    width: 100%;
    margin-bottom: 12px;
    align-items: center;
    & > p {
      font-size: 18px;
      font-family: 'GmarketSansBold';
      margin: 0;
      white-space: nowrap;
    }
  }

  @media (min-width: 1024px) {
    display: ${(props) => (props.main ? 'none' : '')};
    height: 500px;

    & .contact {
      gap: 15px;
      & > div {
        width: 28px;
        height: 28px;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    & .contact {
      gap: 8px;
      & > div {
        width: 20px;
        height: 20px;
        filter: invert(1);
      }
    }

    & .profileImg {
      width: 150px;
      height: 200px;
      margin-bottom: 16px;
    }
    & p,
    h3 {
      color: #fff;
    }
  }
  @media (max-width: 767px) {
    & .contact {
      gap: 8px;
      & > div {
        width: 20px;
        height: 20px;
        filter: invert(1);
      }
    }
    & .profileImg {
      width: 98px;
      height: 130px;
      margin-bottom: 10px;
    }
    & p,
    h3 {
      color: #fff;
    }
  }
`;
