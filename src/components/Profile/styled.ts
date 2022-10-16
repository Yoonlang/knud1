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
    background: #aaa;
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
    gap: 15px;
    margin-bottom: 12px;
    align-items: center;
    & > div {
      width: 30px;
      height: 30px;
      background: #000;
    }
    & > p {
      font-size: 18px;
      font-family: 'GmarketSansBold';
      margin: 0;
      white-space: nowrap;
    }
  }

  @media (min-width: 1024px) {
    display: ${(props) => (props.main ? 'none' : '')};
  }

  @media (min-width: 768px) and (max-width: 1023px) {
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
