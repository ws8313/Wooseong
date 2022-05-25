import { createGlobalStyle } from "styled-components";
import "./reset.scss";
import { theme } from "./theme";

export const Globalstyle = createGlobalStyle`
    :focus {
        outline: none;
        border: none;
    }
    ::-webkit-scrollbar {
        display: none;
    }
    html {
        font-size: 10px;
        -webkit-text-size-adjust: none;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
        font-display: fallback;
        -ms-overflow-style: none;
        scrollbar-width: none;
        color: ${theme.color.black}; // theme의 color 속성을 찾을 수 없음 => style.d.ts 파일 생성 후 해결
        background-color: #FFFFFF;
        -webkit-user-select: none; // -webkit, -moz, -ms user-select 3개 문제 발생 => user-select 값 주고나니 해결
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        body {
            margin: 0;
        }
    }
`;