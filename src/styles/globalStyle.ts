import { createGlobalStyle } from "styled-components";
import { media } from "./theme";
import "./reset.scss";

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
        font-family: Montserrat, 'sans-serif';
        font-display: fallback;
        -ms-overflow-style: none;
        scrollbar-width: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        body {
            margin: 0;
        }
        .pc-only {
            ${media.mobile} {
                display: none;
            }
        }
        .mobile-only {
            display: none;
            
            ${media.mobile} {
                display: block;
            }
        }
    }
`;
