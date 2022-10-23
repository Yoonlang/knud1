import Image from 'next/future/image';
import styled from 'styled-components';

export const StyledSlide = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  & .slideContainer {
    display: flex;
    position: relative;
  }
  & .slide {
    display: flex;
    position: relative;
    overflow: scroll;
    scroll-snap-type: x mandatory;
    transition: 0.5s;
    z-index: 2;
    & > img {
      scroll-snap-align: center;
      min-width: 100%;
    }
  }
  & .support {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    & .left,
    .right {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      width: 30px;
      height: 30px;
      top: calc(50% - 15px);
      cursor: pointer;
      border: none;
      outline: none;
      background: none;
      z-index: 3;
      @media (max-width: 1023px) {
        display: none;
      }
    }
    & .left {
      left: 50px;
      transform: rotate(180deg);
    }
    & .right {
      right: 50px;
    }
    & .dots {
      display: flex;
      position: relative;
      top: calc(100% - 40px);
      gap: 10px;
      z-index: 3;
      pointer-events: none;
      & .here {
        position: absolute;
        left: 0;
      }
    }
  }

  & .detail {
    width: 100%;
    & p {
      margin: 0;
      width: 100%;
      max-width: 1100px;
      color: #38d430;
      font-family: 'NotoSansKR-Medium';
      font-size: 22px;
      line-height: 1.7em;
    }
  }

  @media (min-width: 1024px) {
    & .detail {
      padding-top: 70px;
      padding-left: 290px;
    }
  }
  @media (max-width: 1023px) and (min-width: 768px) {
    & .detail {
      padding-top: 30px;
      & p {
        font-size: 16px;
      }
    }
  }
  @media (max-width: 767px) {
    & .detail {
      padding: 20px 20px 0 20px;
      & p {
        font-size: 16px;
      }
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
      & .img {
        width: 60%;
      }
      & .details {
        width: 40%;
        & p {
          max-width: 590px;
          font-size: 22px;
        }
      }
    }
  }
  @media (max-width: 1023px) and (min-width: 768px) {
    & > div {
      gap: 30px;
      & .img {
        width: 60%;
        position: relative;
      }
      & .img:after {
        content: '';
        display: block;
        padding-bottom: 100%;
      }
      & .details {
        width: 40%;
        & p {
          font-size: 16px;
        }
      }
    }
  }

  @media (max-width: 767px) {
    & > div {
      flex-direction: column;
      gap: 20px;
      padding: 0 20px;
      & .img {
        width: 90%;
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
