import styled, { DefaultTheme, css } from "styled-components";

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  padding: 0 4.2rem;
  box-sizing: border-box;
  max-width: 144rem;
`;

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;
export const media = {
  custom: customMediaQuery,
  // laptop: customMediaQuery(1440),
  tablet: customMediaQuery(1234),
  // mobile: customMediaQuery(420),
};

export const theme: DefaultTheme = {
  color: {
    black: "#000000",
    gray7: "#585858",
    gray6: "#767676",
    gray5: "#9C9C9C",
    gray4: "#B4B4B4",
    gray3_5: "#C4C4C4",
    gray3: "#CECECE",
    gray2: "#E5E5E5",
    gray2_5: "#DBDBDB",
    gray1_7: "#F0F0F0",
    gray1_5: "#F7F7F7",
    gray1: "#F8F9FA",
    blue: "#3EFFFF",
    red: "#FF5E5E",
    white: "#FFFFFF",
    orange: "#FF7964",
    orange_light: "#FFF2EF",
    orange_very_light: "#FFF8F7",
    orange_medium: "#FFBCB1",
    dark_green: "#09C6A1",
  },
};
