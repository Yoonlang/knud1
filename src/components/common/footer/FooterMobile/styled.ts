import styled from 'styled-components';

export const FooterMobileWrapper = styled.footer`
  width: 100%;
  height: 130px;

  padding: 18px;

  background-color: #333333;

  & > img {
    width: 50px;
  }

  & > p {
    padding: 0px;
    margin: 0px;

    color: rgba(255, 255, 255, 0.3);

    font-family: 'NotoSansKR-Medium';
    font-size: 8px;
    letter-spacing: 0px;
    line-height: 1.7;
  }

  & > p + p {
    margin-top: 1px;
  }
`;
