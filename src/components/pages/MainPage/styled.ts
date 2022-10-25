import styled from 'styled-components';

export const FixedTypo = styled.h2`
  position: fixed;
  color: #fff;
  font-size: 30px;
  line-height: 1.2em;
  font-family: 'GmarketSansBold';
  margin: 0;
  pointer-events: none;
  z-index: 2;
  @media (min-width: 1024px) {
    top: 130px;
    left: 50px;
  }
  @media (max-width: 1023px) and (min-width: 768px) {
    top: 290px;
    left: -70px;
    transform: rotate(90deg);
  }
  @media (max-width: 767px) {
    top: 235px;
    left: -10px;
    font-size: 20px;
    transform: rotate(90deg);
  }
`;

export const Page = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  overflow: hidden;
  background: #000;

  & .unit {
    display: flex;
    flex-direction: column;
    position: fixed;
    overflow-x: hidden;
    overflow-y: scroll;
    pointer-events: none;
    z-index: 3;
    & > div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      min-height: 100%;
      & img {
        width: 100%;
        height: auto;
      }
    }
    @media (min-width: 1024px) {
      width: 440px;
      height: 201px;
      bottom: 90px;
      right: 100px;
    }
    @media (max-width: 1023px) and (min-width: 768px) and (min-height: 1100px) {
      width: 480px;
      height: 260px;
      top: 600px;
      left: 140px;
    }
    @media (max-width: 1023px) and (min-width: 768px) and (max-height: 1099px) {
      width: 480px;
      height: 260px;
      bottom: 100px;
      left: 160px;
    }
    @media (max-width: 767px) {
      width: 280px;
      height: 150px;
      bottom: 90px;
      left: 120px;
    }
  }
  & .unit::-webkit-scrollbar {
    display: none;
  }
`;

export const Mobile = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const Rotate = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100%;
  transform-origin: left top;
`;

export const PC = styled.div`
  display: flex;
  width: 100%;
  height: 200%;
  max-width: 1920px;
  overflow: hidden;
  @media (max-width: 1023px) {
    display: none;
  }
  @media (max-width: 1599px) {
    padding: 210px 0 0 200px;
    ${Rotate} {
      transform: rotate(-15deg) scale(0.8);
    }
  }
  @media (min-width: 1600px) {
    padding: 290px 0 0 290px;
    ${Rotate} {
      transform: rotate(-15deg);
    }
  }
`;
