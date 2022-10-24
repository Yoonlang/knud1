import styled from 'styled-components';

export const FixedTypo = styled.h2`
  position: fixed;
  color: #fff;
  font-size: 30px;
  line-height: 1.2em;
  font-family: 'GmarketSansBold';
  margin: 0;
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
