import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing:border-box;
    }
    body{
        font-family: 'Noto Sans KR', sans-serif;
        line-height: 1.8;
        font-size:15px;
    }
    a{
        color: #000;
        text-decoration: none !important;
    }
    button{
        border:none;
        cursor:pointer;
        background-color: inherit;
    }
    label, input, button, select, img {
        vertical-align: middle;
    }
`;

export const GlobalContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export default GlobalStyles;
