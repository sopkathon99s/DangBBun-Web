import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
        font-family: 'Noto Sans', 'Noto Sans KR', sans-serif;
    }
    

    :root {
        font-size: 62.5%;
        font-family: 'Noto Sans', 'Noto Sans KR', sans-serif;
    }
`;
