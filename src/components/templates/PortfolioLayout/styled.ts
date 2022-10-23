import styled from 'styled-components';

export const StyledPortfolioLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: #000;
  & > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1920px;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }

  & .bgImg {
    & > img {
      opacity: 0.3;
    }
  }

  & .wrapper {
    display: flex;
    position: relative;
    width: 100%;
    & .sidebar {
      display: flex;
      justify-content: center;
      padding-top: 300px;
      min-width: 500px;
      height: 100%;
      background: linear-gradient(#fff, #000);
      @media (max-width: 1200px) {
        min-width: 300px;
        padding-top: 250px;
        & > div {
          transform: scale(0.8);
        }
      }
      @media (max-width: 1023px) {
        display: none;
      }
    }
    & .main {
      display: flex;
      position: relative;
      flex-direction: column;
      width: 100%;
      z-index: 1;
      & .tag {
        width: 100%;
        & > img {
          width: auto;
        }
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
        z-index: -1;
      }
    }
  }

  & .titles {
    & h2 {
      margin: 0;
      font-weight: 100;
      font-family: 'GmarketSansBold';
      color: #fff;
    }
    & h3 {
      margin: 0;
      font-weight: 100;
      font-family: 'GmarketSansBold';
      color: #fff;
    }
    & p {
      margin: 0;
      font-family: 'NotoSansKR-Medium';
      color: #fff;
    }
    & > div {
      display: flex;
      gap: 40px;
    }
    & h4 {
      margin: 0;
      font-size: 25px;
      font-family: 'NotoSansKR-Medium';
      color: #38d430;
    }
  }

  & .titlesForMob {
    padding: 0 40px 0 20px;
    color: #fff;
    margin: 170px 0 25px 0;
    & > h3 {
      font-size: 26px;
      font-weight: 100;
      font-family: 'GmarketSansBold';
      margin: 0 0 10px 0;
    }
    & > h2 {
      font-size: 26px;
      font-weight: 100;
      font-family: 'GmarketSansBold';
      margin: 0;
    }
  }

  & .link {
    position: absolute;
    font-weight: bold;
    font-family: 'NotoSansKR-Medium';
    color: #38d430;
    text-decoration: underline;
    z-index: 2;
  }

  & .footer {
    display: flex;
    width: 100%;
  }

  @media (min-width: 1024px) {
    & .tag {
      margin: 60px 0 200px 60px;
      & > img {
        height: 110px;
      }
    }
    & .titles {
      margin-bottom: 550px;
      padding: 0 50px;
      & > h2 {
        font-size: 100px;
      }
      & > h3 {
        margin: 34px 0;
        font-size: 36px;
      }
      & > p {
        font-size: 20px;
      }
      & :nth-last-child(2) {
        margin-bottom: 120px;
      }
      & h4 {
        font-size: 25px;
      }
    }
    & .titlesForMob {
      display: none;
    }
    & .bgImg {
      height: 800px;
    }
    & .link {
      font-size: 30px;
      left: calc(50% - 100px);
      bottom: 300px;
    }
    & .footer {
      & footer:nth-child(2) {
        display: none;
      }
    }
  }
  @media (max-width: 1023px) and (min-width: 768px) {
    & .tag {
      margin: 20px 0 60px 30px;
      & > img {
        height: 60px;
      }
    }
    & .titles {
      margin: 130px 0 0 0;
      padding: 0 30px;
      & > h2 {
        font-size: 50px;
      }
      & > h3 {
        margin: 18px 0;
        font-size: 24px;
      }
      & > p {
        font-size: 14px;
      }
      & :nth-last-child(2) {
        margin-bottom: 30px;
      }
      & > div {
        display: none;
      }
    }
    & .titlesForMob {
      display: none;
    }
    & .bgImg {
      height: 277px;
    }
    & .onlyPC {
      display: none;
    }
    & .link {
      font-size: 16px;
      left: calc(50% - 50px);
      bottom: 100px;
    }
    & .footer {
      & footer:nth-child(2) {
        display: none;
      }
    }
  }
  @media (max-width: 767px) {
    & .tag {
      margin: 20px 0 60px 30px;
      & > img {
        height: 45px;
      }
    }
    & .titles {
      display: none;
    }
    & .bgImg {
      height: 220px;
    }
    & .onlyPC {
      display: none;
    }
    & .link {
      font-size: 16px;
      left: calc(50% - 50px);
      bottom: 60px;
    }
    & .footer {
      & footer:nth-child(1) {
        display: none;
      }
    }
  }
`;

export const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    & > div {
      margin-bottom: 500px;
    }
    position: relative;
    left: -240px;
    width: calc(100% + 190px);
    margin-bottom: 200px;
  }
  @media (max-width: 1023px) and (min-width: 768px) {
    & > div {
      margin-bottom: 250px;
    }
    width: calc(100% - 60px);
    margin-left: 30px;
  }
  @media (max-width: 767px) {
    & > div {
      margin-bottom: 160px;
    }
    width: 100%;
  }
`;
