import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html, body, #__next {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        min-height: 100%;
        box-sizing: border-box;
        overflow: hidden;
        background-color: black;
    }
    * {
        box-sizing: border-box;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    @font-face {
        font-family: 'Poppins-Light';
        src: url('/fonts/Poppins-Light.woff') format('woff');
        font-style: normal;
    }
    @font-face {
        font-family: 'Poppins-Medium';
        src: url('/fonts/Poppins-Medium.woff') format('woff');
        font-style: normal;
    }
    @font-face {
        font-family: 'Poppins-Bold';
        src: url('/fonts/Poppins-Bold.woff') format('woff');
        font-style: normal;
        
    }
    @font-face {
        font-family: 'NotoSansKR-Light';
        src: url('/fonts/NotoSansKR-Light.woff') format('woff');
        font-style: normal;
        
    }
    @font-face {
        font-family: 'NotoSansKR-Medium';
        src: url('/fonts/NotoSansKR-Medium.woff') format('woff');
        font-style: normal;
        
    }
    @font-face {
        font-family: 'NotoSansKR-Bold';
        src: url('/fonts/NotoSansKR-Bold.woff') format('woff');
        font-style: normal;
    }
    @font-face {
        font-family: 'GmarketSansLight';
        src: url('/fonts/GmarketSansLight.woff') format('woff');
        font-style: normal;
        
    }
    @font-face {
        font-family: 'GmarketSansMedium';
        src: url('/fonts/GmarketSansMedium.woff') format('woff');
        font-style: normal;
        
    }
    @font-face {
        font-family: 'GmarketSansBold';
        src: url('/fonts/GmarketSansBold.woff') format('woff');
        font-style: normal;
    }
`;

export default GlobalStyle;
