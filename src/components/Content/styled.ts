import Image from 'next/future/image';
import styled from 'styled-components';

export const StyledSlide = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  & .detail {
    width: 100%;
  }
  & p {
    margin: 0;
    width: 100%;
    max-width: 1100px;

    color: #38d430;
    font-family: 'NotoSansKR-Medium';
    font-size: 22px;
    line-height: 1.7em;
  }

  @media (min-width: 1024px) {
    & .detail {
      padding-top: 70px;
      padding-left: 290px;
    }
  }
  @media (max-width: 1023px) and (min-width: 768px) {
    & p {
      margin-top: 30px;
      font-size: 16px;
    }
  }
  @media (max-width: 767px) {
    & .detail {
      padding: 20px 20px 0 20px;
    }
    & p {
      font-size: 16px;
    }
  }
`;

export const StyledAdd1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  & > div {
    display: flex;
    & p {
      margin: 0;
      color: #38d430;
      line-height: 1.7em;
      font-family: 'NotoSansKR-Medium';
    }
  }
  @media (min-width: 1024px) {
    & > div {
      gap: 50px;
      & > img {
        width: 60%;
        min-width: 910px;
      }
      & p {
        width: 40%;
        max-width: 590px;
        font-size: 22px;
      }
    }
  }
  @media (max-width: 1023px) and (min-width: 768px) {
    & > div {
      gap: 30px;
      & > img {
        min-width: 440px;
      }
      & p {
        font-size: 16px;
      }
    }
  }
  @media (max-width: 767px) {
    & > div {
      flex-direction: column;
      gap: 20px;
      padding: 0 20px;
      & > img {
        min-width: 288px;
        max-width: 288px;
      }
      & p {
        font-size: 16px;
      }
    }
  }
`;

export const StyledArrange = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h2`
  margin: 0;
  color: #fff;
  font-family: 'GmarketSansBold';
  font-weight: 100;
  @media (min-width: 1024px) {
    font-size: 60px;
    margin-bottom: 70px;
  }
  @media (max-width: 1023px) and (min-width: 768px) {
    font-size: 36px;
    margin-bottom: 30px;
  }
  @media (max-width: 767px) {
    font-size: 26px;
    margin-left: 20px;
    margin-bottom: 20px;
  }
`;

interface MyImageProps {
  maxwidth: string;
  maxheight: string;
}

export const MyImage = styled(Image)<MyImageProps>`
  width: 100%;
  max-width: ${(props) => props.maxwidth};
  height: auto;
  max-height: ${(props) => props.maxheight};
`;