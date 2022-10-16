import styled from 'styled-components';

export const StyledPortfolioLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: auto;

  & .wrapper {
    display: flex;
    position: relative;
    width: 100%;
    height: 5000px;
    min-height: 5000px;
    overflow: hidden;
    & .sidebar {
      display: flex;
      justify-content: center;
      padding-top: 300px;
      min-width: 500px;
      height: 100%;
      background: linear-gradient(#fff, #000);
      @media (max-width: 1023px) {
        display: none;
      }
    }
    & .main {
      display: flex;
      position: relative;
      flex-direction: column;
      width: 100%;
      height: 100%;
      background: #000;
      z-index: 1;
      & .tag {
        width: 68px;
        height: 25px;
        background: #fff;
        margin: 60px 0 200px 30px;
      }
      & > div:nth-child(3) {
        padding: 30px;
      }
      & .bgImg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        background: #000;
        z-index: -1;
      }
    }
  }

  & .titles {
    padding: 0 50px;
    & h2 {
      margin: 0;

      font-size: 100px;
      font-family: 'GmarketSansBold';
      color: #fff;
    }
    & h3 {
      margin: 34px 0;

      font-size: 36px;
      font-family: 'GmarketSansBold';
      color: #fff;
    }
    & p {
      margin: 0;
      margin-bottom: 120px;
      font-size: 20px;
      font-family: 'NotoSans';
      color: #fff;
    }
    & > div {
      display: flex;
      gap: 40px;
    }
    & h4 {
      margin: 0;
      font-size: 25px;
      font-family: 'NotoSans';
      color: #38d430;
    }
  }

  & .component {
    position: relative;
    left: -240px;
    width: calc(100% + 190px);
    height: 900px;
    background: #fff;
    margin-bottom: 200px;
  }

  & .link {
    position: absolute;
    bottom: 300px;
    font-weight: bold;
    font-family: 'NotoSans';
    color: #38d430;
    text-decoration: underline;
    z-index: 2;
  }

  & .footer {
    display: flex;
    width: 100%;
  }

  @media (min-width: 1024px) {
    & .bgImg {
      height: 800px;
    }
    & .link {
      font-size: 30px;
      left: calc(50% - 100px);
    }
    & .footer {
      & footer:nth-child(2) {
        display: none;
      }
    }
  }
  @media (max-width: 1023px) and (min-width: 768px) {
    & .bgImg {
      height: 277px;
    }
    & .onlyPC {
      display: none;
    }
    & .link {
      font-size: 16px;
      left: calc(50% - 50px);
    }
    & .footer {
      & footer:nth-child(2) {
        display: none;
      }
    }
  }
  @media (max-width: 767px) {
    & .bgImg {
      height: 220px;
    }
    & .onlyPC {
      display: none;
    }
    & .link {
      font-size: 16px;
      left: calc(50% - 50px);
    }
    & .footer {
      & footer:nth-child(1) {
        display: none;
      }
    }
  }
`;

export const ContentLayout = styled.div`
  @media (min-width: 1024px) {
    position: relative;
    left: -240px;
    width: calc(100% + 190px);
    height: 900px;
    background: #fff;
    margin-bottom: 200px;
  }
  @media (max-width: 1023px) and (min-width: 768px) {
    width: calc(100% - 60px);
    height: 900px;
    background: #fff;
    margin-left: 30px;
  }
  @media (max-width: 767px) {
    width: 100%;
    height: 900px;
    background: #fff;
  }
`;
